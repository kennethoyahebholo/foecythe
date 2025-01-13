"use client";

import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image, { StaticImageData } from "next/image";

import { Button } from "@/components";

import PlayIcon from "../../../../../public/svgs/PlayIcon";
import Launch from "../../../../../public/imgs/plan-launch.svg";
import Design from "../../../../../public/imgs/plan-design.svg";
import Develop from "../../../../../public/imgs/plan-develop.svg";
import Idea from "../../../../../public/imgs/camera-man.svg";

const StepsToSuccess = () => {
  const words = [
    "From",
    "Spark",
    "to",
    "Spotlight:",
    "we",
    "take",
    "you",
    "every",
    "step",
    "of",
    "the",
    "way",
    "to",
    "success",
  ];
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
    }, 300); // Adjust the delay as needed

    return () => clearInterval(interval); // Cleanup interval
  }, [words.length]);

  const [activeTab, setActiveTab] = useState<
    "Idea" | "Design" | "Develop" | "Launch"
  >("Idea");

  const contentMap: Record<
    "Idea" | "Design" | "Develop" | "Launch",
    { title: string[]; description: string[]; image: StaticImageData }
  > = {
    Idea: {
      title: ["Your vision is unique"],
      description: [
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let's us shape it.",
      ],
      image: Idea,
    },
    Design: {
      title: ["Crafting the blueprint for success"],
      description: [
        "Design is more than aesthetics, it's about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
      ],
      image: Design,
    },
    Develop: {
      title: ["Turning blueprints into reality"],
      description: [
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life",
      ],
      image: Develop,
    },
    Launch: {
      title: ["Your launchpad to the market"],
      description: [
        "Launching is just the beginning; we ensure your product makes a splash and keeps making waves.",
      ],
      image: Launch,
    },
  };
  return (
    <div className="section-padding py-20">
      <div className="mb-12 xl:mb-0 max-w-[45rem]">
        <div>
          <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
            {words?.map((word, index) => {
              const isTextColorStyled = ["Spark", "Spotlight:"].includes(word);
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
      <div className="flex lg:items-end flex-col md:flex-row">
        <div className="basis-1/2 flex mb-8 md:mb-0">
          <div className="md:pr-10 min-w-full min-h-[348px] flex flex-col justify-between">
            <div>
              <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                {Object.keys(contentMap).map((tab) => (
                  <div
                    key={tab}
                    onClick={() =>
                      setActiveTab(
                        tab as "Idea" | "Design" | "Develop" | "Launch"
                      )
                    }
                    className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-accent2 text-black"
                        : "bg-transparent text-white"
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12 animate-fade-in transform duration-1000">
                <Typewriter
                  key={activeTab + "-title"}
                  words={contentMap[activeTab]?.title as string[]}
                  loop={1}
                  cursor={false}
                  typeSpeed={70}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </p>

              <p className="text-darkGrey text-base md:text-lg mb-8 leading-7 animate-fade-in transform duration-1000">
                <Typewriter
                  key={activeTab + "-description"}
                  words={contentMap[activeTab]?.description}
                  loop={1}
                  cursor={false}
                  typeSpeed={70}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </p>
            </div>

            <Button
              Icon={
                <PlayIcon className="fill-[#064386] group-hover:fill-white" />
              }
            />
          </div>
        </div>
        <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
          <Image
            src={contentMap[activeTab]?.image}
            height="200"
            width="200"
            loading="lazy"
            alt="plan-img"
            className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepsToSuccess;
