'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import {
    Menu,
    X,
    ShoppingBag,
    Star,
    Phone,
    Mail,
    MapPin,
    Shirt,
    Scissors,
    Sparkles,
    Instagram,
    Facebook,
    Twitter
} from 'lucide-react';

// Loading Component
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center z-50"
                >
                    <div className="text-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full mx-auto mb-4"
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl font-bold text-amber-800"
                        >
                            Vintage Threads
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-amber-600 mt-2"
                        >
                            Loading timeless fashion...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// 3D Vintage Shirt Model
const VintageShirt = () => {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[1.5, 2, 0.3]} />
            <meshStandardMaterial color="#8B4513" roughness={0.7} />
            {/* Shirt details */}
            <mesh position={[0, 0.5, 0.16]}>
                <boxGeometry args={[1.2, 0.4, 0.05]} />
                <meshStandardMaterial color="#D2691E" />
            </mesh>
            {/* Sleeves */}
            <mesh position={[-0.8, 0.3, 0]}>
                <boxGeometry args={[0.4, 1.2, 0.3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[0.8, 0.3, 0]}>
                <boxGeometry args={[0.4, 1.2, 0.3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
        </mesh>
    );
};

// Main Component
const VintageClothesLandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'products', label: 'Products' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            <LoadingScreen isLoading={isLoading} />

            <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center space-x-2"
                            >
                                <Shirt className="h-8 w-8 text-amber-600" />
                                <span className="text-xl font-bold text-gray-800">Vintage Threads</span>
                            </motion.div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-8">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-sm font-medium transition-colors ${activeSection === item.id
                                            ? 'text-amber-600'
                                            : 'text-gray-600 hover:text-amber-600'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-white border-t"
                            >
                                <div className="px-4 py-2 space-y-1">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-amber-600"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>                {/* Home Section */}                <section id="home" className="pt-16 min-h-screen flex items-center overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left order-2 lg:order-1"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
                                Vintage
                                <span className="text-amber-600 block">Fashion</span>
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal">Reimagined</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Discover timeless pieces that tell stories. Our curated collection of vintage
                                clothing brings classic elegance to modern wardrobes.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('products')}
                                    className="bg-amber-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-amber-700 transition-colors w-full sm:w-auto"
                                >
                                    Shop Collection
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection('about')}
                                    className="border-2 border-amber-600 text-amber-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors w-full sm:w-auto"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* 3D Model */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 lg:order-2"
                        >
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                <ambientLight intensity={0.5} />
                                <pointLight position={[10, 10, 10]} />
                                <Suspense fallback={null}>
                                    <VintageShirt />
                                    <Environment preset="sunset" />
                                </Suspense>
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                            </Canvas>
                        </motion.div>
                    </div>
                </section>{/* About Section */}
                <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12 sm:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">About Vintage Threads</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                                We're passionate about preserving fashion history while making it accessible
                                to modern style enthusiasts.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />,
                                    title: "Curated Collection",
                                    description: "Hand-picked vintage pieces from the finest eras of fashion"
                                },
                                {
                                    icon: <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />,
                                    title: "Expert Restoration",
                                    description: "Professional cleaning and restoration for authentic vintage appeal"
                                },
                                {
                                    icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />,
                                    title: "Quality Guarantee",
                                    description: "Every piece is authenticated and quality-checked by our experts"
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="text-center p-4 sm:p-6"
                                >
                                    <div className="bg-amber-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>                {/* Products Section */}
                <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-orange-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12 sm:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Featured Products</h2>
                            <p className="text-lg sm:text-xl text-gray-600 px-4">Discover our most loved vintage pieces</p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                { name: "Vintage Leather Jacket", price: "$299", era: "1980s" },
                                { name: "Retro Denim Dress", price: "$189", era: "1970s" },
                                { name: "Classic Wool Coat", price: "$349", era: "1960s" },
                                { name: "Vintage Band Tee", price: "$89", era: "1990s" },
                                { name: "Retro Sunglasses", price: "$129", era: "1980s" },
                                { name: "Vintage Handbag", price: "$199", era: "1970s" }
                            ].map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                                >
                                    <div className="h-48 sm:h-56 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                                        <Shirt className="h-12 w-12 sm:h-16 sm:w-16 text-amber-600" />
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <span className="text-xs sm:text-sm text-amber-600 font-medium">{product.era}</span>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mt-1">{product.name}</h3>
                                        <div className="flex justify-between items-center mt-3 sm:mt-4">
                                            <span className="text-xl sm:text-2xl font-bold text-gray-800">{product.price}</span>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-amber-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-amber-700 transition-colors"
                                            >
                                                <ShoppingBag className="h-4 w-4" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>                {/* Services Section */}
                <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12 sm:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our Services</h2>
                            <p className="text-lg sm:text-xl text-gray-600">Beyond just selling, we offer comprehensive vintage fashion services</p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { title: "Personal Styling", description: "Expert styling consultation for vintage pieces" },
                                { title: "Authentication", description: "Professional verification of vintage items" },
                                { title: "Restoration", description: "Careful restoration of vintage garments" },
                                { title: "Custom Fitting", description: "Tailoring services for perfect fit" }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-colors"
                                >
                                    <div className="bg-amber-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">{service.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>                {/* Contact Section */}
                <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-orange-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12 sm:mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Get In Touch</h2>
                            <p className="text-lg sm:text-xl text-gray-600">We'd love to hear from you</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Contact Information</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0" />
                                        <span className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0" />
                                        <span className="text-sm sm:text-base text-gray-600">hello@vintagethreads.com</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0 mt-1" />
                                        <span className="text-sm sm:text-base text-gray-600">123 Vintage Lane, Fashion District</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.form
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4"
                            >
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none text-sm sm:text-base"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none text-sm sm:text-base"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none text-sm sm:text-base resize-none"
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors text-sm sm:text-base"
                                >
                                    Send Message
                                </motion.button>
                            </motion.form>
                        </div>
                    </div>
                </section>                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8 sm:py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            <div className="col-span-1 sm:col-span-2 md:col-span-1">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Shirt className="h-8 w-8 text-amber-400" />
                                    <span className="text-xl font-bold">Vintage Threads</span>
                                </div>
                                <p className="text-gray-400 text-sm sm:text-base">
                                    Bringing timeless fashion to modern wardrobes since 2020.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    {navItems.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => scrollToSection(item.id)}
                                                className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base"
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                    <li>Jackets & Coats</li>
                                    <li>Dresses</li>
                                    <li>Accessories</li>
                                    <li>Footwear</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
                                    <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
                                    <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                            <p className="text-sm sm:text-base">&copy; 2024 Vintage Threads. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default VintageClothesLandingPage;