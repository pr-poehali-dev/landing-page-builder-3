interface HeroSectionProps {
  scrollToForm: () => void;
}

// Neural network doodle illustration (right side) — SVG inline
const NeuralIllustration = () => (
  <svg viewBox="0 0 420 420" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    {/* Network lines */}
    <g stroke="#7CC400" strokeWidth="1.5" opacity="0.55">
      <line x1="210" y1="210" x2="100" y2="130" />
      <line x1="210" y1="210" x2="320" y2="120" />
      <line x1="210" y1="210" x2="340" y2="230" />
      <line x1="210" y1="210" x2="300" y2="330" />
      <line x1="210" y1="210" x2="110" y2="310" />
      <line x1="210" y1="210" x2="80"  y2="220" />
      <line x1="100" y1="130" x2="320" y2="120" />
      <line x1="320" y1="120" x2="340" y2="230" />
      <line x1="340" y1="230" x2="300" y2="330" />
      <line x1="300" y1="330" x2="110" y2="310" />
      <line x1="110" y1="310" x2="80"  y2="220" />
      <line x1="80"  y1="220" x2="100" y2="130" />
    </g>

    {/* Center person — simple doodle */}
    {/* Body */}
    <ellipse cx="210" cy="310" rx="38" ry="55" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Head */}
    <circle cx="210" cy="215" r="32" fill="none" stroke="#1a1a1a" strokeWidth="2.5"/>
    {/* Face — minimal */}
    <circle cx="200" cy="212" r="3" fill="#1a1a1a"/>
    <circle cx="220" cy="212" r="3" fill="#1a1a1a"/>
    <path d="M200 226 Q210 234 220 226" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Arms */}
    <path d="M172 295 Q148 310 138 340" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M248 295 Q272 310 282 340" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Colorful sleeve detail on right arm */}
    <path d="M252 305 Q264 318 270 335" stroke="#7CC400" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
    <path d="M258 308 Q268 322 274 338" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    <path d="M255 312 Q262 328 266 342" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    {/* Crossed arms line */}
    <path d="M172 305 Q210 290 248 305" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>

    {/* Network nodes with labels */}
    {/* ChatGPT node */}
    <g className="node-pulse" style={{ animationDelay: '0s' }}>
      <circle cx="100" cy="130" r="22" fill="white" stroke="#7CC400" strokeWidth="2"/>
      <text x="100" y="126" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">Chat</text>
      <text x="100" y="137" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">GPT</text>
    </g>
    <text x="100" y="108" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="Inter" fontWeight="700">ChatGPT</text>

    {/* Midjourney node */}
    <g className="node-pulse" style={{ animationDelay: '0.4s' }}>
      <circle cx="330" cy="118" r="22" fill="white" stroke="#7CC400" strokeWidth="2"/>
      <text x="330" y="114" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">Mid</text>
      <text x="330" y="125" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">journey</text>
    </g>
    <text x="330" y="96" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="Inter" fontWeight="700">Midjourney</text>

    {/* DALL-E node */}
    <g className="node-pulse" style={{ animationDelay: '0.8s' }}>
      <circle cx="78" cy="222" r="22" fill="white" stroke="#7CC400" strokeWidth="2"/>
      <text x="78" y="218" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">DALL</text>
      <text x="78" y="229" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">·E</text>
    </g>
    <text x="44" y="222" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="Inter" fontWeight="700">DALL-E</text>

    {/* Kling node */}
    <g className="node-pulse" style={{ animationDelay: '1.2s' }}>
      <circle cx="345" cy="232" r="22" fill="white" stroke="#7CC400" strokeWidth="2"/>
      <text x="345" y="228" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">Kling</text>
      <text x="345" y="239" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="Inter">AI</text>
    </g>
    <text x="380" y="232" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="Inter" fontWeight="700">Kling</text>

    {/* Sora node */}
    <g className="node-pulse" style={{ animationDelay: '1.6s' }}>
      <circle cx="305" cy="335" r="22" fill="white" stroke="#7CC400" strokeWidth="2"/>
      <text x="305" y="331" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">Sora</text>
      <text x="305" y="342" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="Inter">AI</text>
    </g>
    <text x="340" y="360" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="Inter" fontWeight="700">Sora</text>

    {/* Veo node */}
    <g className="node-pulse" style={{ animationDelay: '2s' }}>
      <circle cx="108" cy="312" r="22" fill="white" stroke="#7CC400" strokeWidth="2"/>
      <text x="108" y="308" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="Inter" fontWeight="600">Veo</text>
      <text x="108" y="319" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="Inter">3</text>
    </g>
    <text x="72" y="355" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="Inter" fontWeight="700">Veo</text>
  </svg>
);

