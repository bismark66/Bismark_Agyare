"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children?: React.ReactNode;
  className?: string;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        "[background:var(--bg)] [border-radius:var(--radius)]",
        className
      )}
      {...props}
    >
      {/* Shimmer effect */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden [border-radius:var(--radius)]",
          "before:absolute before:inset-[-200%] before:animate-shimmer-slide",
          "before:[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]",
          "before:[translate:0_0]",
          "group-hover:before:animate-shimmer-slide"
        )}
      />

      {/* Background */}
      <div className="absolute inset-px [background:var(--bg)] [border-radius:calc(var(--radius)-1px)]" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Highlight */}
      <div
        className={cn(
          "absolute inset-0 rounded-[var(--radius)] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"
        )}
      />
    </button>
  );
}
