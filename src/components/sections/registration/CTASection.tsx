import { Button } from '@/components/ui/button';

interface CTASectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const CTASection = ({ seatsLeft, scrollToForm }: CTASectionProps) => {
  return (
    <>
      <section className="py-12 px-6 bg-synergy-red relative z-10 animate-on-scroll-scale">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-synergy-beige px-4">
            НЕ УПУСТИ ВОЗМОЖНОСТЬ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-synergy-beige/90 mb-8 px-4">
            Всего {seatsLeft} мест из 100. Присоединяйся к тем, кто уже понял, что ИИ — это не будущее, а настоящее.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-synergy-dark text-synergy-beige hover:bg-synergy-dark/90 font-bold uppercase text-lg px-12 py-6"
          >
            Купить билет сейчас
          </Button>
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
