'use client';

import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    Menu,
    X,
    Download,
    Star,
    Play,
    Shield,
    Zap,
    Users,
    Smartphone,
    Globe,
    Award,
    Check,
    Mail,
    Phone,
    MessageSquare,
    Heart,
    Share2,
    Clock,
    Bell,
    Wifi,
    Battery,
    Signal,
    ChevronLeft,
    ChevronRight,
    Apple,
    Send
} from 'lucide-react';

const MobileAppLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
            icon: <Zap className="w-8 h-8" />,
            title: "Lightning Fast",
            description: "Optimized performance with instant loading and smooth animations",
            color: "from-yellow-400 to-orange-500"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure & Private",
            description: "End-to-end encryption and privacy-first design for your data",
            color: "from-green-400 to-blue-500"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Social Features",
            description: "Connect with friends, share content, and build communities",
            color: "from-purple-400 to-pink-500"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Reach",
            description: "Available worldwide with multi-language support",
            color: "from-blue-400 to-cyan-500"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "User Focused",
            description: "Designed with user experience and accessibility in mind",
            color: "from-red-400 to-pink-500"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Award Winning",
            description: "Recognized as the best app in its category",
            color: "from-indigo-400 to-purple-500"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Content Creator",
            content: "This app has completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed.",
            rating: 5,
            avatar: "SJ",
            verified: true
        },
        {
            name: "Michael Chen",
            role: "Small Business Owner",
            content: "Amazing app! It's helped me stay organized and productive. The customer support is also fantastic - they respond quickly and are very helpful.",
            rating: 5,
            avatar: "MC",
            verified: true
        },
        {
            name: "Emily Rodriguez",
            role: "Student",
            content: "I've tried many similar apps, but this one stands out. It's fast, reliable, and has all the features I need without being overwhelming.",
            rating: 5,
            avatar: "ER",
            verified: true
        },
        {
            name: "David Kim",
            role: "Freelancer",
            content: "The best productivity app I've ever used. It's become an essential part of my workflow and I can't imagine working without it now.",
            rating: 5,
            avatar: "DK",
            verified: true
        }
    ];

    const appScreens = [
        {
            title: "Home Screen",
            description: "Clean and intuitive interface",
            image: "home"
        },
        {
            title: "Dashboard",
            description: "Comprehensive overview of your data",
            image: "dashboard"
        },
        {
            title: "Messages",
            description: "Stay connected with your team",
            image: "messages"
        },
        {
            title: "Profile",
            description: "Personalize your experience",
            image: "profile"
        }
    ];

    const stats = [
        { number: "2M+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
        { number: "4.9", label: "App Store Rating", icon: <Star className="w-6 h-6" /> },
        { number: "50K+", label: "Reviews", icon: <MessageSquare className="w-6 h-6" /> },
        { number: "99.9%", label: "Uptime", icon: <Zap className="w-6 h-6" /> }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
                            className="flex items-center gap-2"
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Smartphone className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">AppLaunch</span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Features', 'Screenshots', 'Reviews', 'Download'].map((item) => (
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
                            <motion.button
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4" />
                                Download
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
                            {['Home', 'Features', 'Screenshots', 'Reviews', 'Download'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-700 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="block w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
                                Download App
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Award className="w-4 h-4" />
                                <span className="text-sm font-medium">#1 App of the Year</span>
                            </motion.div>

                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                The App That
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {" "}Changes
                                </span>
                                <br />Everything
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 mb-8 max-w-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Experience the future of mobile productivity with our award-winning app. 
                                Designed for professionals who demand excellence.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <motion.button
                                    className="flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Apple className="w-6 h-6" />
                                    <div className="text-left">
                                        <div className="text-xs">Download on the</div>
                                        <div className="text-lg font-semibold">App Store</div>
                                    </div>
                                </motion.button>

                                <motion.button
                                    className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Play className="w-6 h-6" />
                                    <div className="text-left">
                                        <div className="text-xs">Get it on</div>
                                        <div className="text-lg font-semibold">Google Play</div>
                                    </div>
                                </motion.button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    >
                                        <div className="text-blue-600 mb-2 flex justify-center">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Phone Mockup */}
                        <motion.div
                            className="relative flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="relative">
                                {/* Phone Frame */}
                                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                                            <div className="flex items-center gap-1">
                                                <Signal className="w-4 h-4" />
                                                <Wifi className="w-4 h-4" />
                                            </div>
                                            <div className="text-center font-medium">9:41 AM</div>
                                            <div className="flex items-center gap-1">
                                                <div className="text-xs">100%</div>
                                                <Battery className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* App Screen */}
                                        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 h-full">
                                            <div className="text-center mb-8">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h3>
                                                <p className="text-gray-600">Ready to be productive?</p>
                                            </div>

                                            <div className="space-y-4">
                                                <motion.div
                                                    className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                >
                                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                                        <Check className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">Task Completed</div>
                                                        <div className="text-sm text-gray-500">Project Alpha</div>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
                                                    animate={{ x: [0, -5, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                                >
                                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                        <Bell className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">New Message</div>
                                                        <div className="text-sm text-gray-500">From Sarah</div>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3"
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                                >
                                                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                                        <Clock className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-gray-900">Reminder</div>
                                                        <div className="text-sm text-gray-500">Meeting at 3 PM</div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Download className="w-5 h-5" />
                                </motion.div>
                                
                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-xl shadow-lg"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Star className="w-5 h-5" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover why millions of users choose our app for their daily productivity needs
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group cursor-pointer"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Screenshots Section */}
            <section id="screenshots" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            App Screenshots
                        </h2>
                        <p className="text-xl text-gray-600">
                            Take a look at our beautiful and intuitive interface
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {appScreens.map((screen, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="h-80 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300" />
                                        
                                        {/* Mock phone screen */}
                                        <div className="absolute inset-4 bg-white rounded-2xl shadow-lg p-4">
                                            <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <Smartphone className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-900">{screen.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{screen.title}</h3>
                                        <p className="text-gray-600 text-sm">{screen.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="reviews" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Users Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join millions of satisfied users worldwide
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {/* Testimonial Carousel */}
                        <motion.div
                            className="bg-gray-50 rounded-2xl p-8 md:p-12 relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-8">
                                <div className="flex justify-center mb-4">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl text-gray-800 italic mb-8 leading-relaxed">
                                    "{testimonials[currentTestimonial].content}"
                                </p>
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonials[currentTestimonial].avatar}
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-gray-900 flex items-center gap-2">
                                            {testimonials[currentTestimonial].name}
                                            {testimonials[currentTestimonial].verified && (
                                                <Check className="w-4 h-4 text-blue-500" />
                                            )}
                                        </div>
                                        <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center text-white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Download our app today and join millions of users who have transformed their productivity
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.button
                                className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Apple className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-sm">Download on the</div>
                                    <div className="text-xl font-semibold">App Store</div>
                                </div>
                            </motion.button>

                            <motion.button
                                className="flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Play className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="text-sm">Get it on</div>
                                    <div className="text-xl font-semibold">Google Play</div>
                                </div>
                            </motion.button>
                        </div>

                        <div className="mt-8 text-blue-100">
                            <p>Available on iOS 14+ and Android 8+</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Your message here..."
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
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">
                                            support@applaunch.com<br />
                                            hello@applaunch.com
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-green-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                                        <p className="text-gray-600">
                                            +1 (555) 123-4567<br />
                                            Mon-Fri 9AM-6PM PST
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                                        <p className="text-gray-600">
                                            Available 24/7<br />
                                            Instant support
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                                <h4 className="text-xl font-bold mb-4">Download Our App Today!</h4>
                                <p className="mb-6 text-blue-100">
                                    Ready to transform your productivity? Download our app now and start your journey.
                                </p>
                                <motion.button
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download className="w-4 h-4" />
                                    Download Now
                                </motion.button>
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
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                                    <Smartphone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-2xl font-bold">AppLaunch</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                The ultimate mobile app for productivity and collaboration. Available on all platforms.
                            </p>
                            <div className="flex space-x-4">
                                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Globe className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center md:text-left">
                            &copy; 2025 AppLaunch. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MobileAppLandingPage;