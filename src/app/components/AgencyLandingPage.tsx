'use client';

import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    Menu,
    X,
    ArrowRight,
    Play,
    Star,
    Users,
    Award,
    TrendingUp,
    Zap,
    Shield,
    Globe,
    Smartphone,
    Palette,
    PenTool,
    Megaphone,
    BarChart3,
    Target,
    CheckCircle,
    Quote,
    Mail,
    Phone,
    MapPin,
    Send,
    Linkedin,
    Twitter,
    Facebook,
    Instagram
} from 'lucide-react';

const AgencyLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
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

    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            description: "Custom websites and web applications built with cutting-edge technologies",
            features: ["Responsive Design", "Performance Optimization", "SEO-friendly", "CMS Integration"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android",
            features: ["React Native", "Flutter", "Native Development", "App Store Optimization"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "User-centered design solutions that drive engagement and conversions",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
            color: "from-green-500 to-teal-500"
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your online presence",
            features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Data Analytics",
            description: "Transform your data into actionable insights for better business decisions",
            features: ["Business Intelligence", "Data Visualization", "Reporting", "Predictive Analytics"],
            color: "from-indigo-500 to-purple-500"
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "Brand Identity",
            description: "Complete brand identity and visual communication solutions",
            features: ["Logo Design", "Brand Guidelines", "Print Design", "Visual Identity"],
            color: "from-pink-500 to-rose-500"
        }
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "/api/placeholder/300/300",
            bio: "15+ years of experience in digital strategy and business development",
            skills: ["Strategy", "Leadership", "Business Development"],
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Michael Chen",
            role: "CTO",
            image: "/api/placeholder/300/300",
            bio: "Full-stack developer with expertise in modern web technologies",
            skills: ["React", "Node.js", "Cloud Architecture"],
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Emily Rodriguez",
            role: "Creative Director",
            image: "/api/placeholder/300/300",
            bio: "Award-winning designer with a passion for user-centered design",
            skills: ["UI/UX", "Branding", "Creative Strategy"],
            social: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "David Kim",
            role: "Marketing Director",
            image: "/api/placeholder/300/300",
            bio: "Digital marketing expert with proven track record of growing brands",
            skills: ["SEO", "Social Media", "Content Strategy"],
            social: {
                linkedin: "#",
                twitter: "#"
            }
        }
    ];

    const portfolio = [
        {
            id: 1,
            title: "E-commerce Revolution",
            category: "Web Development",
            description: "Complete e-commerce platform with advanced features",
            image: "/api/placeholder/600/400",
            client: "TechRetail Inc.",
            results: "300% increase in online sales"
        },
        {
            id: 2,
            title: "FinTech Mobile App",
            category: "Mobile Development",
            description: "Secure banking application with biometric authentication",
            image: "/api/placeholder/600/400",
            client: "SecureBank",
            results: "1M+ downloads in 6 months"
        },
        {
            id: 3,
            title: "SaaS Dashboard",
            category: "UI/UX Design",
            description: "Intuitive dashboard for data analytics platform",
            image: "/api/placeholder/600/400",
            client: "DataFlow Pro",
            results: "40% improvement in user engagement"
        },
        {
            id: 4,
            title: "Brand Transformation",
            category: "Brand Identity",
            description: "Complete rebranding for healthcare startup",
            image: "/api/placeholder/600/400",
            client: "HealthTech Solutions",
            results: "200% increase in brand recognition"
        },
        {
            id: 5,
            title: "Digital Campaign",
            category: "Digital Marketing",
            description: "Multi-channel marketing campaign for product launch",
            image: "/api/placeholder/600/400",
            client: "InnovateNow",
            results: "500% ROI on marketing spend"
        },
        {
            id: 6,
            title: "Analytics Platform",
            category: "Data Analytics",
            description: "Real-time analytics dashboard for enterprise client",
            image: "/api/placeholder/600/400",
            client: "Enterprise Corp",
            results: "50% faster decision making"
        }
    ];

    const testimonials = [
        {
            name: "Jennifer Adams",
            role: "CEO, TechStartup",
            content: "Working with this agency transformed our business. Their strategic approach and technical expertise delivered results beyond our expectations.",
            rating: 5,
            image: "/api/placeholder/80/80",
            company: "TechStartup Inc."
        },
        {
            name: "Robert Martinez",
            role: "Marketing Director, GrowthCo",
            content: "The team's creativity and attention to detail is unmatched. They helped us increase our conversion rates by 250%.",
            rating: 5,
            image: "/api/placeholder/80/80",
            company: "GrowthCo"
        },
        {
            name: "Lisa Wang",
            role: "Founder, InnovateLab",
            content: "From concept to execution, they delivered a world-class product. The communication and project management was flawless.",
            rating: 5,
            image: "/api/placeholder/80/80",
            company: "InnovateLab"
        }
    ];

    const stats = [
        { number: "150+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
        { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
        { number: "8+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
        { number: "25+", label: "Team Members", icon: <TrendingUp className="w-6 h-6" /> }
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
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            DigitalCraft
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'About', 'Services', 'Team', 'Portfolio', 'Contact'].map((item) => (
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
                                Get Started
                                <ArrowRight className="w-4 h-4" />
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
                            {['Home', 'About', 'Services', 'Team', 'Portfolio', 'Contact'].map((item) => (
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
                                Get Started
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
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-medium">Award-Winning Digital Agency</span>
                            </motion.div>

                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                We Create
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {" "}Digital
                                </span>
                                <br />Experiences
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 mb-8 max-w-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Transform your business with our comprehensive digital solutions. 
                                From web development to digital marketing, we've got you covered.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <motion.button
                                    className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                <motion.button
                                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Play className="w-5 h-5" />
                                    Watch Our Story
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

                        {/* Hero Visual */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="relative">
                                {/* Main Visual Container */}
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                    <div className="grid grid-cols-2 gap-6">
                                        <motion.div
                                            className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-32 p-4 flex items-center justify-center"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <Globe className="w-8 h-8 text-blue-600" />
                                        </motion.div>
                                        <motion.div
                                            className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl h-32 p-4 flex items-center justify-center"
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        >
                                            <Smartphone className="w-8 h-8 text-purple-600" />
                                        </motion.div>
                                        <motion.div
                                            className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-24 p-4 flex items-center justify-center"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        >
                                            <Palette className="w-6 h-6 text-green-600" />
                                        </motion.div>
                                        <motion.div
                                            className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-24 p-4 flex items-center justify-center"
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                        >
                                            <BarChart3 className="w-6 h-6 text-orange-600" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Star className="w-5 h-5" />
                                </motion.div>
                                
                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-xl shadow-lg"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Award className="w-5 h-5" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About DigitalCraft
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're a full-service digital agency passionate about creating exceptional digital experiences that drive real business results.
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
                                Crafting Digital Excellence Since 2016
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Founded with a mission to bridge the gap between technology and business success, 
                                DigitalCraft has grown from a small startup to a leading digital agency serving 
                                clients worldwide.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Our team of creative designers, skilled developers, and strategic thinkers work 
                                collaboratively to deliver solutions that not only look great but also drive 
                                measurable results for our clients.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-blue-50 rounded-xl">
                                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                    <h4 className="font-semibold text-gray-900 mb-2">Trusted Partner</h4>
                                    <p className="text-sm text-gray-600">Long-term partnerships built on trust and results</p>
                                </div>
                                <div className="text-center p-6 bg-purple-50 rounded-xl">
                                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                                    <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                                    <p className="text-sm text-gray-600">Cutting-edge solutions for modern challenges</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Users className="w-12 h-12 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h4>
                                    <p className="text-gray-600 max-w-sm">
                                        To empower businesses with digital solutions that create lasting impact and drive sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group cursor-pointer"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                onClick={() => setActiveService(index)}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Talented professionals who bring creativity, expertise, and passion to every project
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Member Photo */}
                                    <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex gap-2">
                                                <motion.a
                                                    href={member.social.linkedin}
                                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                </motion.a>
                                                <motion.a
                                                    href={member.social.twitter}
                                                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <Twitter className="w-4 h-4" />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Member Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {member.bio}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Work
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our portfolio of successful projects and digital transformations
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {portfolio.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group cursor-pointer"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300" />
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* View Project Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <motion.button
                                                className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium shadow-lg"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Project
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Client</p>
                                                <p className="text-sm font-medium text-gray-900">{project.client}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500 mb-1">Result</p>
                                                <p className="text-sm font-medium text-green-600">{project.results}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                        <motion.button
                            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Projects
                            <ArrowRight className="w-5 h-5" />
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
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Don't just take our word for it - hear from our satisfied clients
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
                                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow relative"
                                variants={fadeInUp}
                            >
                                <Quote className="w-10 h-10 text-blue-600 mb-4" />
                                
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
                                        <span className="text-white font-semibold text-sm">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                        <div className="text-sm text-blue-600">{testimonial.company}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Let's Start Your Project
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ready to transform your digital presence? Get in touch with our team today.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
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
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Interested In
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                        <option>Select a service</option>
                                        <option>Web Development</option>
                                        <option>Mobile Development</option>
                                        <option>UI/UX Design</option>
                                        <option>Digital Marketing</option>
                                        <option>Data Analytics</option>
                                        <option>Brand Identity</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
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
                                    Get in Touch
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    We'd love to hear about your project and discuss how we can help bring your vision to life.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Visit Our Office</h4>
                                        <p className="text-gray-600">
                                            123 Digital Street<br />
                                            Creative District<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                                        <p className="text-gray-600">
                                            +1 (555) 123-4567<br />
                                            Mon-Fri 9AM-6PM EST
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                                        <p className="text-gray-600">
                                            hello@digitalcraft.com<br />
                                            We'll respond within 24 hours
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                                <h4 className="text-xl font-bold mb-4">Start Your Project Today</h4>
                                <p className="mb-6 text-blue-100">
                                    Ready to transform your digital presence? Let's discuss your project and create something amazing together.
                                </p>
                                <motion.button
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Schedule a Call
                                    <ArrowRight className="w-4 h-4" />
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
                            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                DigitalCraft
                            </div>
                            <p className="text-gray-400 mb-6">
                                Creating exceptional digital experiences that drive real business results.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { icon: Facebook, href: "#" },
                                    { icon: Twitter, href: "#" },
                                    { icon: Instagram, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center md:text-left">
                            &copy; 2025 DigitalCraft. All rights reserved.
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

export default AgencyLandingPage;