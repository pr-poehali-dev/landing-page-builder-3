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
import GeneralSponsorSection from '@/components/sections/GeneralSponsorSection';
import AudienceSection from '@/components/sections/AudienceSection';
import PlenarySection from '@/components/sections/PlenarySection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import CountdownSection from '@/components/sections/CountdownSection';
import GiveawaySection from '@/components/sections/GiveawaySection';

const Index = () => {
  const [seatsLeft, setSeatsLeft] = useState(187);

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
      <CountdownSection scrollToForm={scrollToForm} />
      <SpeakersSection id="speakers" />
      <PlenarySection id="plenary" />
      <GeneralSponsorSection id="general-sponsor" />
      <SponsorsSection id="sponsors" />
      <GiveawaySection scrollToForm={scrollToForm} />
      <BenefitsSection />
      <ProgramSection id="program" />
      <AudienceSection id="audience" />
      <AboutSection id="about" scrollToForm={scrollToForm} />
      <CoOrganizerSection />
      <RegistrationSection seatsLeft={seatsLeft} scrollToForm={scrollToForm} />
    </div>
  );
};

export default Index;