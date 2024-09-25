"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FcCalculator, FcNews } from "react-icons/fc";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Application Form 1",
    href: "/apply2",
    description:
      "This Application Form uses Mongoose and MongoDB.",
  },
  {
    title: "Application Form 2",
    href: "/apply4",
    description:
      "This Application Form uses Prisma and MongoDB.",
  }
];

export function NavbarLinks() {
  return (
    <div className="hidden xl:flex gap-8 text-lg text-gray-700">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1">
              <FcCalculator size={22} />
              Calculators
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-gray-700">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="text-center">
                        <Image
                          src="/calculator.png"
                          property="true"
                          alt=""
                          width={800}
                          height={800}
                          quality={100}
                          unoptimized={true}
                          className="w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/calculator" title="Payment Calculator">
                  Calculate your monthly mortgage payments and view details.
                </ListItem>
                <ListItem
                  href="/affordability"
                  title="Affordability Calculator"
                >
                  Calculate how much home you can afford based on your financial
                  situation.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="flex items-center gap-1">
            <FcNews size={22} />
              Apply Forms

            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-gray-700">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none flex items-center gap-1">
            {title}
            </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
