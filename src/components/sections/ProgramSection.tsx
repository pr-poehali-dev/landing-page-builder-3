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
                time: '09:50',
                icon: 'Users',
                title: 'Блок 0: Открытие и знакомство',
                desc: 'Приветствие организаторов | Слово от Центра «Живая Надежда» | Правила мероприятия и программа дня',
                highlight: false
              },
              {
                time: '10:00–10:30',
                icon: 'Briefcase',
                title: 'Блок 1: ИИ в бизнесе — как автоматизировать продажи',
                desc: 'Предприниматель покажет, как он удвоил прибыль за 4 месяца, автоматизировав работу с клиентами через ИИ. Разбор реальных инструментов и сценариев.',
                highlight: true
              },
              {
                time: '10:30–11:00',
                icon: 'FileText',
                title: 'Блок 2: ИИ в создании контента — от идеи до публикации',
                desc: 'Копирайтер, который вырос с 30К до 150К в месяц, расскажет, как ИИ стал его вторым мозгом. Покажет, как создавать посты, статьи, сценарии за 10 минут.',
                highlight: true
              },
              {
                time: '11:00–11:30',
                icon: 'PenTool',
                title: 'Блок 3: ИИ в дизайне — от идеи до готовых макетов',
                desc: 'Дизайнер, который теперь делает в 3 раза больше заказов, покажет, как создавать макеты, логотипы и баннеры, не тратя часы на скетчи.',
                highlight: true
              },
              {
                time: '11:30–12:00',
                icon: 'Coffee',
                title: 'Перерыв',
                desc: 'Кофе-брейк и нетворкинг | 🎯 Нейро-фотосессия | Знакомство с участниками',
                highlight: false
              },
              {
                time: '12:00–12:30',
                icon: 'BarChart',
                title: 'Блок 4: ИИ в маркетинге — таргет, рекламные кампании',
                desc: 'Таргетолог, который увеличил ROI на 40%, расскажет, как ИИ помогает создавать рекламные кампании, анализировать аудиторию и писать креативы.',
                highlight: true
              },
              {
                time: '12:30–13:00',
                icon: 'Video',
                title: 'Блок 5: ИИ в видеопроизводстве — монтаж, озвучка, субтитры',
                desc: 'Видеопродюсер покажет, как ИИ помогает монтировать ролики, озвучивать видео и создавать субтитры автоматически. Разбор инструментов.',
                highlight: true
              },
              {
                time: '13:00–14:00',
                icon: 'MessageSquare',
                title: 'Блок 6: ИИ-аватары — как создать цифровую копию себя',
                desc: 'Как создать ИИ-аватар, который отвечает на вопросы клиентов вместо тебя? Разбор сервисов и примеров из реальной практики.',
                highlight: true
              },
              {
                time: '14:00–15:00',
                icon: 'Utensils',
                title: 'Обед',
                desc: 'Обед и нетворкинг | 🎯 Нейро-фотосессия | Общение с экспертами и участниками',
                highlight: false
              },
              {
                time: '15:00–15:30',
                icon: 'Sparkles',
                title: 'Блок 7: ИИ-аватары Джулии — прямое включение из США',
                desc: 'Мировая звезда технологий показывает будущее. Как создавать персонажей и аватары, которые работают вместо тебя?',
                highlight: true
              },
              {
                time: '15:30–16:00',
                icon: 'Code',
                title: 'Блок 8: vibe-coding — Создание сайтов через ИИ',
                desc: 'Не нужно учиться кодировать 6 месяцев. Покажем, как создавать рабочие сайты с помощью нейросетей за часы вместо недель.',
                highlight: true
              },
              {
                time: '16:00–17:00',
                icon: 'Zap',
                title: 'Блок 9: Практический воркшоп',
                desc: 'Все участники делятся на команды и пробуют инструменты в деле. Задача: создать мини-проект с использованием ИИ за 1 час.',
                highlight: true
              },
              {
                time: '17:00–17:30',
                icon: 'Gift',
                title: 'Финальный блок: Итоги, призы, благотворительность',
                desc: '🎁 Розыгрыши призов от спонсоров | 💚 Благотворительный перевод | 📸 Совместное фото',
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