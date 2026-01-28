import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AboutSectionProps {
  id?: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  return (
    <>
      <section id={id} className="py-16 bg-synergy-red relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Icon name="Heart" size={36} className="sm:w-12 sm:h-12 mx-auto mb-6 text-synergy-beige icon-pulse" />
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-synergy-beige leading-tight">
            ЭТО БЛАГОТВОРИТЕЛЬНОЕ МЕРОПРИЯТИЕ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-synergy-beige/90 mb-8 leading-relaxed">
            Все собранные средства полностью передаются в <span className="font-bold">Центр «Живая Надежда»</span> — организацию, которая помогает одиноким матерям в Приморье.
          </p>
          <div className="bg-synergy-dark p-4 sm:p-6 md:p-8 text-synergy-beige mb-6 rounded-lg">
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-black mb-4 text-synergy-beige">О центре «Живая Надежда»</h3>
            <p className="text-sm sm:text-base text-synergy-beige/90 leading-relaxed mb-4">
              Центр работает с одинокими матерями в Приморье, предоставляя психологическую поддержку, обучение, помощь в трудоустройстве и создании семейного благополучия.
            </p>
            <p className="text-sm sm:text-base text-synergy-beige font-semibold leading-relaxed">
              Для девушек, оставшихся без поддержки близких, это часто единственная возможность остаться мамой для своего ребенка и обеспечить ему достойное будущее.
            </p>
          </div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('https://living-hope.ru', '_blank')}
              className="w-full sm:w-auto bg-synergy-beige text-synergy-dark hover:bg-synergy-beige/90 font-bold uppercase px-6 py-4 text-sm sm:text-base"
            >
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Узнать больше о центре
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-synergy-beige text-lg sm:text-xl md:text-2xl font-black mb-4">✅ 100% средств от продажи билетов идут в Центр</p>
            <p className="text-synergy-beige/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Твой билет — это прямая помощь конкретным людям, которые нуждаются в этом прямо сейчас.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 text-synergy-dark px-4">
            ЧТО ПРОИЗОЙДЁТ НА МЕРОПРИЯТИИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'Eye', title: 'Ты увидишь живые примеры', text: 'Не слайды из презентаций. Реальные кейсы от предпринимателей, копирайтеров, дизайнеров и маркетологов, которые уже зарабатывают на ИИ' },
              { icon: 'HandMetal', title: 'Ты сам попробуешь инструменты', text: 'Каждый блок — это не лекция, а практический воркшоп. Ты будешь делать, а не слушать' },
              { icon: 'Wrench', title: 'Ты получишь инструменты к использованию', text: 'Не теоретические знания. Конкретные сервисы, промты, стратегии, которые ты сможешь применить в день, когда вернёшься домой' },
              { icon: 'Users', title: 'Ты встретишь единомышленников', text: 'Обед, перерывы, нетворкинг — всё организовано так, чтобы ты познакомился с предпринимателями и экспертами из Владивостока' },
              { icon: 'Heart', title: 'Ты поддержишь людей', text: '100% средств от продажи билета идут в Центр «Живая Надежда» — организацию, которая помогает одиноким матерям в Приморье' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-synergy-dark text-synergy-beige" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <Icon name={item.icon as any} size={36} className="sm:w-12 sm:h-12 mb-4 text-synergy-red icon-glow" />
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
                  <Icon name={reason.icon as any} size={32} className="sm:w-9 sm:h-9 mb-4 text-synergy-red icon-float" />
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
                Школа «Хакни нейросети»
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