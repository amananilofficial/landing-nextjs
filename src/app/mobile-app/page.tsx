import MobileAppLandingPage from "@/app/components/MobileAppLandingPage";
import { Metadata } from 'next';

    export const metadata: Metadata = {
        title: 'Mobile App - Landing Page',
        description: 'Explore the features and benefits of our mobile app',
    };

export default function MobileAppPage() {
  return <MobileAppLandingPage />;
}