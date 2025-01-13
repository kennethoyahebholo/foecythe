import React from "react";
import Image from "next/image";

import Logo from "../../../public/imgs/forcythe logo.svg";
import Facebook from "../../../public/imgs/facebook.svg";
import Instagram from "../../../public/imgs/instagram.svg";
import LinkedIn from "../../../public/imgs/linkedin.svg";
import X from "../../../public/imgs/x.svg";
import YouTube from "../../../public/imgs/youtube.svg";
import Podcast from "../../../public/imgs/Icon.svg";

const Footer = () => {
  return (
    <div className="section-padding py-10 bg-secondaryBackground">
      <div className="lg:grid lg:grid-cols-3 my-10">
        <div className="max-w-lg mb-10 lg:mb-0">
          <div className="w-full grid grid-cols-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-5 items-center text-white">
            <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className="hidden"
              />
            </div>
            <label htmlFor="agreement" className="text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0 ">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <Image
              src={Logo}
              alt="log"
              height="9"
              width="130"
              style={{ color: "transparent" }}
              className="mb-5 md:mb-8"
            />
            <p className="text-base text-darkGrey leading font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              <a
                href="https://web.facebook.com/forcythe"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={Facebook}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.instagram.com/forcythe"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={Instagram}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://twitter.com/forcythe_"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={X}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/forcythe/"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={LinkedIn}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.youtube.com/@forcythe"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={YouTube}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://creators.spotify.com/pod/show/the-future-insight"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={Podcast}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
          </div>
          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold text-white">Company</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-base text-accent2 font-medium">
                <a href="/about">
                  <span>About</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/services">
                  <span>Services</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/service#portfolio">
                  <span>Portfolio</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/studio">
                  <span>Studio</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/soundation">
                  <span>Foundation</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/careers">
                  <span>Careers</span>
                </a>
              </li>
              <li className="text-base text-accent2 font-medium">
                <a href="/blog">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              <a
                href="https://web.facebook.com/forcythe"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={Facebook}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.instagram.com/forcythe"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={Instagram}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://twitter.com/forcythe_"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={X}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/forcythe/"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={LinkedIn}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://www.youtube.com/@forcythe"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={YouTube}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
              <a
                href="https://creators.spotify.com/pod/show/the-future-insight"
                target="_blank"
                className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
              >
                <Image
                  src={Podcast}
                  alt="social"
                  height="20"
                  width="20"
                  style={{ color: "transparent" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright border-t-[1px] border-accent">
        <p className="text-accent2 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
