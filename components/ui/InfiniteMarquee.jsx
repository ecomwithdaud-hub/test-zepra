"use client";

import { Children } from "react";

export function InfiniteMarquee({
  children,
  direction = "left",
  speed,
  className = "",
  fadeIn = "10%",
  fadeOut = "90%",
}) {
  const items = Children.toArray(children);
  const animationClass =
    direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  const animationDuration = speed
    ? { animationDuration: typeof speed === "number" ? `${speed}s` : speed }
    : undefined;
  const maskStyle = {
    maskImage: `linear-gradient(to right, transparent, black ${fadeIn}, black ${fadeOut}, transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeIn}, black ${fadeOut}, transparent)`,
  };

  return (
    <div
      className={`w-full overflow-hidden hover:[&>*]:[animation-play-state:paused] ${className}`}
      style={maskStyle}
    >
      <div
        className={`flex w-max items-center ${animationClass} motion-reduce:animate-none`}
        style={animationDuration}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center gap-3 pr-3"
          >
            {items.map((item, index) => (
              <div className="shrink-0" key={`${copy}-${index}`}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
