import Icon from '@/components/ui/icon';

interface GeneralSponsorSectionProps {
  id?: string;
}

const sponsors = [
  {
    href: "https://insoft-motors.ru/?ysclid=mni2j3x30744915871",
    logo: "https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/1eaef9a9-80dd-4c3d-ae08-941ecd300e20.jpg",
    alt: "Инсофт Моторс",
    logoBg: false,
    name: "ИНСОФТ МОТОРС",
    tagline: null,
    description: (
      <>
        Автомобили из-за рубежа от официальных дилеров и{' '}
        <span className="text-synergy-beige font-semibold uppercase">ключевых авторынков мира</span>
        <span className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
          {['Бизнес-класс', 'Премиум', 'Коммерческий транспорт'].map((tag) => (
            <span key={tag} className="text-xs font-semibold text-synergy-red border border-synergy-red/40 rounded px-2 py-0.5 uppercase tracking-wide">{tag}</span>
          ))}
        </span>
      </>
    ),
  },
  {
    href: "https://vladivostok.t2.ru/",
    logo: "https://cdn.poehali.dev/files/d21358ad-e9ec-4991-a874-46a47002e5e3.jpg",
    alt: "Т2",
    logoBg: true,
    name: "Т2",
    tagline: "Другие правила. Новый уровень",
    description: (
      <>
        <span className="text-synergy-beige font-semibold block mb-1">Цифровая защита вашего бизнеса</span>
        Защита от DDoS-атак, вредоносных ботов, взломов и подмены контента
      </>
    ),
  },
];

const GeneralSponsorSection = ({ id }: GeneralSponsorSectionProps) => {
  return (
    <section id={id} className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-synergy-dark relative z-10 animate-on-scroll">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.3em] text-synergy-red uppercase border border-synergy-red/40 rounded px-4 py-1.5 mb-4">
            Генеральные спонсоры
          </span>
          <div className="w-16 h-px bg-synergy-red mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sponsors.map((s) => (
            <div
              key={s.alt}
              className="flex flex-col items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <a
                href={s.href ?? undefined}
                target={s.href ? "_blank" : undefined}
                rel={s.href ? "noopener noreferrer" : undefined}
                className={`relative flex items-center justify-center w-full h-36 bg-white rounded-xl p-5 group ${s.href ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <img src={s.logo} alt={s.alt} className={`max-w-full max-h-full object-contain ${s.href ? 'group-hover:opacity-80 transition-opacity duration-200' : ''}`} />
                {s.href && (
                  <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-synergy-dark/80 rounded-md p-1">
                    <Icon name="ExternalLink" size={14} className="text-synergy-beige" />
                  </span>
                )}
              </a>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-synergy-beige mb-2 leading-tight">
                  {s.name}
                </h3>
                {s.tagline && (
                  <p className="text-synergy-red font-bold text-sm sm:text-base mb-2 uppercase tracking-wide">
                    {s.tagline}
                  </p>
                )}
                <p className="text-synergy-beige/70 text-sm sm:text-base leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneralSponsorSection;