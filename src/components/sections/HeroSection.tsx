import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  scrollToForm: () => void;
}

const DoodleCamera = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 80 60" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="18" width="70" height="38" rx="5" />
    <circle cx="40" cy="37" r="12" />
    <circle cx="40" cy="37" r="7" />
    <rect x="25" y="10" width="20" height="10" rx="3" />
    <circle cx="65" cy="26" r="3" />
  </svg>
);

const DoodleStar = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 50 50" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round">
    <line x1="25" y1="5" x2="25" y2="45" />
    <line x1="5" y1="25" x2="45" y2="25" />
    <line x1="11" y1="11" x2="39" y2="39" />
    <line x1="39" y1="11" x2="11" y2="39" />
  </svg>
);

const DoodlePlay = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 60 60" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="30" cy="30" r="26" />
    <polygon points="24,18 24,42 46,30" fill="#1a1a1a" />
  </svg>
);

const DoodleArrow = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 80 40" fill="none" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20 Q30 5 60 20" />
    <polyline points="52,12 62,20 52,28" />
  </svg>
);

const DoodleLaptop = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 90 70" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="10" width="70" height="42" rx="4" />
    <rect x="18" y="17" width="54" height="28" rx="2" />
    <line x1="2" y1="58" x2="88" y2="58" />
    <path d="M35 52 L55 52 L58 58 L32 58 Z" />
  </svg>
);

const DoodlePerson = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 50 80" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="25" cy="14" r="10" />
    <path d="M10 35 Q25 28 40 35 L38 62 L25 58 L12 62 Z" />
    <line x1="10" y1="36" x2="4" y2="52" />
    <line x1="40" y1="36" x2="46" y2="52" />
    <line x1="19" y1="62" x2="16" y2="78" />
    <line x1="31" y1="62" x2="34" y2="78" />
  </svg>
);

const DoodleCassette = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 100 65" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="8" width="90" height="50" rx="6" />
    <path d="M20 30 Q50 20 80 30" />
    <circle cx="28" cy="38" r="10" />
    <circle cx="72" cy="38" r="10" />
    <line x1="38" y1="38" x2="62" y2="38" />
    <rect x="35" y="10" width="30" height="12" rx="2" />
  </svg>
);

const DoodlePhoto = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 70 80" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="5" width="60" height="70" rx="3" />
    <rect x="12" y="12" width="46" height="46" rx="2" />
    <circle cx="35" cy="35" r="12" />
    <line x1="5" y1="65" x2="65" y2="65" />
  </svg>
);

