import { NavLink } from "./NavLink";
import { ModeToggle } from "./ThemeButtons";
const TopNav = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 border-b-2 pb-1 mx-10 max-sm:mx-0">
      <div className="w-12 scale-150">
        <NavLink href={"/"} className="flex justify-center items-center py-1">
          {/* <img src="./bird3.webp" alt="logo" className="p-1 dark:bg-purple-200 " /> */}
          <img src="/bird3.webp" alt="logo" className="p-1 dark:hidden"  />
          <span className="text-purple-700 text-xl"><span className="font-lobster">A</span>lex</span>
        </NavLink>
      </div>
      <div className="space-x-10 flex justify-center items-center max-sm:hidden">
        <NavLink href={"/blogs"}>Blog</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/services"}>Services</NavLink>
        <ModeToggle/>
        {/* <MobileNav /> */}
      </div>
    </div>

  );
};

export default TopNav;
