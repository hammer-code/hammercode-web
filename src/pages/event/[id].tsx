import MainLayout from 'src/components/layout/MainLayout';
import { GetServerSidePropsContext } from 'next/types';
import { formatDate } from 'src/lib/date';
import Markdown from 'markdown-to-jsx';

type HMCEvent = {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
};

function TimeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg text-gray5 fill-current"
      data-src="https://secure.meetupstatic.com/next/images/design-system-icons/time-outline.svg"
    >
      <title>icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L12.8232 11.7626C12.7763 11.7157 12.75 11.6521 12.75 11.5858L12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6L11.25 11.5858C11.25 12.0499 11.4344 12.495 11.7626 12.8232L14.4697 15.5303Z"
      ></path>
    </svg>
  );
}

function MapMarkerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg text-gray5 fill-current"
      data-src="https://secure.meetupstatic.com/next/images/design-system-icons/map-marker-outline.svg"
    >
      <title>icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 10C18.5 13.9971 16.3 17.3706 12.1839 20.1101C12.0724 20.1843 11.9276 20.1843 11.8161 20.1101C7.70005 17.3706 5.5 13.9971 5.5 10C5.5 6.41015 8.41015 3.5 12 3.5C15.5899 3.5 18.5 6.41015 18.5 10ZM20 10C20 14.6519 17.4032 18.4382 13.015 21.3588C12.4001 21.7681 11.5999 21.7681 10.985 21.3588C6.59679 18.4382 4 14.6519 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10ZM13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.1716 11.5 10.5 10.8284 10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
      ></path>
    </svg>
  );
}

const markdown = `
# Details
Hi, JavaScript Ninjas!

It's been a year since our last meetup! We believe that most of you also missed having an offline meetup so we are happy to share that for the Meetup #60, we will have it offline!

For this event, we will have an offline meetup at AWS new office Jakarta! Thank you AWS for sponsoring the venue of this event.

Location:
AWS Jakarta Office
Gedung Sinarmas MSIG lt. 16

Let's check the topics below:
Talk:

How to Publish Linter JS as a npm package - Yehezkiel Gunawan, Frontend Engineer, Bobobox
Migrating your Express app to Serverless - Rio Astamal, Developer Advocate, AWS
AGENDA:
18.00 - 18.30 Registration
18.30 - 18.35 Opening
18.35 - 19.15 How to Publish linter JS as a npm package
19.15 - 20.00 Migrating your Express app to Serverless
20.00 - 20.10 Closing
20.10 - 20.30 Networking

***Since this is our first offline event in this Covid era, and also we only have limited seats at AWS office, please register yourself only if you plan to attend the event in-person***. Please always follow the safety guidelines like wearing your mask all the time, and make sure you already get your booster when you attend the event.

We're looking forward to meeting you in-person again!

You might want to join our Slack:
https://jakartajs-join.herokuapp.com

Interest to share and contribute to the topic for the next meetup?

You could submit your slides/topics on:
https://github.com/jakartajs/talks

FAQ

Q: Is this event free?
A: Yes, and will be.

Q: Who's this event for?
A: Most audiences are students, developers, coders, programmers, engineers and related professions.

Q: Can I come even if I haven't RSVP yet?
A: This meetup has a restricted space, thus it's mandatory to RSVP

Q: Is it okay to come late?
A: Yes, just come and join.

Happy Learning!

Regards,
JakartaJS Organizers
`;

export default function EventDetail({ event }: { event: HMCEvent | null }) {
  if (!event) {
    return <p>Not found</p>;
  }
  return (
    <MainLayout>
      <div className="mx-auto container">
        <div className="py-8">
          <p className="text-gray-500">{formatDate(event.date)}</p>
          <h1 className="font-bold text-3xl mb-8 mt-2 text-gray-700">
            {event.name}
          </h1>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto container">
          <div className="py-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="markdown-wrapper col-span-12 md:col-span-7">
                <Markdown>{markdown}</Markdown>
              </div>
              <div className="col-span-12 md:col-start-9 md:col-end-12">
                <div className="bg-white p-6 rounded-t-lg">
                  <div className="mb-4 flex">
                    <span className="text-gray-400">
                      <TimeIcon />
                    </span>{' '}
                    <span className="ml-3">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400">
                      <MapMarkerIcon />
                    </span>
                    <div className="ml-3">
                      <p>Hotel Santika</p>
                      <p className="text-gray-500">
                        Jl. Moh. Hatta No. 18, Lolu Utara
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[-77.043686,38.892035,-77.028923,38.904192]/400x216?padding=50,10,20&access_token=pk.eyJ1IjoiaGFtbWVyY29kZSIsImEiOiJjbDdjcXlneG0xMmJrM3lxZmVpNHZlZWxjIn0.b8S_biSlxMWAA-na9MrNng" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-white w-full py-5 z-10 px-5 xl:px-0">
        <div className="mx-auto container">
          <div className="flex">
            <div className="flex-basis flex-1 invisible md:visible">
              <p>{formatDate(event.date)}</p>
              <p>{event.name}</p>
            </div>

            <div className="flex">
              <div className="p-4">Gratis</div>
              <button className="py-4 px-6 bg-black text-white rounded">
                Ikut Acara
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext & { locale: string }
) {
  let event: HMCEvent | null = null;
  const id = ctx.query.id;
  try {
    event = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + '/api/v1/events/' + id
    )
      .then((res) => res.json())
      .then((res) => {
        return res.data;
      });
  } catch (err) {}
  return {
    props: {
      locale: ctx.locale,
      messages: (await import(`../../locales/${ctx.locale}.json`)).default,
      event,
    },
  };
}
