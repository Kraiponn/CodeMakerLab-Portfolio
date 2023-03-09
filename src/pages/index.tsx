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
  const { theme } = useTheme();
  const { t } = useTranslation("home");
  const dispatch = useAppDispatch();

  const handleUdpateActiveMenu = (menuType: MenuType) => {
    dispatch(updateAvtiveMenu("portfolio"));
  };

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
      <About
        topic={t("about.topic")}
        title={t("about.title")}
        description={t("about.description")}
      />

      <div
        id="portfolio"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        Portfolio
      </div>

      <div
        id="experience"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        Experience
      </div>

      <div
        id="contact"
        className="w-full h-screen flex justify-center items-center text-4xl"
      >
        Contact
      </div>
    </Layout>
  );
}
