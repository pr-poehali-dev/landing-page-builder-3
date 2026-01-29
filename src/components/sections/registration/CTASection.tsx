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
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-synergy-dark text-synergy-beige hover:bg-synergy-dark/90 font-bold uppercase text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 flex items-center justify-center"
            >
              <span className="leading-tight">Купить билет и изменить жизнь<br />от 1000 ₽</span>
            </Button>
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