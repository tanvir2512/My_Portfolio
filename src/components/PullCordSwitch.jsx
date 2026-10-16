"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

/**
 * PullCordSwitch Component (Elastic Spring Physics Version)
 * - Supports both CLICKING and DRAGGING/PULLING down with mouse or touch.
 * - Uses Hooke's Law spring physics (stiffness + damping) so the cord stretches
 *   softly like an elastic material and bounces naturally when released.
 */
export default function PullCordSwitch() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Base resting length of the cord in pixels
  const BASE_LENGTH = 60;
  // Pull distance threshold required to trigger theme toggle when dragging
  const TRIGGER_THRESHOLD = 38;

  // Dynamic displacement (x = horizontal sway, y = vertical stretch)
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Physics state refs for smooth 60fps animation
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);
  const didDragMoveRef = useRef(false);

  // Start the elastic spring-back physics animation upon release
  const startSpringAnimation = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    // Soft elastic spring constants
    const stiffness = 0.14; // Lower = softer, stretchier elastic feel
    const damping = 0.78;   // Controls how many soft bounces occur

    const step = () => {
      // Hooke's Law: Acceleration towards resting position (0, 0)
      const forceX = -stiffness * posRef.current.x;
      const forceY = -stiffness * posRef.current.y;

      velRef.current.x = (velRef.current.x + forceX) * damping;
      velRef.current.y = (velRef.current.y + forceY) * damping;

      posRef.current.x += velRef.current.x;
      posRef.current.y += velRef.current.y;

      setOffset({ x: posRef.current.x, y: posRef.current.y });

      // Continue animating until oscillation settles
      if (
        Math.abs(posRef.current.x) > 0.2 ||
        Math.abs(posRef.current.y) > 0.2 ||
        Math.abs(velRef.current.x) > 0.2 ||
        Math.abs(velRef.current.y) > 0.2
      ) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        posRef.current = { x: 0, y: 0 };
        velRef.current = { x: 0, y: 0 };
        setOffset({ x: 0, y: 0 });
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  // Pointer Down (Mouse or Touch Start)
  const handlePointerDown = (e) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setIsDragging(true);
    didDragMoveRef.current = false;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragStartRef.current = {
      x: clientX - posRef.current.x,
      y: clientY - posRef.current.y,
    };
  };

  // Global Pointer Move & Up listeners while dragging
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const rawX = clientX - dragStartRef.current.x;
      const rawY = clientY - dragStartRef.current.y;

      if (Math.abs(rawY) > 5 || Math.abs(rawX) > 5) {
        didDragMoveRef.current = true;
      }

      // Apply soft rubber resistance (diminishing stretch as you pull further)
      const elasticX = Math.max(-35, Math.min(35, rawX * 0.45));
      const elasticY = Math.max(-15, Math.min(110, rawY * 0.65));

      posRef.current = { x: elasticX, y: elasticY };
      setOffset({ x: elasticX, y: elasticY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);

      // If user pulled past the threshold, OR simply clicked without dragging:
      if (posRef.current.y >= TRIGGER_THRESHOLD) {
        toggleTheme();
        // Give a little downward impulse for extra bounce
        velRef.current.y = 6;
      } else if (!didDragMoveRef.current) {
        // User tapped/clicked the bulb: simulate a soft elastic pull & release!
        toggleTheme();
        posRef.current = { x: 0, y: 55 };
        velRef.current = { x: 3, y: 8 };
      }

      startSpringAnimation();
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging, theme]);

  if (!mounted) return null;

  // Calculate SVG Quadratic Bezier curve points so the cord bends like soft elastic
  const svgWidth = 80;
  const centerX = svgWidth / 2;
  const endX = centerX + offset.x;
  const endY = Math.max(20, BASE_LENGTH + offset.y);
  const controlX = centerX + offset.x * 0.35;
  const controlY = endY * 0.55;

  return (
    <div
      className="fixed top-0 right-1 sm:right-4 z-50 flex flex-col items-center select-none touch-none"
      title="Pull or click elastic cord to switch theme"
    >
      {/* Top Ceiling Mount Cap */}
      <div className="w-4 h-1.5 rounded-b-full bg-neon-secondary dark:bg-neon-primary shadow-neon" />

      {/* Elastic SVG Cord + Draggable Pendant */}
      <div className="relative" style={{ width: svgWidth, height: endY + 44 }}>
        <svg
          width={svgWidth}
          height={endY + 20}
          className="overflow-visible pointer-events-none"
        >
          <defs>
            <linearGradient id="cordGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00C853" />
              <stop offset="100%" stopColor="#39FF14" />
            </linearGradient>
          </defs>

          {/* Curved Elastic String */}
          <path
            d={`M ${centerX} 0 Q ${controlX} ${controlY} ${endX} ${endY}`}
            fill="none"
            stroke="url(#cordGrad)"
            strokeWidth={Math.max(1.5, 2.5 - offset.y * 0.008)} // Thins slightly when stretched!
            strokeLinecap="round"
          />
        </svg>

        {/* Pull Handle / Glowing Bulb at the end of the elastic cord */}
        <button
          type="button"
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          aria-label="Pull elastic cord to toggle theme"
          style={{
            left: `${endX}px`,
            top: `${endY}px`,
            transform: `translate(-50%, -4px) rotate(${-offset.x * 0.8}deg)`,
          }}
          className={`group absolute flex items-center justify-center w-9 h-9 rounded-full border-2 cursor-grab active:cursor-grabbing transition-colors duration-300 focus:outline-none ${
            theme === "dark"
              ? "bg-[#1A1F1E] border-neon-primary text-neon-primary shadow-neon"
              : "bg-white border-neon-secondary text-emerald-600 shadow-md"
          }`}
        >
          {theme === "dark" ? (
            <Moon className="w-4 h-4 pointer-events-none" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500 pointer-events-none" />
          )}
        </button>
      </div>
    </div>
  );
}