"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import { contentMap, words } from "./StartUpStories.data";
import useInViewTypingEffect from "@/utils/useInViewTypingEffect";
import { IActiveTab } from "./StartUpStories.types";

const StartUpStories = () => {
  const [showAuthor, setShowAuthor] = useState(false);
  const [activeTab, setActiveTab] = useState<IActiveTab>("Starks");
  const { visibleWords, ref } = useInViewTypingEffect(words, 300, 0.5);

  // Handle auto-switching of tabs
  useEffect(() => {
    const tabIds = Object.keys(contentMap);
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabIds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabIds.length;
        return tabIds[nextIndex] as typeof activeTab;
      });
    }, 20000); // Switch every 15 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  useEffect(() => {
    // Reset the author display whenever the activeTab changes
    setShowAuthor(false);
    const delay = setTimeout(() => setShowAuthor(true), 10000); // 2-second delay
    return () => clearTimeout(delay); // Cleanup timeout
  }, [activeTab]);

  return (
    <div className="section-padding py-10" ref={ref}>
      <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
        {words?.map((word, index) => {
          const isTextColorStyled = ["transformative", "stories"].includes(
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
      <div className="w-full overflow-x-scroll hide-scrollbar">
        <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
          {Object.values(contentMap).map((tab, index) => (
            <div
              key={index + 1}
              onClick={() =>
                setActiveTab(
                  tab.id as
                    | "Starks"
                    | "ExecutivePros"
                    | "Stacai"
                    | "Iwaria"
                    | "Beaupreneur"
                )
              }
              className={`w-full p-[1.1rem] cursor-pointer false transition-all duration-300 ${
                tab.isRounded
              } ${activeTab === tab.id && "bg-accent3"}`}
            >
              <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                <Image
                  src={tab.image}
                  alt="Starks Associate"
                  loading="lazy"
                  width="20"
                  height="20"
                  className={tab.width}
                  decoding="async"
                  style={{ color: "transparent" }}
                />
                {tab.id === "Starks" && "Starks"}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          left: `${contentMap[activeTab as IActiveTab].leftPosition}`,
        }}
        className="mt-5 h-full w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative"
      >
        <div className="sm:basis-[58%] pr-3 min-h-[291px] flex flex-col justify-between">
          <div>
            <p className="text-base font-bold mb-4">
              <Typewriter
                key={activeTab + "-title"}
                words={contentMap[activeTab as IActiveTab].title}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
            <p className="text-base leading-7 mb-3">
              <Typewriter
                key={activeTab + "-description"}
                words={contentMap[activeTab as IActiveTab].description}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>
          {showAuthor && (
            <p className="text-[15px] font-semibold mb-4">
              <Typewriter
                key={activeTab + "-arthur"}
                words={contentMap[activeTab as IActiveTab].author}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          )}
        </div>
        <div className="w-full min-h-[291px] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
          <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
          <Image
            src={contentMap[activeTab as IActiveTab].authorImg}
            alt="CEO"
            loading="lazy"
            className="rounded-xl relative object-top"
            decoding="async"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              objectFit: "cover",
              color: "transparent",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StartUpStories;
