import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaHandPointRight } from "react-icons/fa";
import ProfileLogo from "../../../public/images/profile_.jpg";
import {
  freelanceProjects,
  freelanceProjectsTh,
  jobsExperience,
  jobsExperienceTh,
  nidecProjects,
  nidecProjectsTh,
} from "@/utils/data";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IPersonalData, IProject } from "@/interfaces";

interface Props {
  personalData: IPersonalData[];
  projects: IProject[];
}
interface IQuery extends ParsedUrlQuery {
  slug: string;
}

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function ExperienceDetail({ personalData, projects }: Props) {
  const { locale } = useRouter();
  // console.log(query);

  return (
    <div className="w-full px-[3rem] mb-[3rem]">
      {/*-------    Profile Details    -------*/}
      <div className="w-full flex flex-col gap-3 md:flex-row mt-[3rem]">
        {/*-------    Profile Photo    -------*/}
        <Image
          src={ProfileLogo}
          alt="Profile photo"
          sizes="100vw"
          className="w-[75px] sm:w-[150px] md:w-[200px] shadow-xl rounded-full mx-auto md:ml-3"
        />

        {/*-------    Description    -------*/}
        <div className="md:pl-7">
          <h1 className="w-full mt-3 text-base font-bold text-center text-red-500 md:text-left sm:text-lg md:text-2xl lg:text-4xl">
            {personalData[0].years}
          </h1>

          <h3 className="w-full mt-2 text-base font-bold text-center text-gray-700 capitalize md:text-left dark:text-yellow-400 sm:text-lg md:text-xl lg:text-2xl md:font-semibold">
            {personalData[0].company}
          </h3>

          <p className="mt-5 text-xs break-all indent-12 sm:text-sm md:text-base">
            {personalData[0].responsibility}
          </p>
        </div>
      </div>

      {/*-------    My Projects    -------*/}
      <div className="w-full mt-9">
        {/*-----    Title    -----*/}
        <h3 className="flex items-center w-full mt-2 text-base font-medium text-left text-gray-900 dark:text-yellow-400 sm:text-lg md:text-xl">
          <FaHandPointRight /> &nbsp;{" "}
          {locale === "en"
            ? `Check out some of my work right here`
            : `ชมผลงานบางส่วนของฉันได้ที่นี่`}
        </h3>

        {/*-----    Card    -----*/}
        <div className="grid w-full grid-cols-1 my-7 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  const { slug } = query as IQuery;
  let projects: IProject[] = [];

  if (slug[1] === "nidec-copal") {
    projects = locale === "en" ? nidecProjects : nidecProjectsTh;
  } else {
    projects = locale === "en" ? freelanceProjects : freelanceProjectsTh;
  }

  const data = locale === "en" ? jobsExperience : jobsExperienceTh;
  const personalData = data.filter((p) => p.id === slug[0]);

  return {
    props: {
      personalData,
      projects,
    },
  };
};
