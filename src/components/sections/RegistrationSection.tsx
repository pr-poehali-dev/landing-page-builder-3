import { Button } from '@/components/ui/button';

const RegistrationSection = () => {
  const handleBuyTicket = () => {
    window.open('https://torguykriptoy.getcourse.ru/bezshirmy', '_blank');
  };

  return (
    <>
      <section id="registration" className="py-16 px-6 bg-synergy-red relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-synergy-beige">
            ЗАБРОНИРОВАТЬ МЕСТО
          </h2>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={handleBuyTicket}
              className="w-full sm:w-auto bg-synergy-dark text-synergy-beige hover:bg-synergy-dark/90 font-bold uppercase text-xl sm:text-2xl md:text-3xl px-12 sm:px-16 py-8 sm:py-10 flex items-center justify-center animate-pulse hover:animate-none transition-all"
            >
              <span className="leading-tight">Купить билет и изменить жизнь<br />от 1,000 ₽</span>
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

export default RegistrationSection;