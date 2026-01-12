import { useEffect, useRef } from 'react';

const CyberpunkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const gridLines: Array<{ y: number; opacity: number }> = [];
    for (let i = 0; i < 20; i++) {
      gridLines.push({
        y: Math.random() * canvas.height,
        opacity: Math.random() * 0.3
      });
    }

    let glitchTimer = 0;
    let glitchActive = false;

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 0, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      gridLines.forEach(line => {
        line.y += 0.2;
        if (line.y > canvas.height) line.y = 0;
        
        ctx.strokeStyle = `rgba(255, 68, 68, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(canvas.width, line.y);
        ctx.stroke();
      });

      ctx.fillStyle = '#FF4444';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const gradient = ctx.createLinearGradient(x, y - fontSize * 10, x, y);
        gradient.addColorStop(0, 'rgba(255, 68, 68, 0)');
        gradient.addColorStop(0.5, 'rgba(255, 68, 68, 0.8)');
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0.9)');
        
        ctx.fillStyle = gradient;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }

      glitchTimer++;
      if (glitchTimer > 120 && !glitchActive) {
        glitchActive = true;
        glitchTimer = 0;
      }

      if (glitchActive && glitchTimer < 10) {
        const glitchHeight = 5;
        const glitchY = Math.random() * canvas.height;
        
        ctx.fillStyle = `rgba(255, 68, 68, ${Math.random() * 0.3})`;
        ctx.fillRect(0, glitchY, canvas.width, glitchHeight);
        
        ctx.fillStyle = `rgba(34, 197, 94, ${Math.random() * 0.3})`;
        ctx.fillRect(0, glitchY + glitchHeight, canvas.width, glitchHeight);
        
        ctx.fillStyle = `rgba(14, 165, 233, ${Math.random() * 0.3})`;
        ctx.fillRect(0, glitchY + glitchHeight * 2, canvas.width, glitchHeight);
      } else if (glitchTimer > 10) {
        glitchActive = false;
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,68,68,0.1),transparent_50%)] pointer-events-none z-0" />
    </>
  );
};

export default CyberpunkBackground;