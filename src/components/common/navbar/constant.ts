import { NavbarListProps } from "./NavbarList";
import { ValidPathnames } from "./type";

export const LINK: NavbarListProps<ValidPathnames>[] = [
  {
    id: "1",
    href: "/about",
  },
  {
    id: "2",
    href: "/events",
  },
  {
    id: "3",
    href: "/contact",
  },
];
