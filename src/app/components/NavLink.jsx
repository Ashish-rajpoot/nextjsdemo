"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLink = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`bg-gray-light text-white/90 hover:bg-black-light] hover:text-black-light ${className} ${href===usePathname()? 'bg-black-light hover:text-white':''}`}
    >
      {children}
    </Link>
  );
};
