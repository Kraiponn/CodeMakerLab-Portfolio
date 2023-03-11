import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { FaHandPointRight } from "react-icons/fa";
import ProfileLogo from "../../../public/images/profile_.jpg";

import { IProject } from "@/interfaces";
import { portfolioProjects, portfolioProjectsTh } from "@/utils/data";

interface Props {}

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function Contact({}: Props) {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  return (
    <div
      id="contact"
      className="flex items-center justify-center w-full h-screen px-7"
    >
      <h1 className="text-2xl font-bold">{t("contact.title")}</h1>
    </div>
  );
}
