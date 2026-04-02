interface GeneralSponsorSectionProps {
  id?: string;
}

const GeneralSponsorSection = ({ id }: GeneralSponsorSectionProps) => {
  return (
    <section id={id} className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-synergy-dark relative z-10 animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.3em] text-synergy-red uppercase border border-synergy-red/40 rounded px-4 py-1.5 mb-4">
            Генеральный спонсор
          </span>
          <div className="w-16 h-px bg-synergy-red mx-auto mt-4" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 md:p-14">
          <div className="flex-shrink-0 w-48 sm:w-56 md:w-64">
            <img
              src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/1eaef9a9-80dd-4c3d-ae08-941ecd300e20.jpg"
              alt="Insoft Motors"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-synergy-beige mb-4 leading-tight">
              ИНСОФТ МОТОРС
            </h3>
            <p className="text-synergy-beige/70 text-base sm:text-lg leading-relaxed">
              Автомобили из-за рубежа от официальных дилеров и{' '}
              <span className="text-synergy-beige font-semibold uppercase">ключевых авторынков мира</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSponsorSection;
