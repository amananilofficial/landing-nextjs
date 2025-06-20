import PortfolioLandingPage from "@/app/components/PortfolioLandingPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio - Professional Work Showcase',
    description: 'Explore my professional portfolio showcasing projects, skills, and experience',
};

export default function PortfolioPage() {
  return <PortfolioLandingPage />;
}