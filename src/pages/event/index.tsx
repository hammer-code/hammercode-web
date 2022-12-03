import { GetServerSidePropsContext } from 'next';

import MainLayout from 'src/components/layout/MainLayout';
import EventFilter from 'src/components/event/EventFilter';
import EventItem from 'src/components/event/EventItem';

import { IHMCEvent } from 'lib/types';

export default function EventListPage({
  locale,
  events,
}: {
  locale: string;
  events: IHMCEvent[];
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

export async function getServerSideProps(
  ctx: GetServerSidePropsContext & { locale: string }
) {
  let events: IHMCEvent[] = [];
  try {
    events = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + '/api/v1/events'
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
