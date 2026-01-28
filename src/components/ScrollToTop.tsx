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
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-synergy-beige/10 backdrop-blur-sm border border-synergy-beige/30 text-synergy-beige hover:bg-synergy-beige/20 hover:border-synergy-beige/50 transition-all duration-300 animate-bounce"
        aria-label="Наверх"
      >
        <Icon name="Mouse" size={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

export default ScrollToTop;