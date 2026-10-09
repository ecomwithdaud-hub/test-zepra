"use client";

import { useEffect, useRef, useState } from "react";

export function TechCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return undefined;

    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let frameId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mouseX - 180}px, ${mouseY - 180}px, 0)`;
      }

      const target = e.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(
          target.closest(
            'a, button, input, select, textarea, [role="button"]'
          )
        );
      setHovered(isInteractive);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998] hidden overflow-hidden lg:block"
    >
      {/* Ambient Cyber Spotlight */}
      <div
        ref={glowRef}
        className="h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(56,198,255,0.09)_0%,rgba(18,119,255,0.04)_40%,transparent_70%)] will-change-transform"
      />
      {/* Trailing Cyber Ring */}
      <div
        ref={ringRef}
        className={`-ml-5 -mt-5 h-10 w-10 rounded-full border transition-[width,height,margin,border-color,background-color] duration-200 will-change-transform ${
          hovered
            ? "-ml-7 -mt-7 h-14 w-14 border-cyan-400/80 bg-cyan-400/10 shadow-[0_0_20px_rgba(56,198,255,0.35)]"
            : "border-cyan-400/45 bg-transparent"
        }`}
      />
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`-ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38c6ff] transition-transform duration-150 will-change-transform ${
          hovered ? "scale-150 bg-white" : "scale-100"
        }`}
      />
    </div>
  );
}
