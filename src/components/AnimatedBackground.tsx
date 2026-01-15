import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
  brightnessSpeed: number;
}

interface DataParticle {
  x: number;
  y: number;
  text: string;
  size: number;
  opacity: number;
  speed: number;
  drift: number;
  color: string;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let dataParticles: DataParticle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Инициализация узлов нейросети (концентрация в левой нижней части)
    const initNodes = () => {
      nodes = [];
      const nodeCount = 25;
      
      for (let i = 0; i < nodeCount; i++) {
        // Концентрация узлов в левой нижней части (30% ширины, 60% высоты от низа)
        const x = Math.random() * (canvas.width * 0.4);
        const y = canvas.height * 0.4 + Math.random() * (canvas.height * 0.6);
        
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2 + Math.random() * 3,
          brightness: Math.random(),
          brightnessSpeed: 0.01 + Math.random() * 0.02
        });
      }
    };

    // Инициализация плывущих данных
    const dataSymbols = ['1', '0', 'AI', '∑', '→', '%', '📊', '▲', '●', '■', 'ML', 'NN'];
    const dataColors = ['#00d4ff', '#f5e6d3', '#a855f7'];

    const createDataParticle = (): DataParticle => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        text: dataSymbols[Math.floor(Math.random() * dataSymbols.length)],
        size: 12 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.3,
        speed: 0.3 + Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 0.4,
        color: dataColors[Math.floor(Math.random() * dataColors.length)]
      };
    };

    const initDataParticles = () => {
      dataParticles = [];
      for (let i = 0; i < 15; i++) {
        const particle = createDataParticle();
        particle.y = Math.random() * canvas.height;
        dataParticles.push(particle);
      }
    };

    initNodes();
    initDataParticles();

    // Анимация
    const animate = () => {
      ctx.fillStyle = '#0f0f0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Обновление и отрисовка узлов
      nodes.forEach(node => {
        // Обновление позиции с ограничением движения
        node.x += node.vx;
        node.y += node.vy;

        // Ограничение движения в пределах левой нижней части
        if (node.x < 0 || node.x > canvas.width * 0.4) node.vx *= -1;
        if (node.y < canvas.height * 0.4 || node.y > canvas.height) node.vy *= -1;

        // Пульсация яркости
        node.brightness += node.brightnessSpeed;
        if (node.brightness > 1 || node.brightness < 0) {
          node.brightnessSpeed *= -1;
        }

        // Отрисовка узла
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        const alpha = 0.3 + node.brightness * 0.5;
        
        // Чередование цветов узлов
        const color = Math.random() > 0.5 ? '#00d4ff' : '#a855f7';
        gradient.addColorStop(0, `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${color}33`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Ядро узла
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Отрисовка линий между узлами
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;
            
            // Градиент от красного к синему
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, `rgba(255, 80, 80, ${opacity})`);
            gradient.addColorStop(1, `rgba(0, 212, 255, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Обновление и отрисовка плывущих данных
      dataParticles.forEach((particle, index) => {
        particle.y -= particle.speed;
        particle.x += particle.drift;

        // Перезапуск частицы снизу
        if (particle.y < -50) {
          dataParticles[index] = createDataParticle();
        }

        // Отрисовка текста данных
        ctx.font = `bold ${particle.size}px 'Courier New', monospace`;
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.textAlign = 'center';
        ctx.fillText(particle.text, particle.x, particle.y);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#0f0f0f' }}
    />
  );
};

export default AnimatedBackground;
