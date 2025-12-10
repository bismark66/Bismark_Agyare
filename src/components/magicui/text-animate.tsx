"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface TextAnimateProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "letter" | "word";
}

export function TextAnimate({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  type = "letter",
}: TextAnimateProps) {
  const items = type === "letter" ? text.split("") : text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {items.map((item, index) => (
        <motion.span key={index} variants={child}>
          {item}
          {type === "word" && index < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
