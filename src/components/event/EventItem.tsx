import React from "react";
import Link from "next/link";

import { formatDate } from "lib/date";

import { IHMCEvent } from "lib/types";

function EventItem({ locale, event }: { locale: string; event: IHMCEvent }) {
  return (
    <div data-id={event.id} className="p-4 border-b">
      <div className="flex">
        <div
          style={{ width: 160, height: 86 }}
          className="mr-4 bg-gray-200 rounded"
        ></div>
        <div>
          <p className="text-yellow-700">{formatDate(event.date, locale)}</p>
          <h2 className="font-bold text-xl">
            <Link href={`/event/${event.id}`}>
              {event.name}
            </Link>
          </h2>
          <p className="mb-4">Online</p>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
