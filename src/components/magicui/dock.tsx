"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface DockProps {
  items: {
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
  className?: string;
  magnification?: number;
  distance?: number;
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  mouseX: any;
  magnification: number;
  distance: number;
}

function DockItem({
  icon,
  label,
  href,
  onClick,
  mouseX,
  magnification,
  distance,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distanceFromMouse = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const Content = (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square cursor-pointer rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center relative hover:bg-white/20 transition-colors"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-10 left-1/2 px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-white text-xs whitespace-nowrap"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {Content}
      </a>
    );
  }

  return <div onClick={onClick}>{Content}</div>;
}

export function Dock({
  items,
  className,
  magnification = 60,
  distance = 140,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.8 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-3 px-4 py-3 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10",
        className
      )}
    >
      {items.map((item, i) => (
        <DockItem
          key={i}
          {...item}
          mouseX={mouseX}
          magnification={magnification}
          distance={distance}
        />
      ))}
    </motion.div>
  );
}
