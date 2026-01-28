import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / windowHeight) * 100;
      
      if (scrollPercentage > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
      <button
        onClick={scrollToTop}
        className="group flex flex-col items-center gap-2"
        aria-label="Наверх"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-synergy-red border-2 border-synergy-beige shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 scroll-to-top-float">
          <Icon name="Mouse" size={28} className="text-synergy-beige" />
        </div>
        <span className="text-synergy-beige text-xs font-bold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
          Наверх
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;