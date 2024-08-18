import Link from "next/link";
// import Image from "next/image";

import NavbarList from "./NavbarList";
import { navbarLists } from "./constants";
import { ModeToggle } from "../modetoggle";
// import { useTheme } from "next-themes";

const Navbar = () => {
  // const { theme } = useTheme();
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="w-10 h-8 bg-[url('/assets/icons/ic_hmc-light.svg')] dark:bg-[url('/assets/icons/ic_hmc-dark.svg')] bg-cover bg-center"></div>
          </Link>

          <nav className="flex items-center gap-4">
            {navbarLists.map(({ link, title }) => (
              <NavbarList key={link} title={title} link={link} />
            ))}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
