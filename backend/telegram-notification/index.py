import json
import os
import requests
from datetime import datetime
import psycopg2


def handler(event: dict, context) -> dict:
    """Сохраняет заявку в БД и отправляет уведомление в Telegram"""
    
    method = event.get('httpMethod', 'POST')
    
    # CORS для всех запросов
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Получаем данные из формы
    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        email = body.get('email', '')
        phone = body.get('phone', '')
        
        if not name or not email or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Все поля обязательны'}),
                'isBase64Encoded': False
            }
        
        # Сохраняем заявку в базу данных
        database_url = os.environ.get('DATABASE_URL')
        schema_name = os.environ.get('MAIN_DB_SCHEMA')
        
        if database_url and schema_name:
            try:
                conn = psycopg2.connect(database_url)
                cur = conn.cursor()
                
                cur.execute(
                    f"INSERT INTO {schema_name}.registrations (name, email, phone, status) VALUES (%s, %s, %s, %s) RETURNING id",
                    (name, email, phone, 'new')
                )
                registration_id = cur.fetchone()[0]
                
                conn.commit()
                cur.close()
                conn.close()
            except Exception as db_error:
                print(f"Database error: {db_error}")
        
        # Telegram bot token и chat ID из переменных окружения
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Telegram credentials not configured'}),
                'isBase64Encoded': False
            }
        
        # Формируем сообщение
        current_time = datetime.now().strftime('%d.%m.%Y %H:%M:%S')
        message = f"""🎯 НОВАЯ ЗАЯВКА НА МЕРОПРИЯТИЕ

👤 Имя: {name}
📧 Email: {email}
📱 Телефон: {phone}

⏰ Дата: {current_time}

---
Мероприятие: ИИ ШОУ БЕЗ ШИРМЫ
18 апреля 2026, Владивосток"""
        
        # Отправляем в Telegram
        url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        payload = {
            'chat_id': chat_id,
            'text': message
        }
        
        response = requests.post(url, json=payload, timeout=10)
        telegram_response = response.json()
        
        if not telegram_response.get('ok'):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Failed to send Telegram message',
                    'details': telegram_response.get('description', 'Unknown error')
                }),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            }),
            'isBase64Encoded': False
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid JSON'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }