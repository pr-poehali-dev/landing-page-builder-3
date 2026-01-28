import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AiIcon from '@/components/AiIcon';

const ProgramSection = () => {
  return (
    <>
      <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-12 text-synergy-beige">
            ПРОГРАММА МЕРОПРИЯТИЯ
          </h2>
          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4 text-synergy-beige/90 text-sm sm:text-base px-4">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="icon-rotate-hover" />
              <span className="font-semibold">Сбор гостей: 09:30</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="PlayCircle" size={20} className="icon-rotate-hover" />
              <span className="font-semibold">Начало: 10:00</span>
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
                time: '09:30–10:00',
                icon: 'Users',
                title: 'РЕГИСТРАЦИЯ',
                desc: 'Приход гостей, регистрация, кофе-брейк, нейро-фотосессия',
                highlight: false
              },
              {
                time: '10:00–10:10',
                icon: 'Play',
                title: 'ОТКРЫТИЕ',
                desc: 'Приветствие организаторов + правила мероприятия',
                highlight: false
              },
              {
                time: '10:15–11:00',
                icon: 'TrendingUp',
                title: 'БЛОК 1: КЛИЕНТЫ НА АВТОМАТЕ',
                desc: 'Спикер: [ИМЯ]. Как получать трафик с помощью ИИ, конкретные инструменты и схемы внедрения.',
                highlight: true
              },
              {
                time: '11:15–12:00',
                icon: 'FileText',
                title: 'БЛОК 2: КОНТЕНТ ЗАВОД',
                desc: 'Спикер: [ИМЯ]. Live-демонстрация создания 3 типов контента за минимум времени.',
                highlight: true
              },
              {
                time: '12:15–13:00',
                icon: 'PenTool',
                title: 'БЛОК 3: ДИЗАЙН ЗА ЧАСЫ',
                desc: 'Спикер: [ИМЯ]. Макеты, логотипы, баннеры, фотосессии — показ live работы с ИИ-инструментами.',
                highlight: true
              },
              {
                time: '13:15–14:00',
                icon: 'BarChart',
                title: 'БЛОК 4: МАРКЕТИНГ И ПРОДАЖИ',
                desc: 'Спикер: [ИМЯ]. Как ИИ создаёт стратегии и оптимизирует рекламные кампании.',
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
                time: '15:15–16:00',
                icon: 'Code',
                title: 'БЛОК 5: САЙТЫ ЧЕРЕЗ ИИ',
                desc: 'Спикер: [ИМЯ]. Создание рабочего сайта за 30 минут live на глазах аудитории.',
                highlight: true
              },
              {
                time: '16:15–17:00',
                icon: 'Bot',
                title: 'БЛОК 6: ИИ-АГЕНТЫ',
                desc: 'Спикер: [ИМЯ]. Как создать отдел продаж, который работает вместо тебя 24/7.',
                highlight: true
              },
              {
                time: '17:10–17:45',
                icon: 'GraduationCap',
                title: 'БЛОК 7: ПИТЧ ШКОЛЫ',
                desc: 'Сергей Черников / ведущий организатор. Путь от новичка к специалисту в ИИ. Спецпредложение для участников.',
                highlight: true
              },
              {
                time: '17:50–18:00',
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
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <Badge className={`${block.highlight ? 'bg-synergy-red text-synergy-beige' : 'bg-synergy-beige/20 text-synergy-beige'} px-2 sm:px-3 py-1 font-mono text-xs sm:text-sm font-bold`}>
                        {block.time}
                      </Badge>
                      {block.icon && (
                        <Icon 
                          name={block.icon as any} 
                          size={28} 
                          className={`${block.highlight ? 'text-synergy-red' : 'text-synergy-beige'} icon-glow`} 
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-heading text-base sm:text-lg md:text-xl font-black mb-2 ${block.highlight ? 'text-synergy-dark' : 'text-synergy-beige'}`}>
                        {block.title}
                      </h3>
                      <p className={`${block.highlight ? 'text-synergy-dark/80' : 'text-synergy-beige/80'} text-sm sm:text-base leading-relaxed`}>
                        {block.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramSection;