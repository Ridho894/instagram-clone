import React from "react";
import { useSession } from "next-auth/react";

function Content() {
  const { data: session } = useSession();
  return (
    <div className={"pb-5 mt-8 md:max-w-3xl xl:max-w-6xl mx-auto"}>
      <div className={"p-6 sm:p-0 flex flex-row space-x-10"}>
        <img
          src={session?.user?.image}
          className={"max-w-lg rounded-full object-contain"}
        />
        <div>
          <h1 className={"text-2xl font-normal"}>{session.user.name}</h1>
          <div>
            <div>
              <p>200</p>
              <p>Posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
