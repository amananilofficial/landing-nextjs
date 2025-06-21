import VintageClothesLandingPage from '../components/VintageClothesLandingPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vintage Clothes - Timeless Fashion',
    description: 'Explore our collection of vintage clothes and accessories for a unique style',
};

export default function Home() {
    return <VintageClothesLandingPage />
}