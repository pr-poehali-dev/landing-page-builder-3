import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SpeakersSectionProps {
  id?: string;
}

const SpeakersSection = ({ id }: SpeakersSectionProps) => {
  const speakers = [
    {
      id: 1,
      name: 'Сергей Черников',
      role: 'Основатель школы ИИ',
      description: 'Как заставить ИИ продавать потенциальным клиентам 24/7 практически без бюджета.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f5bba851-01ee-4117-aa70-aa74ccb2b6a1.png',
      topic: 'Автоматизация отдела продаж'
    },
    {
      id: 2,
      name: 'Иван Линдберг',
      role: 'Наставник, трекер Сколково',
      description: 'Автоматизация трафика с помощью ИИ. Горячие клиенты ждут вас.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/2666beb8-8b4d-4671-973a-117dec8b9542.png',
      topic: 'Клиенты на автомате'
    },
    {
      id: 3,
      name: 'Денис Балюра',
      role: 'Основатель Tomoru.ru',
      description: 'Робот для найма, продаж и поддержки клиентов.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/59d7440a-9175-40cf-b022-436eed5f9865.png',
      topic: 'Голосовые роботы'
    },
    {
      id: 4,
      name: 'Секретный спикер',
      role: 'Специальный гость',
      description: 'Создание рабочего сайта за 30 минут live на глазах аудитории.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/054fe890-b97a-4f98-a25b-430318291f09.png',
      topic: 'САЙТЫ ЧЕРЕЗ ИИ'
    },
    {
      id: 5,
      name: 'Секретный спикер',
      role: 'Специальный гость',
      description: 'Live-демонстрация создания 3 типов контента за минимум времени.',
      photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/054fe890-b97a-4f98-a25b-430318291f09.png',
      topic: 'КОНТЕНТ ЗАВОД'
    }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {speakers.map((speaker, idx) => (
            <Card 
              key={speaker.id}
              className="bg-synergy-dark text-synergy-beige overflow-hidden animate-on-scroll hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-synergy-red/20 to-synergy-dark overflow-hidden">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-synergy-red px-2 sm:px-3 py-1 text-xs font-bold uppercase">
                    Спикер
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-2 text-synergy-beige">
                    {speaker.name}
                  </h3>
                  <p className="text-synergy-red font-bold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wide">
                    {speaker.role}
                  </p>
                  <div className="mb-4 pb-4 border-b border-synergy-beige/20">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon name="Mic" size={14} className="sm:w-4 sm:h-4 text-synergy-red mt-1 flex-shrink-0" />
                      <p className="text-synergy-beige/90 text-xs sm:text-sm font-semibold">
                        {speaker.topic}
                      </p>
                    </div>
                  </div>
                  <p className="text-synergy-beige/80 text-xs sm:text-sm leading-relaxed">
                    {speaker.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <Card className="bg-synergy-dark border-2 border-synergy-red inline-block max-w-full">
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