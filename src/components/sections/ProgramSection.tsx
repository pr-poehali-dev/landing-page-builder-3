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
                desc: 'Сергей Черников. О мероприятии, целях и возможностях ИИ для бизнеса.',
                highlight: true
              },
              {
                time: '11:40–12:40',
                icon: 'MessageSquare',
                title: 'ПЛЕНАРНОЕ ЗАСЕДАНИЕ',
                desc: 'Открытый диалог с представителями власти об ИИ в экономике Приморья.',
                highlight: true,
                people: [
                  { name: 'Николай Стецко', role: 'Зампред правительства Приморья', photo: 'https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/87cd7c50-fec9-49d9-a207-bf48d7377b27.png' },
                  { name: 'Иван Машунин', role: 'Генеральный директор АНО "Центр поддержки предпринимательства Приморского края"', photo: 'https://cdn.poehali.dev/files/a83f2d46-1619-4e64-8d4d-aee6e7bdcc1b.png' },
                  { name: 'Андрей Клементьев', role: 'Министр цифрового развития и связи Приморского края', photo: 'https://cdn.poehali.dev/files/76867e86-de6e-411a-b6b2-4c7a6686b49a.png' },
                ]
              },
              {
                time: '12:45–13:30',
                icon: 'TrendingUp',
                title: 'КЛИЕНТЫ НА АВТОМАТЕ',
                desc: 'Как получать трафик с помощью ИИ, конкретные инструменты и схемы внедрения.',
                highlight: true
              },
              {
                time: '13:30–14:00',
                icon: 'FileText',
                title: 'КОНТЕНТ ЗАВОД',
                desc: 'Live-демонстрация создания 3 типов контента за минимум времени.',
                highlight: true
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
                icon: 'BarChart',
                title: 'МАРКЕТИНГ И ПРОДАЖИ',
                desc: 'Как ИИ создаёт стратегии и оптимизирует рекламные кампании.',
                highlight: true
              },
              {
                time: '15:40–16:15',
                icon: 'Code',
                title: 'САЙТЫ ЧЕРЕЗ ИИ',
                desc: 'Создание рабочего сайта за 30 минут live на глазах аудитории.',
                highlight: true
              },
              {
                time: '16:20–17:00',
                icon: 'Bot',
                title: 'ИИ-АГЕНТЫ',
                desc: 'Как создать отдел продаж, который работает вместо тебя 24/7.',
                highlight: true
              },
              {
                time: '17:05–17:30',
                icon: 'GraduationCap',
                title: 'ПИТЧ ШКОЛЫ',
                desc: 'Сергей Черников. Путь от новичка к специалисту в ИИ. Спецпредложение для участников.',
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
                        <div className="mt-4 flex flex-wrap gap-3">
                          {(block.people as {name: string; role: string; photo: string}[]).map((person) => (
                            <div key={person.name} className="flex items-center gap-2">
                              <img
                                src={person.photo}
                                alt={person.name}
                                className="w-10 h-10 rounded-full object-cover object-top border-2 border-synergy-red flex-shrink-0"
                              />
                              <div>
                                <p className="text-xs font-bold text-synergy-dark leading-tight">{person.name}</p>
                                <p className="text-xs text-synergy-dark/60 leading-tight max-w-[160px]">{person.role}</p>
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