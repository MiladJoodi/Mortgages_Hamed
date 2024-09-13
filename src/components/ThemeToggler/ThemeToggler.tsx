"use client"

import { MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Sun } from "lucide-react";

const ThemeToggler = () => {
    
    const {theme, setTheme} = useTheme();

  return (
    <div>
      <Button className="px-2" variant="secondary" onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-500 dark:text-gray-300" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
