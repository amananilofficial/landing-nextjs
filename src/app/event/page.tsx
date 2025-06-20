import EventLandingPage from "@/app/components/EventLandingPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Event - Professional Event Showcase',
    description: 'Explore our professional events showcasing activities, programs, and experiences',
};

export default function EventPage() {
  return <EventLandingPage />;
}