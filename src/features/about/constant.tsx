import { Book, CodeXml, Instagram, Laptop } from "lucide-react";
import { ActivitiesType, FoundersType } from "./types";

export const PROGRAM = [
  {
    id: 1,
    title: "Palu Developer Day",
    desc: "Event Tahunan",
    icon: <CodeXml />,
  },
  {
    id: 2,
    title: "Tech Talk",
    desc: "Event Bulanan",
    icon: <Laptop />,
  },
  {
    id: 3,
    title: "Live Tech",
    desc: "Live Instagram",
    icon: <Instagram />,
  },
  {
    id: 4,
    title: "Learning",
    desc: "Weekly Learning",
    icon: <Book />,
  },
];

export const ACTIVITIES: ActivitiesType[] = [
  {
    id: 1,
    logo: "/assets/images/about/1.png",
    alt: "Activity 1",
  },
  {
    id: 2,
    logo: "/assets/images/about/2.png",
    alt: "Activity 2",
  },
  {
    id: 3,
    logo: "/assets/images/about/3.png",
    alt: "Activity 3",
  },
];

export const FOUNDERS: FoundersType[] = [
  {
    id: 1,
    image: "/assets/images/about/founder-1.png",
    name: "Muhammad Rizki Rijal",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/muhammadrizkirijal/",
    email: "mailto:arkinthesky.69@gmail.com",
  },
  {
    id: 2,
    image: "/assets/images/about/founder-2.png",
    name: "Muhammad Nur Abdi Pratama",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/muhnurabdipratama/",
    email: "mailto:mnur.abdipratama@gmail.com",
  },
];
