import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";

import { useAppDispatch } from "@/features/hooks";
import { updateAvtiveMenu } from "@/features/store/reducers";
import { MenuType } from "@/interfaces";

import Header from "@/components/Header";
import { Layout } from "@/components/Layout";
import About from "@/components/About";

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const { t } = useTranslation("home");
  const dispatch = useAppDispatch();

  const handleUdpateActiveMenu = (menuType: MenuType) => {
    dispatch(updateAvtiveMenu(menuType));
  };

  const currentTheme = theme === "system" ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setTheme(currentTheme === "dark" ? "dark" : "light");
  }, [currentTheme, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <Layout title={t("title")} content={t("content")}>
      {/*-------    Header - Home    -------*/}
      <Header
        theme={theme as string}
        title={t("home.title")}
        description={t("home.description")}
        textButton={t("home.button")}
        handleUdpateActiveMenu={handleUdpateActiveMenu}
      />

      {/*-------    About    -------*/}
      <About />

      <div
        id="portfolio"
        className="flex items-center justify-center w-full h-screen text-4xl"
      >
        Portfolio
      </div>

      <div
        id="experience"
        className="flex items-center justify-center w-full h-screen text-4xl"
      >
        Experience
      </div>

      <div
        id="contact"
        className="flex items-center justify-center w-full h-screen text-4xl"
      >
        Contact
      </div>
    </Layout>
  );
}
