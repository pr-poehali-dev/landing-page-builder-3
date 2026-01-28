import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import RegistrationForm from './registration/RegistrationForm';
import FAQSection from './registration/FAQSection';
import CTASection from './registration/CTASection';
import PolicyDialogs from './registration/PolicyDialogs';

interface RegistrationSectionProps {
  seatsLeft: number;
  scrollToForm: () => void;
}

const RegistrationSection = ({ seatsLeft, scrollToForm }: RegistrationSectionProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agree: false });
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.agree) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля и примите соглашение',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/1bd67ebf-4078-4be6-ae31-280ee878794e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', agree: false });
      } else {
        throw new Error(data.error || 'Не удалось отправить заявку');
      }
    } catch (error) {
      toast({
        title: 'Ошибка отправки',
        description: error instanceof Error ? error.message : 'Попробуйте позже или свяжитесь с нами по телефону',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div id="registration">
        <RegistrationForm
          seatsLeft={seatsLeft}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          onShowPrivacy={() => setShowPrivacy(true)}
          onShowOffer={() => setShowOffer(true)}
        />
      </div>

      <FAQSection />

      <CTASection seatsLeft={seatsLeft} scrollToForm={scrollToForm} />

      <PolicyDialogs
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        showPrivacy={showPrivacy}
        setShowPrivacy={setShowPrivacy}
        showOffer={showOffer}
        setShowOffer={setShowOffer}
      />
    </>
  );
};

export default RegistrationSection;