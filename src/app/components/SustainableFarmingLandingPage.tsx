'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    Leaf,
    Sprout,
    Sun,
    Droplets,
    Wind,
    ArrowRight,
    Phone,
    Mail,
    Users,
    Award,
    TrendingUp,
    Zap,
    Truck,
    Calculator,
    BookOpen,
    Shield,
    BarChart,
    Settings,
    Globe,
    Menu,
    X
} from 'lucide-react';
import * as THREE from 'three';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Stat {
    number: string;
    label: string;
    icon: React.ReactNode;
}

const SustainableFarmingLandingPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const heroRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const processRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const isHeroInView = useInView(heroRef, { once: true });
    const isServicesInView = useInView(servicesRef, { once: true });
    const isStatsInView = useInView(statsRef, { once: true });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);    // Scroll to section function
    const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
        elementRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setIsMenuOpen(false);
    };    // Three.js scene setup
    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        // Add directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

        // Create farm ground
        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Create crop rows
        const crops: THREE.Group[] = [];
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 8; col++) {
                const cropGroup = new THREE.Group();
                
                // Plant stem
                const stemGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3);
                const stemMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
                const stem = new THREE.Mesh(stemGeometry, stemMaterial);
                stem.position.y = 0.15;
                stem.castShadow = true;
                cropGroup.add(stem);

                // Plant leaves
                for (let i = 0; i < 3; i++) {
                    const leafGeometry = new THREE.SphereGeometry(0.08, 8, 6);
                    const leafMaterial = new THREE.MeshLambertMaterial({ color: 0x32CD32 });
                    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
                    leaf.position.set(
                        (Math.random() - 0.5) * 0.2,
                        0.25 + i * 0.1,
                        (Math.random() - 0.5) * 0.2
                    );
                    leaf.scale.set(1, 0.5, 1);
                    leaf.castShadow = true;
                    cropGroup.add(leaf);
                }

                cropGroup.position.set(
                    (col - 4) * 1.5,
                    -1.85,
                    (row - 2) * 2
                );
                crops.push(cropGroup);
                scene.add(cropGroup);
            }
        }

        // Create a simple windmill
        const windmillGroup = new THREE.Group();
        
        // Windmill tower
        const towerGeometry = new THREE.CylinderGeometry(0.1, 0.15, 2);
        const towerMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
        const tower = new THREE.Mesh(towerGeometry, towerMaterial);
        tower.position.y = 0;
        tower.castShadow = true;
        windmillGroup.add(tower);

        // Windmill blades
        const bladeGroup = new THREE.Group();
        for (let i = 0; i < 3; i++) {
            const bladeGeometry = new THREE.BoxGeometry(0.05, 1.5, 0.02);
            const bladeMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
            const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
            blade.position.y = 0.75;
            blade.rotation.z = (i * Math.PI * 2) / 3;
            blade.castShadow = true;
            bladeGroup.add(blade);
        }
        bladeGroup.position.y = 1;
        windmillGroup.add(bladeGroup);

        windmillGroup.position.set(8, -1, -5);
        windmillGroup.scale.set(0.8, 0.8, 0.8);
        scene.add(windmillGroup);

        // Create solar panels
        const solarGroup = new THREE.Group();
        for (let i = 0; i < 3; i++) {
            const panelGeometry = new THREE.BoxGeometry(1, 0.05, 0.7);
            const panelMaterial = new THREE.MeshLambertMaterial({ color: 0x1E3A8A });
            const panel = new THREE.Mesh(panelGeometry, panelMaterial);
            panel.position.set(i * 1.2, 0.5, 0);
            panel.rotation.x = -Math.PI / 6;
            panel.castShadow = true;
            solarGroup.add(panel);

            // Panel support
            const supportGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5);
            const supportMaterial = new THREE.MeshLambertMaterial({ color: 0x666666 });
            const support = new THREE.Mesh(supportGeometry, supportMaterial);
            support.position.set(i * 1.2, 0.25, 0.2);
            support.castShadow = true;
            solarGroup.add(support);
        }
        solarGroup.position.set(-6, -1.75, 3);
        scene.add(solarGroup);

        // Create floating particles representing seeds/leaves
        const particles: THREE.Mesh[] = [];
        for (let i = 0; i < 30; i++) {
            const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
            const particleMaterial = new THREE.MeshLambertMaterial({ 
                color: Math.random() > 0.5 ? 0x4ade80 : 0x22c55e 
            });
            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(
                (Math.random() - 0.5) * 15,
                Math.random() * 5 + 2,
                (Math.random() - 0.5) * 15
            );
            particles.push(particle);
            scene.add(particle);
        }

        // Create clouds
        const clouds: THREE.Group[] = [];
        for (let i = 0; i < 5; i++) {
            const cloudGroup = new THREE.Group();
            for (let j = 0; j < 5; j++) {
                const cloudGeometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.2, 8, 6);
                const cloudMaterial = new THREE.MeshLambertMaterial({ 
                    color: 0xFFFFFF,
                    transparent: true,
                    opacity: 0.8
                });
                const cloudPart = new THREE.Mesh(cloudGeometry, cloudMaterial);
                cloudPart.position.set(
                    (j - 2) * 0.4 + (Math.random() - 0.5) * 0.3,
                    (Math.random() - 0.5) * 0.2,
                    (Math.random() - 0.5) * 0.3
                );
                cloudGroup.add(cloudPart);
            }
            cloudGroup.position.set(
                (Math.random() - 0.5) * 20,
                5 + Math.random() * 3,
                (Math.random() - 0.5) * 20
            );
            clouds.push(cloudGroup);
            scene.add(cloudGroup);
        }

        camera.position.set(0, 3, 12);
        camera.lookAt(0, 0, 0);

        let windmillRotation = 0;

        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate windmill blades
            windmillRotation += 0.02;
            bladeGroup.rotation.z = windmillRotation;

            // Animate particles
            particles.forEach((particle, index) => {
                particle.rotation.x += 0.01;
                particle.rotation.y += 0.01;
                particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
                particle.position.x += Math.cos(Date.now() * 0.0005 + index) * 0.001;
            });

            // Animate crops swaying
            crops.forEach((crop, index) => {
                crop.rotation.z = Math.sin(Date.now() * 0.001 + index * 0.1) * 0.05;
            });

            // Move clouds slowly
            clouds.forEach((cloud, index) => {
                cloud.position.x += 0.005;
                if (cloud.position.x > 15) {
                    cloud.position.x = -15;
                }
            });

            // Gentle camera movement
            camera.position.x = Math.sin(Date.now() * 0.0003) * 2;
            camera.position.y = 3 + Math.sin(Date.now() * 0.0002) * 0.5;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);const services: Service[] = [
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Organic Farming Consultation",
            description: "Expert guidance on transitioning to organic farming practices that improve soil health and crop yields while maintaining profitability."
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Smart Irrigation Systems",
            description: "Advanced water management solutions including drip irrigation, soil moisture sensors, and automated watering systems."
        },
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Renewable Energy Solutions",
            description: "Solar panels, wind turbines, and biogas systems to reduce energy costs and carbon footprint on your farm."
        },
        {
            icon: <Sprout className="w-8 h-8" />,
            title: "Crop Rotation & Planning",
            description: "Strategic crop rotation plans, companion planting, and seasonal planning to maximize soil health and yields."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Farm Management Training",
            description: "Comprehensive training programs for farmers and workers on sustainable practices and modern techniques."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Precision Agriculture",
            description: "GPS-guided farming, drone monitoring, soil testing, and data analytics to optimize farm operations."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Organic Certification",
            description: "Complete support for organic certification process, documentation, and compliance with organic standards."
        },
        {
            icon: <Wind className="w-8 h-8" />,
            title: "Climate-Smart Farming",
            description: "Weather monitoring systems, climate adaptation strategies, and resilient farming practices for changing conditions."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Energy Efficiency Audits",
            description: "Assessments and recommendations to improve energy efficiency in farming operations, reducing costs and environmental impact."
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Sustainable Logistics Solutions",
            description: "Eco-friendly transportation and logistics planning for efficient and sustainable distribution of farm products."
        },
        {
            icon: <Calculator className="w-8 h-8" />,
            title: "Cost-Benefit Analysis",
            description: "Detailed analysis of the costs and benefits of sustainable practices to help farmers make informed decisions."
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Sustainable Farming Resources",
            description: "Access to a library of resources, guides, and tools for implementing sustainable farming practices."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Risk Management Consulting",
            description: "Strategies and solutions for managing risks associated with climate change, market fluctuations, and other challenges."
        },
        {
            icon: <BarChart className="w-8 h-8" />,
            title: "Market Analysis & Insights",
            description: "Research and analysis of market trends, consumer preferences, and competitive landscape to identify opportunities."
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Custom Farm Solutions",
            description: "Tailored solutions and consulting services to address unique challenges and goals of each farm."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "International Certification Assistance",
            description: "Guidance and support for obtaining international organic and sustainability certifications."
        }
    ];

    const stats: Stat[] = [
        {
            number: "500+",
            label: "Farms Transformed",
            icon: <Users className="w-6 h-6" />
        },
        {
            number: "30%",
            label: "Yield Increase",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            number: "15+",
            label: "Years Experience",
            icon: <Award className="w-6 h-6" />
        }
    ];

    return (<div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
        {/* Three.js Canvas Background */}
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Leaf className="w-8 h-8 text-green-600" />
                        <span className="text-xl font-bold text-gray-800">SustainableFarm</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection(heroRef)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection(servicesRef)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection(featuresRef)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                        >
                            Benefits
                        </button>
                        <button
                            onClick={() => scrollToSection(processRef)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                        >
                            Process
                        </button>
                        <button
                            onClick={() => scrollToSection(testimonialsRef)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                        >
                            Testimonials
                        </button>
                        <button
                            onClick={() => scrollToSection(contactRef)}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-green-600 transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t border-green-100 py-4"
                    >
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection(heroRef)}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left px-4 py-2"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection(servicesRef)}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left px-4 py-2"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection(featuresRef)}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left px-4 py-2"
                            >
                                Benefits
                            </button>
                            <button
                                onClick={() => scrollToSection(processRef)}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left px-4 py-2"
                            >
                                Process
                            </button>
                            <button
                                onClick={() => scrollToSection(testimonialsRef)}
                                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium text-left px-4 py-2"
                            >
                                Testimonials
                            </button>
                            <button
                                onClick={() => scrollToSection(contactRef)}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 mx-4"
                            >
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>

        {/* Hero Section */}
        <motion.section
            ref={heroRef}
            style={{ y, opacity }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                        <Leaf className="w-4 h-4" />
                        <span className="text-sm font-medium">Sustainable Agriculture Solutions</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                        Sustainable
                        <span className="text-green-600 block">Farming</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
                        Transform your agricultural practices with eco-friendly farming solutions that protect the environment while maximizing productivity and profitability.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                        Get Consultation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </motion.section>

        {/* Services Section */}
        <section ref={servicesRef} className="relative z-10 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive eco-friendly farming solutions tailored to your agricultural needs
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-green-600 mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="relative z-10 py-20 px-4 bg-green-600">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Impact
                    </h2>
                    <p className="text-xl text-green-100">
                        Making a difference in sustainable agriculture
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                        >
                            <div className="text-green-200 mb-3 flex justify-center">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.number}
                            </div>
                            <div className="text-green-100 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>            {/* Features Section */}
        <section ref={featuresRef} className="relative z-10 py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Why Choose Sustainable Farming?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the benefits of eco-friendly agricultural practices
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Leaf className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Environmental Protection</h3>
                        <p className="text-gray-600">
                            Reduce environmental impact through sustainable practices that preserve soil, water, and biodiversity for future generations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <TrendingUp className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Increased Profitability</h3>
                        <p className="text-gray-600">
                            Boost your farm's profitability with efficient resource management, reduced input costs, and premium pricing for organic products.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Long-term Sustainability</h3>
                        <p className="text-gray-600">
                            Build resilient farming systems that withstand climate challenges and ensure food security for the long term.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>            {/* Process Section */}
        <section ref={processRef} className="relative z-10 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Our Process
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A step-by-step approach to transforming your farm
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Assessment",
                            description: "Comprehensive evaluation of your current farming practices and land conditions"
                        },
                        {
                            step: "02",
                            title: "Planning",
                            description: "Customized sustainable farming plan tailored to your specific needs and goals"
                        },
                        {
                            step: "03",
                            title: "Implementation",
                            description: "Guided implementation of sustainable practices with ongoing support"
                        },
                        {
                            step: "04",
                            title: "Monitoring",
                            description: "Continuous monitoring and optimization to ensure maximum effectiveness"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>            {/* Contact Section */}
        <section ref={contactRef} className="relative z-10 py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Ready to Transform Your Farm?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Contact us today for a personalized consultation on sustainable farming practices
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-xl"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Get a Free Consultation</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            />
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                                <option>Select Service Interest</option>
                                <option>Organic Farming Consultation</option>
                                <option>Smart Irrigation Systems</option>
                                <option>Renewable Energy Solutions</option>
                                <option>Precision Agriculture</option>
                                <option>Other</option>
                            </select>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your farm and specific needs..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                            <p className="text-gray-600 mb-8">
                                Ready to start your sustainable farming journey? Our experts are here to help you every step of the way.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                                    <p className="text-gray-600">info@sustainablefarms.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Globe className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Visit Us</h4>
                                    <p className="text-gray-600">123 Farm Road, Green Valley, CA 90210</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl">
                            <h4 className="font-semibold text-gray-800 mb-3">Why Choose Us?</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-green-600" />
                                    15+ years of farming expertise
                                </li>
                                <li className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-green-600" />
                                    500+ successful farm transformations
                                </li>
                                <li className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                    Average 30% yield increase
                                </li>
                                <li className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-600" />
                                    Certified organic specialists
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="relative z-10 py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Success stories from farmers who transformed their operations
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Johnson",
                            farm: "Green Valley Organic Farm",
                            testimonial: "The sustainable farming consultation helped us increase our yields by 40% while reducing our environmental impact. Our farm has never been more profitable or sustainable.",
                            rating: 5
                        },
                        {
                            name: "Michael Chen",
                            farm: "Sunrise Agricultural Co.",
                            testimonial: "The precision agriculture solutions and smart irrigation systems have revolutionized how we manage our 500-acre farm. Water usage is down 30% and crop quality is exceptional.",
                            rating: 5
                        },
                        {
                            name: "Emily Rodriguez",
                            farm: "Eco Harvest Farms",
                            testimonial: "Thanks to their organic certification support and renewable energy solutions, we're now selling premium organic produce and have cut our energy costs in half.",
                            rating: 5
                        }
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Sun key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
                            <div>
                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                <p className="text-green-600 text-sm">{testimonial.farm}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-gray-800 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf className="w-8 h-8 text-green-500" />
                            <span className="text-xl font-bold">SustainableFarm</span>
                        </div>
                        <p className="text-gray-400">
                            Leading the future of sustainable agriculture with innovative eco-friendly farming solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Organic Farming</li>
                            <li>Smart Irrigation</li>
                            <li>Renewable Energy</li>
                            <li>Precision Agriculture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Farm Assessment</li>
                            <li>Training Programs</li>
                            <li>Certification Support</li>
                            <li>Market Analysis</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>+1 (555) 123-4567</p>
                            <p>info@sustainablefarms.com</p>
                            <p>123 Farm Road, Green Valley, CA 90210</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 SustainableFarm. All rights reserved. Transforming agriculture for a better tomorrow.</p>
                </div>
            </div>
        </footer>

        {/* Floating Action Button */}
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="fixed bottom-8 right-8 z-20"
        >
            <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110 group">
                <Phone className="w-6 h-6" />
                <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Call Now
                </span>
            </button>
        </motion.div>
    </div>
    );
};

export default SustainableFarmingLandingPage;