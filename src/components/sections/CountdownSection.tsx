import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CountdownSectionProps {
  scrollToForm: () => void;
}

const EVENT_DATE = new Date('2026-04-18T10:00:00+10:00');

const pad = (n: number) => String(n).padStart(2, '0');

const CountdownSection = ({ scrollToForm }: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const calc = () => {
      const diff = EVENT_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setStarted(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'дней', value: timeLeft.days },
    { label: 'часов', value: timeLeft.hours },
    { label: 'минут', value: timeLeft.minutes },
    { label: 'секунд', value: timeLeft.seconds },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-synergy-dark relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-synergy-red/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-synergy-red/20 border border-synergy-red/40 px-3 py-1.5 mb-4">
            <Icon name="Clock" size={14} className="text-synergy-red" />
            <span className="text-synergy-red text-xs font-bold uppercase tracking-widest">
              {started ? 'Мероприятие идёт!' : 'До начала осталось'}
            </span>
          </div>
          <p className="text-synergy-beige/60 text-xs sm:text-sm uppercase tracking-widest">
            18 апреля 2026 · Владивосток · Отель «Экватор»
          </p>
        </div>

        <div className="flex justify-center gap-3 sm:gap-6 mb-8 sm:mb-10">
          {units.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="relative">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-synergy-beige/5 border border-synergy-beige/10 flex items-center justify-center">
                  <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-synergy-beige tabular-nums leading-none">
                    {pad(value)}
                  </span>
                </div>
                <div className="absolute inset-0 border border-synergy-red/30 translate-x-0.5 translate-y-0.5 pointer-events-none" />
              </div>
              <span className="mt-2 text-synergy-beige/50 text-xs sm:text-sm uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={scrollToForm}
            className="bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-black text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 sm:py-6 h-auto uppercase tracking-wide border-2 border-synergy-beige/20"
          >
            <Icon name="Zap" size={16} className="mr-2 animate-pulse flex-shrink-0" />
            Занять место
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
