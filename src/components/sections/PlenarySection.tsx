import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PlenarySectionProps {
  id?: string;
}

const moderators = [
  {
    id: 1,
    name: 'Сергей Черников',
    role: 'Основатель школы ИИ, эксперт по ИИ',
    photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/32b3ca1a-64d1-425a-a048-6a1206eccb69.png',
  },
  {
    id: 2,
    name: 'Игорь Ветрюк',
    role: 'Председатель приморской Опоры России',
    photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/1c24fca7-d277-4c93-83aa-c4ab679635bc.png',
  },
];

const participants = [
  {
    id: 1,
    name: 'Иван Трошин',
    role: 'Директор управления по цифровому развитию клиентов Дальневосточного Сбербанка',
    photo: 'https://cdn.poehali.dev/files/f1d6ac71-c650-4de9-aa96-7d33d211b309.png',
  },
  {
    id: 2,
    name: 'Николай Стецко',
    role: 'Зампред правительства Приморья',
    photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/87cd7c50-fec9-49d9-a207-bf48d7377b27.png',
  },
  {
    id: 3,
    name: 'Андрей Блохин',
    role: 'Министр экономического развития Приморья',
    photo: null,
  },
  {
    id: 4,
    name: 'Роман Дремлюга',
    role: 'Зам. директора по развитию Института математики и компьютерных технологий ДВФО РАН',
    photo: null,
  },
];

const PersonCard = ({
  name,
  role,
  badge,
  badgeColor,
  photo,
}: {
  name: string;
  role: string;
  badge: string;
  badgeColor: string;
  photo?: string | null;
}) => (
  <Card className="bg-synergy-dark text-synergy-beige overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
    <CardContent className="p-0 flex flex-col h-full">
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-synergy-beige/10 to-synergy-dark flex items-center justify-center border-b border-synergy-beige/10 overflow-hidden">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-synergy-beige/30">
            <Icon name="User" size={48} />
            <span className="text-xs text-synergy-beige/40 uppercase tracking-widest">фото</span>
          </div>
        )}
        <div
          className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wide ${badgeColor}`}
        >
          {badge}
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h4 className="font-heading text-sm sm:text-base md:text-lg font-black mb-1 text-synergy-beige leading-tight">
          {name}
        </h4>
        <p className="text-synergy-beige/60 text-xs sm:text-sm leading-relaxed">{role}</p>
      </div>
    </CardContent>
  </Card>
);

const PlenarySection = ({ id }: PlenarySectionProps) => {
  return (
    <section
      id={id}
      className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-synergy-dark relative z-10 animate-on-scroll"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-2 bg-synergy-red/20 border border-synergy-red/40 px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-synergy-red" />
            <span className="text-synergy-red text-xs font-bold uppercase tracking-widest">
              Специальный формат
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-synergy-beige uppercase">
            Пленарное заседание
          </h2>
          <div className="w-16 h-1 bg-synergy-red mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-synergy-beige/70 max-w-2xl mx-auto leading-relaxed">
            Открытый диалог бизнеса и власти об искусственном интеллекте — как ИИ меняет экономику
            Приморья прямо сейчас
          </p>
        </div>

        {/* Moderators */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-synergy-beige/10" />
            <div className="flex items-center gap-2">
              <Icon name="Mic" size={16} className="text-synergy-red" />
              <span className="text-synergy-beige/50 text-xs uppercase tracking-widest font-bold">
                Модераторы
              </span>
            </div>
            <div className="h-px flex-1 bg-synergy-beige/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {moderators.map((person) => (
              <PersonCard
                key={person.id}
                name={person.name}
                role={person.role}
                badge="Модератор"
                badgeColor="bg-synergy-red text-synergy-beige"
                photo={person.photo}
              />
            ))}
          </div>
        </div>

        {/* Participants */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-synergy-beige/10" />
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={16} className="text-synergy-beige/50" />
              <span className="text-synergy-beige/50 text-xs uppercase tracking-widest font-bold">
                Участники
              </span>
            </div>
            <div className="h-px flex-1 bg-synergy-beige/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {participants.map((person) => (
              <PersonCard
                key={person.id}
                name={person.name}
                role={person.role}
                badge="Участник"
                badgeColor="bg-synergy-beige/10 text-synergy-beige/60 border border-synergy-beige/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlenarySection;