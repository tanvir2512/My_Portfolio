"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

/**
 * PullCordSwitch Component (Elastic Spring + Gentle Wind Swing Version)
 * - Fixed disappearing line bug (added gradientUnits="userSpaceOnUse" + glow).
 * - Increased cord length (BASE_LENGTH = 95, adjustable right below).
 * - Continuous gentle wind sway animation so the cord softly swings like a real hanging string.
 */
export default function PullCordSwitch() {
  const { theme, toggleTheme, mounted } = useTheme();

  // =========================================================================
  // 1. INCREASE OR DECREASE CORD LENGTH HERE:
  // Changed from 60 -> 95 (Change to 110 or 120 if you want it even longer!)
  // =========================================================================
  const BASE_LENGTH = 140;

  // Pull distance threshold required to trigger theme toggle when dragging
  const TRIGGER_THRESHOLD = 40;

  // Dynamic displacement (x = horizontal sway, y = vertical stretch)
  const [offset, setOffset] = useState({ x: 3, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Physics state refs for smooth 60fps animation
  const posRef = useRef({ x: 3, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const didDragMoveRef = useRef(false);

  // =========================================================================
  // 2. CONTINUOUS ELASTIC + GENTLE BREEZE SWING LOOP
  // Runs continuously so the cord gently sways in the wind when idle,
  // and snaps back elastically after being pulled!
  // =========================================================================
  useEffect(() => {
    let animId;
    let time = 0;

    // Soft elastic spring constants
    const stiffness = 0.05; // Lower = softer, stretchier elastic feel
    const damping = 0.50;   // Controls bounce smoothness

    const updatePhysics = () => {
      time += 0.035;

      if (!isDraggingRef.current) {
        // Gentle wind target sway (swings ~6px left and right + tiny secondary breeze ripple)
        const windTargetX = Math.sin(time) * 6 + Math.sin(time * 2.3) * 2;
        const windTargetY = Math.abs(Math.cos(time)) * 1.5;

        // Hooke's Law spring force pulling towards the gentle wind target
        const forceX = -stiffness * (posRef.current.x - windTargetX);
        const forceY = -stiffness * (posRef.current.y - windTargetY);

        velRef.current.x = (velRef.current.x + forceX) * damping;
        velRef.current.y = (velRef.current.y + forceY) * damping;

        posRef.current.x += velRef.current.x;
        posRef.current.y += velRef.current.y;

        setOffset({ x: posRef.current.x, y: posRef.current.y });
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer Down (Mouse or Touch Start)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    isDraggingRef.current = true;
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

      // Soft rubber resistance while pulling
      const elasticX = Math.max(-45, Math.min(45, rawX * 0.5));
      const elasticY = Math.max(-20, Math.min(130, rawY * 0.7));

      posRef.current = { x: elasticX, y: elasticY };
      setOffset({ x: elasticX, y: elasticY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      isDraggingRef.current = false;

      // If pulled past threshold OR clicked/tapped
      if (posRef.current.y >= TRIGGER_THRESHOLD) {
        toggleTheme();
        velRef.current.y = 7;
        velRef.current.x = (Math.random() > 0.5 ? 1 : -1) * 5;
      } else if (!didDragMoveRef.current) {
        // User tapped/clicked the bulb: simulate an elastic downward pull & swing!
        toggleTheme();
        posRef.current = { x: 8, y: 60 };
        velRef.current = { x: -6, y: 9 };
      }
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
  }, [isDragging, theme, toggleTheme]);

  if (!mounted) return null;

  // Calculate SVG Quadratic Bezier curve points so the rope bends naturally in the breeze
  const svgWidth = 100;
  const centerX = svgWidth / 2;
  const endX = centerX + offset.x;
  const endY = Math.max(25, BASE_LENGTH + offset.y);
  // Control point bellies out slightly more to look like a soft hanging rope
  const controlX = centerX + offset.x * 0.6;
  const controlY = endY * 0.55;

  return (
    <div
      className="fixed top-0 right-1 sm:right-4 z-50 flex flex-col items-center select-none touch-none"
      title="Pull/click to switch theme"
    >
      {/* Top Ceiling Mount Cap */}
      <div className="w-4 h-1.5 rounded-b-full bg-neon-secondary dark:bg-neon-primary shadow-neon" />

      {/* Elastic SVG Cord + Draggable Pendant */}
      <div className="relative" style={{ width: svgWidth, height: endY + 48 }}>
        <svg
          width={svgWidth}
          height={endY + 25}
          className="overflow-visible pointer-events-none"
        >
          <defs>
            {/* gradientUnits="userSpaceOnUse" prevents the SVG line from EVER disappearing when vertical! */}
            <linearGradient
              id="cordGrad"
              gradientUnits="userSpaceOnUse"
              x1={centerX}
              y1="0"
              x2={endX}
              y2={endY}
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#757575" />
            </linearGradient>
          </defs>

          {/* Outer Subtle Neon Glow Line (keeps string clearly visible on both Dark & Light backgrounds) */}
          <path
            d={`M ${centerX} 0 Q ${controlX} ${controlY} ${endX} ${endY}`}
            fill="none"
            stroke="#4a4a4a"
            strokeOpacity="0.30"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Main Curved Elastic Rope */}
          <path
            d={`M ${centerX} 0 Q ${controlX} ${controlY} ${endX} ${endY}`}
            fill="none"
            stroke="url(#cordGrad)"
            strokeWidth={Math.max(2, 3 - offset.y * 0.008)}
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
            transform: `translate(-50%, -4px) rotate(${-offset.x * 1.1}deg)`,
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