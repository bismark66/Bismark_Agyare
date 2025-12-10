"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
  ...props
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }
    },
    [mouseX, mouseY]
  );

  const handleMouseOut = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!e.relatedTarget) {
        return;
      }
      setIsHovered(false);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    },
    [mouseX, mouseY, gradientSize]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const background = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
  `;

  const border = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 100%)
  `;

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative flex rounded-xl bg-zinc-950/50 border border-white/10 hover:border-white/20 transition-colors duration-300",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <div className="absolute inset-px z-10 rounded-xl bg-zinc-950/90" />
      <div className="relative z-20 w-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background,
          opacity: isHovered ? gradientOpacity : 0,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          WebkitMask:
            "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          background: border,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
}
