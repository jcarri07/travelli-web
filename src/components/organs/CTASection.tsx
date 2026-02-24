import { motion } from "framer-motion";
import { Smartphone, Apple, ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "../atoms/ScrollReveal";
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import { appLinks } from "../particles/DataLists";

const CTASection = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden" style={{ background: "#000" }}>
            {/* Background gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,149,0,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 30% 40% at 80% 20%, rgba(255,107,0,0.06) 0%, transparent 60%)
          `,
                }}
            />

            {/* Animated grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,107,0,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,107,0,0.06) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center gap-8">
                {/* Badge */}
                <ScrollReveal>
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.3)" }}
                    >
                        <Zap size={14} fill="#FF9500" color="#FF9500" />
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#FF9500" }}>
                            Disponible en iOS & Android
                        </span>
                    </div>
                </ScrollReveal>

                {/* Headline */}
                <ScrollReveal delay={0.1}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-inter leading-[1.05] tracking-tight">
                        Empieza tu próxima
                        <span className="block text-gradient-orange">aventura hoy</span>
                    </h2>
                </ScrollReveal>

                {/* Subtitle */}
                <ScrollReveal delay={0.2}>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        Descarga Travelli gratis y accede a miles de destinos, ofertas exclusivas y un asistente de viaje inteligente en tu bolsillo.
                    </p>
                </ScrollReveal>

                {/* Buttons */}
                <ScrollReveal delay={0.3} className="flex flex-wrap justify-center gap-4">
                    <a
                        href={appLinks.playStore}
                        className="btn-orange px-8 py-4 rounded-2xl text-white font-semibold flex items-center gap-3 text-base"
                    >
                        <span>
                            <Smartphone size={20} />
                        </span>
                        <span>Google Play</span>
                    </a>
                    <a
                        href={appLinks.appStore}
                        className="px-8 py-4 rounded-2xl text-white font-semibold flex items-center gap-3 text-base border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                        <Apple size={20} />
                        App Store
                    </a>
                </ScrollReveal>

                {/* App badges */}
                <ScrollReveal delay={0.4} className="flex items-center gap-4">
                    <a href={appLinks.playStore}>
                        <img src={GooglePlay} alt="Google Play" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                    <a href={appLinks.appStore}>
                        <img src={AppStore} alt="App Store" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                </ScrollReveal>

                {/* Mini benefit list */}
                <ScrollReveal delay={0.5}>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        {[
                            "✅ Gratis para descargar",
                            "✅ Sin tarjeta de crédito",
                            "✅ Cancela cuando quieras",
                        ].map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Learn more link */}
                <ScrollReveal delay={0.55}>
                    <a
                        href="/plans"
                        className="flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors group"
                    >
                        Ver todos los planes
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </ScrollReveal>
            </div>

            {/* Floating orbs */}
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-10 top-10 w-24 h-24 rounded-full pointer-events-none opacity-20"
                style={{ background: "radial-gradient(circle, #FF6B00, transparent)", filter: "blur(15px)" }}
            />
            <motion.div
                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-16 bottom-10 w-32 h-32 rounded-full pointer-events-none opacity-15"
                style={{ background: "radial-gradient(circle, #FF9500, transparent)", filter: "blur(20px)" }}
            />
        </section>
    );
};

export default CTASection;
