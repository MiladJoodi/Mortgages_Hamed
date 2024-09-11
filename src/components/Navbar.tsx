import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button"; 
import Container from "./Container/Container";
import { NavbarLinks } from "./NavbarLinks"; 
import ThemeToggler from "./ThemeToggler/ThemeToggler";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import User from "./Navbar/User";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Profile from "./Navbar/Profile";

const Navbar = () => {
  // Read user - Auth
  const { userId } = auth();

  return (
    <div>
      <Container>
        <nav className="z-[100] py-8 px-16 h-[10vh] flex justify-between items-center  ">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt=""
              width={500}
              height={80}
              className="w-[60px]"
            />
            <h1 className="text-4xl text-dolphin font-bold text-transparent ">
              Mortgage
            </h1>
          </Link>

          {/* Right */}
          <div className="flex justify-end items-center gap-8">
            <div className="flex gap-8 text-lg text-gray-700">
              {/* <Link href="#">Purchase</Link>
              <Link href="#">Refinance</Link>
              <Link href="#">Tools</Link>
              <Link href="#">Contact Us</Link> */}
              <NavbarLinks />
            </div>
            {/* Phone */}
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>(1) 416 869 8458</span>
            </div>

            {/* Apply */}
            <Link href="/apply">
              <Button className="bg-applyBtnOrange h-11 w-34 text-[15px] rounded outline-none shadow-[rgba(0,0,0,0.15) 0px 8px 16px 0px] shadow-xl cursor-pointer px-4 py-2 text-white hover:text-applyBtnOrange font-semibold duration-300">
                Apply now
              </Button>
            </Link>

            <ThemeToggler />

            {/* {userId ? <UserButton /> : <SignedIn>Login</SignedIn>} */}
            {userId ? (
              <div className="">
                  
                  <UserButton />
                
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                <Link href="/sign-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
