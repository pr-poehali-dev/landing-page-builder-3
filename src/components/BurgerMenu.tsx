import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'О мероприятии', href: '#about' },
    { label: 'Программа', href: '#program' },
    { label: 'Спикеры', href: '#speakers' },
    { label: 'Пленарное заседание', href: '#plenary' },
    { label: 'Генеральные спонсоры', href: '#general-sponsor' },
    { label: 'Спонсоры', href: '#sponsors' },
    { label: 'Розыгрыш', href: '#giveaway' },
    { label: 'Для кого', href: '#audience' },
    { label: 'Организатор', href: '#about' },
    { label: 'Соорганизатор', href: '#coorganizer' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="bg-synergy-dark border-synergy-beige text-synergy-beige hover:bg-synergy-red hover:border-synergy-red w-12 h-12 sm:w-14 sm:h-14"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? 'X' : 'Menu'} size={24} className="sm:w-7 sm:h-7" />
        </Button>
      </div>

      <div
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-synergy-dark z-40 shadow-2xl transform transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-16 sm:pt-18">
          <div className="flex justify-center px-4 py-3">
            <img
              src="https://cdn.poehali.dev/projects/157f105d-82af-4a61-ac36-1c778148612d/bucket/c26f604f-d2da-4860-84e7-5d8cb9f07456.jpg"
              alt="ИИ ШОУ БЕЗ ШИРМЫ"
              className="h-10 sm:h-12 w-auto object-contain rounded-md"
            />
          </div>
          <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-2">
            {menuItems.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left text-synergy-beige hover:text-synergy-red font-heading text-sm sm:text-base font-bold uppercase transition-all py-2 border-b border-synergy-beige/20 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${idx * 60 + 80}ms` : '0ms',
                  transitionDuration: '400ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="px-4 sm:px-6 py-3 flex-shrink-0">
            <Button
              onClick={scrollToRegistration}
              className={`w-full bg-synergy-red hover:bg-synergy-red/90 text-synergy-beige font-heading text-sm font-black uppercase py-3 transition-all duration-500 flex items-center justify-center ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isOpen ? '700ms' : '0ms' }}
            >
              <Icon name="Ticket" size={18} className="mr-2 flex-shrink-0" />
              <span className="leading-tight">Купить билет и изменить жизнь</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;