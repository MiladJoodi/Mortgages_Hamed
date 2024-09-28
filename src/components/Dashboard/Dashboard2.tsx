"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  SquarePen,
  CircleCheckBig,
  Sparkles,
  Rss,
  Power,
  Headset,
  Search,
} from "lucide-react";
import DashboardCards from "./DashboardCards";
import { useState } from "react";
import { NewPost2 } from "./NewPost2";
import Link from "next/link";
import { SupportModal } from "../SupportModal/SupportModal";
import { useClerk } from "@clerk/nextjs";
import NewPostPrisma from "./NewPostPrisma";

export default function Dashboard2() {

  const [userSelect, setUserSelect] = useState<any>(<DashboardCards />);
  const { signOut } = useClerk();

  return (
    <div className="flex h-screen bg-white dark:bg-gray-300 overflow-hidden rounded-xl">
      {/* Sidebar */}
      <aside className="hidden sm:block w-64 h-full">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6 p-2">
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-5 text-left text-lg"
            onClick={() => setUserSelect(<DashboardCards />)}
          >
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Button>

          <Button
            onClick={() => setUserSelect(<NewPost2 />)}
            variant="ghost"
            className="w-full justify-start px-4 py-5 text-left text-lg"
          >
            <SquarePen className="mr-3 h-5 w-5" />
            New Post<span className="text-base"> - (Mongoose)</span>
          </Button>
          <Button
            onClick={() => setUserSelect(<NewPostPrisma />)}
            variant="ghost"
            className="w-full justify-start px-4 py-5 text-left text-lg"
          >
            <SquarePen className="mr-3 h-5 w-5" />
            New Post <span className="text-base"> - (Prisma)</span>
          </Button>
          <Link href="/blog">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-5 text-left text-lg"
            >
              <Rss className="mr-3 h-5 w-5" />
              Blog <span className="text-base"> - (Mongoose)</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-5 text-left text-lg"
            >
              <Rss className="mr-3 h-5 w-5" />
              Blog <span className="text-base"> - (Prisma)</span>
            </Button>
          </Link>
          <Link href="/apply">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-5 text-left text-lg"
            >
              <CircleCheckBig className="mr-3 h-5 w-5" />
              Apply now
            </Button>
          </Link>
          <Link href="/start">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-5 text-left text-lg"
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Get Start
            </Button>
          </Link>

          <SupportModal>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-5 text-left text-lg"
            >
              <Headset className="mr-3 h-5 w-5" />
              Support
              <span className="relative flex size-2 ml-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
              </span>
            </Button>
          </SupportModal>

            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-5 text-left text-lg"
              onClick={() => signOut({ redirectUrl: '/' })}
            >
              <Power className="mr-3 h-5 w-5" />
              Log out
            </Button>
          {/* <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
          >
            <Bell className="mr-3 h-5 w-5" />
            Notifications
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button> */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm dark:bg-gray-300">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="hidden md:flex text-2xl font-semibold text-gray-900">
              Dashboard
            </h1>
            <div className="flex items-center w-full ml-4">
              <Input
                type="search"
                placeholder="Looking for..."
                className="mr-4 w-full text-md"
              />
              <Button variant="outline" className="hidden md:flex">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex flex-col">{userSelect}</div>
        <div className="sm:hidden">
          <NewPost2 />
        </div>
      </div>
    </div>
  );
}
