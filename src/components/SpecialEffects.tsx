import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Smooth wrapping
          if (newX > window.innerWidth) newX = 0;
          if (newX < 0) newX = window.innerWidth;
          if (newY > window.innerHeight) newY = 0;
          if (newY < 0) newY = window.innerHeight;
          
          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-red-500 transition-all duration-300 ease-linear"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: trailId++ };
      
      setTrail(prev => {
        const newTrail = [...prev, newPoint];
        return newTrail.slice(-10); // Keep only last 10 points
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up old trail points
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-red-500 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export const GradientOrb: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute rounded-full gradient-bg opacity-20 blur-xl ${className}`} 
         style={{
           background: 'radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(255,68,68,0.2) 50%, transparent 100%)',
           animation: 'float 6s ease-in-out infinite, gradient-shift 8s ease infinite',
         }} 
    />
  );
};export 
const ScrollParticles: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create static particles that move with scroll
  const staticParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {staticParticles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-red-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translateY(${scrollY * particle.speed}px) translateZ(0)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export const InteractiveParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(newParticles);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setParticles(prev => 
        prev.map(particle => {
          const dx = e.clientX - particle.x;
          const dy = e.clientY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            // Repel particles from cursor
            const force = (150 - distance) / 150;
            const angle = Math.atan2(dy, dx);
            return {
              ...particle,
              targetX: particle.x - Math.cos(angle) * force * 50,
              targetY: particle.y - Math.sin(angle) * force * 50,
            };
          }
          return particle;
        })
      );
    };

    // Animate particles towards targets
    const animate = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + (particle.targetX - particle.x) * 0.05,
          y: particle.y + (particle.targetY - particle.y) * 0.05,
        }))
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(animate, 16);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-red-300 transition-all duration-75 ease-out"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translateZ(0)',
          }}
        />
      ))}
    </div>
  );
};