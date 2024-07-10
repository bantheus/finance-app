import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Headerlogo from "./HeaderLogo";
import Navigation from "./Navigation";
import WelcomeMsg from "./WelcomeMsg";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-sky-900 to-teal-900 px-4 py-8 pb-36 lg:px-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex w-full items-center lg:gap-x-16">
            <Headerlogo />
            <Navigation />
          </div>

          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>

        <WelcomeMsg />
      </div>
    </header>
  );
};

export default Header;
