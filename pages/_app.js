import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import BottomNavigationResponsive from "../components/BottomNavigation";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
        <BottomNavigationResponsive />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
