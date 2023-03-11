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
      className="w-full h-screen px-16 py-[54px] flex flex-col md:flex-row items-center"
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
        <h1 className="px-5 text-lg font-bold md:text-2xl lg:text-4xl">{`Get In Touch`}</h1>

        {/* <form action="post"> */}
        <div className="flex flex-col items-center justify-start w-full gap-3 mt-5 md:flex-row">
          <input
            type="text"
            placeholder={`First Name`}
            className="w-full px-5 py-3 border-2 rounded-xl"
          />
          <input
            type="text"
            placeholder={`Last Name`}
            className="w-full px-5 py-3 border-2 rounded-xl"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-full gap-3 mt-5 md:flex-row">
          <input
            type="email"
            placeholder={`Email Address`}
            className="w-full px-5 py-3 border-2 rounded-xl"
          />
          <input
            type="text"
            placeholder={`Phone No.`}
            className="w-full px-5 py-3 border-2 rounded-xl"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-full gap-3 mt-5 md:flex-row">
          <textarea
            name="message"
            rows={5}
            placeholder={`Message`}
            className="w-full px-5 py-3 border-2 rounded-xl"
          />
        </div>

        <div className="mt-7">
          <button
            type="button"
            className="py-3 font-bold text-white border-none rounded-lg hover:-translate-y-1 hover:duration-200 hover:text-slate-500 bg-rose-500 hover:bg-rose-400 px-9"
          >{`SEND`}</button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
