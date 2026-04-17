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
      className="relative text-synergy-beige px-4 sm:px-6 overflow-hidden bg-cover bg-center bg-no-repeat h-screen flex flex-col" 
      style={{ 
        zIndex: 10,
        backgroundImage: 'url(https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/files/7884ced3-ed07-4001-9bb1-f9ba36c65ea7.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-synergy-dark/60 backdrop-blur-sm" style={{ zIndex: 1 }} />
      <div className="max-w-5xl mx-auto relative animate-fade-in w-full flex flex-col flex-1" style={{ zIndex: 2 }}>
        
        <div className="flex justify-center pt-6 sm:pt-8 relative">
          <img
            src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/c26f604f-d2da-4860-84e7-5d8cb9f07456.jpg"
            alt="ИИ ШОУ БЕЗ ШИРМЫ"
            className="h-72 sm:h-80 md:h-96 w-auto object-contain drop-shadow-2xl rounded-lg"
          />
          <div className="absolute -top-2 -right-2 sm:top-2 sm:right-0 md:-right-8 flex flex-col items-center">
            <div
              className="relative flex items-center justify-center"
              style={{
                animation: 'soldout-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) both'
              }}
            >
              <div
                className="absolute inset-0 rounded-full bg-synergy-red"
                style={{ animation: 'soldout-ring 1.4s ease-in-out infinite' }}
              />
              <div
                className="relative z-10 rounded-full bg-synergy-red border-4 border-synergy-beige shadow-2xl flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28"
                style={{ animation: 'soldout-wiggle 3s ease-in-out infinite 0.6s' }}
              >
                <span className="font-heading font-black text-synergy-beige text-xs sm:text-sm leading-none tracking-widest uppercase">SOLD</span>
                <span className="font-heading font-black text-synergy-beige text-xl sm:text-2xl leading-none tracking-wider">OUT</span>
                <span className="text-synergy-beige/80 text-[9px] sm:text-[10px] font-bold mt-0.5 tracking-wide">ВСЕ МЕСТА</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes soldout-pop {
            0% { transform: scale(0) rotate(-20deg); opacity: 0; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          @keyframes soldout-ring {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.35); opacity: 0; }
          }
          @keyframes soldout-wiggle {
            0%, 100% { transform: rotate(-3deg) scale(1); }
            50% { transform: rotate(3deg) scale(1.05); }
          }
        `}</style>

        <div className="text-center flex flex-col justify-end flex-1 pb-6 sm:pb-8 gap-3 sm:gap-4">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-synergy-beige/90 max-w-2xl mx-auto px-2 leading-snug">
            300 предпринимателей, 8 инструментов ИИ, 1 день — и ты уже можешь зарабатывать. Без теории. Только реальные кейсы от тех, кто это делает прямо сейчас.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-6 text-synergy-beige/80">
            <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base md:text-lg">
              <Icon name="Calendar" size={18} className="icon-float flex-shrink-0" />
              <span className="font-semibold">18 апреля 2026, 10:00–18:00</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base md:text-lg">
              <Icon name="MapPin" size={18} className="icon-float flex-shrink-0" />
              <span className="font-semibold">Отель «Экватор», ул. Набережная, д. 20</span>
            </div>
          </div>
          <div className="flex justify-center px-4">
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
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
            <Badge className="text-xs sm:text-sm px-3 py-1.5 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige whitespace-nowrap">
              Осталось {seatsLeft} мест из 300
            </Badge>
            <Badge className="text-xs sm:text-sm px-3 py-1.5 bg-synergy-red text-synergy-beige whitespace-nowrap">
              Цена: от 1,000 ₽
            </Badge>
          </div>
          <p className="text-synergy-beige/70 text-xs sm:text-sm max-w-2xl mx-auto px-4 text-center">
            100% средств передаются в КГКУ «Маяк» — комплексный центр помощи семье и детям
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;