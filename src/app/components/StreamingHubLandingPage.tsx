'use client';

import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    OrbitControls,
    Box,
    Sphere,
    Text,
    MeshDistortMaterial,
    Float,
    Environment,
    Stars,
    Icosahedron,
    Torus,
    RoundedBox
} from '@react-three/drei';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import {
    Play,
    Users,
    Zap,
    Globe,
    ChevronRight,
    Video,
    Headphones,
    Tv,
    Smartphone,
    Star,
    Shield,
    Clock,
    MessageCircle,
    Share2,
    Settings,
    Award,
    TrendingUp,
    Monitor,
    Gamepad2,
    Rocket,
    CheckCircle
} from 'lucide-react';
import * as THREE from 'three';

// Enhanced 3D Floating Elements with Advanced Animations
function FloatingElements() {
    const meshRef = useRef<THREE.Group>(null);
    const icosahedronRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
            meshRef.current.rotation.y = time * 0.1;
            meshRef.current.position.y = Math.sin(time * 0.3) * 0.5;
        }

        if (icosahedronRef.current) {
            icosahedronRef.current.rotation.x = time * 0.4;
            icosahedronRef.current.rotation.z = time * 0.2;
        }

        if (torusRef.current) {
            torusRef.current.rotation.y = time * 0.6;
            torusRef.current.position.x = Math.sin(time * 0.4) * 1.5;
        }
    });

    return (
        <group ref={meshRef}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[0.6, 32, 32]} position={[-3, 1, 0]}>
                    <MeshDistortMaterial
                        color="#6366f1"
                        wireframe
                        distort={0.3}
                        speed={2}
                    />
                </Sphere>
            </Float>

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                <RoundedBox args={[1, 1, 1]} radius={0.1} position={[3, -1, 0]}>
                    <MeshDistortMaterial
                        color="#ec4899"
                        distort={0.2}
                        speed={1.5}
                    />
                </RoundedBox>
            </Float>

            <Float speed={1.8} rotationIntensity={2} floatIntensity={1}>
                <Icosahedron ref={icosahedronRef} args={[0.8]} position={[0, 2.5, -2]}>
                    <meshStandardMaterial
                        color="#10b981"
                        wireframe
                        emissive="#10b981"
                        emissiveIntensity={0.2}
                    />
                </Icosahedron>
            </Float>

            <Float speed={0.8} rotationIntensity={1.5} floatIntensity={2.5}>
                <Torus ref={torusRef} args={[1, 0.3, 16, 100]} position={[-1, -2, 1]}>
                    <meshStandardMaterial
                        color="#f59e0b"
                        emissive="#f59e0b"
                        emissiveIntensity={0.1}
                    />
                </Torus>
            </Float>

            <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.8}>
                <Box args={[0.5, 2, 0.5]} position={[2, 0, 2]}>
                    <meshStandardMaterial
                        color="#8b5cf6"
                        transparent
                        opacity={0.8}
                    />
                </Box>
            </Float>
        </group>
    );
}

// Particle System Component (Fixed)
function ParticleSystem() {
    const points = useRef<THREE.Points>(null);
    const particleCount = 1000;

    const positions = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.x = state.clock.elapsedTime * 0.05;
            points.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.01} color="#6366f1" transparent opacity={0.6} />
        </points>
    );
}

// Interactive 3D Text Component
function Interactive3DText() {
    const textRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (textRef.current) {
            textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
            textRef.current.scale.setScalar(hovered ? 1.1 : 1);
        }
    });

    return (
        <Text
            ref={textRef}
            position={[0, 0, -3]}
            fontSize={0.5}
            color={hovered ? "#ec4899" : "#6366f1"}
            anchorX="center"
            anchorY="middle"
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            StreamHub
        </Text>
    );
}

// 3D Scene Component with Enhanced Effects
function Scene3D() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            className="w-full h-full"
            style={{ background: 'transparent' }}
        >
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
            <Environment preset="night" />
            <Suspense fallback={null}>
                <FloatingElements />
                <ParticleSystem />
                <Interactive3DText />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Suspense>
        </Canvas>
    );
}

