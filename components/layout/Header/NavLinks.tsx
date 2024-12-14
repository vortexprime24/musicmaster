import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Instruments", href: "#", dropdown: true },
  { label: "Singing", href: "#", dropdown: true },
  { label: "Grades", href: "#", dropdown: true },
  { label: "Resources", href: "#", dropdown: true },
  { label: "Blog", href: "#" },
  { label: "Pricing", href: "#" },
];

export default function NavLinks() {
  return (
    <div>
      <ul className="hidden lg:flex lg:flex-row lg:gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            {link.dropdown ? (
              <div className="flex flex-row items-center group">
                <Link href={link.href} className="text-gray-600 group-hover:text-blue-500">
                  {link.label}
                </Link>
                <ChevronDownIcon className="ml-1 h-4 w-4 transition group-hover:rotate-180 group-hover:text-blue-500" />
              </div>
            ) : (
              <Link href={link.href} className="text-gray-600 hover:text-blue-500">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <MobileNav links={navLinks} />
    </div>
  );
}
