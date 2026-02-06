import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 15));
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(180, 70%, 50%, ${particle.opacity})`;
      ctx.fill();
    };

    const drawConnections = () => {
      if (!ctx) return;
      const particles = particlesRef.current;
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(180, 70%, 50%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const dx = particles[i].x - mouseRef.current.x;
        const dy = particles[i].y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200 && mouseRef.current.x > 0) {
          const opacity = (1 - distance / 200) * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `hsla(160, 60%, 45%, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -1;
      }

      // Keep in bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(canvas.height, particle.y));
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      drawConnections();

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticlesBackground;
