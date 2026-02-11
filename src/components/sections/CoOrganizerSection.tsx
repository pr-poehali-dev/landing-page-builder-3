import { Card, CardContent } from '@/components/ui/card';

const CoOrganizerSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-synergy-beige relative z-10 animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-synergy-dark border-none">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-4 sm:mb-6 text-synergy-beige text-center px-2">
              Соорганизатор мероприятия
            </h2>
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <div className="bg-synergy-beige p-3 sm:p-4 md:p-6 rounded-lg w-full max-w-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/31e2c69f-c334-4e44-81ea-dcff7edecc48.png" 
                  alt="ОПОРА РОССИИ — Приморское краевое отделение" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-synergy-beige/90 leading-relaxed text-center max-w-2xl px-2">
                Приморское краевое отделение «ОПОРА РОССИИ» — организация, объединяющая предпринимателей региона и поддерживающая развитие бизнеса в Приморье.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoOrganizerSection;