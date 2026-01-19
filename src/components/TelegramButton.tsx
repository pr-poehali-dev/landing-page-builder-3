import Icon from '@/components/ui/icon';

const TelegramButton = () => {
  const handleClick = () => {
    window.open('https://t.me/chernikovgpt', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#0088cc] hover:bg-[#0077b3] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Написать в Telegram"
    >
      <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-synergy-dark text-synergy-beige px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Есть вопросы? Пиши!
      </span>
    </button>
  );
};

export default TelegramButton;
