import React from "react";
import useTranslation from "next-translate/useTranslation";
import { FaHandPointRight } from "react-icons/fa";

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function Experience() {
  const { t } = useTranslation("home");

  return (
    <div id="experience" className="w-full h-screen px-7 py-[54px]">
      <h1 className="text-2xl font-bold text-center dark:text-yellow-300 md:text-4xl mt-9 md:text-left">
        {t("experience.title")}
      </h1>
      <p className="mt-3 text-xs font-normal text-left sm:text-sm md:text-base">
        {t("experience.description")}
      </p>

      {/*-------    Backend & System    -------*/}
      <div className="pl-2 md:pl-12">
        <h2 className="flex items-center mt-5 text-base font-medium md:text-2xl">
          {t("experience.backend")}
        </h2>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp;{" "}
          {`Node - NestJS, ExpressJS with TypeORM and Prisma`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp;{" "}
          {`PHP - Laravel Framework with Eloquent ORM`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`C# - ASP.NET Core with EF Core`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`Git, Docker, Nginx`}
        </p>
      </div>

      {/*-------    Database    -------*/}
      <div className="pl-2 md:pl-12">
        <h2 className="flex items-center mt-3 text-base font-medium md:text-2xl">
          {t("experience.database")}
        </h2>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`Postgres SQL`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`MySQL`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`SQL Server`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`MongoDB`}
        </p>
      </div>

      {/*-------    Frontend & UI    -------*/}
      <div className="pl-2 md:pl-12">
        <h2 className="flex items-center mt-3 text-base font-medium md:text-2xl">
          {t("experience.frontend")}
        </h2>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`CSS, SCSS`}
        </p>
        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp;{" "}
          {`Material UI, Bootstrap, Tailwind CSS and etc.`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`JavaScript ES6++ and TypeScript`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`React (NextJS), Vue, Angular`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`Kotlin and Dart(Flutter)`}
        </p>

        <p className="flex items-center ml-8 text-xs sm:text-sm md:text-base">
          <FaHandPointRight /> &nbsp; {`Photoshop`}
        </p>
      </div>
    </div>
  );
}
