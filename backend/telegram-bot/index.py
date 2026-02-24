import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''Telegram бот для автоматических ответов на вопросы о мероприятии ИИ ШОУ БЕЗ ШИРМЫ'''
    
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
        print(f'Received body: {json.dumps(body)}')
        
        message = body.get('message', {})
        chat_id = message.get('chat', {}).get('id')
        text = message.get('text', '').strip().lower()
        
        print(f'Chat ID: {chat_id}, Text: {text}')
        
        if not chat_id:
            print('No chat_id, returning ok')
            return {'statusCode': 200, 'body': json.dumps({'ok': True})}
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN_NEW') or os.environ.get('TELEGRAM_BOT_TOKEN')
        
        if not bot_token:
            print('ERROR: Bot token not found in environment')
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'ok': True, 'message': 'Bot token not configured'})
            }
        
        print(f'Bot token found, sending message to chat {chat_id}')
        
        if text == '/start':
            response_text = 'Здравствуйте. Задайте свой вопрос'
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['1', '1️⃣', 'когда', 'где', 'адрес', 'дата', 'время']:
            response_text = '''📅 **Когда и где?**

🗓 **Дата:** 18 апреля 2026 года
🕐 **Время:** 10:00 - 18:00
📍 **Место:** Отель «Экватор», ул. Набережная, д. 20, г. Владивосток'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['2', '2️⃣', 'цена', 'стоимость', 'билет', 'сколько']:
            response_text = '''💳 **Стоимость билетов**

💰 **От 1,000 ₽**

🎯 **Важно:** 100% средств передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям.

Покупая билет, ты не только получаешь знания, но и помогаешь реальным людям! 💚'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['3', '3️⃣', 'программа', 'что будет', 'контент']:
            response_text = '''🎯 **Программа мероприятия**

🔥 **8+ ИИ-инструментов** в действии:
• ChatGPT, Claude, Midjourney
• Автоматизация бизнеса
• Создание контента с ИИ

👥 **Живые кейсы** от реальных предпринимателей

🤝 **Нетворкинг** с единомышленниками

📸 **Нейро-фотосессия** для всех участников

🎁 **Розыгрыш призов** от спонсоров

💡 **Практика:** научишься применять ИИ для своего бизнеса или работы прямо на мероприятии!'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['4', '4️⃣', 'регистрация', 'записаться', 'купить']:
            response_text = '''🎫 **Как зарегистрироваться?**

1. Перейди на наш сайт
2. Заполни форму регистрации (имя, email, телефон)
3. Оплати билет (от 1,000 ₽)
4. Получи подтверждение на email с деталями

⚡️ **Осталось мало мест!** Всего 300 мест, регистрация идёт быстро.

📞 **Или свяжись с организатором:**
Телефон: +7-981-129-24-99
Telegram: @chernikovgpt'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['5', '5️⃣', 'благотворительность', 'деньги', 'помощь']:
            response_text = '''💚 **Благотворительность**

🎯 **100% средств** передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям.

👩‍👧 **Кому помогаем?**
Центр поддерживает семьи и детей в Приморском крае, предоставляя:
• Материальную помощь
• Психологическую поддержку
• Юридические консультации
• Помощь в трудной жизненной ситуации

📊 **Прозрачность:** После мероприятия опубликуем отчёт о переданных средствах.

Покупая билет, ты делаешь реальное доброе дело! 🙏'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['6', '6️⃣', 'опыт', 'новичок', 'для начинающих']:
            response_text = '''🎓 **Нужен ли опыт?**

✅ **НЕТ, опыт не нужен!**

Мероприятие подходит для всех:
• Новичков, которые только слышали про ИИ
• Тех, кто уже пробовал ChatGPT
• Предпринимателей, которые хотят внедрить ИИ
• Специалистов, желающих углубить знания

💡 Мы покажем инструменты в действии и объясним, как их использовать пошагово, даже если ты никогда не работал с нейросетями.

Главное — желание учиться! 🚀'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['7', '7️⃣', 'возврат', 'отмена', 'вернуть']:
            response_text = '''💸 **Возврат билетов**

✅ **До 10 апреля 2026:**
Можно вернуть билет и получить **полный возврат** средств

❌ **После 10 апреля:**
Возврат не производится, так как средства уже переданы в благотворительную организацию

📝 **Как вернуть:**
Напиши на телефон +7-981-129-24-99 или Telegram @chernikovgpt с указанием:
• ФИО при регистрации
• Email
• Номер заказа'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        elif text in ['8', '8️⃣', 'контакт', 'связаться', 'организатор', 'вопрос']:
            response_text = '''📞 **Связаться с организатором**

👤 **Школа «Хакни нейросети»**

📱 **Телефон:** +7-981-129-24-99
💬 **Telegram:** @chernikovgpt
🏙 **Город:** Владивосток

⏰ **Отвечаем:**
Пн-Пт: 10:00 - 19:00 (МСК+7)
Сб-Вс: по возможности

Если у тебя есть особый вопрос, который не указан в меню — напиши напрямую! Мы обязательно поможем! 😊'''
            send_telegram_message(bot_token, chat_id, response_text)
        
        else:
            response_text = '''❓ Не совсем понял твой вопрос.

Попробуй выбрать один из вариантов:

1️⃣ Когда и где мероприятие?
2️⃣ Сколько стоят билеты?
3️⃣ Что будет на мероприятии?
4️⃣ Как зарегистрироваться?
5️⃣ Куда идут деньги от билетов?
6️⃣ Нужен ли опыт работы с ИИ?
7️⃣ Можно ли вернуть билет?
8️⃣ Связаться с организатором

Или напиши вопрос по-другому! 😊'''
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
            'text': text,
            'parse_mode': 'Markdown'
        }
        
        print(f'Sending to Telegram API: {url}')
        print(f'Data: chat_id={chat_id}, text_length={len(text)}')
        
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            result = response.read()
            print(f'Telegram API response: {result.decode("utf-8")}')
        return True
    except Exception as e:
        print(f'ERROR sending message: {type(e).__name__}: {str(e)}')
        return False