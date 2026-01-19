import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const TelegramSupportButton = () => {
  const handleClick = () => {
    window.open('https://t.me/ShowAiVl_bot', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl bg-synergy-red hover:bg-synergy-red/90 text-synergy-beige transition-all hover:scale-110"
      aria-label="Задать вопрос в Telegram"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default TelegramSupportButton;
