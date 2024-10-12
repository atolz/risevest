"use client";

import Link from "next/link";
import LandingPageMenu from "./menu";
import RiseLogo from "./illustrations/rise-logo";
import ArrowDown from "./illustrations/arrow";
import { cn } from "@/lib/utils";

export type NavLink = { name: string; dropDown: boolean; href: string; active?: boolean };

const Header = () => {
  const links: NavLink[] = [
    { name: "Home", dropDown: false, href: "#", active: true },
    { name: "Products", dropDown: true, href: "#" },
    { name: "Investment Club", dropDown: false, href: "#" },
    { name: "Blog", dropDown: false, href: "#" },
    { name: "About Us", dropDown: false, href: "#" },
    { name: "FAQs", dropDown: false, href: "#" },
  ];
  return (
    <header className="w-full bg-white  ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 xl:ml-10 text-primary">
          <RiseLogo />
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <Link key={i} className="group relative flex items-center text-primary font-tomato-grotesk text-base tracking-wider font-normal " href={link.href}>
              {link.name}
              {link.dropDown ? <ArrowDown className=" ml-1" /> : null}
              <div className={cn(" absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-2 h-2 rounded-full bg-primary transition-all opacity-0", link.active && "opacity-100")}></div>
            </Link>
          ))}
        </nav>
        {/* <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
        <LandingPageMenu links={links} />
      </div>
      {/* {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-md fixed w-screen top-20 left-0">
          <Link href="/" className="block py-2 text-zinc-700 hover:text-zinc-900">
            Home
          </Link>
          <Link href="/features" className="block py-2 text-zinc-700 hover:text-zinc-900">
            Features
          </Link>
          <Link href="/pricing" className="block py-2 text-zinc-700 hover:text-zinc-900">
            Pricing
          </Link>
          <Link href="/contact" className="block py-2 text-zinc-700 hover:text-zinc-900">
            Contact
          </Link>
        </nav>
      )} */}
    </header>
  );
};

export default Header;
