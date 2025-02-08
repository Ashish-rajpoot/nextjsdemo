"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`py-3 transition-all hover:scale-105 ease-in-out duration-300 ${className} ${
        href === usePathname() ? "font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
};
