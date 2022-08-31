import MainLayout from "components/layout/MainLayout";
import { formatDate } from "lib/date";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

function EventItem({ locale, event }: { locale: string; event: HMCEvent }) {
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
              <a>{event.name}</a>
            </Link>
          </h2>
          <p className="mb-4">Online</p>
        </div>
      </div>
    </div>
  );
}

function EventFilter() {
  return (
    <div className="event-filter flex">
      <div className="mr-4">
        <select>
          <option>In Person</option>
          <option>Online</option>
        </select>
      </div>
      <div>
        <select>
          <option>Tech</option>
          <option>Design</option>
          <option>Entrepreneruship</option>
        </select>
      </div>
    </div>
  );
}

export default function EventListPage({
  locale,
  events,
}: {
  locale: string;
  events: HMCEvent[];
}) {
  return (
    <MainLayout>
      <div className="mx-auto small-container">
        <h1 className="font-bold text-3xl mb-8 mt-8 text-gray-700">Event</h1>
        <EventFilter />
        <div className="event-container  mb-16">
          {events.map((e) => (
            <EventItem key={e.id} event={e} locale={locale} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

type HMCEvent = {
  id: number;
  name: string;
  date: string;
  image: string;
};

export async function getServerSideProps(
  ctx: GetServerSidePropsContext & { locale: string }
) {
  let events: HMCEvent[] = [];
  try {
    events = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1/events"
    )
      .then((res) => res.json())
      .then((res) => {
        return res.data;
      });
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      locale: ctx.locale,
      messages: (await import(`../../locales/${ctx.locale}.json`)).default,
      events,
    },
  };
}
