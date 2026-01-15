import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AiIcon from '@/components/AiIcon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const [seatsLeft, setSeatsLeft] = useState(257);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agree: false });

  useScrollAnimation();

  useEffect(() => {
    document.title = 'ИИ ШОУ БЕЗ ШИРМЫ | Владивосток';
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-synergy-beige relative">
      <section className="relative bg-synergy-dark text-synergy-beige py-20 px-6 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-synergy-red text-synergy-beige font-bold text-sm uppercase">
              Благотворительное мероприятие
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 leading-tight text-synergy-beige">
              ИИ ШОУ БЕЗ ШИРМЫ
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-synergy-beige/90 max-w-3xl mx-auto">
              Не красивые истории, а реальные результаты. Увидишь, как ИИ работает в реальности, и сам попробуешь инструменты, которые твои конкуренты уже используют
            </p>
            <div className="mb-8 space-y-2 text-synergy-beige/80">
              <div className="flex items-center justify-center gap-2 text-lg">
                <Icon name="Calendar" size={20} className="icon-float" />
                <span className="font-semibold">18 апреля 2026, 10:00–18:00</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Icon name="MapPin" size={20} className="icon-float" />
                <span className="font-semibold">Владивосток</span>
              </div>
            </div>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              variant="outline"
              className="text-lg px-8 py-6 h-auto font-bold mb-4"
            >
              <span className="font-black uppercase">Купить билет</span>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Badge className="text-base px-4 py-2 bg-synergy-dark border-2 border-synergy-beige text-synergy-beige">
                Осталось {seatsLeft} мест из 300
              </Badge>
              <Badge className="text-base px-4 py-2 bg-synergy-red text-synergy-beige">
                Цена: от 1,000 ₽
              </Badge>
            </div>
            <p className="mt-6 text-synergy-beige/70 text-sm max-w-2xl mx-auto">
              100% средств передаются в Центр «Живая Надежда» — помощь одиноким матерям в Приморье
            </p>
          </div>
        </div>
      </section>

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

      <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-12 text-synergy-beige">
            ПРОГРАММА МЕРОПРИЯТИЯ
          </h2>
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-synergy-beige/90">
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
                icon: 'Mic',
                title: 'Вступление ведущего',
                desc: 'Приветствие и начало события'
              },
              {
                time: '10:00–10:30',
                icon: 'Brain',
                title: 'Блок 1: Почему ИИ важен для современного человека и бизнеса',
                desc: 'Почему ИИ — это не будущее, а настоящее? Как он меняет экономику, профессии и возможности заработка? За 30 минут ты поймёшь, почему твой конкурент уже зарабатывает больше.',
                highlight: true
              },
              {
                time: '10:30–11:00',
                icon: 'Search',
                title: 'Блок 2: Perplexity — Сбор и анализ данных',
                desc: 'Практический разбор инструмента, который экономит часы на исследованиях. Мы покажем, как собирать, анализировать и структурировать данные для бизнеса, маркетинга и продаж.',
                highlight: true
              },
              {
                time: '11:00–11:30',
                icon: 'Presentation',
                title: 'Блок 3: Презентации через KIMI',
                desc: 'Как создавать охуительные слайды. Забудь о скучных презентациях — нейросеть помогает создавать визуально красивые, убедительные и продающие презентации за минуты.',
                highlight: true
              },
              {
                time: '11:30–13:00',
                icon: 'Camera',
                title: 'Блок 4: Нейро-фотосессия + видео',
                desc: 'Помни себя не таким, как ты есть. Помни себя таким, каким тебя видит ИИ. Интерактивный блок, где каждый может пройти нейро-фотосессию и снять видео с помощью искусственного интеллекта.',
                highlight: true
              },
              {
                time: '13:00–14:00',
                icon: 'Coffee',
                title: 'Обед',
                desc: 'Перерыв, нетворкинг, общение'
              },
              {
                time: '14:00–15:00',
                icon: 'TrendingUp',
                title: 'Блок 5: Разбор бизнеса — 3 ниши, 3 истории',
                desc: 'Три предпринимателя, три разные ниши, один инструмент — ИИ. Как они удвоили свой доход, какие ошибки совершали, что сработало? Конкретные цифры, конкретные стратегии, конкретные результаты.',
                highlight: true
              },
              {
                time: '15:00–15:15',
                icon: 'GraduationCap',
                title: 'Блок 6: Кейс от школы «Хакни нейросети»',
                desc: 'Живой пример того, как наши студенты применяют ИИ в своих проектах. История успеха от Цибульского — от идеи до результата.',
                highlight: true
              },
              {
                time: '15:15–15:30',
                icon: 'Video',
                title: 'Блок 7: Видео о цифровых аватарах от Hey Gen',
                desc: 'Мировая звезда технологий показывает будущее. Как создавать персонажей и аватары, которые работают вместо тебя?',
                highlight: true
              },
              {
                time: '15:30–16:00',
                icon: 'Code',
                title: 'Блок 8: White Coding — Создание сайтов через ИИ',
                desc: 'Не нужно учиться кодировать 6 месяцев. Покажем, как создавать рабочие сайты с помощью нейросетей за часы вместо недель.',
                highlight: true
              },
              {
                time: '16:00–18:00',
                icon: 'PartyPopper',
                title: 'Блок 9: ФИНАЛ',
                desc: '🎁 Розыгрыши призов от спонсоров | 💚 Благотворительный перевод | 📸 Совместное фото',
                highlight: true
              }
            ].map((block, idx) => (
              <Card 
                key={idx} 
                className={`${block.highlight ? 'bg-synergy-beige text-synergy-dark border-l-4 border-l-synergy-red' : 'bg-synergy-dark/50 text-synergy-beige'} animate-on-scroll`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                      <Badge className={`${block.highlight ? 'bg-synergy-red text-synergy-beige' : 'bg-synergy-beige/20 text-synergy-beige'} px-3 py-1 font-mono font-bold`}>
                        {block.time}
                      </Badge>
                      {block.icon && (
                        <Icon 
                          name={block.icon as any} 
                          size={32} 
                          className={`${block.highlight ? 'text-synergy-red' : 'text-synergy-beige'} icon-glow`} 
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-heading text-lg md:text-xl font-black mb-2 ${block.highlight ? 'text-synergy-dark' : 'text-synergy-beige'}`}>
                        {block.title}
                      </h3>
                      <p className={`${block.highlight ? 'text-synergy-dark/80' : 'text-synergy-beige/80'} leading-relaxed`}>
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
              <Card key={idx} className="bg-synergy-dark text-synergy-beige" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <Icon name={reason.icon as any} size={40} className="mb-4 text-synergy-red icon-glow" />
                  <h3 className="font-heading text-xl font-black mb-2 text-synergy-beige">{reason.title}</h3>
                  <p className="text-synergy-beige/80">{reason.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 text-synergy-beige">
            ОБ ОРГАНИЗАТОРАХ
          </h2>
          <Card className="bg-synergy-beige text-synergy-dark">
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

      <section id="registration" className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll-scale">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-center mb-6 text-synergy-dark">
            ЗАБРОНИРОВАТЬ МЕСТО
          </h2>
          <div className="text-center mb-8">
            <Badge className="text-lg px-6 py-3 bg-synergy-red text-synergy-beige mb-4">
              Осталось {seatsLeft} мест из 300
            </Badge>
            <p className="text-synergy-dark/70 mb-2">Стоимость билета: <span className="font-bold text-2xl text-synergy-red">от 1,000 ₽</span></p>
            <p className="text-synergy-dark/60 text-sm">100% средств передаются в «Живая Надежда»</p>
          </div>
          
          <Card className="bg-synergy-dark">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-synergy-beige">Имя *</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-synergy-beige text-synergy-dark border-synergy-beige-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-synergy-beige">Email *</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-synergy-beige text-synergy-dark border-synergy-beige-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-synergy-beige">Телефон *</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-synergy-beige text-synergy-dark border-synergy-beige-border"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="agree" 
                    checked={formData.agree}
                    onCheckedChange={(checked) => setFormData({...formData, agree: checked as boolean})}
                    className="border-synergy-beige"
                  />
                  <label htmlFor="agree" className="text-sm text-synergy-beige/80 leading-relaxed cursor-pointer">
                    Я согласен на обработку персональных данных и понимаю, что все средства передаются в благотворительную организацию
                  </label>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase text-lg py-6"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.agree}
                >
                  Купить билет от 1,000 ₽
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-8 text-synergy-beige">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Куда идут деньги?',
                a: '100% средств от продажи билетов полностью передаются в Центр «Живая Надежда» — организацию, которая помогает одиноким матерям в Приморье. Это благотворительное мероприятие.'
              },
              {
                q: 'Нужен ли опыт работы с ИИ?',
                a: 'Нет, мероприятие подходит для всех уровней. Мы покажем инструменты в действии и объясним, как их использовать, даже если ты никогда не работал с нейросетями.'
              },
              {
                q: 'Что я получу на мероприятии?',
                a: 'Практические знания о 8+ ИИ-инструментах, живые кейсы от предпринимателей, нетворкинг, нейро-фотосессию, шанс выиграть призы от спонсоров и осознание, что помог реальным людям.'
              },
              {
                q: 'Можно ли вернуть билет?',
                a: 'Да, до 10 апреля 2026 года можно вернуть билет и получить полный возврат средств. После этой даты возврат не производится, так как средства уже переданы в благотворительную организацию.'
              },
              {
                q: 'Где точно проходит мероприятие?',
                a: 'Мероприятие проходит во Владивостоке. Точный адрес и схема проезда будут отправлены на email после покупки билета.'
              },
              {
                q: 'Будет ли запись мероприятия?',
                a: 'Нет, это живое мероприятие с интерактивными блоками и нейро-фотосессией. Запись не передаст всю атмосферу и практику.'
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-synergy-beige border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-heading font-bold text-synergy-dark hover:text-synergy-red">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-synergy-dark/80 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 px-6 bg-synergy-red relative z-10 animate-on-scroll-scale">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-4 text-synergy-beige">
            НЕ УПУСТИ ВОЗМОЖНОСТЬ
          </h2>
          <p className="text-lg md:text-xl text-synergy-beige/90 mb-8">
            Всего {seatsLeft} мест из 100. Присоединяйся к тем, кто уже понял, что ИИ — это не будущее, а настоящее.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-synergy-dark text-synergy-beige hover:bg-synergy-dark/90 font-bold uppercase text-lg px-12 py-6"
          >
            Купить билет сейчас
          </Button>
        </div>
      </section>

      <footer className="py-8 px-6 bg-synergy-dark text-synergy-beige/60 text-center text-sm">
        <p>© 2026 Школа «Хакни нейросети» | Владивосток</p>
        <p className="mt-2">Благотворительное мероприятие в поддержку Центра «Живая Надежда»</p>
      </footer>
    </div>
  );
};

export default Index;