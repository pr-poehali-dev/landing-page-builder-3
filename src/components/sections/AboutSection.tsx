import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  id?: string;
  scrollToForm?: () => void;
}

const AboutSection = ({ id, scrollToForm }: AboutSectionProps) => {
  return (
    <>
      <section id={id} className="py-8 sm:py-12 md:py-16 bg-synergy-red relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Icon name="Heart" size={28} className="sm:w-9 sm:h-9 md:w-12 md:h-12 mx-auto mb-4 sm:mb-6 text-synergy-beige icon-pulse" />
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 text-synergy-beige leading-tight px-2">
            ЭТО БЛАГОТВОРИТЕЛЬНОЕ МЕРОПРИЯТИЕ
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-synergy-beige/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Все собранные средства полностью передаются в <a href="https://ddvl4.ru" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-synergy-beige">КГКУ «Маяк»</a> — комплексный центр помощи семье и детям.
          </p>
          <div className="flex justify-center px-2">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-synergy-beige text-synergy-dark hover:bg-synergy-beige/90 font-bold uppercase px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <Icon name="Ticket" size={20} className="mr-2" />
              <span className="leading-tight">Купить билет<br />и изменить жизнь</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-beige relative z-10 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-center mb-6 sm:mb-8 text-synergy-dark px-2">
            ЧТО ПРОИЗОЙДЁТ НА МЕРОПРИЯТИИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: 'Eye', title: 'Ты увидишь живые примеры', text: 'Не слайды из презентаций. Реальные кейсы от предпринимателей, копирайтеров, дизайнеров и маркетологов, которые уже зарабатывают на ИИ' },
              { icon: 'HandMetal', title: 'Ты сам попробуешь инструменты', text: 'Каждый блок — это не лекция, а практический воркшоп. Ты будешь делать, а не слушать' },
              { icon: 'Wrench', title: 'Ты получишь инструменты к использованию', text: 'Не теоретические знания. Конкретные сервисы, промты, стратегии, которые ты сможешь применить в день, когда вернёшься домой' },
              { icon: 'Users', title: 'Ты встретишь единомышленников', text: 'Обед, перерывы, нетворкинг — всё организовано так, чтобы ты познакомился с предпринимателями и экспертами из Владивостока' },
              { icon: 'Heart', title: 'Ты поддержишь людей', text: '100% средств от продажи билета идут в КГКУ «Маяк» — комплексный центр помощи семье и детям' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-synergy-dark text-synergy-beige" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <Icon name={item.icon} size={36} className="sm:w-12 sm:h-12 mb-4 text-synergy-red icon-glow" />
                  <h3 className="font-heading text-lg sm:text-xl font-black mb-3 text-synergy-beige">{item.title}</h3>
                  <p className="text-sm sm:text-base text-synergy-beige/80 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black text-center mb-8 sm:mb-12 text-synergy-dark px-4">
            ЧТО ПОЛУЧИШЬ НА МЕРОПРИЯТИИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: 'Wrench', 
                title: 'Практические инструменты ИИ', 
                desc: 'Сервисы, которые используют топовые бизнесмены прямо сейчас' 
              },
              { 
                icon: 'BarChart3', 
                title: 'Живые кейсы и цифры', 
                desc: 'Не историями, а конкретными числами (заработки, экономия времени, прирост клиентов)' 
              },
              { 
                icon: 'Target', 
                title: 'Стратегии для разных ниш', 
                desc: 'От продаж до контента, от дизайна до видеопроизводства' 
              },
              { 
                icon: 'Users', 
                title: 'Сообщество экспертов', 
                desc: 'Контакты людей, которые могут стать партнёрами или коллегами' 
              },
              { 
                icon: 'MessageCircle', 
                title: 'Доступ в закрытый чат', 
                desc: 'Общение с участниками после мероприятия, обмен опытом' 
              }
            ].map((reason, idx) => (
              <Card 
                key={idx} 
                className="bg-synergy-dark text-synergy-beige animate-on-scroll" 
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <Icon name={reason.icon} size={32} className="sm:w-9 sm:h-9 mb-4 text-synergy-red icon-float" />
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-black mb-2 text-synergy-beige">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-synergy-beige/80 leading-relaxed">{reason.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-synergy-beige border-none">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black mb-4 text-synergy-dark">
                Организатор события — Школа «Хакни нейросети»
              </h3>
              <p className="text-base sm:text-lg text-synergy-dark/80 leading-relaxed mb-6">
                Единственная офлайн-школа в городе Владивостоке, где преподаватель и студенты создают это событие. 
              </p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-synergy-red mb-6">
                Это не теория — это практика от тех, кто уже зарабатывает на ИИ.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={() => window.open('https://chernikovgpt.ru', '_blank')}
                  className="w-full sm:w-auto bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase px-6 py-4 text-sm sm:text-base"
                >
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Узнать больше о школе
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default AboutSection;