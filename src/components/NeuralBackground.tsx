import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  brightness: number;
  brightnessSpeed: number;
  color: string;
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

const NeuralBackground = () => {
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

    const initNodes = () => {
      nodes = [];
      const nodeCount = 30;
      
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * (canvas.width * 0.35);
        const y = canvas.height * 0.5 + Math.random() * (canvas.height * 0.5);
        
        const colors = ['#00d4ff', '#a855f7', '#ffffff'];
        
        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 2 + Math.random() * 2.5,
          brightness: Math.random(),
          brightnessSpeed: 0.008 + Math.random() * 0.015,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const dataSymbols = ['1', '0', 'AI', '∑', '→', '%', '📊', '▲', '●', '■', 'ML', 'NN', '{', '}', '<', '>', 'Σ', 'π'];
    const dataColors = ['#00d4ff', '#ede3c0', '#a855f7', '#ffffff'];

    const createDataParticle = (): DataParticle => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        text: dataSymbols[Math.floor(Math.random() * dataSymbols.length)],
        size: 14 + Math.random() * 14,
        opacity: 0.2 + Math.random() * 0.4,
        speed: 0.4 + Math.random() * 0.7,
        drift: (Math.random() - 0.5) * 0.5,
        color: dataColors[Math.floor(Math.random() * dataColors.length)]
      };
    };

    const initDataParticles = () => {
      dataParticles = [];
      for (let i = 0; i < 20; i++) {
        const particle = createDataParticle();
        particle.y = Math.random() * canvas.height;
        dataParticles.push(particle);
      }
    };

    initNodes();
    initDataParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 15, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width * 0.35) node.vx *= -1;
        if (node.y < canvas.height * 0.5 || node.y > canvas.height) node.vy *= -1;

        node.brightness += node.brightnessSpeed;
        if (node.brightness > 1 || node.brightness < 0.3) {
          node.brightnessSpeed *= -1;
        }

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
        const alpha = 0.2 + node.brightness * 0.5;
        
        gradient.addColorStop(0, `${node.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.4, `${node.color}44`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            const opacity = (1 - distance / 160) * 0.4;
            
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, `rgba(239, 68, 68, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity})`);
            gradient.addColorStop(1, `rgba(0, 212, 255, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      dataParticles.forEach((particle, index) => {
        particle.y -= particle.speed;
        particle.x += particle.drift;

        if (particle.y < -50) {
          dataParticles[index] = createDataParticle();
        }

        ctx.font = `bold ${particle.size}px 'Courier New', monospace`;
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.textAlign = 'center';
        ctx.shadowBlur = 8;
        ctx.shadowColor = particle.color;
        ctx.fillText(particle.text, particle.x, particle.y);
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default NeuralBackground;
