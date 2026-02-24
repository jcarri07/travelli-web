import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Smartphone, MapPin, Star, ChevronDown } from "lucide-react";
import { TRAVELER } from "../particles/DataLists";
import { appLinks } from "../particles/DataLists";
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import BannerTravelli from "../../assets/Banner.png";

interface HeroSectionProps {
    userType: number;
    setUserType: Dispatch<SetStateAction<number>>;
}


const HeroSection = ({ userType }: HeroSectionProps) => {
    const headline =
        userType === TRAVELER
            ? { normal: "Descubre el Mundo", accent: "Sin Límites" }
            : { normal: "Gestiona tu Agencia", accent: "Con Inteligencia" };

    const subtitle =
        userType === TRAVELER
            ? "Planifica viajes increíbles, reserva experiencias únicas y conecta con destinos soñados — todo desde una sola app."
            : "Administra reservas, clientes y destinos. Lleva tu agencia al siguiente nivel con herramientas digitales de primer nivel.";

    return (
        <section className="relative w-full min-h-screen overflow-hidden gradient-mesh flex items-center">
            {/* Glow orbs */}
            <div
                className="glow-orb w-[600px] h-[600px] -top-40 -left-20 opacity-30"
                style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)" }}
            />
            <div
                className="glow-orb w-[400px] h-[400px] bottom-10 right-10 opacity-20"
                style={{ background: "radial-gradient(circle, #FF9500 0%, transparent 70%)" }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* ── LEFT: Text ── */}
                <div className="flex flex-col gap-7">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 self-start"
                    >
                        <span
                            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                            style={{
                                background: "rgba(255,107,0,0.12)",
                                border: "1px solid rgba(255,107,0,0.3)",
                                color: "#FF9500",
                            }}
                        >
                            🌍 La App de Viajes #1
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white font-inter">
                            {headline.normal}{" "}
                            <span className="text-gradient-orange block">{headline.accent}</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed max-w-lg"
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={appLinks.playStore}
                            className="btn-orange px-8 py-4 rounded-2xl font-semibold text-white text-base flex items-center gap-2.5"
                        >
                            <span>Descargar Gratis</span>
                            <Smartphone size={18} />
                        </a>
                        <a
                            href="#features"
                            className="px-8 py-4 rounded-2xl font-semibold text-white text-base border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 flex items-center gap-2.5"
                        >
                            Ver Características
                            <ChevronDown size={18} />
                        </a>
                    </motion.div>

                    {/* App Store Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center gap-3 pt-1"
                    >
                        <a href={appLinks.playStore}>
                            <img src={GooglePlay} alt="Google Play" className="h-10 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                        <a href={appLinks.appStore}>
                            <img src={AppStore} alt="App Store" className="h-10 opacity-80 hover:opacity-100 transition-opacity" />
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-8 pt-2"
                    >
                        {[
                            { value: "50K+", label: "Viajeros" },
                            { value: "120+", label: "Destinos" },
                            { value: "4.9", label: "Calificación" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-2xl font-bold text-gradient-orange">{stat.value}</span>
                                <span className="text-xs text-gray-500 mt-0.5">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── RIGHT: Phone mockup ── */}
                <div className="relative flex justify-center items-end lg:items-center">
                    {/* Background glow behind phone */}
                    <div
                        className="absolute inset-0 rounded-full opacity-30 animate-pulse-glow"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(255,107,0,0.35) 0%, transparent 65%)",
                            filter: "blur(20px)",
                        }}
                    />

                    {/* Floating badge: stars */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }}
                        className="absolute top-8 -left-4 z-20 flex items-center gap-2 glass-card px-3 py-2.5 rounded-2xl"
                        style={{ border: "1px solid rgba(255,149,0,0.25)" }}
                    >
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} fill="#FF9500" color="#FF9500" />
                            ))}
                        </div>
                        <span className="text-xs text-white font-medium">4.9 / 5.0</span>
                    </motion.div>

                    {/* Floating badge: location */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
                        className="absolute bottom-16 -right-2 z-20 flex items-center gap-2 glass-card px-3 py-2.5 rounded-2xl"
                        style={{ border: "1px solid rgba(255,107,0,0.25)" }}
                    >
                        <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FF6B00,#FF9500)" }}>
                            <MapPin size={14} color="white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-white">Live Tracking</span>
                            <span className="text-[10px] text-gray-400">Bali, Indonesia</span>
                        </div>
                    </motion.div>

                    {/* Phone image */}
                    <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
                        className="relative z-10 phone-glow"
                    >
                        <img
                            src={BannerTravelli}
                            alt="Travelli App"
                            className="w-auto max-h-[70vh] lg:max-h-[75vh] object-contain drop-shadow-2xl"
                            style={{ filter: "drop-shadow(0 30px 60px rgba(255,107,0,0.2))" }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={16} className="text-orange-500" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;