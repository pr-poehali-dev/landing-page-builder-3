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
      className="relative text-synergy-beige py-20 px-6 overflow-hidden bg-cover bg-center bg-no-repeat" 
      style={{ 
        zIndex: 10,
        backgroundImage: 'url(https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/files/8992a838-8595-4b47-bb21-71399037b29c.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-synergy-dark/60 backdrop-blur-sm" style={{ zIndex: 1 }} />
      <div className="max-w-5xl mx-auto relative animate-fade-in" style={{ zIndex: 2 }}>
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-synergy-red text-synergy-beige font-bold text-sm uppercase">
            Благотворительное мероприятие
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight text-synergy-beige px-2">
            ИИ ШОУ БЕЗ ШИРМЫ
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-semibold mb-8 text-synergy-beige/90 max-w-3xl mx-auto px-2">
            Не красивые истории, а реальные результаты. Увидишь, как ИИ работает в реальности, и сам попробуешь инструменты, которые твои конкуренты уже используют
          </p>
          <div className="mb-8 space-y-2 text-synergy-beige/80">
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
              <Icon name="Calendar" size={20} className="icon-float" />
              <span className="font-semibold">18 апреля 2026, 10:00–18:00</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
              <Icon name="MapPin" size={20} className="icon-float" />
              <span className="font-semibold">Владивосток</span>
            </div>
          </div>
          <div className="relative inline-block mb-4 w-full max-w-md mx-auto px-4">
            <div className="btn-glow-pulse" />
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="hero-cta-button relative z-10 w-full text-lg sm:text-xl md:text-2xl px-6 sm:px-12 py-6 sm:py-8 h-auto font-black bg-synergy-red text-synergy-beige hover:bg-synergy-red border-4 border-synergy-beige shadow-2xl"
            >
              <Icon name="Zap" size={24} className="mr-2 sm:mr-3 animate-pulse" />
              <span className="uppercase tracking-wide sm:tracking-wider">Купить билет</span>
              <Icon name="ArrowRight" size={24} className="ml-2 sm:ml-3" />
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4 flex-wrap px-4">
            <Badge className="text-sm sm:text-base px-3 sm:px-4 py-2 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige">
              Осталось {seatsLeft} мест из 300
            </Badge>
            <Badge className="text-sm sm:text-base px-3 sm:px-4 py-2 bg-synergy-red text-synergy-beige">
              Цена: от 1,000 ₽
            </Badge>
          </div>
          <p className="mt-6 text-synergy-beige/70 text-xs sm:text-sm max-w-2xl mx-auto px-4">
            100% средств передаются в Центр «Живая Надежда» — помощь одиноким матерям в Приморье
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;