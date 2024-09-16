type EventTypes = "Workshop" | "TechTalk" | "dll";
type EventStatus = "open" | "soon" | "closed";

export type EventType = {
  id: string;
  title: string;
  description: string;
  author: string;
  image_event: string;
  date_event: string;
  created_at?: string;
  updated_at?: string;
  type_event?: EventTypes;
  location?: string;
  duration?: string;
  capacity?: number;
  tags?: string[];
  registration_link?: string;
  speakers?: string[];
  status: EventStatus;
};
