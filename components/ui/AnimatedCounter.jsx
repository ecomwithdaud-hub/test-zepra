"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ target, duration = 1600, suffix = "" }) {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return undefined;

    let frameId;
    let hasStarted = false;

    const startCounting = () => {
      if (hasStarted) return;
      hasStarted = true;
      const startTime = performance.now();
      const safeDuration = Math.max(0, duration);

      const updateCount = (now) => {
        const progress = safeDuration === 0
          ? 1
          : Math.min((now - startTime) / safeDuration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        setCount(target * easedProgress);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      frameId = window.requestAnimationFrame(updateCount);
    };

    if (!("IntersectionObserver" in window)) {
      startCounting();
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [duration, target]);

  const decimalPlaces = String(target).split(".")[1]?.length ?? 0;
  const displayedCount = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: decimalPlaces,
  }).format(count);

  return (
    <span ref={counterRef} className="tabular-nums">
      {displayedCount}{suffix}
    </span>
  );
}
