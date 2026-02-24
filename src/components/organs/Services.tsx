import { MapPin, Plane, Shield, TrendingUp, Zap, Heart, Clock, Users } from "lucide-react";
import ScrollReveal from "../atoms/ScrollReveal";
import { motion } from "framer-motion";

const features = [
    {
        icon: MapPin,
        title: "Explora Destinos",
        description: "Descubre miles de destinos increíbles con recomendaciones personalizadas basadas en tus preferencias.",
        color: "#FF6B00",
    },
    {
        icon: Plane,
        title: "Reservas Sin Esfuerzo",
        description: "Vuelos, hoteles y actividades en un clic. Compara precios y encuentra las mejores ofertas al instante.",
        color: "#FF9500",
    },
    {
        icon: Shield,
        title: "Viaja Seguro",
        description: "Protección de viaje integrada, asistencia 24/7 y monitoreo de alertas de seguridad en tiempo real.",
        color: "#FFB84D",
    },
    {
        icon: TrendingUp,
        title: "Ahorra Inteligente",
        description: "Alertas de precio, comparadores y seguimiento de presupuesto para maximizar cada peso en tu viaje.",
        color: "#FF6B00",
    },
    {
        icon: Zap,
        title: "Súper Rápido",
        description: "Check-in exprés, boarding digital y notificaciones en tiempo real para viajes sin fricción.",
        color: "#FF9500",
    },
    {
        icon: Heart,
        title: "Experiencias Únicas",
        description: "Tours locales, gastronomía auténtica y actividades curadas por expertos locales en cada destino.",
        color: "#FFB84D",
    },
    {
        icon: Clock,
        title: "Itinerarios AI",
        description: "Planificación automática de rutas con inteligencia artificial adaptada a tu tiempo y estilo de viaje.",
        color: "#FF6B00",
    },
    {
        icon: Users,
        title: "Viaja en Grupo",
        description: "Coordina grupo, divide gastos y comparte itinerarios fácilmente con amigos y familia.",
        color: "#FF9500",
    },
];

const Services = () => {
    return (
        <section id="features" className="relative w-full py-28 bg-dark-surface overflow-hidden">
            {/* Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] opacity-15 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #FF6B00 0%, transparent 70%)", filter: "blur(40px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                {/* Header */}
                <ScrollReveal className="flex flex-col items-center text-center gap-4 mb-16">
                    <span
                        className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)", color: "#FF9500" }}
                    >
                        Por Qué Travelli
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white font-inter leading-tight">
                        Todo lo que necesitas
                        <br />
                        <span className="text-gradient-orange">en un solo lugar</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Diseñada para viajeros modernos que quieren más experiencias y menos complicaciones.
                    </p>
                </ScrollReveal>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <ScrollReveal
                                key={feature.title}
                                delay={index * 0.07}
                                direction="up"
                            >
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    transition={{ duration: 0.3 }}
                                    className="gradient-border p-6 rounded-2xl h-full flex flex-col gap-4 cursor-default"
                                    style={{ background: "rgba(255,255,255,0.025)" }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
                                    >
                                        <Icon size={22} style={{ color: feature.color }} />
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white font-semibold text-base">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                                    </div>

                                    {/* Bottom accent */}
                                    <div
                                        className="mt-auto h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
                                        style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                                    />
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;