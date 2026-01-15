import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const StudentsWorksSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const works = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/files/freepik__a-highly-detailed-cinematic-3d-render-of-photoreal__42521.png',
      title: 'Человек-тигр',
      description: 'Создано с помощью ИИ'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/files/freepik__70s-a-medium-shot-of-a-man-riding-a-black-horse-th__67586.png',
      title: 'Всадник',
      description: 'Создано с помощью ИИ'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/files/freepik__qweyd-lowangle-portrait-of-a-bearded-man-wearing-g__25771.png',
      title: 'Городской портрет',
      description: 'Создано с помощью ИИ'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/files/freepik__qweyd-johnny-silverhand-cyberpunk-2077-futuristic-__92986.png',
      title: 'Киберпанк',
      description: 'Создано с помощью ИИ'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/files/freepik__qweyd-a-man-on-the-red-carpet-in-cannes-at-the-osc__82136.png',
      title: 'Красная дорожка',
      description: 'Создано с помощью ИИ'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-synergy-red icon-pulse" />
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-synergy-beige">
            РАБОТЫ УЧЕНИКОВ
          </h2>
          <p className="text-lg md:text-xl text-synergy-beige/80 max-w-3xl mx-auto">
            Реальные результаты студентов школы «Хакни нейросети»
          </p>
        </div>

        <div className="relative">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-lg mb-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {works.map((work) => (
                <div key={work.id} className="min-w-full">
                  <Card className="bg-synergy-beige border-none overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] md:aspect-[16/9]">
                        <img 
                          src={work.image} 
                          alt={work.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-synergy-dark/90 to-transparent p-6">
                          <h3 className="font-heading text-2xl md:text-3xl font-black text-synergy-beige mb-2">
                            {work.title}
                          </h3>
                          <p className="text-synergy-beige/80">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-synergy-red hover:bg-synergy-red/90 text-synergy-beige rounded-full w-12 h-12 p-0 z-10"
            aria-label="Предыдущий слайд"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-synergy-red hover:bg-synergy-red/90 text-synergy-beige rounded-full w-12 h-12 p-0 z-10"
            aria-label="Следующий слайд"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-synergy-red w-8' 
                    : 'bg-synergy-beige/30 hover:bg-synergy-beige/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
            {works.map((work, index) => (
              <button
                key={work.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-synergy-red scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-synergy-beige border-2 border-synergy-red inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 text-synergy-dark">
                <Icon name="Award" size={24} className="text-synergy-red" />
                <p className="text-lg font-bold">
                  Это работы студентов, которые прошли обучение в школе «Хакни нейросети»
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudentsWorksSection;
