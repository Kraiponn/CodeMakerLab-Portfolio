import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import {
  FaGithubAlt,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

// https://www.facebook.com/nong.najaroon
// https://github.com/Kraiponn
// https://www.linkedin.com/in/kraipon-najaroon-323567203/

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function Footer() {
  const { t } = useTranslation("home");

  return (
    <div className="w-full h-[135px] flex items-center md:items-end justify-center flex-col md:flex-row md:justify-between px-7 py-5 bg-gradient-to-r from-slate-900 via-black to-slate-900">
      <h1 className="hidden text-5xl font-bold text-yellow-300 uppercase md:block">
        {t("footer.title")}
      </h1>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-5">
          <Link href="https://github.com/Kraiponn" target="_blank">
            <div className="text-gray-300 hover:text-white hover:scale-110">
              <FaGithub size={35} />
            </div>
          </Link>

          <Link href="https://www.facebook.com/nong.najaroon" target="_blank">
            <div className="text-gray-300 hover:text-white hover:scale-110">
              <FaFacebook size={35} />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kraipon-najaroon-323567203/"
            target="_blank"
          >
            <div className="text-gray-300 hover:text-white hover:scale-110">
              <FaLinkedin size={35} />
            </div>
          </Link>
        </div>

        <h1 className="mt-5 text-xs font-medium text-gray-400">
          {t("footer.present")}
        </h1>
      </div>
    </div>
  );
}
