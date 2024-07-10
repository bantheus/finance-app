"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import NavButton from "./NavButton";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

interface IRoute {
  href: string;
  label: string;
}

const routes: IRoute[] = [
  {
    href: "/",
    label: "Dashboard",
  },
  {
    href: "/transacoes",
    label: "Transações",
  },
  {
    href: "/categorias",
    label: "Categorias",
  },
  {
    href: "/configuracoes",
    label: "Configurações",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isMobile = useMedia("(max-width: 1023px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-none bg-white/10 font-normal text-white outline-none transition hover:border-none hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0"
          >
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="h-1/2 border-none bg-[#1f1e23] px-2 text-white"
        >
          <SheetTitle className="hidden">Menu</SheetTitle>
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                className={cn(
                  "hover:bg-[#26252a] hover:text-white",
                  route.href === pathname && "bg-[#26252a] text-white",
                )}
                onClick={() => onClick(route.href)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
