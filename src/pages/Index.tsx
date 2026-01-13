import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        
        <div className="absolute bottom-0 left-0 w-full h-[60%] overflow-hidden opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax meet">
            <defs>
              <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(18, 100%, 58%)', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: 'hsl(275, 70%, 19%)', stopOpacity: 0.7}} />
              </linearGradient>
              <linearGradient id="reflectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(275, 70%, 19%)', stopOpacity: 0.4}} />
                <stop offset="100%" style={{stopColor: 'hsl(18, 100%, 58%)', stopOpacity: 0.2}} />
              </linearGradient>
            </defs>
            
            <g fill="url(#cityGradient)">
              <ellipse cx="300" cy="230" rx="80" ry="40" opacity="0.3" />
              <ellipse cx="600" cy="220" rx="100" ry="50" opacity="0.3" />
              <ellipse cx="1000" cy="230" rx="120" ry="45" opacity="0.3" />
              <ellipse cx="1300" cy="225" rx="90" ry="42" opacity="0.3" />
              
              <rect x="40" y="250" width="15" height="50" />
              <polygon points="40,250 47,240 55,250" />
              
              <path d="M 80 290 L 85 255 L 95 255 L 100 265 L 110 265 L 115 255 L 125 255 L 130 290 Z" />
              <line x1="90" y1="255" x2="80" y2="290" stroke="hsl(18, 100%, 58%)" strokeWidth="0.5" />
              <line x1="95" y1="255" x2="85" y2="290" stroke="hsl(18, 100%, 58%)" strokeWidth="0.5" />
              <line x1="120" y1="255" x2="130" y2="290" stroke="hsl(18, 100%, 58%)" strokeWidth="0.5" />
              <line x1="115" y1="255" x2="125" y2="290" stroke="hsl(18, 100%, 58%)" strokeWidth="0.5" />
              
              <rect x="140" y="270" width="25" height="20" />
              <polygon points="140,270 152,260 165,270" />
              
              <rect x="175" y="260" width="30" height="30" />
              <rect x="185" y="255" width="10" height="5" />
              
              <rect x="215" y="275" width="20" height="15" />
              
              <polygon points="250,180 255,180 260,290 245,290" />
              <circle cx="252" cy="175" r="6" fill="hsl(18, 100%, 58%)" />
              
              <rect x="270" y="265" width="25" height="25" />
              
              <rect x="305" y="240" width="35" height="50" />
              <rect x="312" y="235" width="3" height="8" />
              
              <rect x="350" y="255" width="28" height="35" />
              
              <rect x="390" y="230" width="45" height="60" />
              <rect x="400" y="225" width="25" height="8" />
              
              <rect x="445" y="245" width="30" height="45" />
              
              <path d="M 490 290 Q 520 210 550 290" stroke="hsl(18, 100%, 58%)" strokeWidth="3" fill="none" />
              <line x1="495" y1="285" x2="520" y2="220" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="500" y1="280" x2="520" y2="230" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="505" y1="275" x2="520" y2="240" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="510" y1="270" x2="520" y2="250" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="545" y1="285" x2="520" y2="220" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="540" y1="280" x2="520" y2="230" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="535" y1="275" x2="520" y2="240" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <line x1="530" y1="270" x2="520" y2="250" stroke="hsl(18, 100%, 58%)" strokeWidth="0.8" opacity="0.6" />
              <rect x="515" y="288" width="10" height="2" fill="hsl(18, 100%, 58%)" />
              
              <rect x="560" y="250" width="32" height="40" />
              
              <polygon points="600,200 605,200 608,290 597,290" />
              <polygon points="600,200 602,195 605,200" />
              
              <rect x="620" y="270" width="25" height="20" />
              <circle cx="632" cy="268" r="4" fill="hsl(18, 100%, 58%)" />
              
              <rect x="655" y="235" width="40" height="55" />
              <rect x="670" y="230" width="10" height="8" />
              
              <rect x="705" y="260" width="30" height="30" />
              
              <rect x="745" y="245" width="35" height="45" />
              
              <path d="M 790 290 Q 850 150 910 290" stroke="hsl(18, 100%, 58%)" strokeWidth="4" fill="none" />
              <line x1="800" y1="285" x2="850" y2="170" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="810" y1="280" x2="850" y2="180" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="820" y1="275" x2="850" y2="190" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="830" y1="270" x2="850" y2="200" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="840" y1="265" x2="850" y2="210" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="900" y1="285" x2="850" y2="170" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="890" y1="280" x2="850" y2="180" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="880" y1="275" x2="850" y2="190" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="870" y1="270" x2="850" y2="200" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <line x1="860" y1="265" x2="850" y2="210" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.6" />
              <rect x="845" y="288" width="10" height="2" fill="hsl(18, 100%, 58%)" />
              
              <circle cx="940" cy="270" r="25" fill="none" stroke="hsl(18, 100%, 58%)" strokeWidth="2" />
              <circle cx="940" cy="270" r="20" fill="none" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.5" />
              <line x1="940" y1="245" x2="940" y2="290" stroke="hsl(18, 100%, 58%)" strokeWidth="1.5" />
              <line x1="915" y1="270" x2="965" y2="270" stroke="hsl(18, 100%, 58%)" strokeWidth="1.5" />
              
              <rect x="980" y="265" width="30" height="25" />
              
              <rect x="1020" y="240" width="40" height="50" />
              <rect x="1032" y="235" width="16" height="8" />
              
              <rect x="1070" y="255" width="35" height="35" />
              
              <polygon points="1120,190 1127,190 1132,290 1115,290" />
              <polygon points="1115,190 1123,160 1132,190" />
              <line x1="1123" y1="170" x2="1115" y2="185" stroke="hsl(18, 100%, 58%)" strokeWidth="1" />
              <line x1="1123" y1="170" x2="1132" y2="185" stroke="hsl(18, 100%, 58%)" strokeWidth="1" />
              
              <rect x="1145" y="260" width="28" height="30" />
              
              <rect x="1185" y="230" width="50" height="60" />
              <rect x="1200" y="225" width="20" height="8" />
              
              <polygon points="1250,210 1256,210 1262,290 1244,290" />
              <polygon points="1244,210 1253,195 1262,210" />
              <path d="M 1250 205 L 1253 180 L 1256 205" stroke="hsl(18, 100%, 58%)" strokeWidth="1" fill="none" />
              
              <rect x="1275" y="245" width="32" height="45" />
              
              <rect x="1320" y="235" width="45" height="55" />
              <rect x="1335" y="230" width="15" height="8" />
              
              <rect x="1375" y="265" width="30" height="25" />
              
              <polygon points="1420,220 1425,220 1428,290 1417,290" />
              <path d="M 1420 218 L 1422 200 L 1428 218" fill="hsl(18, 100%, 58%)" />
              
              <rect x="1440" y="270" width="25" height="20" />
              
              <polygon points="1480,250 1487,245 1495,250 1495,290 1480,290" />
              
              <rect x="1510" y="275" width="20" height="15" />
            </g>
            
            <line x1="0" y1="290" x2="1600" y2="290" stroke="hsl(18, 100%, 58%)" strokeWidth="1" opacity="0.3" />
            
            <g fill="url(#reflectionGradient)" opacity="0.5" transform="translate(0, 290) scale(1, -0.7)">
              <ellipse cx="300" cy="230" rx="80" ry="40" opacity="0.3" />
              <ellipse cx="600" cy="220" rx="100" ry="50" opacity="0.3" />
              <ellipse cx="1000" cy="230" rx="120" ry="45" opacity="0.3" />
              <ellipse cx="1300" cy="225" rx="90" ry="42" opacity="0.3" />
              
              <rect x="40" y="250" width="15" height="50" />
              <path d="M 80 290 L 85 255 L 95 255 L 100 265 L 110 265 L 115 255 L 125 255 L 130 290 Z" />
              <rect x="140" y="270" width="25" height="20" />
              <rect x="175" y="260" width="30" height="30" />
              <rect x="215" y="275" width="20" height="15" />
              <polygon points="250,180 255,180 260,290 245,290" />
              <rect x="270" y="265" width="25" height="25" />
              <rect x="305" y="240" width="35" height="50" />
              <rect x="350" y="255" width="28" height="35" />
              <rect x="390" y="230" width="45" height="60" />
              <rect x="445" y="245" width="30" height="45" />
              <path d="M 490 290 Q 520 210 550 290" stroke="hsl(18, 100%, 58%)" strokeWidth="2" fill="none" opacity="0.4" />
              <rect x="560" y="250" width="32" height="40" />
              <polygon points="600,200 605,200 608,290 597,290" />
              <rect x="620" y="270" width="25" height="20" />
              <rect x="655" y="235" width="40" height="55" />
              <rect x="705" y="260" width="30" height="30" />
              <rect x="745" y="245" width="35" height="45" />
              <path d="M 790 290 Q 850 150 910 290" stroke="hsl(18, 100%, 58%)" strokeWidth="3" fill="none" opacity="0.4" />
              <circle cx="940" cy="270" r="25" fill="none" stroke="hsl(18, 100%, 58%)" strokeWidth="1.5" opacity="0.3" />
              <rect x="980" y="265" width="30" height="25" />
              <rect x="1020" y="240" width="40" height="50" />
              <rect x="1070" y="255" width="35" height="35" />
              <polygon points="1120,190 1127,190 1132,290 1115,290" />
              <rect x="1145" y="260" width="28" height="30" />
              <rect x="1185" y="230" width="50" height="60" />
              <polygon points="1250,210 1256,210 1262,290 1244,290" />
              <rect x="1275" y="245" width="32" height="45" />
              <rect x="1320" y="235" width="45" height="55" />
              <rect x="1375" y="265" width="30" height="25" />
              <polygon points="1420,220 1425,220 1428,290 1417,290" />
              <rect x="1440" y="270" width="25" height="20" />
              <polygon points="1480,250 1487,245 1495,250 1495,290 1480,290" />
              <rect x="1510" y="275" width="20" height="15" />
            </g>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase tracking-tight">
              6 AI-инструментов, которые <span className="text-primary">удвоят твой доход</span> уже в этом месяце
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Kimi AI, HeyGen, NotebookLM, Freepik, Perplexity и n8n — инструменты, которые конкуренты уже используют. 
              На конференции ты узнаешь, как их применять для заработка прямо сейчас.
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
              <p className="text-lg leading-relaxed mb-6">
                Представь: ты приходишь на конференцию и за 8 часов узнаёшь, как автоматизировать 80% своей работы, 
                сэкономить 20+ часов в неделю и увеличить доход на 30–100%. Уходишь с готовым playbook, который внедришь 
                уже завтра. Это не теория — это реальность 300+ фрилансеров и предпринимателей, которые уже применили 
                эти инструменты и изменили свою жизнь.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">участников</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">+45%</div>
                  <div className="text-sm text-muted-foreground">прирост дохода</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">25</div>
                  <div className="text-sm text-muted-foreground">часов в неделю</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">87%</div>
                  <div className="text-sm text-muted-foreground">применили сразу</div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto px-12 py-7 text-xl font-bold bg-primary hover:bg-primary/90 text-white animate-pulse-scale rounded-full"
                onClick={scrollToRegistration}
              >
                <Icon name="Rocket" className="mr-2" size={24} />
                Зарегистрироваться и получить гайд
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Ранние пташки получают скидку 20% + доступ к приватному чату спикеров
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 uppercase tracking-tight">
              Ты тратишь часы на то, что AI может сделать за минуты
            </h2>

            <p className="text-lg text-center text-muted-foreground mb-12">
              Каждый день ты встаёшь и снова делаешь одно и то же: пишешь посты, обрабатываешь видео, создаёшь дизайн, 
              ищешь информацию, отвечаешь на однотипные письма. Часы уходят впустую на рутину. Тем временем конкуренты 
              уже внедрили AI и работают в 3 раза быстрее, зарабатывая больше при меньших усилиях.
            </p>

            <div className="bg-card border rounded-xl p-8 space-y-4">
              {[
                'Нехватка времени — работаешь 10+ часов в день, но доход не растёт',
                'Конкуренция опережает — коллеги с AI-инструментами предлагают услуги дешевле',
                'Выгорание — одна и та же работа день за днём, нет энергии на развитие',
                'Низкий доход при высокой нагрузке — стараешься максимально, а результата мало',
                'Не знаешь, где начать — информации про AI слишком много, всё кажется сложным',
                'Скепсис к новым инструментам — пробовал ранее, не помогло, может это очередной хайп?'
              ].map((pain, index) => (
                <div key={index} className="flex items-start gap-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <Icon name="X" className="text-destructive flex-shrink-0 mt-1" size={20} />
                  <p className="text-lg">{pain}</p>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-xl p-6">
              <p className="text-lg font-semibold">
                И самое страшное? Каждый день без AI — это день, когда твой конкурент становится сильнее. 
                Когда ты решишь, что пора меняться, может быть уже поздно.
              </p>
            </div>

            <div className="bg-gradient-to-br from-success/10 to-primary/10 border border-success/30 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Но есть выход. На конференции ты научишься использовать 6 инструментов, которые решают ВСЕ эти проблемы за раз:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: 'Bot', text: 'Kimi AI автоматизирует текст и исследования' },
                  { icon: 'Video', text: 'HeyGen создаёт видео без съёмок' },
                  { icon: 'FileSearch', text: 'NotebookLM анализирует конкурентов в минуты' },
                  { icon: 'Palette', text: 'Freepik генерирует готовый дизайн' },
                  { icon: 'Search', text: 'Perplexity находит инсайты из интернета' },
                  { icon: 'Network', text: 'n8n связывает всё в одну систему' }
                ].map((tool, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                    <Icon name={tool.icon as any} className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="font-medium">{tool.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-lg font-semibold">
                Это не просто инструменты. Это твоя новая команда, которая работает 24/7 без выходных.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="px-10 py-6 text-lg rounded-full" onClick={scrollToRegistration}>
                <Icon name="Info" className="mr-2" />
                Узнать подробнее про каждый инструмент
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Каждый инструмент решает одну конкретную проблему
          </h2>

          <div className="max-w-6xl mx-auto space-y-16">
            {[
              {
                icon: 'Bot',
                name: 'Kimi AI',
                subtitle: 'Автоматизирует написание текстов и исследование информации',
                description: 'Kimi AI пишет тексты за тебя: продающие письма, статьи, описания товаров, скрипты видео. Ты просто даёшь ему задачу — и он создаёт 5 вариантов за 10 минут.',
                example: 'Копирайтер Мария раньше писала одну статью 2 часа. С Kimi AI она создаёт 5 статей в день. Конкуренты по-прежнему пишут вручную.',
                saving: '30+ часов в месяц на написание текстов',
                color: 'primary'
              },
              {
                icon: 'Video',
                name: 'HeyGen',
                subtitle: 'Создаёт видео с AI-аватарами',
                description: 'Ты просто даёшь скрипт — HeyGen создаёт видео с живым аватаром, который говорит, жестикулирует, выглядит как настоящий человек. За 30 минут вместо суток съёмок.',
                example: 'Видеограф Иван раньше тратил целый день на съёмку + день на редактирование. С HeyGen он создаёт видео за 30 минут. Теперь создаёт не 3 видео в месяц, а 10.',
                saving: '20+ часов в месяц на создание и редактирование видео',
                color: 'secondary'
              },
              {
                icon: 'FileSearch',
                name: 'NotebookLM',
                subtitle: 'Анализирует большие объёмы информации',
                description: 'Загрузи PDF, статью или видео — NotebookLM анализирует, суммирует, находит главное за 5 минут. Ты получаешь чистую информацию без воды.',
                example: 'Предприниматель Максим раньше часами изучал конкурентов и тренды. Теперь загружает 10 статей в NotebookLM — получает готовый анализ за 5 минут.',
                saving: '10+ часов в неделю на исследования и аналитику',
                color: 'accent'
              },
              {
                icon: 'Palette',
                name: 'Freepik',
                subtitle: 'Генерирует изображения и дизайн по описанию',
                description: 'Напиши: "обложка для статьи про AI, синие цвета, минимализм" — Freepik создаст 10 вариантов. Ты выбираешь лучший за 2 минуты.',
                example: 'Блогер Анна раньше часами искала картинки или платила дизайнеру 5 000 руб за обложку. С Freepik она создаёт обложку за 2 минуты.',
                saving: '15+ часов в месяц на дизайн и подбор визуала',
                color: 'success'
              },
              {
                icon: 'Search',
                name: 'Perplexity',
                subtitle: 'Умный поиск и анализ информации',
                description: 'Спрашиваешь Perplexity любой вопрос — получаешь анализ с ссылками на источники за 30 секунд. Это как интернет-помощник, который думает.',
                example: 'Маркетолог Дмитрий раньше час искал информацию про целевую аудиторию. С Perplexity он получает полный анализ за 2 минуты.',
                saving: '25+ часов в месяц на исследования',
                color: 'secondary'
              },
              {
                icon: 'Network',
                name: 'n8n',
                subtitle: 'Связывает все инструменты в одну систему',
                description: 'n8n автоматизирует всё: когда клиент пишет письмо, Kimi отвечает автоматически, HeyGen создаёт видео, n8n отправляет его клиенту. Настраиваешь один раз — система работает сама.',
                example: 'Владелец онлайн-школы Екатерина настроила n8n: ученик покупает → письмо создаётся → видео отправляется → добавляется в CRM. Работает для 500+ учеников.',
                saving: '50+ часов в месяц на рутину',
                color: 'primary'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-xl bg-${tool.color}/10`}>
                    <Icon name={tool.icon as any} className={`text-${tool.color}`} size={40} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-xl text-muted-foreground mb-4">{tool.subtitle}</p>
                    <p className="text-lg mb-4">{tool.description}</p>
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <p className="font-semibold mb-2">Практический пример:</p>
                      <p>{tool.example}</p>
                    </div>
                    <div className="flex items-center gap-2 text-success font-semibold">
                      <Icon name="TrendingUp" size={20} />
                      <span>Экономия: {tool.saving}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-bold mb-8">
              Видишь? Каждый инструмент решает свою задачу. А если связать их вместе через n8n? 
              Ты получаешь идеальную систему, которая работает за тебя.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg rounded-full" onClick={scrollToRegistration}>
              <Icon name="Sparkles" className="mr-2" />
              Узнать, как это работает на конференции
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="registration">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-destructive/20 to-primary/20 border-2 border-primary rounded-2xl p-8 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 uppercase tracking-tight">
                Это предложение ограничено по времени и местам
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card rounded-xl p-6 text-center">
                  <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
                  <div className="text-3xl font-bold mb-2">150</div>
                  <div className="text-muted-foreground">мест в зале</div>
                </div>
                <div className="bg-card rounded-xl p-6 text-center">
                  <Icon name="CheckCircle2" className="mx-auto mb-3 text-success" size={40} />
                  <div className="text-3xl font-bold mb-2">78</div>
                  <div className="text-muted-foreground">уже забронировано</div>
                </div>
                <div className="bg-card rounded-xl p-6 text-center">
                  <Icon name="AlertCircle" className="mx-auto mb-3 text-destructive" size={40} />
                  <div className="text-3xl font-bold mb-2">72</div>
                  <div className="text-muted-foreground">осталось</div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Предложение закрывается через:</h3>
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {[
                    { label: 'Дней', value: timeLeft.days },
                    { label: 'Часов', value: timeLeft.hours },
                    { label: 'Минут', value: timeLeft.minutes },
                    { label: 'Секунд', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-primary to-secondary rounded-xl p-4 text-center text-white">
                      <div className="text-4xl md:text-5xl font-bold mb-2">{item.value.toString().padStart(2, '0')}</div>
                      <div className="text-sm opacity-90">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Спецпредложение для первых 100 участников</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      {[
                        'Полный доступ к конференции',
                        'Все материалы (гайды, промпты)',
                        'Запись конференции (6 месяцев)',
                        'Доступ к чату участников',
                        'Приватный чат со спикерами',
                        'Персональная консультация (15 мин)'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Icon name="Check" className="text-success flex-shrink-0" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-card rounded-xl p-6">
                    <div className="text-muted-foreground line-through text-xl mb-2">5 000 ₽</div>
                    <div className="text-5xl font-bold text-primary mb-2">4 000 ₽</div>
                    <div className="text-success font-semibold text-lg">Экономишь 1 000 ₽</div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      Осталось мест: <span className="font-bold text-primary">22 из 100</span>
                    </div>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full py-7 text-xl font-bold bg-primary hover:bg-primary/90 text-white animate-pulse-scale rounded-full"
                  onClick={scrollToRegistration}
                >
                  <Icon name="Rocket" className="mr-2" size={24} />
                  ЗАНЯТЬ МЕСТО ПО СПЕЦПРЕДЛОЖЕНИЮ
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Осталось 22 места. После закрытия спецпредложения цена повысится.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 uppercase tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Ответы на самые популярные вопросы</p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: 'Нужна ли мне подготовка к конференции?',
                  a: 'Нет. Конференция рассчитана на участников любого уровня — от полных новичков до опытных специалистов. Если ты никогда не слышал про AI-инструменты — perfect! Мы будем начинать с основ. Все 6 блоков структурированы так, чтобы и новичок, и опытный человек услышал что-то полезное.'
                },
                {
                  q: 'Что если я не разбираюсь в технологиях?',
                  a: 'Отлично! Спикеры объясняют всё простым языком, без технического жаргона. Все инструменты рассчитаны на людей без технического образования. Если ты умеешь пользоваться смартфоном, ты справишься с этими инструментами.'
                },
                {
                  q: 'Смогу ли я применить полученные знания сразу после конференции?',
                  a: 'Да, 100%. На конференции ты получишь готовые промпты для Kimi, готовые workflow для n8n, готовые процессы для других инструментов. На практикуме ты настроишь первую автоматизацию вместе со спикером. Уходишь с рабочим инструментом, который можно применить завтра же.'
                },
                {
                  q: 'Какова цена билета? Есть ли рассрочка?',
                  a: 'Полная стоимость билета: 5 000 руб. Ранние пташки (первые 100 человек) получают скидку 20% = 4 000 руб + доступ к приватному чату спикеров на 6 месяцев. Доступна рассрочка на 2-3 платежа без переплаты.'
                },
                {
                  q: 'Что если я куплю билет и не смогу прийти?',
                  a: 'Нет проблем. Два варианта: 1) Передать билет другому человеку. 2) Получить возврат денег за 3 дня до конференции. Мы понимаем, что жизнь непредсказуема.'
                },
                {
                  q: 'Будут ли записи конференции?',
                  a: 'Да, все участники получат доступ к записям в течение 3 дней после конференции. Все 6 блоков в высоком качестве (Full HD). Доступ на 6 месяцев. Можешь пересмотреть любой момент, если что-то забыл.'
                },
                {
                  q: 'Есть ли гарантия результата?',
                  a: 'Мы ГАРАНТИРУЕМ: ты узнаешь 6 инструментов, которые работают; ты уходишь с готовыми примерами и промптами; ты сможешь применить это в своём бизнесе. Дальше зависит от тебя. Если ты применишь — результаты будут 100%. Плюс 30-дневная гарантия возврата денег, если не доволен.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
              Не жди идеального момента. Создавай его.
            </h2>
            
            <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-8 italic text-lg">
              <p className="mb-4">
                "Лучшее время для внедрения AI — сейчас. Не завтра, не в следующем месяце. 
                Те, кто начнёт сегодня, будут в топе своей ниши через 90 дней. 
                Те, кто подождёт — будут играть в догонялки со своими конкурентами. Выбор за тобой."
              </p>
              <p className="font-semibold text-primary">— Спикеры конференции AI для бизнеса</p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Информация о конференции</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Дата</div>
                    <div className="text-muted-foreground">15 февраля 2026</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Время</div>
                    <div className="text-muted-foreground">10:00–18:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Место</div>
                    <div className="text-muted-foreground">Москва, ул. Ленина 1</div>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full md:w-auto px-16 py-8 text-2xl font-bold bg-primary hover:bg-primary/90 text-white animate-pulse-scale rounded-full"
              onClick={scrollToRegistration}
            >
              <Icon name="Rocket" className="mr-3" size={28} />
              ПОЛУЧИТЬ МЕСТО НА КОНФЕРЕНЦИИ
            </Button>

            <p className="text-sm text-muted-foreground">
              Осталось 22 места по спецпредложению. Цена повысится в ближайшие дни.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-success" size={16} />
                <span>Зарегистрируйся за 60 секунд</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-success" size={16} />
                <span>Получишь письмо сразу</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-success" size={16} />
                <span>Никакого спама</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Программа конференции</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Спикеры</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Контакты</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    <a href="mailto:info@aiconf.ru" className="hover:text-primary transition-colors">info@aiconf.ru</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Phone" size={16} />
                    <a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (999) 123-45-67</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={16} />
                    <a href="https://t.me/aiconf" className="hover:text-primary transition-colors">@aiconf</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">О конференции</h3>
                <p className="text-muted-foreground text-sm">
                  Конференция по AI для бизнеса, заработка и продвижения. 
                  6 инструментов, которые изменят твою работу навсегда.
                </p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>© 2026 Конференция по AI. Все права защищены.</p>
              <p className="mt-2">Сделано с ❤️ для фрилансеров и предпринимателей, которые хотят работать умнее.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}