"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Pin } from "lucide-react";
import Image from "next/image";

const Events = () => {
  return (
    <div>
      <div className="w-full bg-primary-foreground rounded-lg">
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
          <Card className="border rounded-lg shadow-md flex min-h-28">
            <Image
              src="https://vcube.co.id/wp-content/uploads/2020/07/online-event.jpg"
              alt="Descriptive alt text"
              width={150}
              height={150}
              className="rounded-l-lg object-cover w-64 min-h-36"
            />
            <div className="px-4 py-6">
              <CardContent className="pb-0">
                <Badge variant="destructive" className="mb-2">
                  Closed
                </Badge>
                <h2 className="text-xl font-bold text-hmc-blue-600">Palu Dev Day 2024</h2>
                <p className="text-gray-800">13 November 2024</p>
              </CardContent>
              <CardFooter className="flex gap-2 text-gray-500 mt-2 pb-2">
                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  <p className="text-sm">08.00 WITA - Selesai</p>
                </div>
                <div className="flex items-center gap-2">
                  <Pin size={15} />
                  <p className="text-sm">Auditorium</p>
                </div>
              </CardFooter>
            </div>
          </Card>
          <Card className="border rounded-lg shadow-md flex min-h-28">
            <Image
              src="https://vcube.co.id/wp-content/uploads/2020/07/online-event.jpg"
              alt="Descriptive alt text"
              width={150}
              height={150}
              className="rounded-l-lg object-cover w-64 min-h-36"
            />
            <div className="px-4 py-6">
              <CardContent className="pb-0">
                <Badge variant="destructive" className="mb-2">
                  Closed
                </Badge>
                <h2 className="text-xl font-bold text-hmc-blue-600">Palu Dev Day 2024</h2>
                <p className="text-gray-800">13 November 2024</p>
              </CardContent>
              <CardFooter className="flex gap-2 text-gray-500 mt-2 pb-2">
                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  <p className="text-sm">08.00 WITA - Selesai</p>
                </div>
                <div className="flex items-center gap-2">
                  <Pin size={15} />
                  <p className="text-sm">Auditorium</p>
                </div>
              </CardFooter>
            </div>
          </Card>
          <Card className="border rounded-lg shadow-md flex min-h-28">
            <Image
              src="https://vcube.co.id/wp-content/uploads/2020/07/online-event.jpg"
              alt="Descriptive alt text"
              width={150}
              height={150}
              className="rounded-l-lg object-cover w-64 min-h-36"
            />
            <div className="px-4 py-6">
              <CardContent className="pb-0">
                <Badge variant="destructive" className="mb-2">
                  Closed
                </Badge>
                <h2 className="text-xl font-bold text-hmc-blue-600">Palu Dev Day 2024</h2>
                <p className="text-gray-800">13 November 2024</p>
              </CardContent>
              <CardFooter className="flex gap-2 text-gray-500 mt-2 pb-2">
                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  <p className="text-sm">08.00 WITA - Selesai</p>
                </div>
                <div className="flex items-center gap-2">
                  <Pin size={15} />
                  <p className="text-sm">Auditorium</p>
                </div>
              </CardFooter>
            </div>
          </Card>
          <Card className="border rounded-lg shadow-md flex min-h-28">
            <Image
              src="https://vcube.co.id/wp-content/uploads/2020/07/online-event.jpg"
              alt="Descriptive alt text"
              width={150}
              height={150}
              className="rounded-l-lg object-cover w-64 min-h-36"
            />
            <div className="px-4 py-6">
              <CardContent className="pb-0">
                <Badge variant="destructive" className="mb-2">
                  Closed
                </Badge>
                <h2 className="text-xl font-bold text-hmc-blue-600">Palu Dev Day 2024</h2>
                <p className="text-gray-800">13 November 2024</p>
              </CardContent>
              <CardFooter className="flex gap-2 text-gray-500 mt-2 pb-2">
                <div className="flex items-center gap-2">
                  <Clock size={15} />
                  <p className="text-sm">08.00 WITA - Selesai</p>
                </div>
                <div className="flex items-center gap-2">
                  <Pin size={15} />
                  <p className="text-sm">Auditorium</p>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Events;
