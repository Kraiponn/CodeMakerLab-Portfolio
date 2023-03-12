import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import { FaHandPointRight } from "react-icons/fa";
import ContactLogo from "../../public/images/contact-img.svg";

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
      className="w-full px-16 py-[35px] mt-7 flex flex-col md:flex-row items-center"
    >
      {/*-------    Contact Logo    -------*/}
      <div className="relative hidden p-2 md:block">
        <Image
          src={ContactLogo}
          alt="logo"
          priority
          quality={100}
          sizes="100vw"
          width={0}
          height={0}
          className=""
        />
      </div>

      {/*-------    Contact Form    -------*/}
      <div className="w-[100%] md:w-[70%] mt-7">
        <h1 className="px-5 text-lg font-bold md:text-2xl lg:text-4xl">
          {t("contact.form_title")}
        </h1>

        {/* <form action="post"> */}
        <div className="flex flex-col items-center justify-start w-full gap-3 mt-5 md:flex-row">
          <input
            type="text"
            placeholder={t("contact.first_name")}
            className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-offset-0 focus:ring-rose-500 focus:border-0 focus:outline-none"
          />
          <input
            type="text"
            placeholder={t("contact.last_name")}
            className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-offset-0 focus:ring-rose-500 focus:border-0 focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-full gap-3 mt-5 md:flex-row">
          <input
            type="email"
            placeholder={t("contact.email")}
            className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-offset-0 focus:ring-rose-500 focus:border-0 focus:outline-none"
          />
          <input
            type="text"
            placeholder={t("contact.phone_no")}
            className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-offset-0 focus:ring-rose-500 focus:border-0 focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-full gap-3 mt-5 md:flex-row">
          <textarea
            name="message"
            rows={5}
            placeholder={t("contact.message")}
            className="w-full px-5 py-3 border-2 rounded-xl focus:ring-4 focus:ring-offset-0 focus:ring-rose-500 focus:border-0 focus:outline-none"
          />
        </div>

        <div className="mt-7">
          <button
            type="button"
            className="py-3 font-bold text-white border-none rounded-lg hover:-translate-y-1 hover:duration-200 hover:shadow-2xl active:translate-y-1 bg-rose-500 px-9"
          >
            {t("contact.button")}
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
