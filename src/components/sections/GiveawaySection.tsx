import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface GiveawaySectionProps {
  scrollToForm?: () => void;
}

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 5) % 95}%`,
  top: `${(i * 53 + 10) % 90}%`,
  delay: `${(i * 0.4) % 3}s`,
  duration: `${2.5 + (i % 4) * 0.7}s`,
  size: i % 3 === 0 ? 12 : i % 3 === 1 ? 8 : 6,
}));

const GiveawaySection = ({ scrollToForm }: GiveawaySectionProps) => {
  const prizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('prize-visible');
      },
      { threshold: 0.3 }
    );
    if (prizeRef.current) observer.observe(prizeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="giveaway" className="py-8 sm:py-10 px-4 sm:px-6 bg-synergy-beige relative z-10 overflow-hidden animate-on-scroll">
      <style>{`
        @keyframes giveaway-border-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.0); }
          50% { box-shadow: 0 0 40px 8px rgba(239,68,68,0.35); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.12; }
          50% { transform: translateY(-14px) rotate(180deg); opacity: 0.45; }
        }
        @keyframes prize-shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes prize-pop {
          0% { transform: scale(0.7); opacity: 0; }
          70% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        .giveaway-card { animation: giveaway-border-pulse 2.5s ease-in-out infinite; }
        .particle { animation: particle-float var(--dur) ease-in-out infinite; animation-delay: var(--delay); }
        .prize-amount {
          background: linear-gradient(90deg, #ef4444 0%, #ff8a80 40%, #fff 50%, #ff8a80 60%, #ef4444 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .prize-visible .prize-amount {
          animation: prize-shine 2s linear infinite, prize-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .giveaway-badge { animation: badge-bounce 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="giveaway-card relative rounded-2xl overflow-hidden border-2 border-synergy-red">
          <div className="absolute inset-0 bg-synergy-dark opacity-95" />

          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="particle absolute pointer-events-none text-synergy-red"
              style={{ left: p.left, top: p.top, '--dur': p.duration, '--delay': p.delay, fontSize: `${p.size}px` } as React.CSSProperties}
            >★</div>
          ))}

          <div className="relative z-10 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">

              {/* Левая часть */}
              <div className="flex-1 text-center lg:text-left">
                <div className="giveaway-badge inline-flex items-center gap-2 bg-synergy-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                  <Icon name="Gift" size={13} />
                  Розыгрыш среди участников
                </div>

                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-synergy-beige mb-2 leading-tight">
                  ВЫИГРАЙ ОБУЧЕНИЕ<br />НЕЙРОСЕТЯМ
                </h2>

                <a
                  href="https://chernikovgpt.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-3 hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/24f0d856-9bc6-4d2d-bc8e-34853e1eedba.png"
                    alt="Хакни Нейросети"
                    className="h-24 sm:h-28 w-auto"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </a>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 mt-2">
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                    <div className="w-6 h-6 rounded-full bg-synergy-red flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-xs">1</span>
                    </div>
                    <span className="text-synergy-beige text-xs sm:text-sm">Оплатите участие</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                    <div className="w-6 h-6 rounded-full bg-synergy-red flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-xs">2</span>
                    </div>
                    <span className="text-synergy-beige text-xs sm:text-sm">Придите на мероприятие</span>
                  </div>
                </div>
              </div>

              {/* Разделитель */}
              <div className="hidden lg:block w-px h-40 bg-synergy-red/30" />

              {/* Правая часть */}
              <div ref={prizeRef} className="flex-1 text-center">
                <div className="text-synergy-beige/50 text-xs uppercase tracking-widest mb-1">Стоимость приза</div>
                <div className="prize-amount font-black text-4xl sm:text-5xl md:text-6xl leading-none mb-1">100 000 ₽</div>
                <div className="text-synergy-beige/50 text-sm mb-5">3 месяца обучения нейросетям</div>

                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-synergy-red hover:bg-red-600 text-white font-black uppercase tracking-wider px-6 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                >
                  <Icon name="Ticket" size={16} />
                  Купить билет и участвовать
                </button>

                <p className="text-synergy-beige/25 text-xs mt-3">
                  Больше никаких условий — просто купи билет и приходи
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;