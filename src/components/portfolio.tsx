import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { portfolioProjects, portfolioProjectsTh } from "@/utils/data";

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function Portfolio() {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  const projects = locale === "en" ? portfolioProjects : portfolioProjectsTh;

  return (
    <div id="portfolio" className="w-full px-7 py-[54px]">
      <h1 className="text-2xl font-bold text-center md:text-4xl mt-9 md:text-left dark:text-yellow-300">
        {t("portfolio.title")}
      </h1>
      <p className="mt-3 text-xs font-normal text-center sm:text-sm md:text-base md:text-left">
        {t("portfolio.description")}
      </p>

      {/*-----    Card    -----*/}
      <div className="grid w-full grid-cols-1 gap-12 my-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p) => {
          return (
            <div
              key={p.id}
              className="flex flex-col rounded-lg shadow-2xl dark:bg-slate-900"
            >
              <Link href={p.url} target="_blank">
                <div className="relative overflow-hidden">
                  <Image
                    src={p.picture}
                    alt={p.name}
                    sizes="100vw"
                    quality={100}
                    priority
                    width={0}
                    height={0}
                    className="w-full h-[15rem] hover:scale-110 hover:duration-1000 md:h-[12rem] rounded-t-2xl object-fill object-center"
                  />
                </div>
              </Link>

              <h2 className="flex items-center justify-center flex-1 px-3 py-3 text-sm font-bold text-center text-white capitalize rounded-b-lg dark:text-yellow-400 bg-slate-900 sm:text-base">
                {p.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
