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
      className="relative text-synergy-beige py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex items-center" 
      style={{ 
        zIndex: 10,
        backgroundImage: 'url(https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/files/7884ced3-ed07-4001-9bb1-f9ba36c65ea7.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-synergy-dark/60 backdrop-blur-sm" style={{ zIndex: 1 }} />
      <div className="max-w-5xl mx-auto relative animate-fade-in w-full" style={{ zIndex: 2 }}>
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-synergy-red text-synergy-beige font-bold text-xs sm:text-sm uppercase">
            Благотворительное мероприятие
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight text-synergy-beige px-2 sm:px-4">
            ИИ ШОУ БЕЗ ШИРМЫ
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-6 sm:mb-8 text-synergy-beige/90 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            180 предпринимателей, 8 инструментов ИИ, 1 день — и ты уже можешь зарабатывать. Без теории. Только реальные кейсы от тех, кто это делает прямо сейчас.
          </p>
          <div className="mb-8 space-y-3 text-synergy-beige/80 px-4">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg flex-wrap">
              <Icon name="Calendar" size={20} className="icon-float flex-shrink-0" />
              <span className="font-semibold text-center">18 апреля 2026, 10:00–18:00</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg flex-wrap">
              <Icon name="MapPin" size={20} className="icon-float flex-shrink-0" />
              <span className="font-semibold text-center">Седанка-Парк, ул. Менделеева, 14</span>
            </div>
          </div>
          <div className="flex justify-center px-4 mb-4">
            <div className="relative w-full max-w-md">
              <div className="btn-glow-pulse" />
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="hero-cta-button relative z-10 w-full text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 h-auto font-black bg-synergy-red text-synergy-beige hover:bg-synergy-red border-4 border-synergy-beige shadow-2xl flex items-center justify-center"
              >
                <Icon name="Zap" size={20} className="mr-2 sm:mr-3 animate-pulse flex-shrink-0" />
                <span className="uppercase tracking-wide sm:tracking-wider leading-tight">Купить билет<br />и изменить жизнь</span>
                <Icon name="ArrowRight" size={20} className="ml-2 sm:ml-3 flex-shrink-0" />
              </Button>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap px-4">
            <Badge className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige whitespace-nowrap">
              Осталось {seatsLeft} мест из 180
            </Badge>
            <Badge className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 bg-synergy-red text-synergy-beige whitespace-nowrap">
              Цена: от 1,000 ₽
            </Badge>
          </div>
          <p className="mt-6 text-synergy-beige/70 text-xs sm:text-sm max-w-2xl mx-auto px-4 text-center leading-relaxed">
            100% средств передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;