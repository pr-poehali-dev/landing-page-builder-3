import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface GiveawaySectionProps {
  scrollToForm?: () => void;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 5) % 95}%`,
  top: `${(i * 53 + 10) % 90}%`,
  delay: `${(i * 0.4) % 3}s`,
  duration: `${2.5 + (i % 4) * 0.7}s`,
  size: i % 3 === 0 ? 14 : i % 3 === 1 ? 10 : 7,
}));

const GiveawaySection = ({ scrollToForm }: GiveawaySectionProps) => {
  const prizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('prize-visible');
        }
      },
      { threshold: 0.3 }
    );
    if (prizeRef.current) observer.observe(prizeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="giveaway" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-synergy-beige relative z-10 overflow-hidden animate-on-scroll">
      <style>{`
        @keyframes giveaway-border-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.0), inset 0 0 0 0 rgba(239,68,68,0.0); }
          50% { box-shadow: 0 0 40px 8px rgba(239,68,68,0.35), inset 0 0 30px 4px rgba(239,68,68,0.08); }
        }
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-18px) rotate(180deg); opacity: 0.55; }
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
          50% { transform: translateY(-5px); }
        }
        .giveaway-card {
          animation: giveaway-border-pulse 2.5s ease-in-out infinite;
        }
        .particle {
          animation: particle-float var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
        }
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
        .giveaway-badge {
          animation: badge-bounce 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="giveaway-card relative rounded-2xl overflow-hidden border-2 border-synergy-red">
          <div className="absolute inset-0 bg-synergy-dark opacity-95" />

          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="particle absolute pointer-events-none text-synergy-red"
              style={{
                left: p.left,
                top: p.top,
                '--dur': p.duration,
                '--delay': p.delay,
                fontSize: `${p.size}px`,
              } as React.CSSProperties}
            >
              ★
            </div>
          ))}

          <div className="relative z-10 p-8 sm:p-10 md:p-14 text-center">
            <div className="giveaway-badge inline-flex items-center gap-2 bg-synergy-red text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Icon name="Gift" size={16} />
              Розыгрыш среди участников
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-synergy-beige mb-4">
              ВЫИГРАЙ ОБУЧЕНИЕ<br />НЕЙРОСЕТЯМ
            </h2>

            <a
              href="https://chernikovgpt.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/24f0d856-9bc6-4d2d-bc8e-34853e1eedba.png"
                alt="Хакни Нейросети"
                className="h-20 sm:h-24 w-auto mx-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>

            <p className="text-synergy-beige/70 text-sm sm:text-base mb-8">
              Школа <span className="text-synergy-red font-bold">Хакни Нейросети</span> разыгрывает бесплатный курс среди гостей конференции
            </p>

            <div ref={prizeRef} className="bg-synergy-red/10 border border-synergy-red/30 rounded-xl p-6 mb-8 inline-block w-full max-w-md mx-auto">
              <div className="text-synergy-beige/60 text-xs uppercase tracking-widest mb-1">Стоимость приза</div>
              <div className="prize-amount font-black text-4xl sm:text-5xl">100 000 ₽</div>
              <div className="text-synergy-beige/60 text-sm mt-1">3 месяца обучения нейросетям</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 flex-1 text-left">
                <div className="w-8 h-8 rounded-full bg-synergy-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-black text-sm">1</span>
                </div>
                <div>
                  <div className="text-synergy-beige font-bold text-sm">Оплатите участие</div>
                  <div className="text-synergy-beige/50 text-xs mt-0.5">Купите билет на конференцию</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 flex-1 text-left">
                <div className="w-8 h-8 rounded-full bg-synergy-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-black text-sm">2</span>
                </div>
                <div>
                  <div className="text-synergy-beige font-bold text-sm">Придите на мероприятие</div>
                  <div className="text-synergy-beige/50 text-xs mt-0.5">Победитель объявляется на конференции</div>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-synergy-red hover:bg-red-600 text-white font-black uppercase tracking-wider px-8 py-4 rounded-xl text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
            >
              <Icon name="Ticket" size={18} />
              Купить билет и участвовать
            </button>

            <p className="text-synergy-beige/30 text-xs mt-4">
              Больше никаких условий — просто купи билет и приходи
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;
