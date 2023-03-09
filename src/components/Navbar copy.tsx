import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";

import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { MenuType } from "@/interfaces";
import {
  toggleLocale,
  updateAvtiveMenu,
  closeMobileMenu,
  openMobileMenu,
} from "@/features/store/reducers";

import { FaHamburger, FaExpandArrowsAlt, FaSun } from "react-icons/fa";
import DarkModeIcon from "../../public/images/moon.png";
import AppLogo from "../../public/images/logo.png";
import EnFlag from "../../public/images/en-flag.png";
import ThFlag from "../../public/images/th-flag.png";

/**
 *  Navigation Bar Function
 *  @param       interface
 *  @returns     JSX.Element
 */
const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const { openMenu, locale, currentMenu } = useAppSelector(
    (store) => store.appThemes
  );
  const dispatch = useAppDispatch();

  const currentTheme = theme === "system" ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
    setTheme(currentTheme === "dark" ? "dark" : "light");
  }, [currentTheme, setTheme]);

  React.useEffect(() => {
    router.push(router.pathname, router.pathname, { locale });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  if (!mounted) {
    return null;
  }

  const handleOpenMobileMenu = () => {
    dispatch(openMobileMenu());
  };

  const handleCloseMobileMenu = () => {
    dispatch(closeMobileMenu());
  };

  const handleToggleLocale = () => {
    dispatch(toggleLocale());
  };

  const handleToggleThemeMode = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const handleUpdateActiveMenu = (menuType: MenuType) => {
    dispatch(updateAvtiveMenu(menuType));
  };

  return (
    <>
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
                  onClick={handleOpenMobileMenu}
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
                className={`text-white hover:text-red-600 ${
                  currentMenu === "home" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("home")}
              >
                <Link href="#home">{t("navbar.home")}</Link>
              </li>

              <li
                className={`text-white hover:text-red-600 ${
                  currentMenu === "about" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("about")}
              >
                <Link href="#about">{t("navbar.about")}</Link>
              </li>

              <li
                className={`text-white hover:text-red-600 ${
                  currentMenu === "portfolio" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("portfolio")}
              >
                <Link href="#portfolio">{t("navbar.portfolio")}</Link>
              </li>

              <li
                className={`text-white hover:text-red-600 ${
                  currentMenu === "experience" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("experience")}
              >
                <Link href="#experience">{t("navbar.experience")}</Link>
              </li>

              <li
                className={`text-white hover:text-red-600 ${
                  currentMenu === "contact" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("contact")}
              >
                <Link href="#contact">{t("navbar.contact")}</Link>
              </li>

              <li className="text-white font-bold">
                <button
                  onClick={handleCloseMobileMenu}
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
              <li
                className={`hover:text-red-600 dark:hover:text-gray-400 ${
                  currentMenu === "home" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("home")}
              >
                <Link href="#home">{t("navbar.home")}</Link>
              </li>

              <li
                className={`hover:text-red-600 dark:hover:text-gray-400 ${
                  currentMenu === "about" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("about")}
              >
                <Link href="#about">{t("navbar.about")}</Link>
              </li>

              <li
                className={`hover:text-red-600 dark:hover:text-gray-400 ${
                  currentMenu === "portfolio" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("portfolio")}
              >
                <Link href="#portfolio">{t("navbar.portfolio")}</Link>
              </li>

              <li
                className={`hover:text-red-600 dark:hover:text-gray-400 ${
                  currentMenu === "experience" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("experience")}
              >
                <Link href="#experience">{t("navbar.experience")}</Link>
              </li>

              <li
                className={`hover:text-red-600 dark:hover:text-gray-400 ${
                  currentMenu === "contact" ? "active_menu" : ""
                }`}
                onClick={() => handleUpdateActiveMenu("contact")}
              >
                <Link href="#contact">{t("navbar.contact")}</Link>
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
