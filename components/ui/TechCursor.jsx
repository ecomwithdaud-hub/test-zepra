"use client";

import { useEffect, useRef, useState } from "react";

export function TechCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

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
      if (target instanceof Element) {
        const customCursorEl = target.closest("[data-cursor]");
        const customText = customCursorEl?.getAttribute("data-cursor") || "";
        setCursorLabel(customText);

        const isInteractive = Boolean(
          customText ||
            target.closest(
              'a, button, input, select, textarea, [role="button"]'
            )
        );
        setHovered(isInteractive);
      } else {
        setCursorLabel("");
        setHovered(false);
      }
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
      {/* Trailing Cyber Ring / Context-Aware Pill Badge */}
      <div
        ref={ringRef}
        className={`flex items-center justify-center rounded-full border transition-all duration-200 will-change-transform ${
          cursorLabel
            ? "-ml-12 -mt-5 h-9 min-w-[92px] border-cyan-300 bg-cyan-400/95 px-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_28px_rgba(56,198,255,0.65)]"
            : hovered
            ? "-ml-7 -mt-7 h-14 w-14 border-cyan-400/80 bg-cyan-400/10 shadow-[0_0_20px_rgba(56,198,255,0.35)]"
            : "-ml-5 -mt-5 h-10 w-10 border-cyan-400/45 bg-transparent"
        }`}
      >
        {cursorLabel ? <span>{cursorLabel}</span> : null}
      </div>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`-ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38c6ff] transition-transform duration-150 will-change-transform ${
          cursorLabel
            ? "scale-0 opacity-0"
            : hovered
            ? "scale-150 bg-white"
            : "scale-100"
        }`}
      />
    </div>
  );
}
