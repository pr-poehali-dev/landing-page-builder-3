import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import AiIcon from '@/components/AiIcon';

const Index = () => {
  const [seatsLeft, setSeatsLeft] = useState(25);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agree: false });

  useEffect(() => {
    document.title = '6 AI-Инструментов для Продуктивности';
  }, []);

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-synergy-beige relative">
      <section className="relative bg-synergy-dark text-synergy-beige py-20 px-6 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 leading-tight text-synergy-beige">
              6 AI-ИНСТРУМЕНТОВ, КОТОРЫЕ СДЕЛАЮТ ТЕБЯ В 3 РАЗА ПРОДУКТИВНЕЕ
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-synergy-beige/90">
              Конференция про инструменты, которые реально зарабатывают деньги: Kimi AI, HeyGen, NotebookLM, Freepik, Perplexity и n8n
            </p>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              variant="outline"
              className="text-lg px-8 py-6 h-auto font-bold"
            >
              <span className="font-black uppercase">ЗАБРОНИРОВАТЬ МЕСТО</span>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Badge className="text-base px-4 py-2 bg-synergy-dark text-synergy-beige">
                Осталось {seatsLeft} мест из 100
              </Badge>
              <Badge className="text-base px-4 py-2 bg-synergy-red text-synergy-beige">
                Цена: 2,500 ₽
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-synergy-beige relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '500+', label: 'Студентов обучены' },
              { value: '4.9/5', label: 'Из 2,140 отзывов' },
              { value: '+150%', label: 'Доход за 12 месяцев' }
            ].map((metric, idx) => (
              <div key={idx} className="animate-fade-in group cursor-pointer" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <AiIcon type={['brain', 'shield', 'rocket'][idx] as any} className="w-16 h-16" />
                </div>
                <div className="text-5xl font-heading font-black text-synergy-dark mb-2">{metric.value}</div>
                <div className="text-lg text-synergy-dark font-semibold">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-synergy-dark">
            РЕЗУЛЬТАТЫ СТУДЕНТОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Саша К.', role: 'YouTube-блогер', quote: 'Заработал 100K на первый месяц', result: 'Рост с 5K на 500K просмотров' },
              { name: 'Мария В.', role: 'Фрилансер', quote: 'Заказов в 2 раза больше', result: '+120,000 ₽/месяц за 6 месяцев' },
              { name: 'Петя Л.', role: 'E-commerce', quote: 'Автоматизировал 80% рутины', result: '40 часов свободных + +300% продажи' }
            ].map((review, idx) => (
              <Card key={idx} className="bg-synergy-dark text-synergy-beige hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-synergy-beige/10 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-synergy-beige">{review.name}</div>
                      <div className="text-sm text-synergy-beige/70">{review.role}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-synergy-red mb-2">"{review.quote}"</div>
                  <div className="text-sm text-synergy-beige/90 font-semibold">{review.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-synergy-dark">
            ТВОИ ПРОБЛЕМЫ
          </h2>
          <div className="space-y-6">
            {[
              { title: 'ТЫ ИСПОЛЬЗУЕШЬ ТОЛЬКО CHATGPT', description: 'Специальные инструменты экономят часы работы. HeyGen вместо съемки (4ч→30мин), Freepik вместо Photoshop (3ч→5мин)' },
              { title: 'ТЫ НЕ ЗНАЕШЬ О СПЕЦИАЛЬНЫХ ИНСТРУМЕНТАХ', description: 'Не знаешь: Kimi AI (15x больше текста), Perplexity (поиск+источники), HeyGen (видео за 2мин), n8n (автоматизация), NotebookLM (подкасты)' },
              { title: 'У ТЕБЯ НЕТ СИСТЕМЫ', description: 'Результаты случайны (20K, 50K, 15K в разные месяцы). Нужна система для стабильного дохода' }
            ].map((problem, idx) => (
              <Card key={idx} className="bg-synergy-dark text-synergy-beige border-l-4 border-l-synergy-red hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <AiIcon type={['shield', 'search', 'automation'][idx] as any} className="w-16 h-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-black text-synergy-red mb-3">{problem.title}</h3>
                      <p className="text-synergy-beige/90">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-4 text-synergy-dark">
            6 AI-ИНСТРУМЕНТОВ ДЛЯ ТЕБЯ
          </h2>
          <p className="text-center text-lg text-synergy-dark/70 mb-12">Которые изменят твою работу навсегда</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'KIMI AI', icon: '🔍', what: 'Анализирует 2млн символов за 5сек', benefit: '2ч анализа → 5сек в Kimi', saving: '8 часов/неделю' },
              { name: 'HEYGEN', icon: '🎬', what: 'Видео с аватаром за 2 минуты', benefit: '30+ видео вместо 5 в месяц', saving: '40 часов/месяц' },
              { name: 'NOTEBOOKLM', icon: '🎙️', what: 'Подкаст из любого контента', benefit: 'Превращает PDF/контент в подкаст', saving: '20 часов/месяц' },
              { name: 'FREEPIK', icon: '🎨', what: 'AI-дизайн и картинки за секунды', benefit: 'Дизайнер не нужен', saving: '15 часов/месяц' },
              { name: 'PERPLEXITY', icon: '🔎', what: 'Поиск + источники + анализ', benefit: 'Google с источниками', saving: '10 часов/месяц' },
              { name: 'N8N', icon: '⚙️', what: 'Автоматизация всех процессов', benefit: 'Автопилот для бизнеса', saving: '30 часов/месяц' }
            ].map((tool, idx) => (
              <Card key={idx} className="bg-synergy-dark text-synergy-beige hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{tool.icon}</div>
                  <h3 className="font-heading text-xl font-black mb-3 text-center text-synergy-beige">{tool.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-bold text-synergy-red">Что:</span>
                      <p className="text-synergy-beige/90">{tool.what}</p>
                    </div>
                    <div>
                      <span className="font-bold text-synergy-red">Польза:</span>
                      <p className="text-synergy-beige/90">{tool.benefit}</p>
                    </div>
                    <div className="pt-2 border-t border-synergy-beige/20">
                      <Badge className="bg-synergy-red text-synergy-beige text-xs">{tool.saving}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-dark text-synergy-beige relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-synergy-beige">
            ПРОГРАММА КОНФЕРЕНЦИИ
          </h2>
          <div className="space-y-4">
            {[
              { time: '10:00-11:00', title: 'KIMI AI: Анализ миллионов символов', content: 'Как заменить 2 часа анализа на 5 секунд. Обработка документов, конкурентов, рынков' },
              { time: '11:00-12:00', title: 'HEYGEN: Видео без камеры', content: 'Создание видео с аватаром за 2 минуты. 30+ видео в месяц вместо 5' },
              { time: '12:00-13:00', title: 'NOTEBOOKLM: Подкасты из всего', content: 'Превращаем PDF, статьи, контент в подкасты за минуты' },
              { time: '14:00-15:00', title: 'FREEPIK: AI-дизайн', content: 'Создание дизайна и картинок за секунды. Экономия на дизайнере' },
              { time: '15:00-16:00', title: 'PERPLEXITY: Умный поиск', content: 'Поиск + источники + анализ. Замена Google с проверенными данными' },
              { time: '16:00-17:30', title: 'N8N: Автоматизация всего', content: 'Автопилот для бизнеса. Связываем все инструменты в единую систему' }
            ].map((session, idx) => (
              <Card key={idx} className="bg-synergy-beige text-synergy-dark hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <Badge className="bg-synergy-red text-synergy-beige text-sm w-fit">{session.time}</Badge>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-black mb-2 text-synergy-dark">{session.title}</h3>
                      <p className="text-synergy-dark/80">{session.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-synergy-beige relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-synergy-dark">
            ВОПРОСЫ И ОТВЕТЫ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'Нужен ли опыт работы с AI?', a: 'Нет, мы начинаем с нуля. Покажем каждый инструмент пошагово' },
              { q: 'Будут ли записи?', a: 'Да, все участники получат записи на 7 дней' },
              { q: 'Что если не смогу прийти?', a: 'Вернём деньги или перенесём на следующую конференцию' },
              { q: 'Сколько времени займёт обучение?', a: '7.5 часов (с перерывами). Один день инвестиций' },
              { q: 'Подходит ли для моей ниши?', a: 'Да. Инструменты универсальны: бизнес, фриланс, контент, e-commerce' }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-synergy-dark text-synergy-beige px-6">
                <AccordionTrigger className="font-bold text-synergy-beige hover:text-synergy-red">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-synergy-beige/90">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="registration" className="py-16 px-6 bg-synergy-dark text-synergy-beige relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-4 text-synergy-beige">
            ЗАБРОНИРОВАТЬ МЕСТО
          </h2>
          <p className="text-center mb-8 text-synergy-beige/90">Осталось {seatsLeft} мест из 100</p>
          <Card className="bg-synergy-beige text-synergy-dark">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block font-bold mb-2 text-synergy-dark">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-synergy-dark/20"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-synergy-dark">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-synergy-dark/20"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-2 text-synergy-dark">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-synergy-dark/20"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox 
                    checked={formData.agree}
                    onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                  />
                  <label className="text-sm text-synergy-dark/80">
                    Я согласен с обработкой персональных данных и получением информационных рассылок
                  </label>
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.agree}
                >
                  ОПЛАТИТЬ 2,500 ₽
                </Button>
                <p className="text-center text-sm text-synergy-dark/70">
                  После оплаты вы получите письмо с деталями конференции
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-synergy-beige text-synergy-dark relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-black mb-4 text-synergy-dark">SYNERGY EMBA</h3>
            <p className="text-synergy-dark/80">Трансформируем профессионалов через инновационное образование</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="text-synergy-dark hover:text-synergy-red transition-colors">О нас</a>
            <a href="#" className="text-synergy-dark hover:text-synergy-red transition-colors">Контакты</a>
            <a href="#" className="text-synergy-dark hover:text-synergy-red transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-synergy-dark hover:text-synergy-red transition-colors">Договор оферты</a>
          </div>
          <div className="text-sm text-synergy-dark/70">
            © 2026 Synergy EMBA. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
