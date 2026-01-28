import Icon from '@/components/ui/icon';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'SUPER-SMM',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/ab7917b5-7a15-4ab0-a9d0-afc6b480603f.png'
    },
    {
      name: 'Опора России',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/e6ecf693-7cbe-4946-a21c-2ea6861cd801.png'
    },
    {
      name: 'ЭКО',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/7daf5386-35e4-40db-8590-e6510fddf461.png'
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
            <div className="flex gap-12 animate-scroll-right hover:pause-animation">
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

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-synergy-dark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-synergy-dark to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;