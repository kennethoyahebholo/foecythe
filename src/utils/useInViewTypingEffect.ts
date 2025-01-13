"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to handle typing effect only when an element is in view.
 * @param words - Array of words to display with the typing effect.
 * @param typingDelay - Delay in milliseconds between each word appearance.
 * @param threshold - Intersection observer threshold (default is 0.5).
 * @returns { visibleWords, ref } - `visibleWords` for controlling visibility and `ref` to attach to the observed element.
 */
const useInViewTypingEffect = (
  words: string[],
  typingDelay: number = 300,
  threshold: number = 0.5
) => {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const element = ref.current; // Copy ref.current to a local variable
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use the local variable for cleanup
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
      }, typingDelay);

      return () => clearInterval(interval);
    }
  }, [isInView, words.length, typingDelay]);

  return { visibleWords, ref };
};

export default useInViewTypingEffect;
