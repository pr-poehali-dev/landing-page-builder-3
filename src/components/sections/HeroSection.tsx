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

      {/* Bouncing SOLD OUT badge */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        <div style={{ animation: 'so-bounce-x 3.7s ease-in-out infinite alternate, so-bounce-y 2.9s ease-in-out infinite alternate', position: 'absolute', top: 0, left: 0 }}>
          <div style={{ animation: 'so-pop 0.7s cubic-bezier(0.34,1.56,0.64,1) both', display: 'inline-block' }}>
            <div style={{ animation: 'so-spin 8s linear infinite', display: 'inline-block' }}>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-synergy-red" style={{ animation: 'so-ring 1.2s ease-in-out infinite' }} />
                <div className="relative rounded-full bg-synergy-red border-[6px] border-synergy-beige shadow-2xl flex flex-col items-center justify-center"
                  style={{ width: 180, height: 180 }}>
                  <span className="font-heading font-black text-synergy-beige leading-none tracking-widest uppercase" style={{ fontSize: 22 }}>SOLD</span>
                  <span className="font-heading font-black text-synergy-beige leading-none tracking-wider" style={{ fontSize: 52 }}>OUT</span>
                  <span className="text-synergy-beige/90 font-black tracking-wide uppercase" style={{ fontSize: 13, marginTop: 2 }}>ВСЕ БИЛЕТЫ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes so-pop {
          0% { transform: scale(0) rotate(-30deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes so-bounce-x {
          0%   { left: 5%; }
          100% { left: calc(100% - 200px); }
        }
        @keyframes so-bounce-y {
          0%   { top: 5%; }
          100% { top: calc(100% - 200px); }
        }
        @keyframes so-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes so-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto relative animate-fade-in w-full flex flex-col flex-1" style={{ zIndex: 2 }}>
        
        <div className="flex justify-center pt-6 sm:pt-8 relative">
          <img
            src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/c26f604f-d2da-4860-84e7-5d8cb9f07456.jpg"
            alt="ИИ ШОУ БЕЗ ШИРМЫ"
            className="h-72 sm:h-80 md:h-96 w-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

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
              <Button 
                size="lg"
                disabled
                className="relative z-10 w-full text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto font-black bg-synergy-dark/80 text-synergy-beige/50 border-4 border-synergy-beige/30 shadow-2xl flex items-center justify-center cursor-not-allowed"
              >
                <Icon name="Lock" size={16} className="mr-2 flex-shrink-0" />
                <span className="uppercase tracking-wide leading-tight">РЕГИСТРАЦИЯ ЗАКРЫТА</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap px-4">
            <Badge className="text-xs sm:text-sm px-3 py-1.5 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige whitespace-nowrap">
              Мест не осталось — все 300 заняты
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