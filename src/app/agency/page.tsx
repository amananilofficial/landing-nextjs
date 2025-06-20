import AgencyLandingPage from "@/app/components/AgencyLandingPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agency Landing Page',
  description: 'Professional agency landing page showcasing services and expertise',
};

export default function Page() {
  return <AgencyLandingPage />;
}