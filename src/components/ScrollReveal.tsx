'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in' | '3d-flip';
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 850,
  threshold = 0.1,
  className = '',
  style = {},
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 48px, 0) scale(0.96)';
      case 'fade-down':
        return 'translate3d(0, -48px, 0) scale(0.96)';
      case 'fade-left':
        return 'translate3d(50px, 0, 0) scale(0.98)';
      case 'fade-right':
        return 'translate3d(-50px, 0, 0) scale(0.98)';
      case 'zoom-in':
        return 'scale3d(0.88, 0.88, 1)';
      case '3d-flip':
        return 'perspective(1000px) rotateX(16deg) translate3d(0, 50px, -30px)';
      default:
        return 'translate3d(0, 30px, 0)';
    }
  };

  const getFilter = () => {
    if (isVisible) return 'blur(0px)';
    return 'blur(8px)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: getFilter(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
}
