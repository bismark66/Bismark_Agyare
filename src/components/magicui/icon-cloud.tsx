"use client";

import React, { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
  className?: string;
}

// Function to calculate positions on a sphere
function fibonacciSphere(samples: number): { x: number; y: number; z: number }[] {
  const points: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
    const radius = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    points.push({ x, y, z });
  }
  return points;
}

export function IconCloud({
  icons = [],
  images = [],
  className,
}: IconCloudProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Combine icons and images into items
  const items = useMemo(() => {
    const allItems: { type: "icon" | "image"; content: React.ReactNode | string }[] = [];
    icons.forEach((icon) => allItems.push({ type: "icon", content: icon }));
    images.forEach((img) => allItems.push({ type: "image", content: img }));
    return allItems;
  }, [icons, images]);

  // Calculate positions
  const positions = useMemo(() => fibonacciSphere(items.length), [items.length]);

  // Auto-rotation effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x,
        y: prev.y + 0.005,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Mouse interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePosition({ x, y });
    setRotation({ x: -y * 0.5, y: x * 0.5 });
  };

  const size = 300; // Size of the cloud
  const radius = size / 2.5;

  return (
    <div
      className={cn(
        "relative w-full h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`,
          transition: isHovered ? "none" : "transform 0.1s ease-out",
        }}
      >
        {items.map((item, i) => {
          const pos = positions[i];
          if (!pos) return null;

          // Calculate 3D position
          const x = pos.x * radius;
          const y = pos.y * radius;
          const z = pos.z * radius;

          // Calculate scale and opacity based on z position
          const scale = (z + radius) / (2 * radius);
          const opacity = Math.max(0.3, scale);

          return (
            <div
              key={i}
              className="absolute flex items-center justify-center transition-all duration-200"
              style={{
                width: 50,
                height: 50,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
                opacity,
                zIndex: Math.floor(z + radius),
              }}
            >
              {item.type === "image" ? (
                <img
                  src={item.content as string}
                  alt=""
                  className="w-10 h-10 rounded-lg object-cover"
                  style={{ filter: `brightness(${0.7 + scale * 0.5})` }}
                />
              ) : (
                <div
                  className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  style={{ transform: `scale(${0.7 + scale * 0.5})` }}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
