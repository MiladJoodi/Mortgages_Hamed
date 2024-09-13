"use client";
import {
  AlignJustify,
  CircleCheckBig,
  Sparkles,
  SquarePen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-2 outline-none border-none" variant="secondary">
          <AlignJustify className="text-gray-600 dark:text-gray-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-gray-700">
        <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col gap-2">
          <DropdownMenuItem asChild className="hover:bg-gray-500">
            <Link href="/admin"  className="flex gap-2 items-center cursor-pointer hover:text-white">
            <SquarePen className="mr-2 h-4 w-4" />
            <span className="text-base">Dashboard</span>
            </Link>
            
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-gray-500">
            <Link href="/apply" className="flex gap-2 items-center cursor-pointer hover:text-white">
            <CircleCheckBig className="mr-2 h-4 w-4" />
            <span className="text-base">Apply now</span>
            </Link>
            
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-gray-500">
            <Link href="/start"  className="flex gap-2 items-center cursor-pointer hover:text-white">
            <Sparkles className="mr-2 h-4 w-4" />
            <span className="text-base">Get Start</span>
            </Link>
            
          </DropdownMenuItem>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
