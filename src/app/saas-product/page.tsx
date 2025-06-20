import SaaSLandingPage from '@/app/components/SaaSLandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SaaS Product Landing Page',
    description: 'Modern SaaS product landing page with pricing and features',
};

export default function SaaSLandingPagePage() {
    return <SaaSLandingPage />;
}