import React from "react";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import { useAppSelector } from "@/features/hooks";

import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineForward } from "react-icons/md";
import ProfileLogo from "../../public/images/profile_.jpg";

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function About() {
  const { locale } = useAppSelector((store) => store.appThemes);
  const { t } = useTranslation("home");

  return (
    <div
      id="about"
      className="relative flex flex-col items-center justify-center w-full h-screen dark:bg-slate-900"
    >
      <div className="flex flex-col items-center justify-start w-full px-7 md:px-12 md:gap-10 md:flex-row">
        <div className="w-full grow">
          <Image
            src={ProfileLogo}
            alt="app profile"
            priority
            quality={100}
            sizes="100vw"
            className="rounded-full shadow-2xl mx-auto w-[70px] sm:w-[125px] md:w-[200px]"
          />
        </div>

        <div className="mt-3">
          <h2 className="text-lg font-bold text-center text-gray-800 sm:text-xl md:text-left md:text-2xl dark:text-red-600">
            {t("about.title")}
          </h2>

          <h5 className="mt-2 text-xs italic font-normal text-center text-gray-700 dark:text-gray-300 md:text-base md:text-left">
            {t("about.email")}
          </h5>

          <h5 className="text-xs font-normal text-center text-gray-700 dark:text-gray-300 md:text-base md:text-left">
            {t("about.tel")}
          </h5>

          {/*-------    Description    -------*/}
          <p className="mt-5 text-xs tracking-wide break-all sm:text-sm md:text-base md:mt-5 indent-9">
            {t("about.description")}
          </p>
        </div>
      </div>

      {/*-------   Experiences   -------*/}
      <div className="w-[85%] mx-auto mt-12">
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <Link href={`/experience/1/nidec-copal`} locale={locale}>
            <h2 className="text-sm font-bold text-slate-900 dark:text-yellow-400 md:text-base lg:text-lg hover:scale-105">
              {t("about.experiences.job1.timeline")}
            </h2>
          </Link>

          <p className="hidden md:block">
            <MdOutlineForward />
          </p>
          <p className="text-xs font-medium md:text-base lg:text-lg">
            {t("about.experiences.job1.detail")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 my-5 md:flex-row">
          {/* <Link href={`/experience/2`} locale={locale}> */}
          <h2 className="text-sm font-bold text-slate-900 dark:text-yellow-400 md:text-base lg:text-lg">
            {t("about.experiences.job2.timeline")}
          </h2>
          {/* </Link> */}

          <p className="hidden md:block">
            <MdOutlineForward />
          </p>
          <p className="text-xs font-medium md:text-base lg:text-lg">
            {t("about.experiences.job2.detail")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row">
          {/* <Link href={`/experience/3`} locale={locale}> */}
          <h2 className="text-sm font-bold text-slate-900 dark:text-yellow-400 md:text-base lg:text-lg">
            {t("about.experiences.job3.timeline")}
          </h2>
          {/* </Link> */}

          <p className="hidden md:block">
            <MdOutlineForward />
          </p>
          <p className="text-xs font-medium md:text-base lg:text-lg">
            {t("about.experiences.job3.detail")}
          </p>
        </div>

        {/* <div className="flex flex-col items-center gap-3 my-5 md:flex-row">
          <h2 className="text-sm font-bold text-slate-900 dark:text-yellow-400 md:text-base lg:text-lg">
            {t("about.experiences.job4.timeline")}
          </h2>

          <p className="hidden md:block">
            <MdOutlineForward />
          </p>
          <p className="text-xs font-medium md:text-base lg:text-lg">
            {t("about.experiences.job4.detail")}
          </p>
        </div> */}

        <div className="flex flex-col items-center gap-3 mt-5 md:flex-row">
          <Link href={`/experience/5/freelance`} locale={locale}>
            <h2 className="flex items-center text-sm font-bold text-rose-600 dark:text-yellow-400 md:text-lg hover:scale-105">
              <span className="text-gray-900 dark:text-gray-300">
                <FaHandPointRight />
              </span>{" "}
              &nbsp; {t("about.experiences.job5.timeline")}
            </h2>
          </Link>

          <p className="hidden md:block">
            <MdOutlineForward />
          </p>
          <p className="text-xs font-medium md:text-lg">
            {t("about.experiences.job5.detail")}
          </p>
        </div>
      </div>

      <div className="bg-gray-300 dark:bg-gray-600 px-9 h-[0.5px] w-1/2 mx-auto mt-12 md:hidden"></div>
    </div>
  );
}
