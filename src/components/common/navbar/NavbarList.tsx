import Link from "next/link";

import { NavbarListType } from "./types";

const NavbarList = ({ title, link }: NavbarListType) => {
  return (
    <Link href={link}>
      <span>{title}</span>
    </Link>
  );
};

export default NavbarList;
