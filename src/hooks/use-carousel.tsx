
import { useState, useCallback, useRef, useEffect } from "react";

interface UseCarouselProps {
  interval?: number;
  totalSlides: number;
  initialSlide?: number;
  autoPlay?: boolean;
}

export function useCarousel({
  interval = 5000,
  totalSlides,
  initialSlide = 0,
  autoPlay = true,
}: UseCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const timerRef = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Set up auto-play
  useEffect(() => {
    if (autoPlay) {
      timerRef.current = window.setInterval(nextSlide, interval);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, interval, nextSlide]);

  // Reset timer when manually changing slides
  const onSlideChange = useCallback((index: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    setCurrentSlide(index);
    
    if (autoPlay) {
      timerRef.current = window.setInterval(nextSlide, interval);
    }
  }, [autoPlay, interval, nextSlide]);

  return {
    currentSlide,
    goToSlide: onSlideChange,
    nextSlide,
    prevSlide,
  };
}
