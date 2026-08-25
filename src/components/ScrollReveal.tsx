'use client';

import React, { useEffect, useRef, useState } from 'react';

export type ScrollAnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'blur-in' 
  | 'tilt-in'
  | 'scale-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: ScrollAnimationType;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  distance?: number; // in px
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  distance = 36,
  className = '',
  style = {},
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold, once]);

  const getHiddenTransform = (): string => {
    switch (animation) {
      case 'fade-up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'fade-down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'fade-left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'fade-right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'zoom-in':
      case 'scale-up':
        return 'scale3d(0.92, 0.92, 1) translate3d(0, 16px, 0)';
      case 'tilt-in':
        return `perspective(1000px) rotateX(12deg) translate3d(0, ${distance}px, 0)`;
      case 'blur-in':
        return 'translate3d(0, 20px, 0)';
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  const getHiddenFilter = (): string => {
    if (animation === 'blur-in') {
      return 'blur(8px)';
    }
    return 'none';
  };

  // SSR or before mount: Render visible to prevent flash of blank content
  const activeHidden = hasMounted && !isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: activeHidden ? 0 : 1,
        transform: activeHidden ? getHiddenTransform() : 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
        filter: activeHidden ? getHiddenFilter() : 'blur(0px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: activeHidden ? 'opacity, transform, filter' : 'auto',
      }}
    >
      {children}
    </div>
  );
}

