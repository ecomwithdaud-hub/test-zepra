"use client";

import { useEffect, useRef } from "react";

const TRACE_COLOR = "rgba(1, 174, 165, 0.12)";
const GLOW_COLOR = "rgba(56, 198, 255, 0.72)";
const TELEMETRY = ["+ PING: 1ms", "+ SYS: OK", "+ ETH: 10G"];

function createCircuitPaths(width, height) {
  const cell = Math.max(54, Math.min(96, width / 14));
  const rowCount = Math.max(3, Math.ceil(height / cell));
  const columnCount = Math.max(5, Math.ceil(width / cell));
  const paths = [];

  for (let row = 0; row < rowCount; row += 1) {
    const y = Math.min(height, row * cell + cell * 0.55);
    const points = [{ x: 0, y }];
    let currentY = y;

    for (let column = 1; column < columnCount; column += 1) {
      const x = Math.min(width, column * cell);
      points.push({ x, y: currentY });
      if ((row + column) % 3 === 0 && column < columnCount - 1) {
        const direction = (row + column) % 2 === 0 ? 1 : -1;
        currentY = Math.max(
          cell * 0.2,
          Math.min(height - cell * 0.2, currentY + direction * cell * 0.65),
        );
        points.push({ x, y: currentY });
      }
    }

    points.push({ x: width, y: currentY });
    paths.push(points);
  }

  for (let column = 1; column < columnCount; column += 2) {
    const x = Math.min(width, column * cell);
    const points = [{ x, y: 0 }];
    let currentX = x;

    for (let row = 1; row < rowCount; row += 1) {
      const y = Math.min(height, row * cell);
      points.push({ x: currentX, y });
      if ((column + row) % 4 === 0 && row < rowCount - 1) {
        const direction = (column + row) % 2 === 0 ? 1 : -1;
        currentX = Math.max(
          cell * 0.2,
          Math.min(width - cell * 0.2, currentX + direction * cell * 0.6),
        );
        points.push({ x: currentX, y });
      }
    }

    points.push({ x: currentX, y: height });
    paths.push(points);
  }

  return paths;
}

function createSegments(points) {
  const segments = [];
  let totalLength = 0;

  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];
    const length = Math.hypot(end.x - start.x, end.y - start.y);
    segments.push({ start, end, length, offset: totalLength });
    totalLength += length;
  }

  return { segments, totalLength };
}

function pointOnPath(path, distance) {
  const target = ((distance % path.totalLength) + path.totalLength) % path.totalLength;
  const segment = path.segments.find(
    (candidate) => target <= candidate.offset + candidate.length,
  ) ?? path.segments[path.segments.length - 1];
  const progress = (target - segment.offset) / segment.length;

  return {
    x: segment.start.x + (segment.end.x - segment.start.x) * progress,
    y: segment.start.y + (segment.end.y - segment.start.y) * progress,
  };
}

function strokeCircuit(context, points, radius) {
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);

  for (let index = 1; index < points.length - 1; index += 1) {
    const previous = points[index - 1];
    const corner = points[index];
    const next = points[index + 1];
    const trim = Math.min(
      radius,
      Math.hypot(corner.x - previous.x, corner.y - previous.y) * 0.28,
      Math.hypot(next.x - corner.x, next.y - corner.y) * 0.28,
    );
    const before = {
      x: corner.x + Math.sign(previous.x - corner.x) * trim,
      y: corner.y + Math.sign(previous.y - corner.y) * trim,
    };
    const after = {
      x: corner.x + Math.sign(next.x - corner.x) * trim,
      y: corner.y + Math.sign(next.y - corner.y) * trim,
    };

    context.lineTo(before.x, before.y);
    context.lineTo(after.x, after.y);
  }

  const last = points[points.length - 1];
  context.lineTo(last.x, last.y);
  context.stroke();
}

export function CyberCircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const container = canvas?.parentElement;

    if (!canvas || !context || !container) return undefined;

    let width = 0;
    let height = 0;
    let paths = [];
    let beacons = [];
    let telemetry = [];
    let frameId = null;
    let isVisible = false;
    let elapsed = 0;

    const resizeCanvas = () => {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      paths = createCircuitPaths(width, height).map((points) => ({
        points,
        ...createSegments(points),
      })).filter((path) => path.totalLength > 0);
      beacons = paths.flatMap((path) =>
        path.points.slice(1, -1).filter((_, index) => index % 3 === 0).map((point, index) => ({
          ...point,
          phase: (index * 0.37 + point.x * 0.001 + point.y * 0.002) % 1,
        })),
      );
      telemetry = TELEMETRY.map((label, index) => ({
        label,
        x: width * (0.16 + index * 0.31),
        y: height * (0.22 + (index % 2) * 0.54),
        phase: index * 2.1,
      }));
    };

    const drawFrame = (timestamp) => {
      if (!elapsed) elapsed = timestamp;
      elapsed = timestamp;
      context.clearRect(0, 0, width, height);

      context.lineWidth = 1;
      context.strokeStyle = TRACE_COLOR;
      paths.forEach((path) => strokeCircuit(context, path.points, 10));

      paths.forEach((path, index) => {
        const travel = (timestamp * (0.025 + (index % 4) * 0.004)) % path.totalLength;
        const head = pointOnPath(path, travel);
        const trail = pointOnPath(path, travel - 30);

        context.beginPath();
        context.moveTo(trail.x, trail.y);
        context.lineTo(head.x, head.y);
        context.strokeStyle = "rgba(56, 198, 255, 0.22)";
        context.lineWidth = 2;
        context.stroke();

        context.beginPath();
        context.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
        context.fillStyle = GLOW_COLOR;
        context.shadowColor = GLOW_COLOR;
        context.shadowBlur = 12;
        context.fill();
        context.shadowBlur = 0;
      });

      beacons.forEach((beacon) => {
        const phase = ((timestamp / 2400 + beacon.phase) % 1 + 1) % 1;
        const radius = 3 + phase * 16;
        context.beginPath();
        context.arc(beacon.x, beacon.y, radius, 0, Math.PI * 2);
        context.strokeStyle = `rgba(1, 174, 165, ${0.28 * (1 - phase)})`;
        context.lineWidth = 1;
        context.stroke();
        context.beginPath();
        context.arc(beacon.x, beacon.y, 2, 0, Math.PI * 2);
        context.fillStyle = "rgba(1, 174, 165, 0.42)";
        context.fill();
      });

      context.font = "10px ui-monospace, SFMono-Regular, Menlo, monospace";
      context.fillStyle = "rgba(1, 174, 165, 0.36)";
      telemetry.forEach((item) => {
        const drift = Math.sin(timestamp / 3800 + item.phase) * 12;
        context.fillText(item.label, item.x + drift, item.y);
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
        elapsed = 0;
      }
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    window.addEventListener("resize", resizeCanvas);

    let intersectionObserver;
    if ("IntersectionObserver" in window) {
      intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) startRendering();
        else stopRendering();
      });
      intersectionObserver.observe(container);
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
