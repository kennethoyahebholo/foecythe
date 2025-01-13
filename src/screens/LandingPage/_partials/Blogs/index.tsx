"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components";
import { blogData, words } from "./Blogs.data";

import PlayIcon from "../../../../../public/svgs/PlayIcon";

const Blogs = () => {
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

      return () => {
        clearInterval(interval);
      };
    }
  }, [inView]);

  const renderBlogList = ({
    link,
    image,
    title,
    date,
    author,
  }: {
    link: string;
    image: StaticImageData;
    title: string;
    date: string;
    author: string;
  }) => (
    <a
      href={link}
      className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm  transition-all duration-500"
    >
      <div className="h-60 sm:h-56 relative mb-6">
        <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
        <Image
          src={image}
          height="3500"
          width="1500"
          loading="lazy"
          alt="plan-img"
          className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
          style={{ color: "transparent" }}
        />
        {/* <Image
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
          sizes="100vw"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            objectFit: "cover",
            color: "transparent",
          }}
        ></Image> */}
      </div>
      <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
        <p className="text-lg font-semibold mb-1 text-white">Blog</p>
        <div className="text-base text-darkGrey flex items-center mb-6">
          <span>{author}</span>
          <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
          <span>{date}</span>
        </div>
        <h6 className="text-xl md:text-2xl font-semibold line-clamp-2 text-white">
          {title}
        </h6>
      </div>
    </a>
  );

  return (
    <div className="section-margin my-10 lg:mb-24">
      <div
        ref={ref}
        className="flex flex-col md:flex-row md:justify-between md:items-center mb-12"
      >
        <div>
          <div>
            <p className="text-white text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
              {words?.map((word, index) => {
                return (
                  <span
                    key={index}
                    className={`inline-block transition-opacity duration-500 ${
                      index < visibleWords ? "opacity-100" : "opacity-0"
                    } `}
                    style={{ marginRight: "0.5rem" }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <Button
          title="Visit Blog"
          Icon={<PlayIcon className="fill-[#064386] group-hover:fill-white" />}
        />
      </div>
      <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {blogData?.map(({ id, link, image, title, date, author }) => (
          <div
            key={id}
            className="hover:border hover:border-[#064386] rounded-[1.3rem] overflow-hidden"
          >
            {renderBlogList({
              link,
              image,
              title,
              date,
              author,
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
