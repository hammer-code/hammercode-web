import Link from "next/link";

import NavbarList from "./NavbarList";
import { ModeToggle } from "../mode-toggle";
import { useTranslations } from "next-intl";
import LocaleToggle from "../locale-toggle";
import { LINK } from "./constant";

const Navbar = () => {
  const t = useTranslations("Layout");
  return (
    <header className="border-b fixed w-full top-0 bg-white dark:bg-slate-950 z-50">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <div className="w-10 h-8 bg-[url('/assets/icons/ic_hmc-light.svg')] dark:bg-[url('/assets/icons/ic_hmc-dark.svg')] bg-cover bg-center"></div>
          </Link>

          <nav className="flex items-center gap-4">
            {LINK.map(({ href, id }) => (
              <NavbarList key={id} href={href} title={t(`navbar.link-${id}`)} />
            ))}
            <div className="flex gap-2 items-center">
              <ModeToggle />
              <LocaleToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
