'use client';

import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    ShoppingCart,
    Star,
    Menu,
    X,
    ArrowRight,
    Truck,
    Shield,
    RefreshCw,
    Heart,
    Search,
    Play,
    Check,
    Mail,
    Phone,
    MapPin,
    Send
} from 'lucide-react';

const EcommerceLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [activeCategory, setActiveCategory] = useState('All');
    const { scrollYProgress } = useScroll();

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Free Shipping",
            description: "Free shipping on orders over $50"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure Payment",
            description: "100% secure payment processing"
        },
        {
            icon: <RefreshCw className="w-8 h-8" />,
            title: "Easy Returns",
            description: "30-day hassle-free returns"
        }
    ];

    const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports', 'Beauty'];

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 299,
            originalPrice: 399,
            rating: 4.8,
            reviews: 124,
            image: "/api/placeholder/300/300",
            category: "Electronics",
            badge: "Best Seller"
        },
        {
            id: 2,
            name: "Designer Sunglasses",
            price: 159,
            originalPrice: 220,
            rating: 4.6,
            reviews: 89,
            image: "/api/placeholder/300/300",
            category: "Fashion",
            badge: "New"
        },
        {
            id: 3,
            name: "Smart Watch Pro",
            price: 449,
            originalPrice: 599,
            rating: 4.9,
            reviews: 256,
            image: "/api/placeholder/300/300",
            category: "Electronics",
            badge: "Hot"
        },
        {
            id: 4,
            name: "Premium Sneakers",
            price: 189,
            originalPrice: 250,
            rating: 4.7,
            reviews: 178,
            image: "/api/placeholder/300/300",
            category: "Fashion",
            badge: "Sale"
        },
        {
            id: 5,
            name: "Coffee Maker Deluxe",
            price: 229,
            originalPrice: 299,
            rating: 4.5,
            reviews: 67,
            image: "/api/placeholder/300/300",
            category: "Home",
            badge: "New"
        },
        {
            id: 6,
            name: "Yoga Mat Premium",
            price: 79,
            originalPrice: 120,
            rating: 4.8,
            reviews: 143,
            image: "/api/placeholder/300/300",
            category: "Sports",
            badge: "Best Seller"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Verified Buyer",
            content: "Absolutely love the quality and fast shipping! Will definitely shop here again.",
            rating: 5,
            image: "/api/placeholder/60/60"
        },
        {
            name: "Mike Chen",
            role: "Verified Buyer",
            content: "Great customer service and amazing products. Highly recommended!",
            rating: 5,
            image: "/api/placeholder/60/60"
        },
        {
            name: "Emma Davis",
            role: "Verified Buyer",
            content: "The best online shopping experience I've had. Quality products at great prices.",
            rating: 5,
            image: "/api/placeholder/60/60"
        }
    ];

    const filteredProducts = activeCategory === 'All' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    const addToCart = (productId: number) => {
        setCartCount(prev => prev + 1);
        // Add animation or toast notification here
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold text-gray-900"
                        >
                            ShopHub
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Products', 'Categories', 'About', 'Contact'].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                                <Heart className="w-5 h-5" />
                            </button>
                            <motion.button
                                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ShoppingCart className="w-5 h-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-4 py-2 space-y-2">
                            {['Home', 'Products', 'Categories', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-700 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Discover Amazing
                                <span className="text-blue-600"> Products</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 mb-8 max-w-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Shop the latest trends with unbeatable prices and free shipping. Your perfect product is just a click away.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <motion.button
                                    className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Shop Now
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                <motion.button
                                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Demo
                                </motion.button>
                            </motion.div>

                            <motion.div
                                className="mt-8 flex items-center gap-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                                    <div className="text-sm text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">500+</div>
                                    <div className="text-sm text-gray-600">Products</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">4.9★</div>
                                    <div className="text-sm text-gray-600">Rating</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-40"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl h-40"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    />
                                    <motion.div
                                        className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-32"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    />
                                    <motion.div
                                        className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-32"
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                    />
                                </div>
                                
                                {/* Floating elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    50% OFF
                                </motion.div>
                                
                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Check className="w-4 h-4" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Featured Products
                        </h2>
                        <p className="text-xl text-gray-600">
                            Discover our handpicked selection of amazing products
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                                    activeCategory === category
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                            >
                                {/* Product Image */}
                                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 group-hover:opacity-20 transition-opacity" />
                                    
                                    {/* Badge */}
                                    <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${
                                        product.badge === 'Best Seller' ? 'bg-green-500 text-white' :
                                        product.badge === 'New' ? 'bg-blue-500 text-white' :
                                        product.badge === 'Hot' ? 'bg-red-500 text-white' :
                                        'bg-orange-500 text-white'
                                    }`}>
                                        {product.badge}
                                    </div>

                                    {/* Heart Icon */}
                                    <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                                    </button>

                                    {/* Product placeholder */}
                                    <div className="absolute inset-4 bg-white/20 rounded-lg flex items-center justify-center">
                                        <div className="text-white/60 text-6xl font-bold">
                                            {product.name.charAt(0)}
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-blue-600 font-medium">
                                            {product.category}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm text-gray-600">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                        <span className="text-lg text-gray-400 line-through">
                                            ${product.originalPrice}
                                        </span>
                                        <span className="text-sm text-green-600 font-semibold">
                                            Save ${product.originalPrice - product.price}
                                        </span>
                                    </div>

                                    <motion.button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => addToCart(product.id)}
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>            {/* Categories Section */}
            <section id="categories" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Shop by Category
                        </h2>
                        <p className="text-xl text-gray-600">
                            Explore our wide range of product categories
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            { name: 'Electronics', icon: '📱', color: 'from-blue-400 to-blue-600', count: '150+' },
                            { name: 'Fashion', icon: '👕', color: 'from-pink-400 to-pink-600', count: '200+' },
                            { name: 'Home', icon: '🏠', color: 'from-green-400 to-green-600', count: '80+' },
                            { name: 'Sports', icon: '⚽', color: 'from-orange-400 to-orange-600', count: '120+' },
                            { name: 'Beauty', icon: '💄', color: 'from-purple-400 to-purple-600', count: '90+' },
                            { name: 'Books', icon: '📚', color: 'from-indigo-400 to-indigo-600', count: '300+' }
                        ].map((category, index) => (
                            <motion.div
                                key={category.name}
                                className="group cursor-pointer"
                                variants={fadeInUp}
                                whileHover={{ y: -10, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                                    <p className="text-sm opacity-90">{category.count} items</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-200 hover:border-purple-400"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Categories
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands of satisfied customers
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
                                variants={fadeInUp}
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                About ShopHub
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We're passionate about bringing you the best products at unbeatable prices. 
                                Founded in 2020, ShopHub has grown to become one of the most trusted online 
                                retailers, serving over 10,000 happy customers worldwide.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Our mission is simple: to make online shopping easy, affordable, and enjoyable. 
                                We carefully curate every product in our store to ensure you get the highest 
                                quality at the best price.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                                    <div className="text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                                    <div className="text-gray-600">Products</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                                    <div className="text-gray-600">Average Rating</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                                    <div className="text-gray-600">Support</div>
                                </div>
                            </div>

                            <motion.button
                                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Quality First</h4>
                                                <p className="text-gray-600">We never compromise on product quality</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                                                <p className="text-gray-600">Your happiness is our priority</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Innovation</h4>
                                                <p className="text-gray-600">Always improving your shopping experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Subscribe to our newsletter and get exclusive deals and new product updates
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <motion.button
                                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-gray-600">
                            Have questions? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Send us a Message
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Contact Information
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    We're here to help! Reach out to us through any of the following channels.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">support@shophub.com</p>
                                        <p className="text-gray-600">sales@shophub.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-green-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-600">+1 (555) 987-6543</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                        <p className="text-gray-600">123 Commerce Street</p>
                                        <p className="text-gray-600">New York, NY 10001</p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                                <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>12:00 PM - 5:00 PM</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-white/20 rounded-lg">
                                    <p className="text-sm">
                                        <strong>24/7 Support:</strong> Our online support team is available round the clock to assist you.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold mb-4">ShopHub</div>
                            <p className="text-gray-400 mb-4">
                                Your one-stop destination for amazing products at unbeatable prices.
                            </p>
                            <div className="flex space-x-4">
                                {/* Social media icons would go here */}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Shop</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center md:text-left">
                            &copy; 2025 ShopHub. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EcommerceLandingPage;