import { useSession } from "next-auth/react";
import Footer from "./Footer";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`pb-5 grid grid-cols-2 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-max"
      }`}
    >
      <section
        className={`col-span-2 ${
          !session && "w-screen sm:max-w-3xl lg:max-w-3xl"
        }`}
      >
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className={"hidden xl:inline-grid md:col-span-1"}>
          <div className={"fixed top-20 max-w-sm"}>
            <MiniProfile />
            <Suggestions />
            <Footer />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
