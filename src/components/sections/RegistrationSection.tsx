import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface RegistrationSectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const RegistrationSection = ({ seatsLeft, scrollToForm }: RegistrationSectionProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agree: false });
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  return (
    <>
      <section id="registration" className="py-16 px-6 bg-synergy-beige relative z-10 animate-on-scroll-scale">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-black text-center mb-6 text-synergy-dark px-4">
            ЗАБРОНИРОВАТЬ МЕСТО
          </h2>
          <div className="text-center mb-8">
            <Badge className="text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 bg-synergy-red text-synergy-beige mb-4">
              Осталось {seatsLeft} мест из 300
            </Badge>
            <p className="text-synergy-dark/70 mb-2 text-sm sm:text-base">Стоимость билета: <span className="font-bold text-xl sm:text-2xl text-synergy-red">от 1,000 ₽</span></p>
            <p className="text-synergy-dark/60 text-sm">100% средств передаются в «Живая Надежда»</p>
          </div>
          
          <Card className="bg-synergy-dark">
            <CardContent className="p-4 sm:p-6 md:p-8">
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
                    Я согласен на{' '}
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className="text-synergy-red hover:underline font-semibold"
                    >
                      обработку персональных данных
                    </button>
                    {' '}и принимаю условия{' '}
                    <button
                      type="button"
                      onClick={() => setShowOffer(true)}
                      className="text-synergy-red hover:underline font-semibold"
                    >
                      Договора оферты
                    </button>
                  </label>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-synergy-red text-synergy-beige hover:bg-synergy-red/90 font-bold uppercase text-base sm:text-lg py-5 sm:py-6"
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
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 text-synergy-beige px-4">
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
                <AccordionTrigger className="px-4 sm:px-6 py-4 text-left font-heading text-base sm:text-lg font-bold text-synergy-dark hover:text-synergy-red">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-synergy-dark/80 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 px-6 bg-synergy-red relative z-10 animate-on-scroll-scale">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-synergy-beige px-4">
            НЕ УПУСТИ ВОЗМОЖНОСТЬ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-synergy-beige/90 mb-8 px-4">
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

      {/* Модальное окно политики конфиденциальности */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="bg-synergy-beige text-synergy-dark max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-black text-synergy-red flex items-center gap-2">
              <Icon name="Shield" size={28} />
              Политика конфиденциальности
            </DialogTitle>
            <DialogDescription className="text-synergy-dark/70">
              Обработка и защита персональных данных
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-synergy-dark/90 leading-relaxed">
            <p className="text-center text-synergy-dark/60 italic">
              Здесь будет размещена политика конфиденциальности
            </p>
            <p>
              Текст политики конфиденциальности будет добавлен позже.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Модальное окно договора оферты */}
      <Dialog open={showOffer} onOpenChange={setShowOffer}>
        <DialogContent className="bg-synergy-beige text-synergy-dark max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl font-black text-synergy-red flex items-center gap-2">
              <Icon name="FileText" size={28} />
              Договор оферты
            </DialogTitle>
            <DialogDescription className="text-synergy-dark/70">
              Условия предоставления услуг
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-synergy-dark/90 leading-relaxed">
            <p className="text-center text-synergy-dark/60 italic">
              Здесь будет размещен договор оферты
            </p>
            <p>
              Текст договора оферты будет добавлен позже.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegistrationSection;