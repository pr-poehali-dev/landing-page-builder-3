import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: 'TrendingUp',
      text: 'Как удвоить прибыль через автоматизацию продаж'
    },
    {
      icon: 'Zap',
      text: 'Как создавать контент за 10 минут вместо часов'
    },
    {
      icon: 'Palette',
      text: 'Как делать дизайн, видео и сайты в 3 раза быстрее'
    },
    {
      icon: 'Bot',
      text: 'Как создать цифровой клон себя, который работает вместо тебя'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-beige relative z-10 animate-on-scroll">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 text-synergy-dark">
            Это не просто лекции про ИИ.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-synergy-dark/80 max-w-3xl mx-auto leading-relaxed">
            Это реальная демонстрация того, как инструменты работают в бизнесе:
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-white border-2 border-synergy-dark/10 hover:border-synergy-red transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-synergy-red rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon} size={20} className="sm:w-6 sm:h-6 text-synergy-beige icon-float" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-synergy-dark leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-synergy-dark border-2 sm:border-4 border-synergy-red">
          <CardContent className="p-6 sm:p-8 text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-synergy-beige leading-relaxed">
              И главное: ты не просто смотришь — ты сам пробуешь инструменты в деле.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;