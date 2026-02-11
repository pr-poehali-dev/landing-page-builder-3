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
      title: '6. МАМА, КОТОРАЯ ХОЧЕТ ВЕРНУТЬСЯ К РАБОТЕ ПОСЛЕ ДЕКРЕТА',
      icon: 'Home',
      who: 'Работа из дома, гибкий график, высокий доход — это реально.',
      why: 'ИИ помогает работать качественно, но быстро.'
    }
  ];

  return (
    <section id={id} className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-dark relative z-10 animate-on-scroll">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-synergy-beige px-2">
          ДЛЯ КОГО ЭТО МЕРОПРИЯТИЕ?
        </h2>
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 md:mb-16">
          {audienceData.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="border-synergy-beige/20 bg-synergy-dark/50 rounded-lg px-3 sm:px-4 md:px-6 animate-on-scroll group"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <AccordionTrigger className="text-synergy-beige hover:text-synergy-red font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold hover:no-underline py-3 sm:py-4 text-left">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-synergy-red/20 border-2 border-synergy-red group-hover:bg-synergy-red group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon} size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-synergy-red group-hover:text-synergy-beige icon-float transition-colors duration-300" />
                  </div>
                  <span className="flex-1">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-synergy-beige/90 space-y-3 sm:space-y-4 pl-10 sm:pl-13 md:pl-16 text-sm sm:text-base">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="User" size={14} className="sm:w-4 sm:h-4 text-synergy-red mt-1 flex-shrink-0 icon-glow" />
                  <div>
                    <p className="font-bold text-synergy-red mb-1 sm:mb-2 text-sm sm:text-base">Кто это?</p>
                    <p className="leading-relaxed text-xs sm:text-sm md:text-base">{item.who}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Icon name="Target" size={14} className="sm:w-4 sm:h-4 text-synergy-red mt-1 flex-shrink-0 icon-glow" />
                  <div>
                    <p className="font-bold text-synergy-red mb-1 sm:mb-2 text-sm sm:text-base">Зачем идти:</p>
                    <p className="leading-relaxed text-xs sm:text-sm md:text-base">{item.why}</p>
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