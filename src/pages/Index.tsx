import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import NeuralBackground from '@/components/NeuralBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramSection from '@/components/sections/ProgramSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import RegistrationSection from '@/components/sections/RegistrationSection';

const Index = () => {
  const [seatsLeft, setSeatsLeft] = useState(257);

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
      <HeroSection seatsLeft={seatsLeft} scrollToForm={scrollToForm} />
      <AboutSection />
      <ProgramSection />
      <SpeakersSection />
      <RegistrationSection seatsLeft={seatsLeft} scrollToForm={scrollToForm} />
    </div>
  );
};

export default Index;