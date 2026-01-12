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
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 leading-tight">
              6 AI-ИНСТРУМЕНТОВ, КОТОРЫЕ СДЕЛАЮТ ТЕБЯ В 3 РАЗА ПРОДУКТИВНЕЕ
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-white/95">
              Конференция про инструменты, которые реально зарабатывают деньги: Kimi AI, HeyGen, NotebookLM, Freepik, Perplexity и n8n
            </p>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-bold shadow-2xl animate-pulse-scale"
            >
              📌 ЗАБРОНИРОВАТЬ МЕСТО
            </Button>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Badge variant="secondary" className="text-base px-4 py-2 bg-white/20 text-white border-white/30">
                Осталось {seatsLeft} мест из 100
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-accent text-white border-none">
                Цена: 2,500 ₽
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '500+', label: 'Студентов обучены' },
              { value: '4.9/5', label: 'Из 2,140 отзывов' },
              { value: '+150%', label: 'Доход за 12 месяцев' }
            ].map((metric, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex justify-center mb-4">
                  <AiIcon type={['brain', 'shield', 'rocket'][idx] as any} className="w-16 h-16" />
                </div>
                <div className="text-5xl font-heading font-black text-primary mb-2">{metric.value}</div>
                <div className="text-lg text-secondary font-semibold">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-secondary">
            РЕЗУЛЬТАТЫ СТУДЕНТОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Саша К.', role: 'YouTube-блогер', quote: 'Заработал 100K на первый месяц', result: 'Рост с 5K на 500K просмотров' },
              { name: 'Мария В.', role: 'Фрилансер', quote: 'Заказов в 2 раза больше', result: '+120,000 ₽/месяц за 6 месяцев' },
              { name: 'Петя Л.', role: 'E-commerce', quote: 'Автоматизировал 80% рутины', result: '40 часов свободных + +300% продажи' }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow duration-300 border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <div className="font-bold text-secondary">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-primary mb-2">"{review.quote}"</div>
                  <div className="text-sm text-secondary font-semibold">{review.result}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-secondary">
            ТВОИ ПРОБЛЕМЫ
          </h2>
          <div className="space-y-6">
            {[
              { title: 'ТЫ ИСПОЛЬЗУЕШЬ ТОЛЬКО CHATGPT', description: 'Специальные инструменты экономят часы работы. HeyGen вместо съемки (4ч→30мин), Freepik вместо Photoshop (3ч→5мин)' },
              { title: 'ТЫ НЕ ЗНАЕШЬ О СПЕЦИАЛЬНЫХ ИНСТРУМЕНТАХ', description: 'Не знаешь: Kimi AI (15x больше текста), Perplexity (поиск+источники), HeyGen (видео за 2мин), n8n (автоматизация), NotebookLM (подкасты)' },
              { title: 'У ТЕБЯ НЕТ СИСТЕМЫ', description: 'Результаты случайны (20K, 50K, 15K в разные месяцы). Нужна система для стабильного дохода' }
            ].map((problem, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <AiIcon type={['shield', 'search', 'automation'][idx] as any} className="w-16 h-16" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-black text-primary mb-3">{problem.title}</h3>
                      <p className="text-secondary">{problem.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-muted to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-4 text-secondary">
            6 AI-ИНСТРУМЕНТОВ ДЛЯ ТЕБЯ
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Которые изменят твою работу навсегда</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'KIMI AI', icon: '🔍', what: 'Анализирует 2млн символов за 5сек', benefit: '2ч анализа → 5сек в Kimi', saving: '8 часов/неделю' },
              { name: 'HEYGEN', icon: '🎬', what: 'Видео с аватаром за 2 минуты', benefit: '30+ видео вместо 5 в месяц', saving: '4ч съемки → 2мин генерации' },
              { name: 'NOTEBOOKLM', icon: '🎙️', what: 'Подкасты из PDF/статей за 1мин', benefit: 'Новый доход на Spotify/Apple', saving: '+50-200K/месяц' },
              { name: 'FREEPIK', icon: '🎨', what: '20 бесплатных изображений/день', benefit: 'Дизайнер 24/7 без оплаты', saving: '15 часов/неделю' },
              { name: 'PERPLEXITY', icon: '🌐', what: 'Google с AI и источниками', benefit: 'Контент с данными выше авторитета', saving: '+40% качество' },
              { name: 'N8N', icon: '⚙️', what: 'Автоматизация приложений', benefit: 'YouTube→Telegram, Заказ→Email', saving: '20-30 часов/неделю' }
            ].map((tool, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <AiIcon type={['search', 'video', 'podcast', 'design', 'globe', 'automation'][idx] as any} className="w-20 h-20" />
                  </div>
                  <h3 className="font-heading text-xl font-black text-secondary text-center mb-3">{tool.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{tool.what}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="TrendingUp" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">{tool.benefit}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-accent font-bold">{tool.saving}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-accent text-white px-8 py-4 rounded-lg">
              <div className="text-3xl font-heading font-black">ДОХОД: +50-200% за 3-6 месяцев</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black mb-6">
            СЕРГЕЙ ЧЕРНИКОВ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              '10+ лет Digital-маркетинг',
              '500+ студентов обучены',
              '120K+/месяц',
              'Школа "Хакни Нейросети"'
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-4">
                <div className="text-sm font-semibold">{item}</div>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed">
            Потратил 100K на курсы без результата. Разобрался в инструментах - доход вырос с 20K на 120K за год. 
            Хочу помочь вам не потратить 100K впустую.
          </p>
        </div>
      </section>

      <section id="registration" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <Card className="border-4 border-primary shadow-2xl">
            <CardContent className="p-8">
              <h2 className="font-heading text-3xl font-black text-center mb-6 text-secondary">
                ЗАБРОНИРОВАТЬ МЕСТО
              </h2>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Дата</div>
                    <div className="text-xl font-bold text-secondary">20 АПРЕЛЯ 2026</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Время</div>
                    <div className="text-xl font-bold text-secondary">11:00-18:00</div>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-sm text-muted-foreground">Место</div>
                  <div className="text-xl font-bold text-secondary">ВЛАДИВОСТОК</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl line-through text-muted-foreground">5,990 ₽</span>
                  <span className="text-4xl font-heading font-black text-primary">2,500 ₽</span>
                  <Badge className="bg-accent text-white text-lg px-3 py-1">-58%</Badge>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  placeholder="Имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12"
                />
                <Input 
                  type="tel" 
                  placeholder="Телефон" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                />
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="agree" 
                    checked={formData.agree}
                    onCheckedChange={(checked) => setFormData({...formData, agree: checked as boolean})}
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer">
                    Согласен с политикой конфиденциальности
                  </label>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 h-auto font-bold"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.agree}
                >
                  ОПЛАТИТЬ И ЗАБРОНИРОВАТЬ
                </Button>
              </form>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Ссылка на вебинар</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Материалы за день до события</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Скидка 50% на курсы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-accent" />
                  <span>Возврат денег, если не понравится</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-center mb-12 text-secondary">
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: 'Нужны ли знания в программировании?', a: 'Нет! Все No-Code инструменты, работают через браузер' },
              { q: 'Сколько часов в день?', a: '30-60 минут практики, твой темп, без обязательств' },
              { q: 'Есть ли гарантия?', a: 'Да! 30 дней денег назад, без вопросов' },
              { q: 'Будет ли запись?', a: 'Да, 30 дней доступна участникам' },
              { q: 'Работает в России?', a: 'Да, все инструменты доступны без VPN' },
              { q: 'Какой результат?', a: 'Умение использовать 6 инструментов, +50-200% доход за 3-6мес' },
              { q: 'Есть ли бонусы?', a: 'PDF-гайды, 5 шаблонов n8n, скидка 50%, чат 30 дней' }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-bold text-secondary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-6">
            ОСТАЛОСЬ {seatsLeft} МЕСТ
          </h2>
          <p className="text-xl mb-8">
            Не упусти шанс изменить свою продуктивность и доход в 2026 году
          </p>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-bold shadow-2xl animate-pulse-scale"
          >
            ЗАБРОНИРОВАТЬ МЕСТО СЕЙЧАС
          </Button>
          <div className="mt-8 text-sm opacity-80">
            <p>Контакт: @SergeyChernikov</p>
            <p className="mt-2">30 дней гарантия возврата денег</p>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-6 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <p>© 2026 Хакни Нейросети. Все права защищены.</p>
          <p className="mt-2 opacity-70">Владивосток • Россия</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;