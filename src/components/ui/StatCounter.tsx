"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numericMatch = value.match(/-?\d+(\.\d+)?/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : null;
  const prefix = numeric !== null ? value.slice(0, numericMatch!.index) : "";
  const suffix = numeric !== null ? value.slice((numericMatch!.index ?? 0) + numericMatch![0].length) : "";

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView && numeric !== null) {
      motionValue.set(numeric);
    }
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(v));
  }, [spring]);

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const decimals = numericMatch![0].includes(".") ? 1 : 0;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
