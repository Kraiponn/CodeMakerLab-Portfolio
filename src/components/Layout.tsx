import * as React from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";

interface Props {
  title: string;
  content?: string;
  children: React.ReactNode;
}

/**
 * ***************************************************************************************
 *                        >>>>>>>     MAIN METHOD     <<<<<<<
 * ***************************************************************************************
 */
export function Layout({ title, content, children }: Props) {
  return (
    <>
      <Head>
        <meta name={title} content={content ? content : ""} />
        <title>{title}</title>
      </Head>

      <Navbar />
      <main className="min-w-[400px]">{children}</main>
    </>
  );
}
