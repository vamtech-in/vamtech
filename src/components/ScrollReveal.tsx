'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';
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
  duration = 700,
  threshold = 0.12,
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
        rootMargin: '0px 0px -50px 0px',
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
        return 'translateY(36px)';
      case 'fade-down':
        return 'translateY(-36px)';
      case 'fade-left':
        return 'translateX(40px)';
      case 'fade-right':
        return 'translateX(-40px)';
      case 'zoom-in':
        return 'scale(0.92)';
      default:
        return 'translateY(24px)';
    }
  };

  const getFilter = () => {
    if (animation === 'blur-in') {
      return isVisible ? 'blur(0px)' : 'blur(10px)';
    }
    return 'none';
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
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
