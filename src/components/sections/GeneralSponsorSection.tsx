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
      </>
    ),
  },
  {
    href: null,
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
              {s.href ? (
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200">
                  <img src={s.logo} alt={s.alt} className="w-40 h-28 object-contain rounded-xl" />
                </a>
              ) : (
                <div className={`flex items-center justify-center rounded-xl p-4 ${s.logoBg ? 'bg-white' : ''}`}>
                  <img src={s.logo} alt={s.alt} className="w-40 h-28 object-contain" />
                </div>
              )}

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
