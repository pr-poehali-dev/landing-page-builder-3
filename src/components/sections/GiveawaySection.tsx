import Icon from '@/components/ui/icon';

interface GiveawaySectionProps {
  scrollToForm?: () => void;
}

const GiveawaySection = ({ scrollToForm }: GiveawaySectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-synergy-beige relative z-10 overflow-hidden animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border-2 border-synergy-red">
          <div className="absolute inset-0 bg-synergy-dark opacity-95" />

          <div className="relative z-10 p-8 sm:p-10 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 bg-synergy-red text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Icon name="Gift" size={16} />
              Розыгрыш среди участников
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-synergy-beige mb-4">
              ВЫИГРАЙ ОБУЧЕНИЕ<br />НЕЙРОСЕТЯМ
            </h2>

            <p className="text-synergy-beige/70 text-sm sm:text-base mb-8">
              Школа <span className="text-synergy-red font-bold">Хакни Нейросети</span> разыгрывает бесплатный курс среди гостей конференции
            </p>

            <div className="bg-synergy-red/10 border border-synergy-red/30 rounded-xl p-6 mb-8 inline-block w-full max-w-md mx-auto">
              <div className="text-synergy-beige/60 text-xs uppercase tracking-widest mb-1">Стоимость приза</div>
              <div className="text-synergy-red font-black text-4xl sm:text-5xl">100 000 ₽</div>
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
