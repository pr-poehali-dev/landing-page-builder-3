interface CTASectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const CTASection = ({ seatsLeft, scrollToForm }: CTASectionProps) => {
  return (
    <>
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-red relative z-10 animate-on-scroll-scale">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-synergy-beige">
            ДО ВСТРЕЧИ НА МЕРОПРИЯТИИ!
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-synergy-beige/90 mb-6 leading-relaxed">
            Все 300 мест заняты. Регистрация закрыта. Ждём вас 18 апреля в отеле «Экватор»!
          </p>
          <div className="mt-8 space-y-2 text-synergy-beige/70 text-xs sm:text-sm">
            <p>Или если у тебя есть вопросы:</p>
            <p className="break-all">📧 chernikovru@yandex.ru</p>
            <p>📱 +7 (981) 129-24-99</p>
            <p>💬 @ChernikovGPT (Telegram)</p>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-synergy-dark text-synergy-beige/60 text-center text-xs sm:text-sm">
        <p>© 2026 Школа «Хакни нейросети» | Владивосток</p>
        <p className="mt-2">Благотворительное мероприятие в поддержку КГКУ «Маяк»</p>
      </footer>
    </>
  );
};

export default CTASection;