import React from "react";
import { useSession } from "next-auth/react";
import SlidePicture from "./SlidePicture";

function Content() {
  const { data: session } = useSession();
  return (
    <div className={"pb-5 mt-8 md:max-w-3xl xl:max-w-6xl mx-auto"}>
      <div className={"pl-6 sm:pl-0 flex flex-row space-x-10"}>
        <img
          src={session?.user?.image}
          className={"max-w-lg rounded-full object-contain"}
        />
        <div>
          <h1 className={"text-2xl font-normal"}>{session?.user?.name}</h1>
          <div>
            <div className={"flex flex-row space-x-2"}>
              <p className={"font-bold"}>200</p>
              <p>posts</p>
            </div>
          </div>
        </div>
      </div>
      <SlidePicture />
    </div>
  );
}

export default Content;
