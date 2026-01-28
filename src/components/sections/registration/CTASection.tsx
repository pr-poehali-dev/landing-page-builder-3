import { Button } from '@/components/ui/button';

interface CTASectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const CTASection = ({ seatsLeft, scrollToForm }: CTASectionProps) => {
  return (
    <>
      <section className="py-12 px-6 bg-synergy-red relative z-10 animate-on-scroll-scale">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-synergy-beige">
            НЕ УПУСТИ ВОЗМОЖНОСТЬ
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-synergy-beige/90 mb-6 leading-relaxed">
            Ты можешь потратить день на листание ленты в инсте или посмотреть очередной сериал, а можешь потратить день на то, чтобы выучить инструменты, которые изменят твой доход.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-synergy-beige font-bold mb-6">
            Всё это уже используют твои конкуренты.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-synergy-beige/90 mb-8">
            Вопрос не в том, учить ли ИИ. Вопрос в том, когда.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-synergy-dark text-synergy-beige hover:bg-synergy-dark/90 font-bold uppercase text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 mb-6 flex items-center justify-center"
            >
              Купить билет от 1000 ₽
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-synergy-beige/80">
            + получить чек-лист инструментов ИИ
          </p>
          <div className="mt-8 space-y-2 text-synergy-beige/70 text-xs sm:text-sm">
            <p>Или если у тебя есть вопросы:</p>
            <p className="break-all">📧 chernikovru@yandex.ru</p>
            <p>📱 +7 (981) 129-24-99</p>
            <p>💬 @ChernikovGPT (Telegram)</p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-synergy-dark text-synergy-beige/60 text-center text-sm">
        <p>© 2026 Школа «Хакни нейросети» | Владивосток</p>
        <p className="mt-2">Благотворительное мероприятие в поддержку Центра «Живая Надежда»</p>
      </footer>
    </>
  );
};

export default CTASection;