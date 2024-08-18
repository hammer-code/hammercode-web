import Image from "next/image";
import NavbarList from "./NavbarList";
import { navbarLists } from "./constants";

const Navbar = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Image src="/assets/icons/ic_hmc-light.svg" alt="hammercode logo" width={40} height={36} />

          <nav className="flex items-center gap-4">
            {navbarLists.map(({ link, title }) => (
              <NavbarList key={link} title={title} link={link} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
