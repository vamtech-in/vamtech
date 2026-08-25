'use client';

import React, { useState, useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = '',
  style = {},
  maxTilt = 8,
}: TiltCardProps) {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const tiltX = ((y / rect.height) - 0.5) * -maxTilt;
    const tiltY = ((x / rect.width) - 0.5) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({ x: xPercent, y: yPercent, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      {/* Dynamic Glare Specular Highlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4), transparent 60%)`,
          opacity: glarePosition.opacity,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}
