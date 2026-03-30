import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AiIcon from '@/components/AiIcon';

interface ProgramSectionProps {
  id?: string;
}

const ProgramSection = ({ id }: ProgramSectionProps) => {
  return (
    <>
      <section id={id} className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center mb-8 sm:mb-12 text-synergy-beige px-2">
            ПРОГРАММА МЕРОПРИЯТИЯ
          </h2>
          <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-synergy-beige/90 text-xs sm:text-sm md:text-base px-2">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="icon-rotate-hover" />
              <span className="font-semibold">Регистрация: 10:30</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="PlayCircle" size={20} className="icon-rotate-hover" />
              <span className="font-semibold">Начало: 11:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Coffee" size={20} className="icon-rotate-hover" />
              <span className="font-semibold">Обед: 14:00–15:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="icon-rotate-hover" />
              <span className="font-semibold">Конец: 18:00</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              {
                time: '10:30–11:00',
                icon: 'Users',
                title: 'РЕГИСТРАЦИЯ',
                desc: 'Приход гостей, регистрация, кофе-брейк',
                highlight: false
              },
              {
                time: '11:00–11:30',
                icon: 'Mic',
                title: 'ВСТУПИТЕЛЬНОЕ СЛОВО ОРГАНИЗАТОРА',
                desc: 'О мероприятии, целях и возможностях ИИ для бизнеса.',
                highlight: true,
                people: [
                  { name: 'Сергей Черников', role: 'Основатель школы ИИ, CEO IT компании Super-SMM', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f5bba851-01ee-4117-aa70-aa74ccb2b6a1.png' },
                ]
              },
              {
                time: '11:40–12:40',
                icon: 'MessageSquare',
                title: 'ПЛЕНАРНОЕ ЗАСЕДАНИЕ',
                desc: 'Открытый диалог с представителями власти об ИИ в экономике Приморья.',
                highlight: true,
                people: [
                  { name: 'Сергей Черников', role: 'Модератор. Основатель школы ИИ, CEO Super-SMM', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f5bba851-01ee-4117-aa70-aa74ccb2b6a1.png' },
                  { name: 'Игорь Ветрюк', role: 'Модератор. Председатель приморской Опоры России', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/1c24fca7-d277-4c93-83aa-c4ab679635bc.png' },
                  { name: 'Николай Стецко', role: 'Зампред правительства Приморья', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/87cd7c50-fec9-49d9-a207-bf48d7377b27.png' },
                  { name: 'Мария Широких', role: 'Заместитель генерального директора АНО "Центр поддержки предпринимательства Приморского края"', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/9f2e7f7d-8a6c-48e5-8b0e-cb6a9d017fb9.png' },
                  { name: 'Андрей Клементьев', role: 'Министр цифрового развития и связи Приморского края', photo: 'https://cdn.poehali.dev/files/76867e86-de6e-411a-b6b2-4c7a6686b49a.png' },
                ]
              },
              {
                time: '12:45–13:30',
                icon: 'TrendingUp',
                title: 'ИИ В БИЗНЕС-ПРОЦЕССАХ',
                desc: 'Умные помощники для сотрудников на базе GigaChat.',
                highlight: true,
                people: [
                  { name: 'Иван Трошин', role: 'Директор управления по цифровому развитию клиентов Дальневосточного Сбербанка', photo: 'https://cdn.poehali.dev/files/d4cd930d-8e30-4cea-baec-79298a385011.png' },
                ]
              },
              {
                time: '13:30–14:00',
                icon: 'BarChart',
                title: 'ИИ ПЛАТФОРМА ДЛЯ НАЙМА',
                desc: 'Как ускорить рекрутинг в семь раз и сделать его в три раза дешевле.',
                highlight: true,
                people: [
                  { name: 'Денис Балюра', role: 'Основатель Tomoru.ru', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/59d7440a-9175-40cf-b022-436eed5f9865.png' },
                ]
              },
              {
                time: '14:00–15:00',
                icon: 'Utensils',
                title: 'ОБЕД + НЕТВОРКИНГ',
                desc: 'Обеденный перерыв (60 мин). нетворкинг, обмен контактами.',
                highlight: false
              },
              {
                time: '15:00–15:30',
                icon: 'FileText',
                title: 'КЛИЕНТЫ ИЗ GEO',
                desc: 'Как компании получать лиды из нейросетей? GEO – новый канал маркетинга.',
                highlight: true,
                people: [
                  { name: 'Иван Линдберг', role: 'Наставник, трекер Сколково', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/7a227fd7-6fdc-4719-9631-88d42e111de1.jpg' },
                ]
              },
              {
                time: '15:40–16:15',
                icon: 'Brain',
                title: 'ИИ РЕШЕНИЯ ДЛЯ БИЗНЕСА',
                desc: 'Внедрение ИИ решений в предпринимательстве и социальной сфере. (кейсы большого бизнеса)',
                highlight: true,
                people: [
                  { name: 'Роман Дремлюга', role: 'Руководитель Дальневосточного центра ИИ (ДВФУ и Сбер), профессор', photo: 'https://cdn.poehali.dev/files/28758759-9018-44d1-a6a5-0447be564d9c.png' },
                ]
              },
              {
                time: '16:20–17:00',
                icon: 'Bot',
                title: 'ИИ-АГЕНТЫ',
                desc: 'Как создать отдел продаж, который работает вместо тебя 24/7.',
                highlight: true,
                people: [
                  { name: 'Сергей Черников', role: 'Основатель школы ИИ, CEO IT компании Super-SMM', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/f5bba851-01ee-4117-aa70-aa74ccb2b6a1.png' },
                ]
              },
              {
                time: '17:05–17:30',
                icon: 'GraduationCap',
                title: 'ПИТЧ ШКОЛЫ',
                desc: 'Путь от новичка к специалисту в ИИ. Выступления выпускников школы',
                highlight: true
              },
              {
                time: '17:30–18:00',
                icon: 'Gift',
                title: 'ЗАКРЫТИЕ, ПРИЗЫ, БЛАГОТВОРИТЕЛЬНОСТЬ',
                desc: 'Объявление призов, совместное фото.',
                highlight: true
              }
            ].map((block, idx) => (
              <Card 
                key={idx} 
                className={`${block.highlight ? 'bg-synergy-beige text-synergy-dark border-l-4 border-l-synergy-red' : 'bg-synergy-dark/50 text-synergy-beige'} animate-on-scroll`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-center gap-3">
                      <Badge className={`${block.highlight ? 'bg-synergy-red text-synergy-beige' : 'bg-synergy-beige/20 text-synergy-beige'} px-2 sm:px-3 py-1 font-mono text-xs sm:text-sm font-bold whitespace-nowrap`}>
                        {block.time}
                      </Badge>
                      {block.icon && (
                        <Icon 
                          name={block.icon as string} 
                          size={24} 
                          className={`sm:w-7 sm:h-7 ${block.highlight ? 'text-synergy-red' : 'text-synergy-beige'} icon-glow flex-shrink-0`} 
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-heading text-sm sm:text-base md:text-lg lg:text-xl font-black mb-2 ${block.highlight ? 'text-synergy-dark' : 'text-synergy-beige'}`}>
                        {block.title}
                      </h3>
                      <p className={`${block.highlight ? 'text-synergy-dark/80' : 'text-synergy-beige/80'} text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line`}>
                        {block.desc}
                      </p>
                      {'people' in block && block.people && (
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
                          {(block.people as {name: string; role: string; photo: string | null; emoji?: boolean}[]).map((person) => (
                            <div key={person.name} className="flex items-center gap-2 min-w-0 max-w-full sm:max-w-[48%]">
                              {person.emoji ? (
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-synergy-red flex-shrink-0 flex items-center justify-center bg-synergy-red/10 text-lg">
                                  🔥
                                </div>
                              ) : (
                                <img
                                  src={person.photo!}
                                  alt={person.name}
                                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover object-top border-2 border-synergy-red flex-shrink-0"
                                />
                              )}
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-synergy-dark leading-tight truncate">{person.name}</p>
                                <p className="text-xs text-synergy-dark/60 leading-tight line-clamp-2">{person.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-synergy-red text-synergy-beige border-l-4 border-l-synergy-beige animate-on-scroll">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-center gap-3">
                  <Icon 
                    name="RefreshCw" 
                    size={24} 
                    className="sm:w-7 sm:h-7 text-synergy-beige icon-rotate-hover flex-shrink-0" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-black mb-2 text-synergy-beige">
                    ПРОГРАММА МЕРОПРИЯТИЯ В ПРОЦЕССЕ ДОРАБОТКИ
                  </h3>
                  <p className="text-synergy-beige/80 text-xs sm:text-sm md:text-base leading-relaxed">
                    Следите за обновлениями — сейчас подтверждаются новые спикеры и темы их выступлений.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProgramSection;