"use client";

import { useStoreUser } from "@/hooks/use-store-user";
import React from "react";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import Image from "next/image";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LayoutDashboard, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

const Header = () => {
  const { isLoading } = useStoreUser();
  const { theme } = useTheme(); 

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 dark:bg-black/80 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="w-full px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 -ml-2">
          <Image
            src={theme === "dark" ? "/logos/logo-light.png" : "/logos/logo-dark.png" }
            alt="Spendzo logo"
            width={200}
            height={80}
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:text-blue-600 hover:border-blue-600 transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>

              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <ModeToggle />
            <UserButton />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button className="bg-red-600 hover:bg-red-700 border-none">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-green-600 hover:bg-green-700 border-none">
                Sign Up
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>

      {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}
    </header>
  );
};

export default Header;
