import Icon from '@/components/ui/icon';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'ЭКО',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/4d717e3d-4d44-44fb-86fe-0840ef40e7c8.png'
    },
    {
      name: 'Опора России',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/1ffe50e2-2bd4-469d-bb79-4b55b42a7e94.png'
    },
    {
      name: 'SUPER-SMM',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/604d730d-ec40-4809-97d2-6887594b0275.png'
    },
    {
      name: 'Спонсор',
      logo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f5f66bc3-5597-4457-84ac-c328d8826a59.jpg'
    }
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-16 px-6 bg-synergy-dark relative z-10 overflow-hidden animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-synergy-beige">
            СПОНСОРЫ МЕРОПРИЯТИЯ
          </h2>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: '200px', height: '120px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-synergy-dark to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-synergy-dark to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
