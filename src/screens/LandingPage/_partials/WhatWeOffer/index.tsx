"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import LayerThreeIcon from "../../../../../public/svgs/layers-three.svg";

const WhatWeOffer = () => {
  const data = [
    {
      id: 1,
      headText: "Experience",
      subText: [
        "Decades of collective wisdom. Leverage our experience to avoid common pitfalls and accelerate you business growth.",
      ],
    },
    {
      id: 2,
      headText: "Cost Savings",
      subText: [
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
      ],
    },
    {
      id: 3,
      headText: "Quick Support",
      subText: [
        "We are your reliable partner, always there when you need us , ensuring smooth operations at every stage of your growth",
      ],
    },
  ];
  return (
    <div
      className="section-padding py-14"
      style={{
        background:
          "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%);",
      }}
    >
      <div>
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
            <Typewriter
              words={["Your best call for B2B/B2C product innovation"]}
              loop={1}
              cursor={false}
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-7 ">
        {data.map(({ id, headText, subText }) => (
          <div
            key={id}
            className="relative min-h-[290px] rounded-2xl group overflow-hidden"
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
                    <Typewriter
                      words={subText}
                      loop={1}
                      cursor={false}
                      typeSpeed={70}
                      deleteSpeed={0}
                      delaySpeed={1000}
                    />
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
