"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { CountUpStat } from "./_partials";
import { statsData } from "./_partials/CountUpStat/CountUpStat.data";
import { words } from "./WeBuildSolution.data";

const WeBuildSolutions = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
      }, 300);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.length, inView]);

  return (
    <div
      className="py-14 md:py-20 xl:py-28"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      <div className="max-w-[52rem] mx-auto bg-[url('/imgs/arc.svg')] lg:bg-[url('/imgs/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div
          ref={ref}
          className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5"
        >
          <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto ">
            <div className="">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium whitespace-wrap break-words">
                {words?.map((word, index) => {
                  const isTextColorStyled = ["businesses", "scale"].includes(
                    word
                  );
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-opacity duration-500 ${
                        index < visibleWords ? "opacity-100" : "opacity-0"
                      } ${isTextColorStyled ? "text-[#60a6e7]" : ""}`}
                      style={{ marginRight: "0.5rem" }}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            {statsData.map((stat, index) => (
              <CountUpStat key={index} {...stat} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBuildSolutions;
