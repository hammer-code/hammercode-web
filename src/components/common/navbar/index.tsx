import Link from "next/link";
import Image from "next/image";

import NavbarList from "./NavbarList";
import { navbarLists } from "./constants";
import { ModeToggle } from "../modetoggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <Image
              src={`/assets/icons/${theme === "dark" ? "ic_hmc-dark.svg" : "ic_hmc-light.svg"}`}
              alt="hammercode logo"
              width={40}
              height={36}
            />
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
