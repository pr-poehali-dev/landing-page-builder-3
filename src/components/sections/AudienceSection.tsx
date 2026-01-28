import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface AudienceSectionProps {
  id?: string;
}

const AudienceSection = ({ id }: AudienceSectionProps) => {
  const audienceData = [
    {
      title: '1. ПРЕДПРИНИМАТЕЛЬ, КОТОРЫЙ ОТСТАЁТ ОТ КОНКУРЕНТОВ',
      icon: 'Briefcase',
      who: 'Конкуренты уже используют ИИ. Ты видишь результаты в их числах и качестве работы.',
      why: 'На мероприятии узнаешь, какие инструменты они используют, и сразу начнёшь их применять.'
    },
    {
      title: '2. ФРИЛАНСЕР, КОТОРЫЙ ХОЧЕТ ЗАРАБАТЫВАТЬ В 2 РАЗА БОЛЬШЕ',
      icon: 'Laptop',
      who: 'Увеличить количество заказов можно не за счёт времени (его всё равно 24 часа), а за счёт качества и скорости.',
      why: 'ИИ делает именно это.'
    },
    {
      title: '3. МАРКЕТОЛОГ ИЛИ СММЩИК, КОТОРЫЙ СОЗДАЁТ КОНТЕНТ ЧАСАМИ',
      icon: 'Megaphone',
      who: 'Посты, сценарии, баннеры, видео — всё можно создавать в 5–10 раз быстрее с правильными инструментами.',
      why: 'Покажем как.'
    },
    {
      title: '4. МЕНЕДЖЕР ИЛИ РУКОВОДИТЕЛЬ, КОТОРЫЙ ХОЧЕТ АВТОМАТИЗИРОВАТЬ ПРОЦЕССЫ',
      icon: 'Settings',
      who: 'Продажи на автопилоте, рассылки, аналитика, клиентский сервис — всё это может работать через ИИ.',
      why: 'Команда сконцентрируется на главном.'
    },
    {
      title: '5. МОЛОДОЙ СПЕЦИАЛИСТ, КОТОРЫЙ ХОЧЕТ НАЧАТЬ ЗАРАБАТЫВАТЬ',
      icon: 'GraduationCap',
      who: 'Возраст не помеха. Навык работы с ИИ — сейчас это одно из самых ценных умений.',
      why: 'За день ты выучишь то, что другие учат полгода.'
    },
    {
      title: '6. МАМА, КОТОРАЯ ХОЧЕТ ВЕРНУТЬСЯ К РАБОТЕ БЕЗ ПОТЕРИ ДОХОДА',
      icon: 'Home',
      who: 'Работа из дома, гибкий график, высокий доход — это реально.',
      why: 'ИИ помогает работать качественно, но быстро.'
    }
  ];

  return (
    <section id={id} className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black text-center mb-8 sm:mb-12 text-synergy-beige px-4">
          ДЛЯ КОГО ЭТО МЕРОПРИЯТИЕ?
        </h2>
        <Accordion type="single" collapsible className="space-y-4 mb-16">
          {audienceData.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="border-synergy-beige/20 bg-synergy-dark/50 rounded-lg px-4 sm:px-6 animate-on-scroll group"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <AccordionTrigger className="text-synergy-beige hover:text-synergy-red font-heading text-base sm:text-lg md:text-xl font-bold hover:no-underline py-4 text-left">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-synergy-red/20 border-2 border-synergy-red group-hover:bg-synergy-red group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon} size={24} className="text-synergy-red group-hover:text-synergy-beige icon-float transition-colors duration-300" />
                  </div>
                  <span className="flex-1">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-synergy-beige/90 space-y-4 pl-16">
                <div className="flex items-start gap-3">
                  <Icon name="User" size={16} className="text-synergy-red mt-1 flex-shrink-0 icon-glow" />
                  <div>
                    <p className="font-bold text-synergy-red mb-2">Кто это?</p>
                    <p className="leading-relaxed">{item.who}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Target" size={16} className="text-synergy-red mt-1 flex-shrink-0 icon-glow" />
                  <div>
                    <p className="font-bold text-synergy-red mb-2">Зачем идти:</p>
                    <p className="leading-relaxed">{item.why}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AudienceSection;