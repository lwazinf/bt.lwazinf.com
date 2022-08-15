import Head from "next/head";
import React, { useEffect, useState } from "react";
import UserAuth_ from "./UserAuth_";

interface Layout_Props {
  children: JSX.Element;
}

export const Layout_ = ({ children }: Layout_Props) => {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <title>BirdTool_</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 👇️👇️👇️ Everything falls under this, as this is the layout file.. */}
      {children}
      <UserAuth_/>
    </div>
  );
};
