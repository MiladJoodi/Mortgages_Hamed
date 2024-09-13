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
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/admin"  className="flex gap-2 items-center text-base">
            <SquarePen className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
            </Link>
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/apply"  className="flex gap-2 items-center text-base">
            <CircleCheckBig className="mr-2 h-4 w-4" />
            <span>Apply now</span>
            </Link>
            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/start"  className="flex gap-2 items-center text-base">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>Get Start</span>
            </Link>
            
          </DropdownMenuItem>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
