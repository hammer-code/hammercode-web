import { Link } from "@/lib/navigation";

import NavbarList from "./NavbarList";
import { ModeToggle } from "../mode-toggle";
import { useTranslations } from "next-intl";
import LocaleToggle from "../locale-toggle";
import { LINK } from "./constant";
import Sidebar from "../sidebar";
import AnnouncementLayout from "@/components/layout/announcement";

const Navbar = () => {
  const t = useTranslations("Layout");
  return (
    <header className="fixed w-full z-50 top-0">
      <AnnouncementLayout />
      <div className="border-b  bg-white dark:bg-slate-950">
        <div className="container mx-auto py-5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <div className="w-10 h-8 bg-[url('/assets/icons/ic_hmc-light.svg')] dark:bg-[url('/assets/icons/ic_hmc-dark.svg')] bg-cover bg-center"></div>
            </Link>

            <nav className="lg:flex items-center gap-7 hidden">
              {LINK.map(({ href, id }) => (
                <NavbarList key={id} href={href} title={t(`navbar.link-${id}`)} />
              ))}
              <div className="flex gap-2 items-center">
                <ModeToggle />
                <LocaleToggle />
              </div>
            </nav>
            <div className="lg:hidden flex">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
