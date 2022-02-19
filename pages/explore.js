import Head from "next/head";
import React from "react";
import PhotoGrid from "../components/explore/PhotoGrid";
import Header from "../components/Header";
import ModalAddPost from "../components/ModalAddPost";

export default function Explore() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Simple Instagram</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/Instagram-Logo.ico"
        />
      </Head>
      <Header />
      <PhotoGrid />
      <ModalAddPost />
    </div>
  );
}
