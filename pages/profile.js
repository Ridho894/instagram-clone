import Head from "next/head";
import { useSession } from "next-auth/react";
import React from "react";
import Header from "../components/Header";
import Modal from "../components/ModalAddPost";
import Content from "../components/profile/Content";

export default function Profile() {
  const { data: session } = useSession();
  // if !session redirect to login
  if (!session) {
    return <p>You need to login to see this page</p>;
  }
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
      <Content />
      <Modal />
    </div>
  );
}
