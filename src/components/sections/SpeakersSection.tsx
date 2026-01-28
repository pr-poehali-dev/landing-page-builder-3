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
      name: 'Имя Спикера 2',
      role: 'Должность / Специализация',
      description: 'Краткое описание опыта и достижений спикера. Что он расскажет на мероприятии.',
      photo: 'https://cdn.poehali.dev/files/freepik__-__85177.png',
      topic: 'Тема выступления'
    },
    {
      id: 3,
      name: 'Имя Спикера 3',
      role: 'Должность / Специализация',
      description: 'Краткое описание опыта и достижений спикера. Что он расскажет на мероприятии.',
      photo: 'https://cdn.poehali.dev/files/freepik__-__85176.png',
      topic: 'Тема выступления'
    },
    {
      id: 4,
      name: 'Имя Спикера 4',
      role: 'Должность / Специализация',
      description: 'Краткое описание опыта и достижений спикера. Что он расскажет на мероприятии.',
      photo: 'https://cdn.poehali.dev/files/freepik__qweyd-closeup-a-man-smelling-of-gasoline-and-sin-l__16411.png',
      topic: 'Тема выступления'
    },
    {
      id: 5,
      name: 'Имя Спикера 5',
      role: 'Должность / Специализация',
      description: 'Краткое описание опыта и достижений спикера. Что он расскажет на мероприятии.',
      photo: 'https://cdn.poehali.dev/files/freepik__qweyd-closeup-portrait-of-a-rugged-man-with-thick-__69510.png',
      topic: 'Тема выступления'
    }
  ];

  return (
    <section id={id} className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="Users" size={48} className="mx-auto mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-synergy-dark">
            СПИКЕРЫ МЕРОПРИЯТИЯ
          </h2>
          <p className="text-lg md:text-xl text-synergy-dark/80 max-w-3xl mx-auto">
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
                <div className="p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-black mb-2 text-synergy-beige">
                    {speaker.name}
                  </h3>
                  <p className="text-synergy-red font-bold mb-3 text-sm uppercase tracking-wide">
                    {speaker.role}
                  </p>
                  <div className="mb-4 pb-4 border-b border-synergy-beige/20">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon name="Mic" size={16} className="text-synergy-red mt-1 flex-shrink-0" />
                      <p className="text-synergy-beige/90 text-sm font-semibold">
                        {speaker.topic}
                      </p>
                    </div>
                  </div>
                  <p className="text-synergy-beige/80 text-sm leading-relaxed">
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