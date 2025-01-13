"use client";

import React, { useEffect, useState } from "react";

const WeBuildSolutions = () => {
  const words = [
    "We",
    "build",
    "solutions",
    "that",
    "help",
    "businesses",
    "of",
    "all",
    "sizes",
    "to",
    "scale",
  ];
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
    }, 300); // Adjust the delay as needed

    return () => clearInterval(interval); // Cleanup interval
  }, [words.length]);
  return (
    <div
      className="py-14 md:py-20 xl:py-28"
      style={{
        background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
      }}
    >
      <div className="max-w-[52rem] mx-auto bg-[url('/imgs/arc.svg')] lg:bg-[url('/imgs/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
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
            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                50+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Clients
              </span>
            </div>

            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                120+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Projects
              </span>
            </div>

            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                10+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Team Leads
              </span>
            </div>

            <div className="flex flex-col gap-3 text-left w-fit">
              <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                10+
              </div>
              <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                Glorious Years
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBuildSolutions;
