'use client';

import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    Calendar,
    MapPin,
    Clock,
    Users,
    Menu,
    X,
    CheckCircle,
    Ticket,
    Award,
    Coffee,
    Wifi,
    Camera,
    Music,
    Globe,
    Mail,
    Phone,
    Play,
    Share2
} from 'lucide-react';

const EventLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('standard');
    const [registrationStep, setRegistrationStep] = useState(1);
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

    const eventDetails = {
        title: "TechConf 2025",
        subtitle: "The Future of Technology",
        date: "March 15-17, 2025",
        location: "San Francisco Convention Center",
        time: "9:00 AM - 6:00 PM",
        attendees: "2,500+ Expected"
    };

    const speakers = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechCorp",
            topic: "AI Revolution in Business",
            image: "/api/placeholder/300/300",
            company: "TechCorp",
            bio: "Leading AI researcher with 15+ years in tech innovation"
        },
        {
            name: "Michael Chen",
            role: "CTO, InnovateLab",
            topic: "Future of Cloud Computing",
            image: "/api/placeholder/300/300",
            company: "InnovateLab",
            bio: "Cloud architecture expert and bestselling author"
        },
        {
            name: "Emily Rodriguez",
            role: "VP Engineering, DataFlow",
            topic: "Scaling Modern Applications",
            image: "/api/placeholder/300/300",
            company: "DataFlow",
            bio: "Full-stack engineer turned executive with scaling expertise"
        },
        {
            name: "David Kim",
            role: "Founder, StartupX",
            topic: "Building Unicorn Startups",
            image: "/api/placeholder/300/300",
            company: "StartupX",
            bio: "Serial entrepreneur with 3 successful exits"
        }
    ];

    const schedule = [
        {
            day: "Day 1 - March 15",
            events: [
                { time: "9:00 AM", title: "Registration & Coffee", type: "break" },
                { time: "10:00 AM", title: "Opening Keynote: AI Revolution", speaker: "Sarah Johnson", type: "keynote" },
                { time: "11:30 AM", title: "Panel: Future of Work", type: "panel" },
                { time: "1:00 PM", title: "Lunch & Networking", type: "break" },
                { time: "2:30 PM", title: "Workshop: Cloud Architecture", speaker: "Michael Chen", type: "workshop" },
                { time: "4:00 PM", title: "Startup Pitch Competition", type: "competition" },
                { time: "6:00 PM", title: "Welcome Reception", type: "social" }
            ]
        },
        {
            day: "Day 2 - March 16",
            events: [
                { time: "9:00 AM", title: "Coffee & Networking", type: "break" },
                { time: "10:00 AM", title: "Scaling Applications", speaker: "Emily Rodriguez", type: "talk" },
                { time: "11:30 AM", title: "Tech Trends 2025", type: "panel" },
                { time: "1:00 PM", title: "Lunch Break", type: "break" },
                { time: "2:30 PM", title: "Startup Success Stories", speaker: "David Kim", type: "keynote" },
                { time: "4:00 PM", title: "Innovation Showcase", type: "expo" },
                { time: "7:00 PM", title: "Gala Dinner", type: "social" }
            ]
        }
    ];

    const ticketTypes = [
        {
            id: 'student',
            name: 'Student',
            price: '$99',
            originalPrice: '$199',
            description: 'Perfect for students and learners',
            features: [
                'Access to all sessions',
                'Digital materials',
                'Student networking events',
                'Certificate of attendance'
            ],
            popular: false,
            discount: '50% OFF'
        },
        {
            id: 'standard',
            name: 'Standard',
            price: '$299',
            originalPrice: '$399',
            description: 'Great for professionals',
            features: [
                'Access to all sessions',
                'Workshop materials',
                'Networking events',
                'Lunch included',
                'Certificate & swag bag'
            ],
            popular: true,
            discount: '25% OFF'
        },
        {
            id: 'vip',
            name: 'VIP',
            price: '$599',
            originalPrice: '$799',
            description: 'Premium experience',
            features: [
                'All Standard features',
                'VIP seating',
                'Meet & greet with speakers',
                'Exclusive VIP lounge',
                'Premium swag bag',
                '1-on-1 mentoring session'
            ],
            popular: false,
            discount: '25% OFF'
        }
    ];

    const sponsors = [
        { name: 'TechCorp', logo: '🚀', tier: 'platinum' },
        { name: 'InnovateLab', logo: '⚡', tier: 'gold' },
        { name: 'DataFlow', logo: '📊', tier: 'gold' },
        { name: 'StartupX', logo: '🎯', tier: 'silver' },
        { name: 'CloudTech', logo: '☁️', tier: 'silver' },
        { name: 'DevTools', logo: '🛠️', tier: 'bronze' }
    ];

    const amenities = [
        { icon: <Wifi className="w-6 h-6" />, title: "Free WiFi", description: "High-speed internet throughout" },
        { icon: <Coffee className="w-6 h-6" />, title: "Coffee Bar", description: "Premium coffee & refreshments" },
        { icon: <Camera className="w-6 h-6" />, title: "Photography", description: "Professional event photography" },
        { icon: <Music className="w-6 h-6" />, title: "Live Music", description: "Evening entertainment" },
        { icon: <Award className="w-6 h-6" />, title: "Certificates", description: "Official attendance certificates" },
        { icon: <Users className="w-6 h-6" />, title: "Networking", description: "Structured networking sessions" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                        >
                            TechConf 2025
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Speakers', 'Schedule', 'Tickets', 'Venue', 'Sponsors'].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            <motion.button
                                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Ticket className="w-4 h-4" />
                                Register Now
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
                            {['Home', 'Speakers', 'Schedule', 'Tickets', 'Venue', 'Sponsors'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 text-gray-700 hover:text-purple-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="block w-full mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg">
                                Register Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white min-h-screen flex items-center relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <motion.div
                        className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-32 right-16 w-48 h-48 bg-blue-500 rounded-full blur-xl"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{eventDetails.date}</span>
                            </motion.div>

                            <motion.h1
                                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                {eventDetails.title}
                            </motion.h1>

                            <motion.h2
                                className="text-2xl md:text-3xl text-purple-200 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {eventDetails.subtitle}
                            </motion.h2>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-purple-300" />
                                    <div>
                                        <div className="text-sm text-purple-200">Location</div>
                                        <div className="font-semibold">San Francisco</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-purple-300" />
                                    <div>
                                        <div className="text-sm text-purple-200">Duration</div>
                                        <div className="font-semibold">3 Days</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-purple-300" />
                                    <div>
                                        <div className="text-sm text-purple-200">Attendees</div>
                                        <div className="font-semibold">2,500+</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <motion.button
                                    className="px-8 py-4 bg-white text-purple-900 text-lg font-semibold rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Ticket className="w-5 h-5" />
                                    Get Tickets
                                </motion.button>

                                <motion.button
                                    className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Trailer
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Event Visual */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                    {/* Event Stats */}
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <motion.div
                                            className="text-center p-4 bg-white/5 rounded-2xl"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                        >
                                            <div className="text-3xl font-bold mb-2">50+</div>
                                            <div className="text-purple-200 text-sm">Speakers</div>
                                        </motion.div>
                                        <motion.div
                                            className="text-center p-4 bg-white/5 rounded-2xl"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                        >
                                            <div className="text-3xl font-bold mb-2">20+</div>
                                            <div className="text-purple-200 text-sm">Sessions</div>
                                        </motion.div>
                                        <motion.div
                                            className="text-center p-4 bg-white/5 rounded-2xl"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                        >
                                            <div className="text-3xl font-bold mb-2">3</div>
                                            <div className="text-purple-200 text-sm">Days</div>
                                        </motion.div>
                                        <motion.div
                                            className="text-center p-4 bg-white/5 rounded-2xl"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                                        >
                                            <div className="text-3xl font-bold mb-2">15+</div>
                                            <div className="text-purple-200 text-sm">Sponsors</div>
                                        </motion.div>
                                    </div>

                                    {/* Countdown Timer */}
                                    <div className="text-center">
                                        <div className="text-sm text-purple-200 mb-4">Event Starts In</div>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[
                                                { value: '45', label: 'Days' },
                                                { value: '12', label: 'Hours' },
                                                { value: '30', label: 'Minutes' },
                                                { value: '15', label: 'Seconds' }
                                            ].map((time, index) => (
                                                <div key={index} className="bg-white/10 rounded-lg p-3">
                                                    <div className="text-2xl font-bold">{time.value}</div>
                                                    <div className="text-xs text-purple-200">{time.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    Early Bird
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Speakers Section */}
            <section id="speakers" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Featured Speakers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Learn from industry leaders and innovators who are shaping the future of technology
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                            >
                                {/* Speaker Image */}
                                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 group-hover:from-purple-400/20 group-hover:to-blue-400/20 transition-all duration-300" />
                                    <div className="absolute inset-4 bg-white/20 rounded-lg flex items-center justify-center">
                                        <div className="text-6xl">👨‍💼</div>
                                    </div>
                                </div>

                                {/* Speaker Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-purple-600 font-medium mb-2">
                                        {speaker.role}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {speaker.bio}
                                    </p>
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <div className="text-sm font-medium text-purple-800">
                                            Speaking on: {speaker.topic}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Event Schedule
                        </h2>
                        <p className="text-xl text-gray-600">
                            Three days packed with insights, networking, and innovation
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {schedule.map((day, dayIndex) => (
                            <motion.div
                                key={dayIndex}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                                    {day.day}
                                </h3>
                                <div className="space-y-4">
                                    {day.events.map((event, eventIndex) => (
                                        <motion.div
                                            key={eventIndex}
                                            className={`flex items-center gap-6 p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                                                event.type === 'keynote' ? 'border-purple-200 bg-purple-50' :
                                                event.type === 'workshop' ? 'border-blue-200 bg-blue-50' :
                                                event.type === 'social' ? 'border-green-200 bg-green-50' :
                                                'border-gray-200 bg-white'
                                            }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: eventIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="flex-shrink-0 w-20 text-center">
                                                <div className="text-lg font-bold text-gray-900">{event.time}</div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {event.title}
                                                </h4>
                                                {event.speaker && (
                                                    <p className="text-purple-600 font-medium">
                                                        by {event.speaker}
                                                    </p>
                                                )}
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                event.type === 'keynote' ? 'bg-purple-100 text-purple-800' :
                                                event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                                                event.type === 'social' ? 'bg-green-100 text-green-800' :
                                                event.type === 'panel' ? 'bg-orange-100 text-orange-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                                {event.type}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tickets Section */}
            <section id="tickets" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Choose Your Ticket
                        </h2>
                        <p className="text-xl text-gray-600">
                            Early bird pricing available for a limited time
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {ticketTypes.map((ticket, index) => (
                            <motion.div
                                key={ticket.id}
                                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                    ticket.popular
                                        ? 'border-purple-500 shadow-xl scale-105 bg-white'
                                        : 'border-gray-200 hover:border-purple-300 hover:shadow-lg bg-white'
                                }`}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedTicket(ticket.id)}
                            >
                                {ticket.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {ticket.discount && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {ticket.discount}
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{ticket.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-gray-900">{ticket.price}</span>
                                        {ticket.originalPrice && (
                                            <span className="text-lg text-gray-500 line-through ml-2">
                                                {ticket.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600">{ticket.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {ticket.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                                        ticket.popular
                                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                                            : 'bg-gray-100 text-gray-900 hover:bg-purple-100'
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Select Ticket
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-600 mb-4">
                            Group discounts available for 5+ tickets
                        </p>
                        <button className="text-purple-600 hover:text-purple-700 font-medium">
                            Contact us for group pricing
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Amenities Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Event Amenities
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need for a comfortable and productive experience
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                    {amenity.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {amenity.title}
                                </h3>
                                <p className="text-gray-600">
                                    {amenity.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Venue Section */}
            <section id="venue" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Venue & Location
                        </h2>
                        <p className="text-xl text-gray-600">
                            Located in the heart of San Francisco's tech district
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                San Francisco Convention Center
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                A state-of-the-art facility in the heart of San Francisco, offering world-class 
                                amenities and easy access to hotels, restaurants, and transportation.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Address</div>
                                        <div className="text-gray-600">747 Howard St, San Francisco, CA 94103</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Globe className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Transportation</div>
                                        <div className="text-gray-600">Connected to BART and Muni stations</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Capacity</div>
                                        <div className="text-gray-600">Up to 3,000 attendees</div>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MapPin className="w-5 h-5" />
                                View on Map
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl mb-4">🏢</div>
                                    <div className="text-2xl font-bold text-gray-900 mb-2">
                                        Convention Center
                                    </div>
                                    <div className="text-gray-600">
                                        Modern facilities with cutting-edge technology
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section id="sponsors" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Sponsors
                        </h2>
                        <p className="text-xl text-gray-600">
                            Supported by leading companies in the tech industry
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {['platinum', 'gold', 'silver', 'bronze'].map((tier) => {
                            const tierSponsors = sponsors.filter(sponsor => sponsor.tier === tier);
                            if (tierSponsors.length === 0) return null;

                            return (
                                <motion.div
                                    key={tier}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className={`text-2xl font-bold text-center mb-8 ${
                                        tier === 'platinum' ? 'text-purple-600' :
                                        tier === 'gold' ? 'text-yellow-600' :
                                        tier === 'silver' ? 'text-gray-600' :
                                        'text-orange-600'
                                    }`}>
                                        {tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors
                                    </h3>
                                    <div className={`grid gap-8 ${
                                        tier === 'platinum' ? 'grid-cols-1 md:grid-cols-2' :
                                        tier === 'gold' ? 'grid-cols-2 md:grid-cols-3' :
                                        'grid-cols-3 md:grid-cols-6'
                                    }`}>
                                        {tierSponsors.map((sponsor, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                                whileHover={{ scale: 1.05, y: -5 }}
                                            >
                                                <div className="text-center">
                                                    <div className="text-4xl mb-2">{sponsor.logo}</div>
                                                    <div className="font-semibold text-gray-900">{sponsor.name}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
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
                        <p className="text-xl text-purple-100 mb-8">
                            Get the latest updates about speakers, schedule changes, and exclusive content
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <motion.button
                                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-xl text-gray-600">
                            Have questions? We're here to help
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg"
                            {...fadeInUp}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@techconf2025.com</p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg"
                            {...fadeInUp}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                <Phone className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 bg-white rounded-2xl shadow-lg"
                            {...fadeInUp}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                                <Share2 className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Social</h3>
                            <p className="text-gray-600">@TechConf2025</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                TechConf 2025
                            </div>
                            <p className="text-gray-400 mb-4">
                                The premier technology conference bringing together innovators, entrepreneurs, and thought leaders.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
                                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                                <li><a href="#tickets" className="hover:text-white transition-colors">Tickets</a></li>
                                <li><a href="#venue" className="hover:text-white transition-colors">Venue</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sponsors</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Media Kit</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 TechConf. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EventLandingPage;