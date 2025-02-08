import Link from "next/link";
import React from "react";
import { NavLink } from "./NavLink";

const TopNav = () => {
  return (
    // <div className="bg-slate-400 flex justify-center items-center">
    //   <marquee>hello</marquee>
    // </div>
    <div className="w-full flex justify-between items-center px-10 border-b-2 pb-1 mx-10">
      <div className="w-12 scale-150">
        <Link href={"/"} className="flex justify-center items-center">
          <img src="./bird_2.jpg" alt="logo" className="p-1 " />
          <span>Alex</span>
        </Link>
      </div>
      <div className="space-x-10">
        <NavLink href={"/blog"}>Blog</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/services"}>Services</NavLink>
      </div>
    </div>
  );
};

export default TopNav;

// <p className="text-gray-light py-8 text-6xl backdrop-blur-sm animate-pulse font-extrabold ml-10">
//   <span className="text-red-700 capitalize animate-in">l</span>orem{" "}
//   <span className="text-red-700 capitalize animate-in">i</span>
//   psum
// </p>
