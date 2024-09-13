"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  FileText,
  LogOut,
  SquarePen,
  CircleCheckBig,
  Sparkles,
  Rss,
} from "lucide-react";
import DashboardCards from "./DashboardCards";
import { useState } from "react";
import { NewPost2 } from "./NewPost2";
import Link from "next/link";

export default function Dashboard2() {
  const [userSelect, setUserSelect] = useState<any>(<DashboardCards />);

  return (
    <div className="flex bg-white overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden sm:block w-64 h-full">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
            onClick={() => setUserSelect(<DashboardCards />)}
          >
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Button>

          <Button
            onClick={() => setUserSelect(<NewPost2 />)}
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
          >
            <SquarePen className="mr-3 h-5 w-5" />
            New Post
          </Button>
          <Link href="/blog">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-left"
            >
              <Rss className="mr-3 h-5 w-5" />
              Blog
            </Button>
          </Link>
          <Link href="/apply">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-left"
            >
              <CircleCheckBig className="mr-3 h-5 w-5" />
              Apply now
            </Button>
          </Link>
          <Link href="/start">
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-left"
            >
              <Sparkles className="mr-3 h-5 w-5" />
              Get Start
            </Button>
          </Link>
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
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="hidden md:flex text-2xl font-semibold text-gray-900">
              Dashboard
            </h1>
            <div className="flex items-center w-full ml-4">
              <Input
                type="search"
                placeholder="Search..."
                className="mr-4 w-full text-md"
              />
              <Button variant="outline" className="hidden md:flex">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
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
