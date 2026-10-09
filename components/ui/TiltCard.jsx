"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(56, 198, 255, 0.16)",
  maxTilt = 4.5,
  cursorLabel,
  ...props
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor={cursorLabel}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        transition:
          glowPos.opacity === 0
            ? "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 90ms linear",
      }}
      className={cn("relative will-change-transform", className)}
      {...props}
    >
      {/* Dynamic Radial Cursor Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glowPos.opacity,
          background: `radial-gradient(480px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
