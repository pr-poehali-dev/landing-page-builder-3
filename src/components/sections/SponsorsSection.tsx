import { useState, useRef, useCallback } from 'react';
import Icon from '@/components/ui/icon';

interface SponsorsSectionProps {
  id?: string;
}

const CARD_WIDTH = 220;
const CARD_GAP = 28;
const STEP = CARD_WIDTH + CARD_GAP;

const SponsorsSection = ({ id }: SponsorsSectionProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const sponsors = [
    {
      name: 'SUPER-SMM',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/d8ff5f6e-ffaa-480f-8783-9d2b5d6622b3.png'
    },
    {
      name: 'ЭКО Центр',
      logo: 'https://cdn.poehali.dev/files/8423e1e0-efce-4614-9287-18a3853fa1bc.png'
    },
    {
      name: 'Опора России',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/b30d4627-edea-4d2b-8320-b463b2f8e429.png'
    },
    {
      name: 'БЗ 2022',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/85bb1b0d-2e8f-45b8-89e4-d071c01f7ddf.png'
    },
    {
      name: 'Кинотеатр Шахтер',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f15d2cd4-ebce-4d64-a62b-2f84b45843d5.png'
    },
    {
      name: 'Рейд Паллада',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/ddec73b2-fe63-456b-a388-642006823c75.jpg'
    },
    {
      name: 'Ягода',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/5272db74-bbd3-44f2-83bd-e53664c03f22.png'
    },
    {
      name: 'Плёсы Песчаного',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f6fcbda4-be54-46d7-a04b-eb84143078db.jpg'
    },
    {
      name: 'Multi Chat',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/bf4df878-ef35-48ff-bef5-c4070ae60ac6.png'
    },
    {
      name: 'Правительство Приморского края',
      logo: 'https://cdn.poehali.dev/files/bba11447-b27d-4923-bfa5-a66cb576a971.png'
    }
  ];

  const row1 = [...sponsors, ...sponsors];
  const row2 = [...sponsors, ...sponsors];

  const scroll = useCallback((ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (!ref.current) return;
    const el = ref.current;
    const delta = direction === 'left' ? -STEP * 2 : STEP * 2;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  }, []);

  const SponsorCard = ({ sponsor }: { sponsor: typeof sponsors[0] }) => (
    <div
      className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4"
      style={{ width: `${CARD_WIDTH}px`, height: '130px', minWidth: `${CARD_WIDTH}px` }}
    >
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="w-full h-full object-contain"
      />
    </div>
  );

  return (
    <section id={id} className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-dark relative z-10 overflow-hidden animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <Icon name="Award" size={28} className="sm:w-9 sm:h-9 md:w-12 md:h-12 mx-auto mb-4 sm:mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-synergy-beige">
            БЛАГОДАРЯ ЭТИМ ОРГАНИЗАЦИЯМ<br />СОСТОИТСЯ КОНФЕРЕНЦИЯ. СПАСИБО!
          </h2>
        </div>

        <div
          className="relative flex flex-col gap-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-synergy-dark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-synergy-dark to-transparent pointer-events-none z-10" />

          {isPaused && (
            <>
              <button
                onClick={() => { scroll(row1Ref, 'left'); scroll(row2Ref, 'left'); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-synergy-dark/90 border border-synergy-beige/50 text-synergy-beige hover:bg-synergy-red hover:border-synergy-red flex items-center justify-center transition-all duration-200"
              >
                <Icon name="ChevronLeft" size={22} />
              </button>
              <button
                onClick={() => { scroll(row1Ref, 'right'); scroll(row2Ref, 'right'); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-synergy-dark/90 border border-synergy-beige/50 text-synergy-beige hover:bg-synergy-red hover:border-synergy-red flex items-center justify-center transition-all duration-200"
              >
                <Icon name="ChevronRight" size={22} />
              </button>
            </>
          )}

          <div
            ref={row1Ref}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            <div
              className={isPaused ? '' : 'animate-scroll-right-fast'}
              style={{ display: 'flex', gap: `${CARD_GAP}px`, width: 'max-content', animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {row1.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} />
              ))}
            </div>
          </div>

          <div
            ref={row2Ref}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            <div
              className={isPaused ? '' : 'animate-scroll-left-fast'}
              style={{ display: 'flex', gap: `${CARD_GAP}px`, width: 'max-content', animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {row2.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;