"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { eventsData } from "./constants";
import CardEvent from "./components/Card";
import { useTranslations } from "next-intl";

const Events = () => {
  const t = useTranslations("EventsPage");
  return (
    <div className="container mx-auto px-5 py-28">
      <div className="w-full rounded-lg">
        <div className="h-16 flex flex-wrap gap-1 justify-between items-center">
          <div className="">
            <h1 className="text-hmc-base-blue text-xl sm:text-3xl font-semibold">{t("title")}</h1>
            <p className="text-gray-500 text-xs sm:text-base">{t("description")}</p>
          </div>
          <div className="w-full sm:w-auto">
            <Select>
              <SelectTrigger className="sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Workshop</SelectItem>
                  <SelectItem value="banana">Tech Talk</SelectItem>
                  <SelectItem value="blueberry">Learning</SelectItem>
                  <SelectItem value="grapes">Ngobar</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-4">
          {eventsData.map((event) => (
            <CardEvent key={event.id} data={event} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
