import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <>
      <section className="py-16 bg-synergy-red relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Icon name="Heart" size={48} className="mx-auto mb-6 text-synergy-beige icon-pulse" />
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 text-synergy-beige">
            ЭТО БЛАГОТВОРИТЕЛЬНОЕ МЕРОПРИЯТИЕ
          </h2>
          <p className="text-lg md:text-xl text-synergy-beige/90 mb-8 leading-relaxed">
            Все собранные средства полностью передаются в <span className="font-bold">Центр «Живая Надежда»</span> — организацию, которая помогает одиноким матерям в Приморье.
          </p>
          <div className="bg-synergy-dark p-8 text-synergy-beige mb-6">
            <h3 className="font-heading text-2xl font-black mb-4 text-synergy-beige">О центре «Живая Надежда»</h3>
            <p className="text-synergy-beige/90 leading-relaxed mb-4">
              Центр работает с одинокими матерями в Приморье, предоставляя психологическую поддержку, обучение, помощь в трудоустройстве и создании семейного благополучия.
            </p>
            <p className="text-synergy-beige font-semibold">
              Для девушек, оставшихся без поддержки близких, это часто единственная возможность остаться мамой для своего ребенка и обеспечить ему достойное будущее.
            </p>
          </div>
          <Button 
            size="lg" 
            onClick={() => window.open('https://living-hope.ru', '_blank')}
            className="bg-synergy-beige text-synergy-dark hover:bg-synergy-beige/90 font-bold uppercase"
          >
            <Icon name="ExternalLink" size={20} className="mr-2" />
            Узнать больше о центре
          </Button>
          <p className="mt-8 text-synergy-beige text-lg font-bold">
            Ты не просто посещаешь мероприятие — ты помогаешь конкретным людям, которые в этом нуждаются прямо сейчас.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-6 text-synergy-dark">
            ИИ БЕЗ ШИРМЫ
          </h2>
          <p className="text-center text-xl text-synergy-dark/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Мы не скрываем, как работают нейросети. Мы показываем технологию в действии, разбираем конкретные кейсы и даём тебе инструменты, которые работают прямо сейчас.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'Lightbulb', title: 'Практика', text: 'Не теория, а живые примеры и реальные кейсы' },
              { icon: 'TrendingUp', title: 'Результаты', text: 'От людей, которые зарабатывают на ИИ сейчас' },
              { icon: 'Users', title: 'Сообщество', text: 'Нетворкинг с предпринимателями и экспертами' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-synergy-dark text-synergy-beige text-center" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8">
                  <Icon name={item.icon as any} size={48} className="mx-auto mb-4 text-synergy-red icon-glow" />
                  <h3 className="font-heading text-xl font-black mb-3 text-synergy-beige">{item.title}</h3>
                  <p className="text-synergy-beige/80">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-12 text-synergy-dark">
            ЗАЧЕМ ИДТИ НА ЭТО МЕРОПРИЯТИЕ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: 'Zap', 
                title: 'Практика, а не теория', 
                desc: 'Все блоки с живыми примерами и инструментами, которые можно использовать сразу' 
              },
              { 
                icon: 'TrendingUp', 
                title: 'От людей, которые зарабатывают', 
                desc: 'Кейсы успеха, которые работают сейчас, а не истории из учебников' 
              },
              { 
                icon: 'Heart', 
                title: 'Помощь реальным людям', 
                desc: 'Твой билет помогает матерям в Приморье через Центр «Живая Надежда»' 
              },
              { 
                icon: 'Users', 
                title: 'Сетевое взаимодействие', 
                desc: 'Встреча с предпринимателями, студентами и экспертами из твоего города' 
              },
              { 
                icon: 'Rocket', 
                title: 'Уникальные инструменты', 
                desc: 'Узнаешь про сервисы, которые увеличивают доход в 2 раза' 
              },
              { 
                icon: 'Target', 
                title: 'Реальные результаты', 
                desc: 'Конкретные цифры, конкретные стратегии, конкретные инструменты' 
              }
            ].map((reason, idx) => (
              <Card 
                key={idx} 
                className="bg-synergy-dark text-synergy-beige animate-on-scroll" 
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <Icon name={reason.icon as any} size={36} className="mb-4 text-synergy-red icon-float" />
                  <h3 className="font-heading text-xl font-black mb-2 text-synergy-beige">{reason.title}</h3>
                  <p className="text-synergy-beige/80">{reason.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-synergy-beige border-none">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl md:text-3xl font-black mb-4 text-synergy-dark">
                Школа «Хакни нейросети»
              </h3>
              <p className="text-lg text-synergy-dark/80 leading-relaxed mb-6">
                Единственная офлайн-школа в городе Владивостоке, где преподаватель и студенты создают это событие. 
              </p>
              <p className="text-xl font-bold text-synergy-red mb-6">
                Это не теория — это практика от тех, кто уже зарабатывает на ИИ.
              </p>
              <Button 
                size="lg" 
                onClick={() => window.open('https://chernikovgpt.ru', '_blank')}
                className="bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase"
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Узнать больше о школе
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