// Advanced Feature Card with Micro-interactions
interface AdvancedFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    delay: number;
    gradient: string;
}

function AdvancedFeatureCard({ icon, title, description, features, delay, gradient }: AdvancedFeatureCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative group cursor-pointer transform-gpu perspective-1000`}
        >
            <motion.div
                animate={{
                    rotateY: isHovered ? 5 : 0,
                    z: isHovered ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`relative h-full bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden`}
            >
                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Icon with glow effect */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.2 : 1,
                        rotate: isHovered ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative mb-6"
                >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center text-white shadow-lg`}>
                        {icon}
                    </div>
                    {isHovered && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 0.3 }}
                            className="absolute inset-0 bg-white rounded-2xl blur-xl"
                        />
                    )}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">{description}</p>

                {/* Feature list */}
                <div className="space-y-2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                            <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Hover effects */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute bottom-4 right-4"
                        >
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <ChevronRight size={16} className="text-white" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

// Enhanced Stats Component with Counters
function EnhancedStatsSection() {
    const [counts, setCounts] = useState({ users: 0, creators: 0, uptime: 0, quality: 0 });
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true });

    const stats = [
        { number: 10000000, suffix: '+', label: 'Active Users', key: 'users' as keyof typeof counts },
        { number: 50000, suffix: '+', label: 'Content Creators', key: 'creators' as keyof typeof counts },
        { number: 99.9, suffix: '%', label: 'Uptime', key: 'uptime' as keyof typeof counts },
        { number: 4, suffix: 'K', label: 'Ultra HD Quality', key: 'quality' as keyof typeof counts }
    ];

    useEffect(() => {
        if (isInView) {
            stats.forEach((stat) => {
                let start = 0;
                const end = stat.number;
                const duration = 2000;
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        start = end;
                        clearInterval(timer);
                    }
                    setCounts(prev => ({
                        ...prev,
                        [stat.key]: start
                    }));
                }, 16);
            });
        }
    }, [isInView]);

    return (
        <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                    <motion.div
                        className="text-3xl md:text-4xl font-bold text-white mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                        {stat.key === 'uptime'
                            ? `${counts[stat.key].toFixed(1)}${stat.suffix}`
                            : `${Math.floor(counts[stat.key]).toLocaleString()}${stat.suffix}`
                        }
                    </motion.div>
                    <div className="text-gray-400">{stat.label}</div>
                </motion.div>
            ))}
        </motion.div>
    );
}

