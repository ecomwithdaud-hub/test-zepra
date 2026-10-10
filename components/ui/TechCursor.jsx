"use client";

import { useEffect, useRef, useState } from "react";

export function TechCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let frameId = null;
    let hasMoved = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        setIsVisible(true);
        // Only hide the default OS cursor once custom cursor is verified active
        document.documentElement.classList.add("custom-cursor-active");
      }

      // Direct zero-delay tracking for the center element
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      if (target instanceof Element) {
        const customCursorEl = target.closest("[data-cursor]");
        const customText = customCursorEl?.getAttribute("data-cursor") || "";
        setCursorLabel(customText);

        const isInput = Boolean(
          target.closest(
            'input:not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]'
          )
        );
        setIsTextMode(isInput);

        const isInteractive = Boolean(
          customText ||
            target.closest(
              'a, button, [role="button"], input[type="submit"], input[type="button"], label, select, summary, .cursor-pointer, [data-clickable="true"]'
            )
        );
        setIsClickable(isInteractive && !isInput);
      } else {
        setCursorLabel("");
        setIsClickable(false);
        setIsTextMode(false);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      document.documentElement.classList.remove("custom-cursor-active");
    };

    const onMouseEnter = () => {
      if (hasMoved) {
        setIsVisible(true);
        document.documentElement.classList.add("custom-cursor-active");
      }
    };

    // Smooth physics loop for the outer circle/frame
    const animate = () => {
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
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
      document.documentElement.classList.remove("custom-cursor-active");
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999999] overflow-hidden transition-opacity duration-150 ${
        isVisible && !isTextMode ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out flex items-center justify-center ${
            isClickable
              ? "h-12 w-12 border-[2.5px] border-cyan-300 bg-cyan-400/25 shadow-[0_0_24px_rgba(6,182,212,0.85)] scale-110"
              : isMouseDown
              ? "h-7 w-7 border-2 border-cyan-400 bg-cyan-400/35 shadow-[0_0_16px_rgba(6,182,212,0.9)]"
              : "h-9 w-9 border-[2.5px] border-cyan-400 bg-cyan-400/15 shadow-[0_0_14px_rgba(6,182,212,0.6)]"
          }`}
          style={{
            filter:
              "drop-shadow(0 0 2px rgba(0,0,0,0.9)) drop-shadow(0 2px 6px rgba(0,0,0,0.8))",
          }}
        />
      </div>

      {/* Center Target (Circle-in-Circle ➔ Morph to + Sign on Hover/Click) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ transform: "translate3d(-200px, -200px, 0)" }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* 1. NORMAL MODE: Inner Solid Circle (making Circle in a Circle) */}
          <div
            className={`transition-all duration-150 ease-out flex items-center justify-center ${
              isClickable ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <div
              className={`rounded-full bg-cyan-300 ring-2 ring-slate-950 transition-all duration-150 ${
                isMouseDown ? "h-3.5 w-3.5 bg-white" : "h-2.5 w-2.5"
              }`}
              style={{
                boxShadow:
                  "0 0 10px #22d3ee, 0 0 4px #06b6d4, 0 1px 3px rgba(0,0,0,0.9)",
              }}
            />
          </div>

          {/* 2. CLICKABLE MODE: Morph into glowing bold + sign */}
          <div
            className={`absolute flex items-center justify-center transition-all duration-150 ease-out ${
              isClickable ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={`h-7 w-7 text-cyan-200 transition-transform duration-150 ease-out ${
                isMouseDown
                  ? "rotate-45 scale-90 text-white"
                  : "rotate-0 scale-100"
              }`}
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(6,182,212,1)) drop-shadow(0 2px 4px rgba(0,0,0,0.95))",
              }}
            >
              <line
                x1="12"
                y1="3"
                x2="12"
                y2="21"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 3. Action Label (e.g. EXPLORE, VIEW LIVE) */}
          {cursorLabel && isClickable && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/80 bg-slate-950 px-2.5 py-0.5 shadow-2xl">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                {cursorLabel}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
