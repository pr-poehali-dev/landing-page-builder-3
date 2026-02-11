import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const RegistrationSection = () => {
  const handleBuyTicket = () => {
    window.open('https://torguykriptoy.getcourse.ru/bezshirmy', '_blank');
  };

  return (
    <>
      <section id="registration" className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-red relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-6 sm:mb-8 text-synergy-beige px-2">
            ЗАБРОНИРОВАТЬ МЕСТО
          </h2>
          <div className="flex justify-center px-2">
            <Button 
              size="lg" 
              onClick={handleBuyTicket}
              className="w-full sm:w-auto bg-synergy-dark text-synergy-beige hover:bg-synergy-dark/90 font-bold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 flex items-center justify-center animate-pulse hover:animate-none transition-all cursor-pointer"
            >
              <Icon name="MousePointerClick" size={36} className="mr-3 sm:mr-4 animate-pulse flex-shrink-0" />
              <span className="leading-tight">УЧАСТВОВАТЬ</span>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 px-4 sm:px-6 bg-synergy-dark text-synergy-beige/60 text-center text-xs sm:text-sm">
        <p className="px-2">© 2026 Школа «Хакни нейросети» | Владивосток</p>
        <p className="mt-2 px-2">Благотворительное мероприятие в поддержку КГКУ «Маяк»</p>
      </footer>
    </>
  );
};

export default RegistrationSection;