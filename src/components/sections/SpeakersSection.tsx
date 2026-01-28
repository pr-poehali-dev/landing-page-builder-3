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
    <section id={id} className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 px-4">
          <Icon name="Users" size={36} className="sm:w-12 sm:h-12 mx-auto mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-synergy-dark">
            СПИКЕРЫ МЕРОПРИЯТИЯ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-synergy-dark/80 max-w-3xl mx-auto leading-relaxed">
            Эксперты-практики, которые уже зарабатывают на ИИ и готовы поделиться своим опытом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, idx) => (
            <Card 
              key={speaker.id}
              className="bg-synergy-dark text-synergy-beige overflow-hidden animate-on-scroll hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-synergy-red/20 to-synergy-dark overflow-hidden">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute top-4 right-4 bg-synergy-red px-3 py-1 text-xs font-bold uppercase">
                    Спикер
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-black mb-2 text-synergy-beige">
                    {speaker.name}
                  </h3>
                  <p className="text-synergy-red font-bold mb-3 text-xs sm:text-sm uppercase tracking-wide">
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

        <div className="mt-12 text-center">
          <Card className="bg-synergy-dark border-2 border-synergy-red inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 text-synergy-beige">
                <Icon name="Star" size={24} className="text-synergy-red" />
                <p className="text-lg font-bold">
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