"use client";

import { useEffect, useRef, useState } from "react";

export function TechCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rippleRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return undefined;

    setEnabled(true);

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let frameId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant pinpoint tracking for the micro-dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered elements
      const target = e.target;
      if (target instanceof Element) {
        const customCursorEl = target.closest("[data-cursor]");
        const customText = customCursorEl?.getAttribute("data-cursor") || "";
        setCursorLabel(customText);

        const isInput = Boolean(
          target.closest('input, textarea, select, [contenteditable="true"]')
        );
        setIsTextMode(isInput);

        const isInteractive = Boolean(
          customText ||
            target.closest(
              'a, button, [role="button"], input[type="submit"], input[type="button"], label, .interactive-cursor'
            )
        );
        setIsHovered(isInteractive && !isInput);
      } else {
        setCursorLabel("");
        setIsHovered(false);
        setIsTextMode(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth fluid lerp animation for the outer luxury ring
    const animate = () => {
      // 0.16 lerp factor provides fluid momentum without excessive lag
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      if (rippleRef.current) {
        rippleRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
    >
      {/* Precision Micro-Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-[3.5px] -mt-[3.5px] h-[7px] w-[7px] rounded-full bg-white will-change-transform transition-[opacity,transform] duration-150 ${
          isTextMode || cursorLabel
            ? "scale-0 opacity-0"
            : isHovered
            ? "scale-50 opacity-0"
            : isClicked
            ? "scale-75"
            : "scale-100 opacity-100"
        }`}
      />

      {/* Trailing Fluid Luxury Inverting Ring / Pill Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center will-change-transform transition-[width,height,margin,border-radius,background-color,border-color,box-shadow,transform] duration-200 ease-out ${
          isTextMode
            ? "scale-0 opacity-0"
            : cursorLabel
            ? "-ml-14 -mt-5 h-10 min-w-[112px] px-4 rounded-full bg-white text-black border-0 shadow-[0_0_30px_rgba(255,255,255,0.7)]"
            : isHovered
            ? "-ml-7 -mt-7 h-14 w-14 rounded-full bg-white border-0 shadow-[0_0_24px_rgba(255,255,255,0.4)]"
            : isClicked
            ? "-ml-4 -mt-4 h-8 w-8 rounded-full border border-white/90 bg-white/30"
            : "-ml-[17px] -mt-[17px] h-[34px] w-[34px] rounded-full border border-white/70 bg-transparent"
        }`}
      >
        {cursorLabel ? (
          <span className="font-display text-[10px] font-black uppercase tracking-[0.22em] text-slate-950 select-none">
            {cursorLabel}
          </span>
        ) : null}
      </div>

      {/* Click Micro-Ripple Wave */}
      <div
        ref={rippleRef}
        className={`fixed top-0 left-0 -ml-6 -mt-6 h-12 w-12 rounded-full border border-white/60 pointer-events-none will-change-transform transition-all duration-300 ease-out ${
          isClicked ? "scale-125 opacity-100" : "scale-50 opacity-0"
        }`}
      />
    </div>
  );
}
