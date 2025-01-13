"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Typewriter } from "react-simple-typewriter";

import Starks from "../../../../../public/imgs/starks.svg";
import ExecutivePros from "../../../../../public/imgs/ExecutivePros Logo.svg";
import Stacai from "../../../../../public/imgs/stacai.svg";
import Iwaria from "../../../../../public/imgs/iwaria.svg";
import Beaupreneur from "../../../../../public/imgs/Beaupreneur.svg";
import John from "../../../../../public/imgs/john.svg";
import Christiana from "../../../../../public/imgs/christina.svg";
import ExecutiveProsCEO from "../../../../../public/imgs/executive-pro-ceo.svg";
import IwariaFounder from "../../../../../public/imgs/iwaria-founder.svg";
import Edwin from "../../../../../public/imgs/edwin.svg";

const StartUpStories = () => {
  const words = [
    "Discover",
    "the",
    "transfornative",
    "stories",
    "of",
    "startups",
    "that",
    "scaled",
    "new",
    "heights",
    "with",
    "us",
  ];
  const [showAuthor, setShowAuthor] = useState(false);
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<
    "Starks" | "ExecutivePros" | "Stacai" | "Iwaria" | "Beaupreneur"
  >("Starks");

  const contentMap: Record<
    "Starks" | "ExecutivePros" | "Stacai" | "Iwaria" | "Beaupreneur",
    {
      id: string;
      title: string[];
      description: string[];
      image: StaticImageData;
      author: string[];
      width: string;
      isRounded?: string;
      authorImg: StaticImageData;
      leftPosition: string;
    }
  > = {
    Starks: {
      id: "Starks",
      title: ["Starks Associate"],
      description: [
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament o their commitment. They've become more than a service provider; they're a trusted ally",
      ],
      author: ["John, Management"],
      image: Starks,
      width: "w-full",
      isRounded: "rounded-s-full",
      authorImg: John,
      leftPosition: "0%",
    },
    ExecutivePros: {
      id: "ExecutivePros",
      title: ["ExecutivePros"],
      description: [
        "The team understood the assignment and delievered very well. One of the things that stood out was ho they took our concepts and turned it into visual appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
      ],
      author: ["Testimony, Co Founder"],
      image: ExecutivePros,
      width: "w-full",
      authorImg: ExecutiveProsCEO,
      leftPosition: "20%",
    },
    Stacai: {
      id: "Stacai",
      title: ["Stac AI"],
      description: [
        "Forcythe is seriously amazing when comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team's commitment to our vision was evident every step of the way",
      ],
      author: ["Edwin, Former CTO"],
      image: Stacai,
      width: "w-full",
      authorImg: Edwin,
      leftPosition: "40%",
    },
    Iwaria: {
      id: "Iwaria",
      title: ["Iwaria"],
      description: [
        "The moment we engageed Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand's story, captivating our audience like never before.",
      ],
      author: ["Iwaria, Founder"],
      image: Iwaria,
      width: "w-20",
      authorImg: IwariaFounder,
      leftPosition: "30%",
    },
    Beaupreneur: {
      id: "Beaupreneur",
      title: ["Beaupreneur:"],
      description: [
        "I'm beyond impressed with the dedication Forcythe showed. They didn't just delivered they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers' heart",
      ],
      author: ["Christiana, Founder"],
      image: Beaupreneur,
      width: "w-36",
      isRounded: "rounded-e-full",
      authorImg: Christiana,
      leftPosition: "50%",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
    }, 300); // Adjust the delay as needed

    return () => clearInterval(interval); // Cleanup interval
  }, [words.length]);

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
    <div className="section-padding py-10">
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
          left: `${
            contentMap[
              activeTab as
                | "Starks"
                | "ExecutivePros"
                | "Stacai"
                | "Iwaria"
                | "Beaupreneur"
            ].leftPosition
          }`,
        }}
        className="mt-5 h-full w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative"
      >
        <div className="sm:basis-[58%] pr-3 min-h-[291px] flex flex-col justify-between">
          <div>
            <p className="text-base font-bold mb-4">
              <Typewriter
                key={activeTab + "-title"}
                words={
                  contentMap[
                    activeTab as
                      | "Starks"
                      | "ExecutivePros"
                      | "Stacai"
                      | "Iwaria"
                      | "Beaupreneur"
                  ].title
                }
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
                words={
                  contentMap[
                    activeTab as
                      | "Starks"
                      | "ExecutivePros"
                      | "Stacai"
                      | "Iwaria"
                      | "Beaupreneur"
                  ].description
                }
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
                words={
                  contentMap[
                    activeTab as
                      | "Starks"
                      | "ExecutivePros"
                      | "Stacai"
                      | "Iwaria"
                      | "Beaupreneur"
                  ].author
                }
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
            src={
              contentMap[
                activeTab as
                  | "Starks"
                  | "ExecutivePros"
                  | "Stacai"
                  | "Iwaria"
                  | "Beaupreneur"
              ].authorImg
            }
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
