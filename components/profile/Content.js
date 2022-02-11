import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SlidePicture from "./SlidePicture";
import { signOut } from "next-auth/react";
import { db } from "../../firebase";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";

function Content() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          // filter by username
          const filteredPosts = snapshot.docs.filter(
            (doc) => doc.data().username === session.user.username
          );
          setPosts(filteredPosts);
        }
      ),
    [db]
  );
  return (
    <div className={"pb-5 mt-8 md:max-w-3xl xl:max-w-6xl mx-auto"}>
      <div
        className={"px-6 sm:px-0 flex flex-row justify-between items-center"}
      >
        <div className={"flex flex-row space-x-10"}>
          <img
            src={session?.user?.image}
            className={"max-w-lg rounded-full object-contain"}
          />
          <div>
            <h1 className={"text-2xl font-normal"}>{session?.user?.name}</h1>
            <div>
              <div className={"flex flex-row space-x-2"}>
                <p className={"font-bold"}>{posts.length}</p>
                <p>posts</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            className={
              "bg-black text-white p-2 rounded-full px-6 hover:bg-white hover:text-black border-2 duration-200"
            }
            onClick={signOut}
          >
            LOGOUT
          </button>
        </div>
      </div>
      <SlidePicture />
    </div>
  );
}

export default Content;
