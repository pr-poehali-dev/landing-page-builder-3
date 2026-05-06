interface HeroSectionProps {
  scrollToForm: () => void;
}

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  return (
    <section className="relative bg-white w-full">
      {/* Hero image — full width, pixel-perfect */}
      <div className="relative w-full">
        <img
          src="https://cdn.poehali.dev/files/f1e02912-9abd-4b49-b1d5-4a2f048122c5.png"
          alt="Картиночки и Видосики — воркшоп по нейросетям"
          className="w-full h-auto block"
          style={{ maxHeight: '100vh', objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Invisible CTA overlay — кнопки поверх картинки */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-10">
          <button
            onClick={scrollToForm}
            className="bg-black text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-neutral-800 transition-colors shadow-lg"
          >
            Забронировать место
          </button>
          <button
            onClick={scrollToForm}
            className="bg-white text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-black hover:bg-neutral-100 transition-colors shadow-lg"
          >
            Получить программу
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
