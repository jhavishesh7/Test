import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in' | 'slide-in-bottom';
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const delayClass = delay > 0 ? `animation-delay-${delay}` : '';
    return `animate-${animation} ${delayClass}`;
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};