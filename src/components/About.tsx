import React from "react";
import Image from "next/image";

import ProfileLogo from "../../public/images/profile.jpg";

interface Props {
  topic: string;
  title: string;
  description: string;
}

/**
 * ***************************************************************************************
 * ABOUT ME
 *
 *
 * @return        void
 * ***************************************************************************************
 */
export default function About({ topic, title, description }: Props) {
  return (
    <div
      id="about"
      className="relative w-full h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full px-7 md:px-12 md:gap-10 flex flex-col justify-start items-center md:flex-row">
        <div className="grow w-full">
          <Image
            src={ProfileLogo}
            alt="app profile"
            priority
            quality={100}
            sizes="100vw"
            className="rounded-full shadow-2xl mx-auto w-[70px] sm:w-[125px] md:w-[200px]"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-sm sm:text-sm uppercase text-blue-600 font-semibold text-center md:text-left">
            {topic}
          </h3>

          <h2 className="mt-2 text-center md:text-left text-xl sm:text-2xl text-gray-800 dark:text-red-600 font-bold">
            {title}
          </h2>

          {/*-------    Description    -------*/}
          <p className="mt-5 md:mt-7 indent-9 text-xs sm:text-sm text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>

      <div className="bg-gray-300 dark:bg-gray-600 px-9 h-[0.5px] w-1/2 mx-auto mt-12 md:mt-[8rem]"></div>
    </div>
  );
}
