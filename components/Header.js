import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import ExploreIcon from "@mui/icons-material/Explore";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className={"shadow-sm border-b bg-white sticky top-0 z-50"}>
      <div className={"flex justify-between max-w-6xl mx-5 lg:mx-auto"}>
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className={"relative hidden lg:inline-grid w-24 cursor-pointer"}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className={"relative w-28 lg:hidden flex-shrink-0 cursor-pointer"}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search Input Field */}
        <div className={"max-w-xs"}>
          <div className={"relative mt-1 p-3 rounded-md invisible sm:visible"}>
            <div
              className={
                "absolute inset-y-0 pl-3 flex items-center pointer-events-none"
              }
            >
              <SearchIcon className={"h-5 w-5 text-gray-500"} />
            </div>
            <input
              className={
                "bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:border-black focus:ring-black rounded-md"
              }
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        {/* Right */}
        <div className={"flex items-center justify-end space-x-4"}>
          {session ? (
            <>
              <HomeIcon className={"navBtn"} onClick={() => router.push("/")} />
              <div className={"relative navBtn"}>
                <PaperAirplaneIcon className={"navBtn rotate-45"} />
                <div
                  className={
                    "absolute -top-1 -right-2 text-xs text-white w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse"
                  }
                >
                  3
                </div>
              </div>
              <PlusCircleIcon
                className={"navBtn"}
                onClick={() => setOpen(true)}
              />
              <ExploreIcon
                onClick={() => router.push("/explore")}
                className={"navBtn"}
              />
              <UserGroupIcon className={"navBtn"} />
              <HeartIcon className={"navBtn"} />

              {/* <img
                src={session.user.image}
                alt="profile_pic"
                className={"h-10 w-10 rounded-full cursor-pointer object-cover"}
              /> */}
            </>
          ) : (
            <>
              <HomeIcon className={"h-6 w-6 hover:scale-125 transition-all duration-150 ease-out cursor-pointer hidden sm:block"} onClick={() => router.push("/")} />
              <button onClick={signIn}>
                <LoginIcon className={"h-6 w-6 hover:scale-125 transition-all duration-150 ease-out"} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
