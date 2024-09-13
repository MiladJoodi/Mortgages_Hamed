import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Container from "@/components/Container";
import { NavbarLinks } from "./NavbarLinks";
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Phone from "./Navbar/Phone";
import ApplyBtn from "./Navbar/ApplyBtn";
import { DropdownBtn } from "./Navbar/DropdownBtn";
import { UserRound } from "lucide-react";

const Navbar = () => {
  // Read user - Auth
  const { userId } = auth();

  return (
    <nav className="lg:mt-2 dark:bg-gray-700 rounded-none!">
      <Container>
        <div className=" px-4 lg:px-6 py-2 flex justify-between items-center  ">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt=""
              width={500}
              height={80}
              className="w-[60px]"
            />
            <h1 className="lg:flex text-[28px] lg:text-4xl text-dolphin font-bold text-transparent tracking-[-3px]">
              Mortgage
            </h1>
          </Link>

          {/* Right */}
          <div className="flex justify-end items-center gap-4">
            <NavbarLinks />
            <Phone />
            <ApplyBtn />

            {/* Right Buttons */}
            <div className="flex items-center justify-center gap-3">
              <DropdownBtn />

              <ThemeToggler />

              {/* {userId ? <UserButton /> : <SignedIn>Login</SignedIn>} */}
              {userId ? (
                <div className="">
                  <UserButton />
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <Button className="px-2" variant="secondary">
                    <Link href="/sign-in">
                      <UserRound className="text-gray-600 dark:text-gray-300" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
