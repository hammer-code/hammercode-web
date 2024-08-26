import { CSSProperties, FC } from "react";
import { Clock, Pin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { EventType } from "../types";
import Image from "next/image";

const CardEvent: FC<{ data: EventType }> = ({ data }) => {
  const { id, title, date_event, status, duration, location, image_event } = data;
  return (
    <Card
      key={id}
      className="min-h-28 flex border rounded-lg shadow-md bg-cover bg-center bg-[image:var(--image-url)] md:bg-none"
      style={{ "--image-url": `url(${image_event})` } as CSSProperties}
    >
      <Image
        src={image_event}
        alt={title}
        width={150}
        height={150}
        className="hidden md:block rounded-l-lg object-cover w-64 min-h-36"
      />
      <div className="w-full py-4">
        <CardContent className="pb-0">
          <Badge className="mb-2" variant={`${status}`}>
            {status}
          </Badge>
          <h2 className="text-base sm:text-xl font-bold text-hmc-blue-600">{title}</h2>
          <p>{date_event}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 mt-2 pb-2 sm:flex-row">
          <div className="flex items-center gap-2">
            <Clock size={15} />
            <p className="text-sm text-nowrap">{duration}</p>
          </div>
          <div className="flex items-center gap-2">
            <Pin size={15} />
            <p className="text-sm text-nowrap">{location}</p>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};
export default CardEvent;
