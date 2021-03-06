import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalLogout from "../ModalLogout";

function MiniProfile() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div
      className={"flex items-center justify-between mt-14 ml-10 cursor-pointer"}
    >
      <img
        className={"w-16 h-16 object-cover rounded-full border p-[2px]"}
        alt=".img"
        src={session?.user?.image}
        onClick={() => router.push("/profile")}
      />
      <div className={"flex-1 mx-4"} onClick={() => router.push("/profile")}>
        <h2 className={"font-bold truncate w-[189px]"}>
          {session?.user?.username}
        </h2>
        <h3 className={"text-sm text-gray-400"}>Welcome to Instagram</h3>
      </div>
      <button
        onClick={() => setOpen(true)}
        className={"text-blue-400 bg-white text-sm font-semibold"}
      >
        Sign Out
      </button>
      <ModalLogout
        handleLogout={signOut}
        open={open}
        close={() => setOpen(false)}
      />
    </div>
  );
}

export default MiniProfile;
