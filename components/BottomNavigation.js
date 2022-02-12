import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  SearchIcon,
  PlusCircleIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

export default function BottomNavigationResponsive() {
  const router = useRouter();
  const { data: session } = useSession();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <Box className={"block sm:hidden border-t-2 fixed z-10 bottom-0 w-screen"}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {session ? (
          <>
            <BottomNavigationAction
              onClick={() => router.push("/")}
              icon={
                <HomeIcon
                  className={`h-7 w-7 ${value === 0 && "text-black"}`}
                />
              }
            />
            <BottomNavigationAction
              onClick={() => router.push("/explore")}
              icon={
                <SearchIcon
                  className={`h-7 w-7 ${value === 1 && "text-black"}`}
                />
              }
            />
            <BottomNavigationAction
              onClick={() => setOpen(true)}
              icon={
                <PlusCircleIcon
                  className={`h-7 w-7 ${value === 2 && "text-black"}`}
                />
              }
            />
            <BottomNavigationAction
              onClick={() => router.push("/likes")}
              icon={
                <HeartIcon
                  className={`h-7 w-7 ${value === 3 && "text-black"}`}
                />
              }
            />
            <BottomNavigationAction
              onClick={() => router.push("/profile")}
              icon={
                <UserIcon
                  className={`h-7 w-7 ${value === 4 && "text-black"}`}
                />
              }
            />
          </>
        ) : (
          <>
            <BottomNavigationAction
              onClick={() => router.push("/")}
              icon={
                <HomeIcon
                  className={`h-7 w-7 ${value === 0 && "text-black"}`}
                />
              }
            />
            <BottomNavigationAction
              onClick={() => router.push("/explore")}
              icon={
                <SearchIcon
                  className={`h-7 w-7 ${value === 1 && "text-black"}`}
                />
              }
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}