const Sticker = ({
  text,
  bg,
  rot,
  delay,
  className,
  textColor = 'text-ink',
}: {
  text: string;
  bg: string;
  rot: number;
  delay: number;
  className?: string;
  textColor?: string;
}) => (
  <div
    className={`sticker absolute px-3 py-1.5 font-doodle font-bold border-2 border-ink text-xs sm:text-sm shadow-[3px_3px_0_#1a1a1a] ${textColor} ${className}`}
    style={{
      background: bg,
      '--sticker-rot': `${rot}deg`,
      transform: `rotate(${rot}deg)`,
      animationDelay: `${delay}s`,
    } as React.CSSProperties}
  >
    {text}
  </div>
);

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    const timer = setTimeout(() => {
      el.style.opacity = '1';
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex flex-col">

      {/* Doodle background decorations */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        <DoodleCamera className="absolute w-16 sm:w-20 doodle-float opacity-20" style={{ top: '5%', left: '2%', transform: 'rotate(-8deg)' }} />
        <DoodleStar className="absolute w-8 sm:w-10 doodle-shake opacity-25" style={{ top: '10%', left: '16%' }} />
        <DoodlePlay className="absolute w-14 sm:w-16 doodle-float opacity-18" style={{ top: '7%', right: '5%', transform: 'rotate(5deg)' }} />
        <DoodleStar className="absolute w-6 doodle-shake opacity-20" style={{ top: '20%', right: '12%' }} />
        <DoodlePerson className="absolute w-10 sm:w-12 doodle-float opacity-18" style={{ top: '32%', left: '0.5%', transform: 'rotate(4deg)' }} />
        <DoodleArrow className="absolute w-16 arrow-wobble opacity-18" style={{ top: '48%', left: '4%', transform: 'rotate(-10deg) scaleX(-1)' }} />
        <DoodleLaptop className="absolute w-16 sm:w-20 doodle-float opacity-18" style={{ bottom: '20%', right: '2%', transform: 'rotate(6deg)' }} />
        <DoodleCassette className="absolute w-20 sm:w-24 doodle-float opacity-18" style={{ bottom: '8%', left: '3%', transform: 'rotate(-5deg)' }} />
        <DoodlePhoto className="absolute w-12 doodle-shake opacity-22" style={{ top: '58%', right: '7%' }} />
        <DoodleStar className="absolute w-5 doodle-shake opacity-25" style={{ bottom: '32%', left: '20%' }} />
        <DoodleArrow className="absolute w-20 arrow-wobble opacity-15" style={{ bottom: '16%', right: '16%', transform: 'rotate(15deg)' }} />
        <DoodleStar className="absolute w-7 doodle-shake opacity-18" style={{ top: '72%', left: '44%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 flex flex-col flex-1">

        {/* Micro label */}
        <div className="flex justify-center mb-5">
          <span className="font-doodle text-base sm:text-lg text-ink/55 border-b-2 border-dashed border-ink/25 pb-0.5">
            двухдневный офлайн-воркшоп во Владивостоке
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center">

          {/* Title */}
          <h1
            ref={titleRef}
            className="font-doodle font-bold text-center leading-[0.95] text-ink mb-8 transition-opacity duration-300"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 8rem)' }}
          >
            <span className="block" style={{ animation: 'title-draw 0.55s ease-out 0.15s both', transform: 'rotate(-1.5deg)', display: 'inline-block' }}>
              Картиночки
            </span>
            <span className="block" style={{ animation: 'title-draw 0.55s ease-out 0.45s both', transform: 'rotate(1deg)', display: 'inline-block', color: '#F43F5E' }}>
              и Видосики
            </span>
          </h1>

          {/* Collage visual block */}
          <div className="relative w-full max-w-2xl mx-auto mb-10 h-56 sm:h-64">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-44 sm:h-52 border-2 border-ink rotate-1 shadow-[5px_5px_0_#1a1a1a]" style={{ background: '#FACC1533' }} />

            <div className="absolute left-[10%] top-[4%] w-28 sm:w-32 h-28 sm:h-32 border-2 border-ink -rotate-3 shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center" style={{ background: '#3B82F622' }}>
              <DoodleCamera className="w-14 opacity-55" />
            </div>

            <div className="absolute right-[8%] top-[6%] w-24 sm:w-28 h-24 sm:h-28 border-2 border-ink rotate-2 shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center" style={{ background: '#10B98122' }}>
              <DoodlePhoto className="w-12 opacity-55" />
            </div>

            <div className="absolute left-[26%] bottom-[0%] w-40 sm:w-44 h-24 sm:h-28 border-2 border-ink -rotate-1 shadow-[4px_4px_0_#1a1a1a] flex items-center justify-center" style={{ background: '#F43F5E22' }}>
              <DoodlePlay className="w-12 opacity-55" />
            </div>

            <div className="absolute right-[4%] bottom-[4%] w-20 sm:w-24 h-16 sm:h-20 bg-white border-2 border-ink rotate-3 shadow-[3px_3px_0_#1a1a1a] flex items-center justify-center">
              <DoodleLaptop className="w-14 opacity-45" />
            </div>

            {/* Stickers */}
            <Sticker text="без скучной теории" bg="#FACC15" rot={-3} delay={0.7} className="top-[0%] left-[1%] z-20" />
            <Sticker text="оффлайн" bg="#F43F5E" rot={4} delay={1.0} className="top-[3%] right-[-1%] z-20" textColor="text-white" />
            <Sticker text="с первого дня практика" bg="#3B82F6" rot={-2} delay={1.3} className="bottom-[-2%] left-[-1%] z-20" textColor="text-white" />
            <Sticker text="для новичков и креаторов" bg="#10B981" rot={2} delay={1.6} className="bottom-[-2%] right-[-1%] z-20" textColor="text-white" />
          </div>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-ink/70 text-center max-w-2xl leading-relaxed mb-8 px-2">
            Два дня живой практики по визуальным нейросетям и AI-видео, где ты наконец поймёшь, как делать картинки, нейрофотосессии, карточки товаров, постеры и видео-контент — а не просто смотреть, как это делают другие.
          </p>

          {/* Bullets */}
          <div className="flex flex-col gap-3 mb-10 w-full max-w-lg">
            {[
              { icon: '📅', text: '2 дня обучения, с 11:00 до 18:00' },
              { icon: '🎨', text: 'День 1 — промт-инжиниринг, фото и визуальные нейросети' },
              { icon: '🎬', text: 'День 2 — видео через Kling, Veo, Seedance 2 и другие инструменты' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border-2 border-ink px-4 py-3 shadow-[3px_3px_0_#1a1a1a]"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.3 : 0.3}deg)` }}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className="font-sans text-sm sm:text-base text-ink font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-5">
            <button
              onClick={scrollToForm}
              className="btn-handmade flex-1 bg-ink text-white font-sans font-bold text-base sm:text-lg px-6 py-4 border-2 border-ink shadow-[4px_4px_0_#1a1a1a] hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 uppercase tracking-wide"
            >
              Забронировать место
            </button>
            <button
              onClick={scrollToForm}
              className="flex-1 font-sans font-bold text-base sm:text-lg px-6 py-4 border-2 border-ink shadow-[4px_4px_0_#1a1a1a] hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 uppercase tracking-wide text-ink"
              style={{ background: '#FACC15', transform: 'rotate(0.4deg)' }}
            >
              Получить программу
            </button>
          </div>

          {/* Sub-button note */}
          <p className="font-doodle text-base sm:text-lg text-ink/45 text-center">
            Подходит даже тем, кто пока только "что-то слышал про нейросети" 👋
          </p>

        </div>
      </div>

      <style>{`
        @keyframes title-draw {
          0%   { opacity: 0; transform: rotate(var(--r, 0deg)) translateX(-10px) skewX(4deg); }
          60%  { opacity: 1; transform: rotate(var(--r, 0deg)) translateX(2px) skewX(-1deg); }
          100% { opacity: 1; transform: rotate(var(--r, 0deg)) translateX(0) skewX(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
