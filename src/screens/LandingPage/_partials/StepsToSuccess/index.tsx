"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { IActiveTab } from "./StepsToSuccess.types";
import { Button } from "@/components";
import { contentMap, words } from "./StepsToSuccess.data";

import PlayIcon from "../../../../../public/svgs/PlayIcon";

const StepsToSuccess = () => {
  const [activeTab, setActiveTab] = useState<IActiveTab>("Idea");
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [visibleTitleWords, setVisibleTitleWords] = useState<number>(0);
  const [visibleDescriptionWords, setVisibleDescriptionWords] =
    useState<number>(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
      }, 300); // Adjust the delay as needed
      // Cleanup interval

      // Reveal title words
      const titleInterval = setInterval(() => {
        setVisibleTitleWords((prev) =>
          prev < contentMap[activeTab]?.title.length ? prev + 1 : prev
        );
      }, 300);

      // Reveal description words
      const descriptionInterval = setInterval(() => {
        setVisibleDescriptionWords((prev) =>
          prev < contentMap[activeTab]?.description.length ? prev + 1 : prev
        );
      }, 300);

      return () => {
        clearInterval(titleInterval);
        clearInterval(descriptionInterval);
        clearInterval(interval);
      };
    }
  }, [inView, activeTab]);

  return (
    <div ref={ref} className="section-padding py-20">
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
                    onClick={() => {
                      setActiveTab(tab as IActiveTab);
                      setVisibleTitleWords(0); // Reset for new tab
                      setVisibleDescriptionWords(0); // Reset for new tab
                    }}
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
                {contentMap[activeTab]?.title.map((word, index) => {
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-opacity duration-500 ${
                        index < visibleTitleWords ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ marginRight: "0.5rem" }}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>

              <p className="text-darkGrey text-base md:text-lg mb-8 leading-7 animate-fade-in transform duration-1000">
                {contentMap[activeTab]?.description.map((word, index) => {
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-opacity duration-500 ${
                        index < visibleDescriptionWords
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      style={{ marginRight: "0.5rem" }}
                    >
                      {word}
                    </span>
                  );
                })}
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
