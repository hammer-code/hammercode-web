import EventsPage from "@/features/events";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};
const Events = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  return <EventsPage />;
};
export default Events;
