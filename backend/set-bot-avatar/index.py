import json
import os
import urllib.request

def handler(event: dict, context) -> dict:
    '''Установка аватарки для Telegram бота'''
    
    bot_token = os.environ.get('TELEGRAM_SUPPORT_BOT_TOKEN')
    photo_url = 'https://cdn.poehali.dev/files/freepik__qweyd-fashion-portrait-of-a-stylish-man-in-a-rustc__25759.png'
    
    if not bot_token:
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Bot token not configured'})
        }
    
    try:
        photo_data = urllib.request.urlopen(photo_url).read()
        
        boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW'
        body = (
            f'--{boundary}\r\n'
            f'Content-Disposition: form-data; name="photo"; filename="avatar.png"\r\n'
            f'Content-Type: image/png\r\n\r\n'
        ).encode('utf-8') + photo_data + f'\r\n--{boundary}--\r\n'.encode('utf-8')
        
        url = f'https://api.telegram.org/bot{bot_token}/setUserProfilePhoto'
        
        req = urllib.request.Request(
            url,
            data=body,
            headers={'Content-Type': f'multipart/form-data; boundary={boundary}'}
        )
        
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'success': True,
                'message': 'Аватарка бота успешно установлена!',
                'telegram_response': result
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e), 'details': 'Не удалось установить аватарку'})
        }
