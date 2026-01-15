import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const HeroSection = ({ seatsLeft, scrollToForm }: HeroSectionProps) => {
  return (
    <section className="relative bg-synergy-dark text-synergy-beige py-20 px-6 overflow-hidden z-10">
      <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-synergy-red text-synergy-beige font-bold text-sm uppercase">
            Благотворительное мероприятие
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 leading-tight text-synergy-beige">
            ИИ ШОУ БЕЗ ШИРМЫ
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-synergy-beige/90 max-w-3xl mx-auto">
            Не красивые истории, а реальные результаты. Увидишь, как ИИ работает в реальности, и сам попробуешь инструменты, которые твои конкуренты уже используют
          </p>
          <div className="mb-8 space-y-2 text-synergy-beige/80">
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="Calendar" size={20} className="icon-float" />
              <span className="font-semibold">18 апреля 2026, 10:00–18:00</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Icon name="MapPin" size={20} className="icon-float" />
              <span className="font-semibold">Владивосток</span>
            </div>
          </div>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="text-lg px-8 py-6 h-auto font-bold mb-4 bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 border-2 border-synergy-red hover:border-synergy-red/90"
          >
            <span className="font-black uppercase">Купить билет</span>
          </Button>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Badge className="text-base px-4 py-2 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige">
              Осталось {seatsLeft} мест из 300
            </Badge>
            <Badge className="text-base px-4 py-2 bg-synergy-red text-synergy-beige">
              Цена: от 1,000 ₽
            </Badge>
          </div>
          <p className="mt-6 text-synergy-beige/70 text-sm max-w-2xl mx-auto">
            100% средств передаются в Центр «Живая Надежда» — помощь одиноким матерям в Приморье
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
