import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

interface RegistrationFormProps {
  seatsLeft: number;
  formData: { name: string; email: string; phone: string; agree: boolean };
  setFormData: (data: { name: string; email: string; phone: string; agree: boolean }) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  onShowPrivacy: () => void;
  onShowOffer: () => void;
}

const RegistrationForm = ({
  seatsLeft,
  formData,
  setFormData,
  onSubmit,
  isSubmitting,
  onShowPrivacy,
  onShowOffer,
}: RegistrationFormProps) => {
  return (
    <section className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll-scale">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 text-synergy-dark px-4">
          ЗАБРОНИРОВАТЬ МЕСТО
        </h2>
        <div className="text-center mb-8 space-y-3">
          <div className="flex justify-center">
            <Badge className="text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-synergy-red text-synergy-beige">
              Осталось {seatsLeft} мест из 300
            </Badge>
          </div>
          <p className="text-synergy-dark/70 mb-2 text-sm sm:text-base px-2">
            Стоимость билета: <span className="font-bold text-lg sm:text-xl md:text-2xl text-synergy-red">от 1,000 ₽</span>
          </p>
          <p className="text-synergy-dark/60 text-xs sm:text-sm px-2">100% средств передаются в «Живая Надежда»</p>
        </div>
        
        <Card className="bg-synergy-dark">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <form className="space-y-6" onSubmit={onSubmit}>
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
                  Я согласен на{' '}
                  <button
                    type="button"
                    onClick={onShowPrivacy}
                    className="text-synergy-red hover:underline font-semibold"
                  >
                    обработку персональных данных
                  </button>
                  {' '}и принимаю условия{' '}
                  <button
                    type="button"
                    onClick={onShowOffer}
                    className="text-synergy-red hover:underline font-semibold"
                  >
                    Договора оферты
                  </button>
                </label>
              </div>
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase text-sm sm:text-base md:text-lg py-5 sm:py-6 flex items-center justify-center"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.agree || isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Купить билет от 1,000 ₽'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;