import StreamingHubLandingPage from '../components/StreamingHubLandingPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Streaming Hub - Your Favorite Shows',
    description: 'Discover and watch your favorite movies, series, and live TV shows all in one place.',
};

export default function Home() {
    return <StreamingHubLandingPage />
}