import Link from "next/link";
import Image from "next/image";
import Typed from "react-typed";
import { useTheme } from "next-themes";

import { MdEast } from "react-icons/md";
import HomeLogoDark from "../../public/images/header-img.svg";
import HomeLogoLight from "../../public/images/moon-rocket.png";

import { Layout } from "@/components/Layout";

interface Props {}

export default function Home({}: Props) {
  const { theme } = useTheme();

  return (
    <Layout title="portfolio" content="code maker lab portfolio">
      <div
        id="home"
        // className="relative text-4xl w-full h-screen object-contain object-center bg-scroll bg-cover bg-center"
        className="relative text-4xl w-full h-screen bg-gradient-to-b from-white via-blue-200 to-white"
        style={{
          backgroundImage:
            theme === "dark" ? "url(./images/banner-bg.png)" : "",
        }}
      >
        <div className="absolute top-1/4 left-1/2 w-3/4 translate-x-[-50%] md:w-1/2 md:top-1/2 md:left-2 md:pl-12 md:translate-x-0">
          <h1 className="text-red-600 dark:text-white text-2xl font-bold md:text-4xl lg:text-6xl">
            <Typed
              strings={[`I'm a Web Developer`]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 indent-6 mt-3">
            I have of 10 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            NodeJS, NestJS, Laravel, ASP.Net Core, React, NextJS, Docker, Github
            and more.
          </p>

          <Link href="#portfolio">
            <button className="flex justify-end items-center text-sm font-light mt-[3rem] text-white border-0 bg-blue-500 dark:bg-rose-600 rounded-md py-2 px-5 hover:shadow-xl hover:scale-110 hover:duration-500">
              Portfolio &nbsp; <MdEast />
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

      <div
        id="about"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        About
      </div>

      <div
        id="portfolio"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        Portfolio
      </div>

      <div
        id="experience"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        Experience
      </div>

      <div
        id="contact"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        Contact
      </div>
    </Layout>
  );
}