const HeroSection = ({ scrollToForm }: HeroSectionProps) => {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">

        {/* Top label */}
        <div className="mb-6 fade-up" style={{ animationDelay: '0s' }}>
          <span
            className="inline-block border-2 border-[#7CC400] text-[#1a1a1a] text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full"
          >
            ДВУХДНЕВНЫЙ ОФЛАЙН-ВОРКШОП ВО ВЛАДИВОСТОКЕ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* LEFT — text content */}
          <div className="flex flex-col">

            {/* Main heading */}
            <h1
              className="font-doodle font-bold leading-[0.9] mb-5 fade-up text-[#1a1a1a]"
              style={{
                fontSize: 'clamp(3.8rem, 10vw, 7rem)',
                animationDelay: '0.1s',
              }}
            >
              <span className="block" style={{ transform: 'rotate(-1deg)', display: 'inline-block' }}>
                Картиночки
              </span>
              <span
                className="block"
                style={{
                  transform: 'rotate(0.8deg)',
                  display: 'inline-block',
                  color: '#7CC400',
                }}
              >
                и Видосики
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[#1a1a1a]/70 text-base sm:text-lg leading-relaxed mb-7 max-w-lg fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Два дня живой практики по визуальным нейросетям и AI-видео, где ты наконец поймёшь, как делать картинки, нейрофотосессии, карточки товаров, постеры и видео-контент — а не просто смотреть, как это делают другие.
            </p>

            {/* Bullet icons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              {[
                { icon: '🗓', label: '2 дня', sub: 'с 11:00 до 18:00' },
                { icon: '🎨', label: 'День 1', sub: 'фото и нейросети' },
                { icon: '🎬', label: 'День 2', sub: 'AI-видео' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-[#1a1a1a] leading-tight">{item.label}</div>
                    <div className="text-xs text-[#1a1a1a]/55 leading-tight">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 mb-5 fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                onClick={scrollToForm}
                className="btn-bounce inline-flex items-center justify-center gap-2 bg-[#7CC400] text-white font-bold text-base px-7 py-4 rounded-full border-2 border-[#7CC400] hover:bg-[#6aaa00] hover:border-[#6aaa00] transition-colors duration-200 shadow-sm"
              >
                Забронировать место
              </button>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] font-semibold text-base px-7 py-4 rounded-full border-2 border-[#1a1a1a]/20 hover:border-[#7CC400] transition-colors duration-200"
              >
                {/* Play icon */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#1a1a1a]/30 flex-shrink-0">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 ml-0.5" fill="#1a1a1a">
                    <polygon points="4,2 14,8 4,14" />
                  </svg>
                </span>
                Получить программу
              </button>
            </div>

            {/* Sub-note */}
            <p
              className="text-[#1a1a1a]/40 text-sm fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              Подходит даже тем, кто пока только "что-то слышал про нейросети"
            </p>

            {/* Stats row */}
            <div
              className="flex gap-8 mt-10 pt-8 border-t border-[#1a1a1a]/10 fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              {[
                { num: '2', label: 'дня практики' },
                { num: '8+', label: 'AI-инструментов' },
                { num: '1', label: 'город — Владивосток' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-doodle font-bold text-3xl sm:text-4xl text-[#7CC400] leading-none">{s.num}</div>
                  <div className="text-xs sm:text-sm text-[#1a1a1a]/55 leading-snug mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — neural illustration */}
          <div
            className="relative flex items-center justify-center h-72 sm:h-96 lg:h-[480px] fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <NeuralIllustration />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
