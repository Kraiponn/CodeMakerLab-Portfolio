import * as React from "react";
import Head from "next/head";

import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";

interface Props {
  title: string;
  content?: string;
  children: React.ReactNode;
}

export function Layout({ title, content, children }: Props) {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
    setTheme(currentTheme === "dark" ? "dark" : "light");
  }, [currentTheme, setTheme]);

  if (!mounted) {
    return null;
  }

  // console.log(currentTheme, mounted, theme);

  return (
    <>
      <Head>
        <meta name={title} content={content ? content : ""} />
        <title>{title}</title>
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  );
}
