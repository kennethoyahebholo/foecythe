"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import PlayIcon from "../../../../../public/svgs/PlayIcon";
import Image1 from "../../../../../public/imgs/stac.svg";
import Image2 from "../../../../../public/imgs/activity.svg";
import Image3 from "../../../../../public/imgs/africaFund.svg";
import Image4 from "../../../../../public/imgs/starks (1).svg";
import Image5 from "../../../../../public/imgs/exec-pro.svg";
import Image6 from "../../../../../public/imgs/phone.svg";

const Hero = () => {
  const words = ["Success", "in", "Motion", "-", "Our", "client's", "journey"];
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => (prev < words.length ? prev + 1 : prev));
    }, 300); // Adjust the delay as needed

    return () => clearInterval(interval); // Cleanup interval
  }, [words.length]);

  const data = [
    {
      id: 1,
      img: Image1,
    },
    {
      id: 2,
      img: Image2,
    },
    {
      id: 3,
      img: Image3,
    },
    {
      id: 4,
      img: Image4,
    },
    {
      id: 5,
      img: Image5,
    },
    {
      id: 6,
      img: Image6,
    },
  ];
  return (
    <div className="md:min-h-screen bg-[url('/imgs/header-background.svg')] bg-no-repeat bg-top">
      <div className="section-padding">
        <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
          <div className="max-w-[56rem]">
            <div className="min-h-[180px]">
              <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                We build <span className="text-accent">products </span>
                that shape a better future
              </h1>
            </div>
            <div className="mb-8 max-w-3xl">
              <div>
                <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                  <Typewriter
                    words={[
                      "We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation",
                    ]}
                    loop={1}
                    cursor={false}
                    typeSpeed={70}
                    deleteSpeed={0}
                    delaySpeed={1000}
                  />
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Button
                Icon={
                  <PlayIcon className="fill-[#064386] group-hover:fill-white" />
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="min-h-[60px]">
          <div>
            <div>
              <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
                {words?.map((word, index) => {
                  const isTextColorStyled = ["Motion"].includes(word);
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
        </div>
        <div
          className="flex flex-col gap-5"
          style={{
            background:
              "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
          }}
        >
          <Marquee>
            <div className="skills overflow-hidden flex items-stretch gap-5 w-full ml-5">
              {data?.map(({ id, img }) => (
                <div key={id} className="relative w-auto h-[340px]">
                  <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                  <Image
                    alt={`project-image-${id}`}
                    className="overflow-hidden w-full h-full"
                    style={{ color: "transparent" }}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    src={img}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee direction="right">
            <div className="skills overflow-hidden flex items-stretch gap-5 w-full ml-5">
              {data?.map(({ id, img }) => (
                <div key={id} className="relative w-auto h-[340px]">
                  <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
                  <Image
                    alt={`project-image-${id}`}
                    className="overflow-hidden w-full h-full"
                    style={{ color: "transparent" }}
                    width={100}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    src={img}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
