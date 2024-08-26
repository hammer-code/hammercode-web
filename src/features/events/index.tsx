"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { eventsData } from "./constants";
import CardEvent from "./components/Card";
import { useTranslations } from "next-intl";

const Events = () => {
  const t = useTranslations("EventsPage");
  return (
    <div>
      <div className="w-full bg-slate-100 dark:bg-hmc-primary-foreground rounded-lg">
        <div className="container p-4 h-32 flex flex-wrap gap-1 justify-between items-center">
          <div className="">
            <h1 className="text-hmc-primary text-xl sm:text-3xl font-semibold">{t("title")}</h1>
            <p className="text-hmc-primary text-xs sm:text-base">{t("description")}</p>
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {eventsData.map((event) => (
            <CardEvent key={event.id} data={event} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
