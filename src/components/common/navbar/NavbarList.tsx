import { Link } from "@/lib/navigation";
import { ComponentProps } from "react";
import { pathnames } from "@/lib/config";

export type NavbarListProps<Pathname extends keyof typeof pathnames> = ComponentProps<typeof Link<Pathname>>;

function NavbarList<Pathname extends keyof typeof pathnames>({ href, ...rest }: NavbarListProps<Pathname>) {
  return (
    <Link href={href} className="md:block hidden">
      <span>{rest.title}</span>
    </Link>
  );
}

export default NavbarList;
