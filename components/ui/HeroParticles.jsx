"use client";

import { useEffect, useRef } from "react";

export function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const section = canvas?.parentElement;

    if (!canvas || !context || !section) {
      return;
    }

    let particles = [];
    let frameId = null;
    let isVisible = false;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.min(
        110,
        Math.max(35, Math.round((width * height) / 12000)),
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        velocityX: (Math.random() - 0.5) * 0.35,
        velocityY: (Math.random() - 0.5) * 0.35,
      }));
    };

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
        if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(18, 119, 255, 0.45)";
        context.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const distanceX = particle.x - other.x;
          const distanceY = particle.y - other.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (distance < 120) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(56, 198, 255, ${0.16 * (1 - distance / 120)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      });

      if (isVisible) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    const startRendering = () => {
      if (isVisible && frameId === null) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    const stopRendering = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(section);
    window.addEventListener("resize", resizeCanvas);

    let intersectionObserver;
    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startRendering();
        } else {
          stopRendering();
        }
      });
      intersectionObserver.observe(section);
    } else {
      isVisible = true;
      startRendering();
    }

    return () => {
      stopRendering();
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
