'use client'

import { Button } from "@/components/ui/button";
import { DiscordLogoIcon, GitHubLogoIcon, HamburgerMenuIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import logoImage from "@/public/img/logo.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { useState } from "react";

type NavLinks = {
  label: string;
  href: string;
  dropdown?: boolean;
};

export default function MobileNav({ links }: { links: NavLinks[] }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleOpen = (open: boolean) => {
    setNavOpen(open);
  }

  return (
    <div className="lg:hidden">
      <Sheet open={navOpen} onOpenChange={handleOpen}>
        <SheetTrigger>
          <Button
            variant={"outline"}
          >
            <HamburgerMenuIcon className="h-4 w-4 focus:outline-0 focus:border-0" />
          </Button>
        </SheetTrigger>
        <SheetContent className="z-[9999]" side={"left"}>
          <div className="relative h-full w-full">
            <SheetHeader>
              <Link href="/"><Image src={logoImage} alt="Logo" className="h-auto w-48" /></Link>
            </SheetHeader>
            <nav className="mt-4">
              <ul className="space-y-4">
                <li key={-1}>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-600 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </li>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="absolute bottom-0 w-full">
              <div className="flex flex-row items-center gap-4 mb-4">
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <TwitterLogoIcon className="size-8" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <InstagramLogoIcon className="size-8" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <DiscordLogoIcon className="size-8" />
                  <span className="sr-only">Discord</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <GitHubLogoIcon className="size-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
              <SheetFooter>
                <SheetClose>
                  <Button variant="outline" className="flex flex-row w-full">Cancel</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