// Testimonials Component
function TestimonialsSection() {
    const testimonials = [
        {
            name: "Alex Chen",
            role: "Gaming Streamer",
            content: "StreamHub transformed my streaming experience. The ultra-low latency keeps my audience engaged like never before.",
            avatar: "AC",
            rating: 5
        },
        {
            name: "Sarah Williams",
            role: "Content Creator",
            content: "The analytics and community features are incredible. I've grown my audience by 300% in just 6 months.",
            avatar: "SW",
            rating: 5
        },
        {
            name: "Marcus Rodriguez",
            role: "Music Producer",
            content: "Crystal clear audio quality and seamless integration with my existing setup. Absolutely perfect!",
            avatar: "MR",
            rating: 5
        }
    ];

    return (
        <section className="mb-20 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    What Creators Are Saying
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Join thousands of satisfied creators who have revolutionized their streaming journey                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                {testimonial.avatar}
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                            </div>
                        </div>

                        <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-current" />
                            ))}
                        </div>

                        <p className="text-gray-200 leading-relaxed">{testimonial.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// Pricing Component
function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            price: isAnnual ? 8 : 10,
            description: "Perfect for new creators",
            features: [
                "HD Streaming (1080p)",
                "5 hours/month",
                "Basic Analytics",
                "Community Support",
                "Mobile Streaming"
            ],
            gradient: "from-blue-600/20 to-cyan-600/20",
            popular: false
        },
        {
            name: "Creator",
            price: isAnnual ? 24 : 30,
            description: "Most popular for growing creators",
            features: [
                "4K Ultra HD Streaming",
                "Unlimited Streaming",
                "Advanced Analytics",
                "Priority Support",
                "Custom Overlays",
                "Multi-platform Streaming",
                "Advanced Moderation"
            ],
            gradient: "from-purple-600/20 to-pink-600/20",
            popular: true
        },
        {
            name: "Pro",
            price: isAnnual ? 48 : 60,
            description: "For professional streamers",
            features: [
                "Everything in Creator",
                "White-label Solution",
                "API Access",
                "Dedicated Account Manager",
                "Custom Integrations",
                "99.99% SLA Guarantee",
                "Advanced Security"
            ],
            gradient: "from-orange-600/20 to-red-600/20",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="mb-20 px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Choose Your Plan
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Start free and scale as you grow. No hidden fees, cancel anytime.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4 mb-12">
                    <span className={`${!isAnnual ? 'text-white' : 'text-gray-400'} transition-colors`}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="relative w-14 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300"
                    >
                        <motion.div
                            animate={{ x: isAnnual ? 24 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg"
                        />
                    </button>
                    <span className={`${isAnnual ? 'text-white' : 'text-gray-400'} transition-colors`}>
                        Annual
                    </span>
                    {isAnnual && (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                            Save 20%
                        </span>
                    )}
                </div>
            </motion.div>            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-xl rounded-3xl p-8 border ${plan.popular ? 'border-purple-500/50' : 'border-white/20'
                            } hover:border-white/40 transition-all duration-300 group ${plan.popular ? 'transform scale-105' : ''
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-gray-300 mb-6">{plan.description}</p>
                            <div className="mb-6">
                                <span className="text-5xl font-bold text-white">${plan.price}</span>
                                <span className="text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-3">
                                    <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                                    <span className="text-gray-200">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className={`block w-full py-4 rounded-full font-semibold text-center transition-all duration-300 ${plan.popular
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                                : 'border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10'
                                }`}
                        >
                            Contact
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// Animated Background Elements Component (Hydration Safe)
function AnimatedBackgroundElements() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Pre-defined static values to avoid hydration mismatch
    const particles = useMemo(() => {
        const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'];
        return Array.from({ length: 20 }, (_, i) => {
            // Use index-based deterministic values instead of Math.random()
            const seed = i * 123.456; // Simple seed based on index
            return {
                id: i,
                width: (((seed * 9301 + 49297) % 233280) / 233280) * 4 + 1,
                height: (((seed * 9301 + 49297) % 233280) / 233280) * 4 + 1,
                color: colors[i % colors.length],
                left: (((seed * 1664525 + 1013904223) % 4294967296) / 4294967296) * 100,
                top: (((seed * 22695477 + 1) % 4294967296) / 4294967296) * 100,
                duration: (((seed * 16807) % 2147483647) / 2147483647) * 3 + 2,
                delay: (((seed * 48271) % 2147483647) / 2147483647) * 2,
            };
        });
    }, []);

    if (!isClient) {
        return null; // Don't render on server to avoid hydration mismatch
    }

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: `${particle.width}px`,
                        height: `${particle.height}px`,
                        backgroundColor: particle.color,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
}

// Community Section Component
function CommunitySection() {
    const communityFeatures = [
        {
            icon: <MessageCircle size={24} />,
            title: "Live Chat & Interaction",
            description: "Real-time chat with advanced moderation tools and community engagement features."
        },
        {
            icon: <Users size={24} />,
            title: "Creator Collaboration",
            description: "Connect with other creators, host joint streams, and build lasting partnerships."
        },
        {
            icon: <Award size={24} />,
            title: "Community Rewards",
            description: "Reward your most loyal viewers with exclusive perks, badges, and special access."
        },
        {
            icon: <Share2 size={24} />,
            title: "Social Integration",
            description: "Seamlessly share content across all major social media platforms."
        }
    ];

    return (
        <section id="community" className="py-20 px-4 md:px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Connect with millions of creators and viewers in our thriving ecosystem
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {communityFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-sm md:text-base text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Community Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20"
                >                    {[
                    { number: "500K+", label: "Discord Members" },
                    { number: "2M+", label: "Forum Posts" },
                    { number: "50K+", label: "Live Events" },
                    { number: "24/7", label: "Community Support" }
                ].map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                    </div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}

// Support Section Component
function SupportSection() {
    const supportOptions = [
        {
            icon: <MessageCircle size={32} />,
            title: "24/7 Live Chat",
            description: "Get instant help from our support team anytime, anywhere.",
            action: "Start Chat"
        },
        {
            icon: <Video size={32} />,
            title: "Video Tutorials",
            description: "Learn with our comprehensive video guide library.",
            action: "Watch Now"
        },
        {
            icon: <Users size={32} />,
            title: "Community Forums",
            description: "Connect with other users and share knowledge.",
            action: "Join Forums"
        },
        {
            icon: <Settings size={32} />,
            title: "Technical Support",
            description: "Expert technical assistance for complex issues.",
            action: "Get Help"
        }
    ];

    return (
        <section id="support" className="py-20 px-4 md:px-6 bg-gradient-to-br from-slate-800/50 to-purple-800/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        We're Here to Help
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Get the support you need, when you need it. Our team is dedicated to your success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {supportOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center group cursor-pointer"
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                {option.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{option.title}</h3>
                            <p className="text-sm md:text-base text-gray-300 mb-6">{option.description}</p>
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                                {option.action}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">                        {[
                        { q: "How do I start streaming?", a: "Simply sign up, verify your account, and click 'Start Streaming' to begin broadcasting." },
                        { q: "What equipment do I need?", a: "You can start with just a webcam and microphone. We support all major streaming equipment." },
                        { q: "Is there a free trial?", a: "Yes! We offer a 14-day free trial with full access to all features." },
                        { q: "Can I monetize my streams?", a: "Absolutely! We offer multiple monetization options including subscriptions, donations, and ads." }
                    ].map((faq, index) => (
                        <div key={index} className="space-y-2">
                            <h4 className="text-lg font-semibold text-white">{faq.q}</h4>
                            <p className="text-gray-300 text-sm md:text-base">{faq.a}</p>
                        </div>
                    ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Contact Section Component
function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Get Started Today
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your streaming experience? Contact us to learn more or start your free trial.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors"
                                    placeholder="Your company"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 text-sm">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your streaming needs..."
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
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
                        className="space-y-8"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Chat with us</h4>
                                        <p className="text-gray-300 text-sm">Available 24/7</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Visit our office</h4>
                                        <p className="text-gray-300 text-sm">San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Business hours</h4>
                                        <p className="text-gray-300 text-sm">Mon-Fri 9am-6pm PST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Start Options */}
                        <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-4">Quick Start Options</h3>
                            <div className="space-y-4">
                                <motion.button
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start Free Trial
                                </motion.button>
                                <motion.button
                                    className="w-full border-2 border-white/30 text-white py-3 rounded-xl font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Schedule Demo
                                </motion.button>
                                <motion.button
                                    className="w-full border-2 border-white/30 text-white py-3 rounded-xl font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Documentation
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Footer Component
function FooterSection() {
    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'API', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'Status', href: '#' }
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Investors', href: '#' }
        ],
        support: [
            { name: 'Help Center', href: '#support' },
            { name: 'Community', href: '#community' },
            { name: 'Contact', href: '#contact' },
            { name: 'Live Chat', href: '#' },
            { name: 'System Status', href: '#' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'GDPR', href: '#' },
            { name: 'Security', href: '#' }
        ]
    };

    const socialLinks = [
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            )
        },
        {
            name: 'Discord',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900/90 to-purple-900/80 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Tv className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold text-white">StreamHub</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed max-w-md">
                                The ultimate streaming platform for creators and viewers. Stream without limits with cutting-edge technology and unparalleled community features.
                            </p>

                            {/* Newsletter Signup */}
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold">Stay Updated</h4>
                                <div className="flex space-x-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors"
                                    />
                                    <motion.button
                                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Sections */}
                    {[
                        { title: 'Product', links: footerLinks.product },
                        { title: 'Company', links: footerLinks.company },
                        { title: 'Support', links: footerLinks.support },
                        { title: 'Legal', links: footerLinks.legal }
                    ].map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h4 className="text-white font-semibold text-lg">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-12"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm"
                    >
                        © 2024 StreamHub. All rights reserved. | Made with ❤️ for creators worldwide.
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex space-x-4"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-6 text-sm text-gray-400"
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>All systems operational</span>
                        </div>
                        <div className="hidden md:block">
                            <span>🌍 Available in 50+ countries</span>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 pt-8 border-t border-white/5"
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4" />
                            <span className="text-xs">SOC 2 Compliant</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-xs">GDPR Ready</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span className="text-xs">99.9% Uptime SLA</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4" />
                            <span className="text-xs">Industry Leading</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
        </footer>
    );
}

// Main Component with Comprehensive Features
export default function StreamingHubLandingPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    const advancedFeatures = [
        {
            icon: <Video size={32} />,
            title: 'Ultra HD Streaming',
            description: 'Experience crystal clear 4K streaming with zero buffering and adaptive quality that adjusts to network conditions.',
            features: [
                'Adaptive bitrate streaming',
                '4K 60FPS support',
                'Real-time quality adjustment',
                'Multi-resolution output'
            ],
            gradient: 'from-purple-600/20 to-blue-600/20',
            delay: 0.1
        },
        {
            icon: <Users size={32} />,
            title: 'Community Driven',
            description: 'Build and engage with your community through advanced interaction tools and social features.',
            features: [
                'Live chat moderation',
                'Community polls & Q&A',
                'Subscriber perks',
                'Social media integration'
            ],
            gradient: 'from-pink-600/20 to-purple-600/20',
            delay: 0.2
        },
        {
            icon: <Zap size={32} />,
            title: 'Lightning Fast',
            description: 'Sub-second latency ensures real-time interaction with your audience worldwide.',
            features: [
                'Ultra-low latency mode',
                'Edge server optimization',
                'Real-time synchronization',
                'Instant chat delivery'
            ],
            gradient: 'from-yellow-600/20 to-orange-600/20',
            delay: 0.3
        },
        {
            icon: <Globe size={32} />,
            title: 'Global Reach',
            description: 'Stream to audiences worldwide with our global CDN infrastructure and localization.',
            features: [
                'Global CDN network',
                'Multi-language support',
                'Regional optimization',
                '99.9% uptime guarantee'
            ],
            gradient: 'from-green-600/20 to-teal-600/20',
            delay: 0.4
        },
        {
            icon: <Shield size={32} />,
            title: 'Enterprise Security',
            description: 'Bank-grade security with end-to-end encryption and advanced privacy controls.',
            features: [
                'End-to-end encryption',
                'GDPR compliance',
                'Advanced authentication',
                'Privacy controls'
            ],
            gradient: 'from-indigo-600/20 to-purple-600/20',
            delay: 0.5
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Advanced Analytics',
            description: 'Comprehensive insights and analytics to grow your audience and optimize content.',
            features: [
                'Real-time viewer metrics',
                'Engagement analytics',
                'Revenue tracking',
                'Performance insights'
            ],
            gradient: 'from-red-600/20 to-pink-600/20',
            delay: 0.6
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            {/* Background 3D Scene with Parallax */}
            <motion.div
                className="fixed inset-0 opacity-20"
                style={{ scale: scaleProgress, opacity: opacityProgress }}
            >
                <Scene3D />
            </motion.div>

            {/* Enhanced Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex justify-between items-center p-6 md:p-8 backdrop-blur-sm bg-black/10"
            >
                <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Tv className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold">StreamHub</span>
                </motion.div>
                <div className="hidden md:flex space-x-8">
                    {['Features', 'Pricing', 'Community', 'Support'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-indigo-400 transition-colors cursor-pointer"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <motion.a
                    href="#contact"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.a>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/20"
                    >
                        <div className="px-6 py-4">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <Tv className="w-5 h-5" />
                                    </div>
                                    <span className="text-xl font-bold">StreamHub</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-4">
                                {['Features', 'Pricing', 'Community', 'Support', 'Contact'].map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block py-3 px-4 text-lg text-white hover:text-indigo-400 transition-colors rounded-lg hover:bg-white/10"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    className="block mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-full text-center font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Started
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section with Enhanced Animations */}
            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <motion.h1
                            className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                        >
                            Stream Without
                            <br />
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
                                Limits
                            </span>
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                    >
                        The ultimate streaming platform for creators and viewers.
                        Experience next-generation broadcasting with cutting-edge technology,
                        advanced analytics, and unparalleled community features.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >                        <motion.a
                        href="#contact"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="group bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                            <motion.div
                                animate={{ rotate: isPlaying ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Play className="w-5 h-5" />
                            </motion.div>
                            <span>Start Streaming</span>
                        </motion.a>

                        <motion.button
                            className="px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 flex items-center space-x-2 group backdrop-blur-sm"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Watch Demo</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Enhanced Stats Section */}
                <EnhancedStatsSection />                {/* Advanced Features Grid */}
                <section id="features" className="mb-32 px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Powerful Features
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            Everything you need to create, stream, and grow your audience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
                        {advancedFeatures.map((feature, index) => (
                            <AdvancedFeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                features={feature.features}
                                delay={feature.delay}
                                gradient={feature.gradient}
                            />
                        ))}
                    </div>
                </section>{/* Testimonials Section */}
                <TestimonialsSection />

                {/* Pricing Section */}
                <PricingSection />

                {/* Community Section */}
                <CommunitySection />

                {/* Support Section */}
                <SupportSection />

                {/* Platform Icons with Enhanced Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h3 className="text-3xl font-bold text-white mb-8">Stream Everywhere</h3>
                    <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
                        Reach your audience across all devices and platforms with our universal streaming solution
                    </p>                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {[
                            { icon: <Tv className="w-8 h-8" />, label: "Smart TV" },
                            { icon: <Smartphone className="w-8 h-8" />, label: "Mobile" },
                            { icon: <Monitor className="w-8 h-8" />, label: "Desktop" },
                            { icon: <Headphones className="w-8 h-8" />, label: "Audio" },
                            { icon: <Globe className="w-8 h-8" />, label: "Web" },
                            { icon: <Gamepad2 className="w-8 h-8" />, label: "Gaming" }
                        ].map((platform, index) => (
                            <motion.div
                                key={platform.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="flex flex-col items-center space-y-2 group cursor-pointer"
                            >
                                <div className="p-6 bg-white/10 rounded-2xl border border-white/20 group-hover:border-indigo-400/60 transition-all duration-300 backdrop-blur-sm">
                                    {platform.icon}
                                </div>
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                    {platform.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Section */}
                <ContactSection />

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 animate-pulse"></div>
                    </div>

                    <div className="relative z-10">
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold mb-6"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            Ready to Transform Your Streaming?
                        </motion.h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join over 10 million creators who have already revolutionized their streaming experience.
                            Start your journey today with our free trial - no credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)",
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="flex items-center space-x-2">
                                    <Rocket size={20} />
                                    <span>Start Free Trial</span>
                                </span>
                            </motion.button>
                            <motion.button
                                className="px-10 py-4 rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Sales
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>            
            {/* Enhanced Animated Background Elements */}
            <AnimatedBackgroundElements />

            {/* Floating Action Button */}
            <motion.div
                className="fixed bottom-8 right-8 z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                <motion.button
                    className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <ChevronRight className="w-6 h-6 text-white transform -rotate-90" />
                </motion.button>
            </motion.div>

            {/* Footer Section */}
            <FooterSection />
        </div>
    );
}