"use client";

import Image from "next/image";
import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

import { appRoutes } from "../Footer/Footer.data";
import Button from "../Button";

import Logo from "../../../public/imgs/forcythe logo.svg";
import Menu from "../../../public/imgs/menu.svg";

const Header = () => {
  const [isSideBarLink, setIsSideBarLinks] = useState(false);
  return (
    <div>
      <div className="py-[1.8rem] section-padding navbar z-30 gap-10 flex items-center justify-between w-full fixed top-0 left-0 backdrop-blur-md">
        <div className="flex items-center gap-[40px] lg:gap-[80px]">
          <Image src={Logo} alt="log" />

          <div className="hidden md:flex item-center gap-2 lg:gap-4 text-base text-white">
            {appRoutes?.slice(0, 5).map(({ id, path, title }) => (
              <a key={id} href={path}>
                <span>{title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button />
        </div>

        <div
          className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer"
          onClick={() => setIsSideBarLinks((prev) => !prev)}
        >
          <Image
            alt="menu"
            loading="lazy"
            width="18"
            height="18"
            src={Menu}
            style={{ color: "transparent" }}
          />
        </div>
      </div>

      {isSideBarLink && (
        <ClickAwayListener onClickAway={() => setIsSideBarLinks(false)}>
          <div className="card-wrapper rounded-[2rem] p-px decoration-clone z-[999999999] border-0 transition duration-500 flex flex-col flex-nowrap justify-center overflow-visible gap-10 h-[380px] w-60 fixed md:hidden right-5 top-28">
            <div
              className="card-content flex items-center justify-center 
          bg-transparent text-xs text-white z-10 rounded-[inherit] w-full"
            >
              <div
                className="w-full p-5 py-8 rounded-[2rem]"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
                }}
              >
                <ul className="flex flex-col">
                  {appRoutes?.map(({ id, path, title }) => (
                    <li key={id} className="w-full py-2.5">
                      <a className="w-full text-base py-3" href={path}>
                        <span>{title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Header;
