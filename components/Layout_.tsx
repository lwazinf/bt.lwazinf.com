import Head from "next/head";
import React, { useEffect, useState } from "react";
interface Layout_Props {
  children: JSX.Element;
}

import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";

export const Layout_ = ({ children }: Layout_Props) => {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-center`}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
        />
        <title>LwaziNF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 👇️👇️👇️ Everything falls under this, as this is the layout file.. */}
      {children}
    </div>
  );
};
