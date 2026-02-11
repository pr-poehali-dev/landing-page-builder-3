import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import NeuralBackground from '@/components/NeuralBackground';
import BurgerMenu from '@/components/BurgerMenu';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/components/sections/HeroSection';
import CoOrganizerSection from '@/components/sections/CoOrganizerSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramSection from '@/components/sections/ProgramSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import AudienceSection from '@/components/sections/AudienceSection';
import RegistrationSection from '@/components/sections/RegistrationSection';

const Index = () => {
  const [seatsLeft, setSeatsLeft] = useState(180);

  useScrollAnimation();

  useEffect(() => {
    document.title = 'ИИ ШОУ БЕЗ ШИРМЫ | Владивосток';
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return prev;
        }
        return prev - 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-synergy-beige relative">
      <NeuralBackground />
      <BurgerMenu />
      <ScrollToTop />
      <HeroSection seatsLeft={seatsLeft} scrollToForm={scrollToForm} />
      <CoOrganizerSection />
      <AudienceSection id="audience" />
      <BenefitsSection />
      <AboutSection id="about" scrollToForm={scrollToForm} />
      <ProgramSection id="program" />
      <SpeakersSection id="speakers" />
      <SponsorsSection id="sponsors" />
      <RegistrationSection seatsLeft={seatsLeft} scrollToForm={scrollToForm} />
    </div>
  );
};

export default Index;