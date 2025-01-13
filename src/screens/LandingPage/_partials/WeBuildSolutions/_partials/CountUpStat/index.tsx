"use client";

import React, { useEffect, useState } from "react";
import { StatItem } from "./CountUpStat.type";

const CountUpStat = ({ value, label, suffix = "", inView }: StatItem) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000; // Duration of animation in ms
      const increment = value / (duration / 16); // Increment per frame (assuming ~60fps)

      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value; // Ensure it doesn't go over
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [value, inView]);

  return (
    <div className="flex flex-col gap-3 text-left w-fit">
      <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
        {count}
        {suffix}
      </div>
      <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
        {label}
      </span>
    </div>
  );
};

export default CountUpStat;
