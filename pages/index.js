import Head from "next/head";
import Feed from "../components/dashboard/Feed";
import Header from "../components/Header";
import Modal from "../components/ModalAddPost";
import ModalNotifications from "../components/ModalNotifications";

export default function Home() {
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
      <Feed />
      <Modal />
      {/* <ModalNotifications /> */}
    </div>
  );
}
