import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SpeakersSectionProps {
  id?: string;
}

const SpeakersSection = ({ id }: SpeakersSectionProps) => {
  const speakers = [
    {
      id: 1,
      name: 'Иван Трошин',
      role: 'Директор управления по цифровому развитию клиентов Дальневосточного Сбербанка',
      description: 'Умные помощники для сотрудников на базе GigaChat.',
      photo: 'https://cdn.poehali.dev/files/d4cd930d-8e30-4cea-baec-79298a385011.png',
      topic: 'ИИ в бизнес-процессах'
    },
    {
      id: 2,
      name: 'Сергей Черников',
      role: 'Основатель школы ИИ, CEO IT компании Super-SMM',
      description: 'Как заставить ИИ продавать потенциальным клиентам 24/7 практически без бюджета.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f5bba851-01ee-4117-aa70-aa74ccb2b6a1.png',
      topic: 'Автоматизация отдела продаж'
    },
    {
      id: 3,
      name: 'Иван Линдберг',
      role: 'Наставник, трекер Сколково',
      description: 'Как компании получать лиды из нейросетей? GEO – новый канал маркетинга.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/7a227fd7-6fdc-4719-9631-88d42e111de1.jpg',
      topic: 'Клиенты из GEO'
    },
    {
      id: 4,
      name: 'Денис Балюра',
      role: 'Основатель Tomoru.ru',
      description: 'Как ускорить рекрутинг в семь раз и сделать его в три раза дешевле.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/59d7440a-9175-40cf-b022-436eed5f9865.png',
      topic: 'ИИ платформа для найма'
    },
    {
      id: 6,
      name: 'Секретный Спикер',
      role: '',
      description: 'Тема уточняется.',
      photo: null,
      topic: 'ТЕМА УТОЧНЯЕТСЯ'
    },
    {
      id: 7,
      name: 'Секретный Спикер',
      role: '',
      description: 'Тема уточняется.',
      photo: null,
      topic: 'ТЕМА УТОЧНЯЕТСЯ'
    },

  ];

  return (
    <section id={id} className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-beige relative z-10 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <Icon name="Users" size={28} className="sm:w-9 sm:h-9 md:w-12 md:h-12 mx-auto mb-4 sm:mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 text-synergy-dark">
            СПИКЕРЫ МЕРОПРИЯТИЯ
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-synergy-dark/80 max-w-3xl mx-auto leading-relaxed">
            Эксперты-практики, которые уже зарабатывают на ИИ и готовы поделиться своим опытом
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {speakers.map((speaker, idx) => (
            <Card 
              key={speaker.id}
              className="bg-synergy-dark text-synergy-beige overflow-hidden animate-on-scroll hover:scale-[1.02] transition-transform duration-300 flex flex-col"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <CardContent className="p-0 flex flex-col flex-1">
                <div className="relative h-52 sm:h-60 md:h-64 bg-gradient-to-br from-synergy-red/20 to-synergy-dark overflow-hidden flex items-center justify-center flex-shrink-0">
                  {speaker.photo ? (
                    <img 
                      src={speaker.photo} 
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top opacity-90"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-synergy-beige/20">
                      <span className="text-6xl">🕵️</span>
                      <span className="text-xs uppercase tracking-widest text-synergy-beige/40">скоро</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-synergy-red px-2 py-1 text-xs font-bold uppercase tracking-wide">
                    Спикер
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-black mb-1 text-synergy-beige leading-tight">
                    {speaker.name}
                  </h3>
                  {speaker.role && (
                    <p className="text-synergy-red font-bold mb-3 text-xs sm:text-sm leading-snug">
                      {speaker.role}
                    </p>
                  )}
                  <div className="mb-3 pb-3 border-b border-synergy-beige/20">
                    <div className="flex items-start gap-2">
                      <Icon name="Mic" size={13} className="text-synergy-red mt-0.5 flex-shrink-0" />
                      <p className="text-synergy-beige/90 text-xs sm:text-sm font-semibold leading-snug">
                        {speaker.topic}
                      </p>
                    </div>
                  </div>
                  <p className="text-synergy-beige/70 text-xs sm:text-sm leading-relaxed mt-auto">
                    {speaker.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <Card className="bg-synergy-dark border-2 border-synergy-red w-full sm:inline-block sm:w-auto max-w-full">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 text-synergy-beige">
                <Icon name="Star" size={20} className="sm:w-6 sm:h-6 text-synergy-red flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg font-bold">
                  И еще несколько сюрпризов от специальных гостей!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;