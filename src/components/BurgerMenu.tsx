import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'О мероприятии', href: '#about' },
    { label: 'Программа', href: '#program' },
    { label: 'Спикеры', href: '#speakers' },
    { label: 'Спонсоры', href: '#sponsors' },
    { label: 'Для кого', href: '#audience' },
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
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="bg-synergy-dark border-synergy-beige text-synergy-beige hover:bg-synergy-red hover:border-synergy-red w-14 h-14"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? 'X' : 'Menu'} size={28} />
        </Button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-synergy-dark z-40 shadow-2xl transform transition-transform duration-300">
            <div className="flex flex-col h-full p-8 pt-24">
              <nav className="flex-1 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-synergy-beige hover:text-synergy-red font-heading text-xl font-bold uppercase transition-colors py-3 border-b border-synergy-beige/20"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <Button
                onClick={scrollToRegistration}
                className="w-full bg-synergy-red hover:bg-synergy-red/90 text-synergy-beige font-heading text-lg font-black uppercase py-6 mt-6"
              >
                <Icon name="Ticket" size={24} className="mr-2" />
                Купить билет
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BurgerMenu;
