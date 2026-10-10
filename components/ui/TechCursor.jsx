"use client";

import { useEffect, useRef, useState } from "react";

export function TechCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
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

      // Instant pinpoint tracking for center point
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      if (target instanceof Element) {
        const customCursorEl = target.closest("[data-cursor]");
        const customText = customCursorEl?.getAttribute("data-cursor") || "";
        setCursorLabel(customText);

        const isInput = Boolean(
          target.closest('input:not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]')
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

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Responsive lerp for outer follower ring
    const animate = () => {
      // 0.22 lerp factor gives snappy, cohesive follower physics
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

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
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-200 ${
        isVisible && !isTextMode ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Lagging Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 will-change-transform pointer-events-none"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out flex items-center justify-center ${
            isClickable
              ? "h-12 w-12 border-2 border-cyan-400 bg-cyan-400/15 shadow-[0_0_20px_rgba(6,182,212,0.65)]"
              : isMouseDown
              ? "h-7 w-7 border-2 border-cyan-400 bg-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              : "h-9 w-9 border-2 border-cyan-400/90 bg-cyan-500/10 shadow-[0_0_12px_rgba(6,182,212,0.45)]"
          }`}
          style={{
            filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.6))",
          }}
        />
      </div>

      {/* Pinpoint Center Target (Circle-in-Circle OR Morphing into + Sign) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 will-change-transform pointer-events-none"
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* STATE A: Normal Mode -> Circle in a Circle */}
          <div
            className={`transition-all duration-200 ease-out flex items-center justify-center ${
              isClickable ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* Inner Solid Glow Dot */}
            <div
              className={`rounded-full bg-cyan-300 ring-1 ring-slate-950 transition-all duration-150 ${
                isMouseDown ? "h-3.5 w-3.5 bg-white" : "h-2.5 w-2.5"
              }`}
              style={{
                boxShadow: "0 0 10px #22d3ee, 0 1px 3px rgba(0,0,0,0.8)",
              }}
            />
          </div>

          {/* STATE B: Clickable Mode -> Morph into Glowing + Sign */}
          <div
            className={`absolute flex items-center justify-center transition-all duration-200 ease-out ${
              isClickable ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={`h-6 w-6 text-cyan-300 transition-transform duration-150 ease-out ${
                isMouseDown ? "rotate-45 scale-90 text-white" : "rotate-0 scale-100"
              }`}
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(6,182,212,0.95)) drop-shadow(0 1px 3px rgba(0,0,0,0.9))",
              }}
            >
              {/* Bold + Sign Crosshair */}
              <line
                x1="12"
                y1="3.5"
                x2="12"
                y2="20.5"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <line
                x1="3.5"
                y1="12"
                x2="20.5"
                y2="12"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Optional Action Label Pill (e.g. "EXPLORE", "VIEW LIVE", "DRAG") */}
          {cursorLabel && isClickable && (
            <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/60 bg-slate-950/95 px-2.5 py-0.5 shadow-xl backdrop-blur-md">
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
