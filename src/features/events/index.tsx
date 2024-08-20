"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { eventsData } from "./constants";
import CardEvent from "./components/Card";

const Events = () => {
  return (
    <div>
      <div className="w-full bg-slate-100 dark:bg-hmc-primary-foreground rounded-lg">
        <div className="container px-4 h-32 flex justify-between items-center">
          <div className="">
            <h1 className="text-hmc-primary text-3xl font-semibold">Events</h1>
            <p className="text-hmc-primary">Ayo ikuti berbagai Event dan Agenda menarik</p>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
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
