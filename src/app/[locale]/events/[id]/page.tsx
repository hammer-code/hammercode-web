import EventDetail from "@/features/events/components/EventDetail";

const EventsDetail = ({ params }: { params: { id: string } }) => {
  return <EventDetail params={params} />;
};

export default EventsDetail;
