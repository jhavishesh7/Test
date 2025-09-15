import React, { useEffect, useState } from 'react';

export const InteractiveCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], .hover-cursor');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateCursorPos);

    return () => {
      window.removeEventListener('mousemove', updateCursorPos);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 10,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.2s ease',
        }}
      >
        <div className="w-5 h-5 bg-red-500 rounded-full opacity-80" />
      </div>
      
      {/* Trailing cursor */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: cursorPos.x - 20,
          top: cursorPos.y - 20,
          transform: `scale(${isHovering ? 2 : 1})`,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          opacity: isHovering ? 0.3 : 0.1,
        }}
      >
        <div className="w-10 h-10 border-2 border-red-500 rounded-full" />
      </div>
    </>
  );
};