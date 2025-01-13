"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { data, words } from "./WhatWeOffer.data";

import LayerThreeIcon from "../../../../../public/svgs/layers-three.svg";

const WhatWeOffer = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [visibleSubText, setVisibleSubText] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    if (inView) {
      // Manage the heading animation
      const wordInterval = setInterval(() => {
        setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
      }, 300);

      // Manage the subText animations for each card
      const subTextIntervals: NodeJS.Timeout[] = data.map(({ id, subText }) =>
        setInterval(() => {
          setVisibleSubText((prev) => ({
            ...prev,
            [id]: Math.min((prev[id] || 0) + 1, subText.length),
          }));
        }, 300)
      );

      return () => {
        clearInterval(wordInterval);
        subTextIntervals.forEach(clearInterval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, words.length]);

  return (
    <div
      className="section-padding py-14"
      style={{
        background:
          "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%);",
      }}
      ref={ref}
    >
      <div>
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
            {words?.map((word, index) => {
              return (
                <span
                  key={index}
                  className={`inline-block transition-opacity duration-500 ${
                    index < visibleWords ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ marginRight: "0.5rem" }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-7 ">
        {data.map(({ id, headText, subText }) => (
          <div
            key={id}
            className="relative min-h-[340px] xs:min-h-[380px] xl:min-h-[340px] xxl:min-h-[290px] rounded-2xl group overflow-hidden"
          >
            {/* Border Animation */}
            <div className="absolute inset-0 rounded-2xl before:absolute before:inset-[-50%] before:bg-[conic-gradient(transparent,transparent,white)] before:animate-spin-slow before:transition-none before:group-hover:hidden">
              {/* Hover Full Border */}
              <div className="absolute inset-0 rounded-2xl bg-[#00a6ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Inner Content */}
            <div className="absolute flex justify-center items-center inset-[1px] bottom-[0.6px] rounded-2xl bg-[#1c1c1c]">
              <div className="w-full h-full text-white z-10 bg-transparent rounded-[inherit]">
                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate h-full">
                  <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                    <Image
                      src={LayerThreeIcon}
                      alt="Experience"
                      loading="lazy"
                      width="30"
                      height="30"
                      decoding="async"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <h4 className="text-2xl font-medium mb-5">{headText}</h4>
                  <p className="mb-0 text-darkGrey text-[17.5px]">
                    {subText.map((text, idx) => (
                      <span
                        key={idx}
                        className={`inline-block transition-opacity duration-500 ${
                          idx < (visibleSubText[id] || 0)
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        style={{ marginRight: "0.5rem" }}
                      >
                        {text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
