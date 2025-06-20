import EcommerceLandingPage from '@/app/components/EcommerceLandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'E-commerce Store - ShopHub',
    description: 'Beautiful e-commerce landing page with product showcase',
};

export default function EcommercePage() {
    return <EcommerceLandingPage />;
}