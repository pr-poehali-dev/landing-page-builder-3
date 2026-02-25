import Icon from '@/components/ui/icon';

interface SponsorsSectionProps {
  id?: string;
}

const SponsorsSection = ({ id }: SponsorsSectionProps) => {
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
    },
    {
      name: 'Кинотеатр Шахтер',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f15d2cd4-ebce-4d64-a62b-2f84b45843d5.png'
    }
  ];

  const row1 = [...sponsors, ...sponsors];
  const row2 = [...sponsors, ...sponsors];

  const SponsorCard = ({ sponsor }: { sponsor: typeof sponsors[0] }) => (
    <div
      className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-4"
      style={{ width: '220px', height: '130px', minWidth: '220px' }}
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
            СПОНСОРЫ МЕРОПРИЯТИЯ
          </h2>
        </div>

        <div className="relative overflow-hidden flex flex-col gap-5">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-synergy-dark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-synergy-dark to-transparent pointer-events-none z-10" />

          <div
            className="animate-scroll-right-fast"
            style={{ display: 'flex', gap: '28px', width: 'max-content' }}
          >
            {row1.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>

          <div
            className="animate-scroll-left-fast"
            style={{ display: 'flex', gap: '28px', width: 'max-content' }}
          >
            {row2.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;