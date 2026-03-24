import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const HeroSection = ({ seatsLeft, scrollToForm }: HeroSectionProps) => {
  return (
    <section 
      className="relative text-synergy-beige px-4 sm:px-6 overflow-hidden bg-cover bg-center bg-no-repeat h-screen flex items-start pt-8 sm:pt-10" 
      style={{ 
        zIndex: 10,
        backgroundImage: 'url(https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/files/7884ced3-ed07-4001-9bb1-f9ba36c65ea7.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-synergy-dark/60 backdrop-blur-sm" style={{ zIndex: 1 }} />
      <div className="max-w-5xl mx-auto relative animate-fade-in w-full" style={{ zIndex: 2 }}>
        <div className="text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/c26f604f-d2da-4860-84e7-5d8cb9f07456.jpg"
              alt="ИИ ШОУ БЕЗ ШИРМЫ"
              className="h-40 sm:h-52 md:h-64 w-auto object-contain drop-shadow-2xl rounded-lg"
            />
          </div>
          <p className="text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4 text-synergy-beige/90 max-w-2xl mx-auto px-2 leading-snug">
            300 предпринимателей, 8 инструментов ИИ, 1 день — и ты уже можешь зарабатывать. Без теории. Только реальные кейсы от тех, кто это делает прямо сейчас.
          </p>
          <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-6 text-synergy-beige/80 px-4">
            <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base">
              <Icon name="Calendar" size={16} className="icon-float flex-shrink-0" />
              <span className="font-semibold">18 апреля 2026, 10:00–18:00</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base">
              <Icon name="MapPin" size={16} className="icon-float flex-shrink-0" />
              <span className="font-semibold">Отель «Экватор», ул. Набережная, д. 20</span>
            </div>
          </div>
          <div className="flex justify-center px-4 mb-3">
            <div className="relative w-full max-w-sm">
              <div className="btn-glow-pulse" />
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="hero-cta-button relative z-10 w-full text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-black bg-synergy-red text-synergy-beige hover:bg-synergy-red border-4 border-synergy-beige shadow-2xl flex items-center justify-center"
              >
                <Icon name="Zap" size={16} className="mr-2 animate-pulse flex-shrink-0" />
                <span className="uppercase tracking-wide leading-tight">ДА, Я ХОЧУ РАЗОБРАТЬСЯ В ИИ</span>
                <Icon name="ArrowRight" size={16} className="ml-2 flex-shrink-0" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4 mb-3">
            <Badge className="text-xs sm:text-sm px-3 py-1.5 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige whitespace-nowrap">
              Осталось {seatsLeft} мест из 300
            </Badge>
            <Badge className="text-xs sm:text-sm px-3 py-1.5 bg-synergy-red text-synergy-beige whitespace-nowrap">
              Цена: от 1,000 ₽
            </Badge>
          </div>
          <p className="text-synergy-beige/70 text-xs max-w-2xl mx-auto px-4 text-center">
            100% средств передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;