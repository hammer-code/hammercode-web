import { fetcher } from "../instance";

export const eventsService = {
  getEvents(id: string) {
    return fetcher.get("/public/events", { params: { id } });
  },
};
