import SustainableFarmingLandingPage from '../components/SustainableFarmingLandingPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sustainable Farming - Eco-Friendly Solutions',
    description: 'Discover sustainable farming practices and solutions for a greener future',
};

export default function Home() {
    return <SustainableFarmingLandingPage />
}