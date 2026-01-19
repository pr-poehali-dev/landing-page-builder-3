import json
import os
import urllib.request

def handler(event: dict, context) -> dict:
    '''Настройка webhook для Telegram бота поддержки'''
    
    bot_token = os.environ.get('TELEGRAM_SUPPORT_BOT_TOKEN')
    webhook_url = 'https://functions.poehali.dev/cf3bba50-639f-49e2-99ef-cf77a431ccfa'
    
    if not bot_token:
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Bot token not configured'})
        }
    
    try:
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
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'success': True,
                'webhook_url': webhook_url,
                'telegram_response': result
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': str(e)})
        }
