'use client';

import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
    Menu,
    X,
    ArrowRight,
    Download,
    Github,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Code,
    Palette,
    Smartphone,
    Globe,
    Star,
    Users,
    Award,
    Eye,
    Calendar
} from 'lucide-react';

const PortfolioLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');
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

    const skills = [
        { name: "React", level: 95, icon: <Code className="w-6 h-6" /> },
        { name: "TypeScript", level: 90, icon: <Code className="w-6 h-6" /> },
        { name: "UI/UX Design", level: 88, icon: <Palette className="w-6 h-6" /> },
        { name: "Next.js", level: 92, icon: <Globe className="w-6 h-6" /> },
        { name: "Mobile Development", level: 85, icon: <Smartphone className="w-6 h-6" /> },
        { name: "Node.js", level: 87, icon: <Code className="w-6 h-6" /> }
    ];

    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            description: "Full-stack web applications using modern technologies like React, Next.js, and Node.js",
            features: ["Responsive Design", "Performance Optimization", "SEO-friendly", "Cross-browser Compatible"]
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android",
            features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "User-centered design solutions that combine aesthetics with functionality",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        }
    ];

    const portfolio = [
        {
            id: 1,
            title: "E-commerce Platform",
            category: "Web Development",
            description: "A modern e-commerce solution with advanced filtering and payment integration",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#",
            github: "#"
        },
        {
            id: 2,
            title: "Mobile Banking App",
            category: "Mobile Development",
            description: "Secure mobile banking application with biometric authentication",
            image: "/api/placeholder/600/400",
            technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
            link: "#",
            github: "#"
        },
        {
            id: 3,
            title: "SaaS Dashboard",
            category: "Web Development",
            description: "Analytics dashboard for SaaS companies with real-time data visualization",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
            link: "#",
            github: "#"
        },
        {
            id: 4,
            title: "Brand Identity Design",
            category: "UI/UX Design",
            description: "Complete brand identity and design system for a tech startup",
            image: "/api/placeholder/600/400",
            technologies: ["Figma", "Adobe Creative Suite", "Design Systems"],
            link: "#",
            github: "#"
        },
        {
            id: 5,
            title: "Fitness Tracking App",
            category: "Mobile Development",
            description: "Health and fitness tracking app with social features and challenges",
            image: "/api/placeholder/600/400",
            technologies: ["Flutter", "Firebase", "Health APIs", "Push Notifications"],
            link: "#",
            github: "#"
        },
        {
            id: 6,
            title: "Portfolio Website",
            category: "Web Development",
            description: "Interactive portfolio website for a creative agency",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Framer Motion", "GSAP", "Headless CMS"],
            link: "#",
            github: "#"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStartup",
            content: "Exceptional work! The website exceeded our expectations and was delivered on time. Highly recommend!",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            name: "Michael Chen",
            role: "Product Manager, InnovateCorp",
            content: "Outstanding attention to detail and great communication throughout the project. A true professional!",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director, GrowthCo",
            content: "The design is beautiful and the functionality is perfect. Our conversion rates increased by 40%!",
            rating: 5,
            image: "/api/placeholder/80/80"
        }
    ];

    const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];
    
    const filteredPortfolio = activeFilter === 'All' 
        ? portfolio 
        : portfolio.filter(item => item.category === activeFilter);

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
                            Alex Morgan
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
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
                                <Download className="w-4 h-4" />
                                Resume
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
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
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
                                Download Resume
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.p
                                className="text-purple-600 font-semibold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Hello, I'm
                            </motion.p>

                            <motion.h1
                                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Alex Morgan
                            </motion.h1>

                            <motion.h2
                                className="text-2xl md:text-3xl text-gray-600 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Full-Stack Developer & 
                                <span className="text-purple-600"> UI/UX Designer</span>
                            </motion.h2>

                            <motion.p
                                className="text-lg text-gray-600 mb-8 max-w-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                I create digital experiences that combine beautiful design with robust functionality. 
                                Specializing in modern web technologies and user-centered design.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <motion.button
                                    className="px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-xl hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View My Work
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                <motion.button
                                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get In Touch
                                    <Mail className="w-5 h-5" />
                                </motion.button>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                className="flex items-center gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                {[
                                    { icon: Github, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Twitter, href: "#" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-purple-600"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <div className="relative w-full max-w-lg mx-auto">
                                {/* Background Elements */}
                                <motion.div
                                    className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Main Image Container */}
                                <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
                                    <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
                                        <div className="text-6xl">👨‍💻</div>
                                    </div>
                                    
                                    {/* Floating Elements */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-xl shadow-lg"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Code className="w-6 h-6" />
                                    </motion.div>
                                    
                                    <motion.div
                                        className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    >
                                        <Palette className="w-6 h-6" />
                                    </motion.div>
                                </div>
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
                            About Me
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Passionate about creating digital experiences that make a difference
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
                                Hi there! I'm Alex Morgan
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                With over 5 years of experience in web development and design, I've had the privilege 
                                of working with startups, agencies, and Fortune 500 companies to bring their digital 
                                visions to life.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                I believe that great design is not just about how something looks, but how it works. 
                                My approach combines user-centered design principles with cutting-edge technology to 
                                create solutions that are both beautiful and functional.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                                    <div className="text-gray-600">Projects Completed</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                                    <div className="text-gray-600">Years Experience</div>
                                </div>
                            </div>

                            <motion.button
                                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.button>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h4>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex items-center gap-4"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="text-purple-600">
                                            {skill.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-semibold text-gray-900">{skill.name}</span>
                                                <span className="text-sm text-gray-600">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <motion.div
                                                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
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
                            Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized services to help bring your digital vision to life
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                            >
                                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            My Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A showcase of my recent work and creative projects
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                                    activeFilter === category
                                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        layout
                    >
                        {filteredPortfolio.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group cursor-pointer"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Project Image */}
                                    <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 group-hover:from-purple-400/20 group-hover:to-blue-400/20 transition-all duration-300" />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                                                <motion.a
                                                    href={project.link}
                                                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-purple-600 hover:text-white transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.a>
                                                <motion.a
                                                    href={project.github}
                                                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-purple-600 hover:text-white transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Github className="w-5 h-5" />
                                                </motion.a>
                                            </div>
                                        </div>

                                        {/* Project placeholder */}
                                        <div className="absolute inset-4 bg-white/20 rounded-lg flex items-center justify-center">
                                            <div className="text-white/60 text-4xl font-bold">
                                                {project.title.split(' ').map(word => word[0]).join('')}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-purple-600 font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 mb-4 text-sm">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Clients Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Testimonials from satisfied clients and collaborators
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
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
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
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ready to bring your ideas to life? Let's start a conversation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Type
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all">
                                        <option>Web Development</option>
                                        <option>Mobile Development</option>
                                        <option>UI/UX Design</option>
                                        <option>Consultation</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
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
                                    I'm always excited to work on new projects and collaborate with amazing people. 
                                    Let's discuss how we can bring your vision to life.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-center gap-4 p-6 bg-purple-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">alex.morgan@email.com</p>
                                        <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-4 p-6 bg-blue-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-sm text-gray-500">Available Mon-Fri 9AM-6PM EST</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-4 p-6 bg-green-50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                                        <p className="text-gray-600">San Francisco, CA</p>
                                        <p className="text-sm text-gray-500">Open to remote work worldwide</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Github, href: "#", color: "hover:bg-gray-600" },
                                        { icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                                        { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-all ${social.color} hover:text-white`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Alex Morgan
                        </div>
                        <p className="text-gray-400 mb-6">
                            Full-Stack Developer & UI/UX Designer
                        </p>
                        <div className="flex justify-center gap-6 mb-8">
                            {[
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Mail, href: "#" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm">
                            &copy; 2025 Alex Morgan. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioLandingPage;