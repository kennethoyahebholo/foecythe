"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Typewriter } from "react-simple-typewriter";

import { Button } from "@/components";

import Blog1 from "../../../../../public/imgs/blog.webp";
import Blog2 from "../../../../../public/imgs/blog2.webp";
import Blog3 from "../../../../../public/imgs/blog3.webp";
import PlayIcon from "../../../../../public/svgs/PlayIcon";

const Blogs = () => {
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
      className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-[red] transition-all duration-500"
    >
      <div className="h-60 sm:h-56 relative mb-6">
        <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
        <Image
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
        ></Image>
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

  const blogData = [
    {
      id: 1,
      link: "https://forcythe.com/blog/will-ai-take-over-art",
      image: Blog1,
      title: "Will AI take over Art?",
      date: "May 29th, 2024",
      author: "The Reformist",
    },
    {
      id: 2,
      link: "https://forcythe.com/blog/cryptocurrency-vs-tokens",
      image: Blog2,
      title: "Cryptocurrency vs Tokens",
      date: "May 29th, 2024",
      author: "The Reformist",
    },
    {
      id: 3,
      link: "https://forcythe.com/blog/cryptocurrency-and-crypto-asset",
      image: Blog3,
      title: "Cryptocurrency and Crypto asset",
      date: "May 29th, 2024",
      author: "The Reformist",
    },
  ];
  return (
    <div className="section-margin my-10 lg:mb-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div>
          <div>
            <p className="text-white text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
              <Typewriter
                words={["Read our articles, news and product blog"]}
                loop={1}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
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
          <div key={id}>
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
