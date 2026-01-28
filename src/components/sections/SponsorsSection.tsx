import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const SponsorsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const sponsors = [
    {
      name: 'SUPER-SMM',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/d8ff5f6e-ffaa-480f-8783-9d2b5d6622b3.png'
    },
    {
      name: 'ЭКО',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/87e2c5a0-456d-4c76-b91f-ffdfef1ba22f.png'
    },
    {
      name: 'Опора России',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/b30d4627-edea-4d2b-8320-b463b2f8e429.png'
    },
    {
      name: 'Центр Развития Предпринимательства',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/9c3835e7-37dc-461d-9d7b-fbbef265cdd4.png'
    },
    {
      name: 'БЗ 2022',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/85bb1b0d-2e8f-45b8-89e4-d071c01f7ddf.png'
    }
  ];

  const allSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-16 px-6 bg-synergy-dark relative z-10 overflow-hidden animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="Award" size={48} className="mx-auto mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-synergy-beige">
            СПОНСОРЫ МЕРОПРИЯТИЯ
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-12 animate-scroll-right-fast"
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
                transform: `translateX(${translateX}px)`,
                transition: isPaused ? 'transform 0.5s ease' : 'none'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {allSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-6"
                  style={{ width: '250px', height: '140px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-synergy-dark/90 border-synergy-beige/50 text-synergy-beige hover:bg-synergy-red hover:border-synergy-red hover:text-synergy-beige"
            onClick={() => setTranslateX(prev => prev + 300)}
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-synergy-dark/90 border-synergy-beige/50 text-synergy-beige hover:bg-synergy-red hover:border-synergy-red hover:text-synergy-beige"
            onClick={() => setTranslateX(prev => prev - 300)}
          >
            <Icon name="ChevronRight" size={24} />
          </Button>

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-synergy-dark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-synergy-dark to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;