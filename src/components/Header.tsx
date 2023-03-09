import Link from "next/link";
import Image from "next/image";
import Typed from "react-typed";
import { MenuType } from "@/interfaces";

import { MdEast } from "react-icons/md";
import HomeLogoDark from "../../public/images/header-img.svg";
import HomeLogoLight from "../../public/images/moon-rocket.png";

interface Props {
  theme: string;
  title: string;
  description: string;
  textButton: string;
  handleUdpateActiveMenu: (menuType: MenuType) => void;
}

/**
 * ***************************************************************************************
 * Header Method
 *
 * @param         string
 * @param         string
 * @param         string
 * @param         string
 * @param         Function:void
 *
 * @return        void
 * ***************************************************************************************
 */
export default function Header({
  theme,
  title,
  description,
  textButton,
  handleUdpateActiveMenu,
}: Props) {
  return (
    <div
      id="home"
      className="relative text-4xl w-full h-screen bg-gradient-to-b from-white via-blue-200 to-white"
      style={{
        backgroundImage: theme === "dark" ? "url(./images/banner-bg.png)" : "",
      }}
    >
      <div className="absolute top-1/4 left-1/2 w-3/4 translate-x-[-50%] md:w-1/2 md:top-1/2 md:left-2 md:pl-12 md:translate-x-0">
        <h1 className="text-red-600 dark:text-white text-2xl font-bold md:text-4xl lg:text-6xl">
          <Typed strings={[title]} typeSpeed={100} backSpeed={100} loop />
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 indent-6 mt-5">
          {description}
        </p>

        <Link href="#portfolio">
          <button
            onClick={() => handleUdpateActiveMenu("portfolio")}
            className="flex justify-end items-center text-sm font-light mt-[3rem] text-white border-0 bg-blue-500 dark:bg-rose-600 rounded-md py-2 px-5 hover:shadow-xl hover:scale-110 hover:duration-500"
          >
            {textButton} &nbsp; <MdEast />
          </button>
        </Link>
      </div>

      {/* Animate Avatar */}
      <div className="absolute bottom-[10%] right-5 animate-anim-header hidden md:block lg:pr-16">
        <Image
          src={theme === "dark" ? HomeLogoDark : HomeLogoLight}
          alt="welcome"
          priority
          quality={100}
          sizes="100vw"
          className="h-[400px] w-[350px] opacity-1 scale-100 animate-anim-header-start"
        />
      </div>
    </div>
  );
}
