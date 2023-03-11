import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";

import { useAppDispatch } from "@/features/hooks";
import { updateAvtiveMenu } from "@/features/store/reducers";
import { MenuType } from "@/interfaces";

import { Layout } from "@/components/Layout";
import Header from "@/components/Header";
import About from "@/components/About";
import Portfolio from "@/components/portfolio";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

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

      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </Layout>
  );
}
