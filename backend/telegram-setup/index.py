import json
import os
import urllib.request

def handler(event: dict, context) -> dict:
    '''Настройка Telegram бота: установка webhook и проверка статуса'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    
    if not bot_token:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'TELEGRAM_BOT_TOKEN not configured'})
        }
    
    try:
        query_params = event.get('queryStringParameters', {}) or {}
        action = query_params.get('action', 'status')
        
        if action == 'status':
            url = f'https://api.telegram.org/bot{bot_token}/getWebhookInfo'
            
            with urllib.request.urlopen(url) as response:
                data = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps(data, ensure_ascii=False)
            }
        
        elif action == 'set':
            webhook_url = 'https://functions.poehali.dev/3da0d85c-964a-4ecf-93ed-584fe1bfd3fe'
            url = f'https://api.telegram.org/bot{bot_token}/setWebhook'
            
            data = json.dumps({'url': webhook_url}).encode('utf-8')
            req = urllib.request.Request(
                url,
                data=data,
                headers={'Content-Type': 'application/json'}
            )
            
            with urllib.request.urlopen(req) as response:
                result = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps(result, ensure_ascii=False)
            }
        
        elif action == 'delete':
            url = f'https://api.telegram.org/bot{bot_token}/deleteWebhook'
            
            with urllib.request.urlopen(url) as response:
                result = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps(result, ensure_ascii=False)
            }
        
        else:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid action. Use: status, set, or delete'})
            }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }
