import { TwitterLogoIcon, InstagramLogoIcon, DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white h-16 grid place-items-center">
      <div className="flex flex-col md:flex-row items-center justify-between container p-4">
        <p className="text-sm text-gray-600 mb-4 md:mb-0 md:flex md:flex-col md:gap-2">
          © Copyright 2024, All Rights Reserved
          <span className="text-xs hidden md:flex">
            Built by <Link href="https://ashishagarwal.is-a.dev" target="_blank" className="text-blue-600 ml-[2px]">Ashish Agarwal</Link>. This project is as a template and not affilated with any actual organization.
          </span>
        </p>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <TwitterLogoIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <InstagramLogoIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <DiscordLogoIcon className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <GitHubLogoIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
