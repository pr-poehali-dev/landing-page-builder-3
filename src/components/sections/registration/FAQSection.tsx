import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
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
  ];

  return (
    <section className="py-16 px-6 bg-synergy-dark relative z-10 animate-on-scroll">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 text-synergy-beige px-4">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
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
  );
};

export default FAQSection;
