import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { toggleOpenMobileMenu, toggleLocale } from "@/features/store/reducers";

import AppLogo from "../../public/images/logo.png";
import EnFlag from "../../public/images/en-flag.png";
import ThFlag from "../../public/images/th-flag.png";
import DarkModeIcon from "../../public/images/moon.png";
import { FaHamburger, FaExpandArrowsAlt, FaMoon, FaSun } from "react-icons/fa";

interface Props {}

/**
 *  Navigation Bar Function
 *  @param       interface
 *  @returns     JSX.Element
 */
const Navbar = ({}: Props) => {
  const { theme, setTheme } = useTheme();
  const { openMenu, locale } = useAppSelector((store) => store.appThemes);
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleOpenMobileMenu());
  };

  const handleToggleLocale = () => {
    dispatch(toggleLocale());
  };

  const handleToggleThemeMode = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <>
      {/* <nav className="fixed left-0 top-0 right-0 z-10 w-full shadow-sm bg-white dark:bg-slate-800 dark:text-white"> */}
      <nav
        className={`fixed left-0 top-0 right-0 z-10 w-full shadow-inner dark:text-white bg-white dark:bg-transparent`}
      >
        <div className="px-4 mx-auto md:flex gap-2 md:items-center">
          {/*-----   App Logo & Mobile Button   -----*/}
          <div className="">
            <div className="flex justify-between items-center py-3 dark:py-5 md:block">
              <Link href="#home">
                <Image
                  src={AppLogo}
                  alt="app logo"
                  sizes="100vw"
                  priority
                  quality={100}
                  className="w-6 md:w-9 hover:cursor-pointer"
                />
              </Link>

              <div className="md:hidden">
                <button
                  onClick={handleToggleMenu}
                  className="text-gray-700 dark:text-white text-xl"
                >
                  {openMenu ? <FaExpandArrowsAlt /> : <FaHamburger />}
                </button>
              </div>
            </div>
          </div>

          {/*-----   Menu List  -----*/}
          <div className="text-gray-800 flex-1">
            {/*-----   Mobile Menu  -----*/}
            <ul
              className={`fixed left-0 top-0 right-0 z-20 uppercase w-full h-screen text-lg font-semibold bg-slate-800 flex justify-center items-center flex-col gap-6 sm:text-xl md:hidden ${
                openMenu ? "visible" : "hidden"
              }`}
            >
              <li
                className="text-white hover:text-red-600"
                onClick={handleToggleMenu}
              >
                <Link href="#home">Home</Link>
              </li>

              <li
                className="text-white hover:text-red-600"
                onClick={handleToggleMenu}
              >
                <Link href="#about">About</Link>
              </li>

              <li
                className="text-white hover:text-red-600"
                onClick={handleToggleMenu}
              >
                <Link href="#experience">Experience</Link>
              </li>

              <li
                className="text-white hover:text-red-600"
                onClick={handleToggleMenu}
              >
                <Link href="#portfolio">Portfolio</Link>
              </li>

              <li
                className="text-white hover:text-red-600"
                onClick={handleToggleMenu}
              >
                <Link href="#contact">Contact</Link>
              </li>

              <li className="text-white font-bold">
                <button
                  onClick={handleToggleMenu}
                  className="mt-10 text-4xl transition hover:scale-110"
                >
                  <FaExpandArrowsAlt />
                </button>
              </li>
            </ul>

            {/*-----   Desktop Menu  -----*/}
            <ul
              className={`text-lg gap-9 justify-center items-center font-semibold text-gray-800 dark:text-white hidden md:flex`}
            >
              <li className="hover:text-red-600 dark:hover:text-gray-400">
                <Link href="#home">Home</Link>
              </li>

              <li className="hover:text-red-600 dark:hover:text-gray-400">
                <Link href="#about">About</Link>
              </li>

              <li className="hover:text-red-600 dark:hover:text-gray-400">
                <Link href="#portfolio">Portfolio</Link>
              </li>

              <li className="hover:text-red-600 dark:hover:text-gray-400">
                <Link href="#experience">Experience</Link>
              </li>

              <li className="hover:text-red-600 dark:hover:text-gray-400">
                <Link href="#contact">Contact</Link>
              </li>

              <li className="ml-12">
                <button
                  className="text-slate-900 dark:text-yellow-300"
                  onClick={handleToggleLocale}
                >
                  {locale === "en" ? (
                    <Image
                      src={ThFlag}
                      alt="Locales"
                      quality={100}
                      priority
                      sizes="100vw"
                      className="w-[25px] h-[25px]"
                    />
                  ) : (
                    <Image
                      src={EnFlag}
                      alt="Locales"
                      quality={100}
                      priority
                      sizes="100vw"
                      className="w-[25px] h-[25px]"
                    />
                  )}
                </button>
              </li>

              <li className="">
                <button
                  className="text-slate-900 dark:text-yellow-300"
                  onClick={handleToggleThemeMode}
                >
                  {theme === "dark" ? (
                    <FaSun size={28} />
                  ) : (
                    <Image
                      src={DarkModeIcon}
                      alt="Theme mode button"
                      quality={100}
                      priority
                      sizes="100vw"
                      className="w-[25px] h-[25px]"
                    />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
