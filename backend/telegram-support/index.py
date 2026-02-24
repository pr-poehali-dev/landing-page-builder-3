import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Telegram бот поддержки для автоматических ответов на вопросы о мероприятии ИИ ШОУ БЕЗ ШИРМЫ'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        message = body.get('message', {})
        chat_id = message.get('chat', {}).get('id')
        text = message.get('text', '').strip().lower()
        
        if not chat_id:
            return {'statusCode': 200, 'body': json.dumps({'ok': True})}
        
        bot_token = os.environ.get('TELEGRAM_SUPPORT_BOT_TOKEN')
        
        if not bot_token:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'ok': True, 'message': 'Bot token not configured'})
            }
        
        if text == '/start' or text == 'start':
            response_text = 'Здравствуйте! Задайте свой вопрос о мероприятии ИИ ШОУ БЕЗ ШИРМЫ.'
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'когда' in text or 'где' in text or 'адрес' in text or 'дата' in text or 'время' in text:
            response_text = '''📅 Когда и где?

🗓 Дата: 18 апреля 2026 года
🕐 Время: 10:00 - 18:00
📍 Место: Отель «Экватор», ул. Набережная, д. 20, г. Владивосток'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'цена' in text or 'стоимость' in text or 'билет' in text or 'сколько' in text or 'стоит' in text:
            response_text = '''💳 Стоимость билетов

💰 От 1,000 ₽

🎯 Важно: 100% средств передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям.

Покупая билет, вы не только получаете знания, но и помогаете реальным людям!'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'программа' in text or 'что будет' in text or 'контент' in text or 'мероприятие' in text:
            response_text = '''🎯 Программа мероприятия

🔥 8+ ИИ-инструментов в действии:
• ChatGPT, Claude, Midjourney
• Автоматизация бизнеса
• Создание контента с ИИ

👥 Живые кейсы от реальных предпринимателей
🤝 Нетворкинг с единомышленниками
📸 Нейро-фотосессия для всех участников
🎁 Розыгрыш призов от спонсоров

💡 Вы научитесь применять ИИ для своего бизнеса прямо на мероприятии!'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'регистрация' in text or 'записаться' in text or 'купить' in text or 'зарегистрироваться' in text:
            response_text = '''🎫 Как зарегистрироваться?

1. Перейдите на наш сайт
2. Заполните форму регистрации (имя, email, телефон)
3. Оплатите билет (от 1,000 ₽)
4. Получите подтверждение на email

⚡️ Осталось мало мест! Регистрация идёт быстро.

📞 Или свяжитесь с организатором:
Телефон: +7-981-129-24-99'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'благотворительность' in text or 'деньги' in text or 'помощь' in text or 'куда' in text:
            response_text = '''💚 Благотворительность

🎯 100% средств передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям.

👩‍👧 Кому помогаем?
Центр поддерживает семьи и детей в Приморском крае:
• Материальная помощь
• Психологическая поддержка
• Юридические консультации
• Помощь в трудной жизненной ситуации

📊 После мероприятия опубликуем отчёт о переданных средствах.'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'опыт' in text or 'новичок' in text or 'начинающ' in text or 'нужен' in text:
            response_text = '''🎓 Нужен ли опыт?

✅ НЕТ, опыт не нужен!

Мероприятие подходит для всех:
• Новичков, которые только слышали про ИИ
• Тех, кто уже пробовал ChatGPT
• Предпринимателей, которые хотят внедрить ИИ
• Специалистов, желающих углубить знания

💡 Мы покажем инструменты в действии и объясним как их использовать пошагово.'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'возврат' in text or 'отмена' in text or 'вернуть' in text:
            response_text = '''💸 Возврат билетов

✅ До 10 апреля 2026: можно вернуть билет и получить полный возврат средств

❌ После 10 апреля: возврат не производится, так как средства уже переданы в благотворительную организацию

📝 Для возврата напишите на телефон +7-981-129-24-99'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif 'контакт' in text or 'связаться' in text or 'организатор' in text or 'телефон' in text:
            response_text = '''📞 Связаться с организатором

👤 Школа «Хакни нейросети»

📱 Телефон: +7-981-129-24-99
🏙 Город: Владивосток

⏰ Отвечаем: Пн-Пт: 10:00 - 19:00 (МСК+7)'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        else:
            response_text = '''Спасибо за вопрос! Вот что я могу рассказать о мероприятии ИИ ШОУ БЕЗ ШИРМЫ:

📅 Когда и где?
💳 Стоимость билетов
🎯 Программа мероприятия
🎫 Как зарегистрироваться?
💚 Благотворительность
🎓 Нужен ли опыт?
💸 Возврат билетов
📞 Связаться с организатором

Задайте ваш вопрос другими словами, и я обязательно помогу!'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'ok': True})
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }


def send_telegram_message(bot_token: str, chat_id: int, text: str) -> bool:
    '''Отправка сообщения в Telegram'''
    try:
        url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
        data = {
            'chat_id': chat_id,
            'text': text
        }
        
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            response.read()
        return True
    except Exception:
        return False