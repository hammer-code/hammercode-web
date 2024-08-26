import { Link } from "@/lib/navigation";
import { ComponentProps } from "react";
import { pathnames } from "@/lib/config";

function NavbarList<Pathname extends keyof typeof pathnames>({ href, ...rest }: ComponentProps<typeof Link<Pathname>>) {
  return (
    <Link href={href} {...rest}>
      <span>{rest.title}</span>
    </Link>
  );
}

export default NavbarList;
