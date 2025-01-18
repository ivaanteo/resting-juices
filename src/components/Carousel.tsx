import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images?: string[];
  imageAspect?: 'portrait' | 'landscape' | 'square';
  autoPlayInterval?: number;
}

const ImageCarousel = ({
  images = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
  ],
  imageAspect = 'landscape',
  autoPlayInterval = 5000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchMove, setTouchMove] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create array with cloned elements for infinite scroll
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleSlideChange = useCallback((newIndex: number) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(images.length); // reset without a transition
    } else if (currentIndex === extendedImages.length - 1) {
      setCurrentIndex(1); // reset without a transition
    }
  }, [currentIndex, images.length, extendedImages.length]);

  const handlePrevious = useCallback(() => {
    if (!isTransitioning) {
      handleSlideChange(currentIndex - 1);
    }
  }, [currentIndex, isTransitioning, handleSlideChange]);

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      handleSlideChange(currentIndex + 1);
    }
  }, [currentIndex, isTransitioning, handleSlideChange]);

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      handleSlideChange(index + 1);
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    setTouchMove(currentTouch);

    // Prevent default scrolling when swiping
    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }

    // Apply direct transform during swipe
    if (containerRef.current && !isTransitioning) {
      const movePercent = (diff / containerRef.current.offsetWidth) * 100;
      containerRef.current.style.transform = `translateX(${
        -currentIndex * 100 - movePercent
      }%)`;
    }
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchMove === null) return;

    const diff = touchStart - touchMove;
    const threshold = window.innerWidth * 0.15; // 15% of screen width

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    } else {
      // Reset position if threshold not met
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;
        containerRef.current.style.transition = "transform 500ms ease-in-out";
      }
    }

    setTouchStart(null);
    setTouchMove(null);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (touchStart === null) return;

    const diff = touchStart - e.clientX;

    setTouchMove(e.clientX);

    // Apply direct transform during drag
    if (containerRef.current && !isTransitioning) {
      const movePercent = (diff / containerRef.current.offsetWidth) * 100;
      containerRef.current.style.transform = `translateX(${
        -currentIndex * 100 - movePercent
      }%)`;
    }
  };

  const handleDragEnd = () => {
    if (touchStart === null || touchMove === null) return;

    const diff = touchStart - touchMove;
    const threshold = window.innerWidth * 0.15; // 15% of screen width

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    } else {
      // Reset position if threshold not met
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;
        containerRef.current.style.transition = "transform 500ms ease-in-out";
      }
    }

    setTouchStart(null);
    setTouchMove(null);
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    if (touchStart !== null) {
      handleDragEnd();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning && touchStart === null) {
        handleNext();
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, isTransitioning, handleNext, touchStart]);

  return (
    <div className="relative w-full mx-auto">
      <div
        className="relative overflow-hidden rounded-lg touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleMouseLeave}
      >
        {/* Images container */}
        <div
          ref={containerRef}
          className="flex h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 500ms ease-in-out"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover select-none ${imageAspect == "square" ? "aspect-square" : imageAspect == "portrait" ? "aspect-[9/16]" : "aspect-[16/9]"}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors hidden md:block"
        >
          <ChevronLeft scale={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors hidden md:block"
        >
          <ChevronRight scale={24} />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex - 1
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
