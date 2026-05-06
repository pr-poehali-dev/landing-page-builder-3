import { useRef } from 'react';
import HeroSection from '@/components/sections/HeroSection';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection scrollToForm={scrollToForm} />
      <div ref={formRef} />
    </div>
  );
};

export default Index;
