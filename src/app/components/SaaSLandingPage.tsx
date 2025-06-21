'use client';

import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    CheckCircle,
    Star,
    Menu,
    X,
    ArrowRight,
    Zap,
    Shield,
    Users,
    BarChart3,
    Globe,
    Smartphone
} from 'lucide-react';

const SaaSLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            description: "Blazing fast performance with 99.9% uptime guarantee"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Enterprise Security",
            description: "Bank-level security with end-to-end encryption"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Team Collaboration",
            description: "Seamless collaboration tools for distributed teams"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Advanced Analytics",
            description: "Real-time insights and detailed reporting"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Scale",
            description: "Scale globally with our worldwide infrastructure"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile First",
            description: "Native mobile apps for iOS and Android"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, TechCorp",
            content: "This platform transformed our workflow completely. The ROI was visible within the first month.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Founder, StartupXYZ",
            content: "Incredible support team and feature-rich platform. Couldn't ask for more!",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "VP Operations, BigCo",
            content: "The analytics dashboard gives us insights we never had before. Game changer!",
            rating: 5
        }
    ];

    const pricingPlans = [
        {
            name: "Starter",
            price: "$29",
            period: "per month",
            description: "Perfect for small teams getting started",
            features: [
                "Up to 5 team members",
                "10GB storage",
                "Basic analytics",
                "Email support",
                "Mobile app access"
            ],
            popular: false
        },
        {
            name: "Professional",
            price: "$79",
            period: "per month",
            description: "Best for growing businesses",
            features: [
                "Up to 25 team members",
                "100GB storage",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom integrations"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "$199",
            period: "per month",
            description: "For large organizations",
            features: [
                "Unlimited team members",
                "1TB storage",
                "Enterprise analytics",
                "24/7 phone support",
                "Custom solutions",
                "Dedicated account manager"
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            SaaSify
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        <div className="hidden md:flex space-x-4">
                            <motion.button
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '#start'}
                            >
                                Get Started
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
                            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-700 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="pt-2 space-y-2">
                                <button
                                    className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg"
                                    onClick={() => window.location.href = '#start'}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </nav>            {/* Hero Section */}
            <section className="pt-20 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Build Better
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {" "}Products
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            The ultimate SaaS platform that helps teams collaborate, analyze, and scale their business faster than ever before.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.button
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Free Trial
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.button>

                            <motion.button
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 text-base sm:text-lg font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Watch Demo
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-500 px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            No credit card required • 14-day free trial • Cancel anytime
                        </motion.div>
                    </motion.div>                    {/* Hero Image/Dashboard Mockup */}
                    <motion.div
                        className="mt-12 sm:mt-16 lg:mt-20 relative px-2 sm:px-0"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl shadow-2xl p-1">
                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-20 sm:h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                                        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                                        <div className="h-24 sm:h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg"></div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
                                        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-16 sm:h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                                        <div className="h-3 sm:h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>            {/* Features Section */}
            <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Powerful Features
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Everything you need to build, scale, and optimize your business in one powerful platform.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-blue-200"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>            {/* Testimonials Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Loved by Thousands
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 px-4">
                            See what our customers are saying about us
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                                variants={fadeInUp}
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic text-sm sm:text-base">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>            {/* Pricing Section */}
            <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 px-4">
                            Choose the perfect plan for your team
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 ${plan.popular
                                    ? 'border-blue-500 shadow-xl md:scale-105'
                                    : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                                    }`}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                                        <span className="text-gray-600 text-sm sm:text-base">/{plan.period}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base px-2">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm sm:text-base">
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all text-sm sm:text-base ${plan.popular
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Started
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About SaaSify
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            We're on a mission to revolutionize how teams collaborate and build products
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Our Story
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                                Founded in 2020 by a team of passionate developers and entrepreneurs, SaaSify was born
                                from the frustration of using multiple disconnected tools to manage projects and teams.
                            </p>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                                We believe that powerful software should be accessible to everyone, from startups to
                                enterprise companies. That's why we built SaaSify - to provide enterprise-grade features
                                with the simplicity that small teams love.
                            </p>
                            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">50K+</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Active Users</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">99.9%</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">4.9/5</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Rating</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
                                <h4 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h4>
                                <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
                                    To empower teams worldwide with tools that make collaboration seamless,
                                    insights actionable, and growth sustainable.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Innovation-driven development</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Customer-centric approach</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Commitment to excellence</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 px-4">
                            Have questions? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <form className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
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
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                        placeholder="Company Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Let's Start a Conversation
                                </h3>
                                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                                    Whether you're looking to scale your business, need technical support,
                                    or want to explore partnership opportunities, we're here to help.
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Visit Us</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            123 Innovation Street<br />
                                            San Francisco, CA 94105<br />
                                            United States
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Call Us</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            +1 (555) 123-4567<br />
                                            Mon-Fri 9AM-6PM PST
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email Us</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            hello@saasify.com<br />
                                            support@saasify.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl">
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Quick Response</h4>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    We typically respond to all inquiries within 24 hours. For urgent matters,
                                    please call us directly.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>                {/* CTA Section */}
                <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 px-4">
                                Join thousands of teams already using our platform to build better products.
                            </p>
                            <motion.button
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '#start'}
                            >
                                Start Your Free Trial
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            <div className="sm:col-span-2 md:col-span-1">
                                <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    SaaSify
                                </div>
                                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                                    Building the future of SaaS platforms, one feature at a time.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
                                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
                                <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
                            <p>&copy; 2025 SaaSify. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

            </section>
        </div>
    );
};

export default SaaSLandingPage;