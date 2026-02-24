import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../atoms/ScrollReveal";
import Slider from "react-slick";

const testimonials = [
    {
        name: "María González",
        location: "Caracas, Venezuela",
        rating: 5,
        text: "Travelli cambió completamente la forma en que planifico mis viajes. En minutos tenía todo organizado para mi viaje a Europa. ¡Increíblemente fácil e intuitivo!",
        avatar: "MG",
        avatarColor: "#FF6B00",
        trip: "Viajó a París",
    },
    {
        name: "Carlos Rodríguez",
        location: "Bogotá, Colombia",
        rating: 5,
        text: "La función de itinerario con IA es espectacular. Me recomendó lugares que nunca hubiera encontrado por mi cuenta. Mi viaje a Japón fue perfecto gracias a Travelli.",
        avatar: "CR",
        avatarColor: "#FF9500",
        trip: "Viajó a Tokio",
    },
    {
        name: "Valentina Torres",
        location: "Lima, Perú",
        rating: 5,
        text: "Como viajera frecuente, necesitaba una app que centralizara todo. Travelli lo tiene todo: vuelos, hoteles, actividades y alertas de precio. No viajo sin ella.",
        avatar: "VT",
        avatarColor: "#FFB84D",
        trip: "Viajó a Bali",
    },
    {
        name: "Andrés Martínez",
        location: "Buenos Aires, Argentina",
        rating: 5,
        text: "El seguimiento en tiempo real y las notificaciones me salvaron en dos ocasiones con vuelos con cambios de última hora. El soporte 24/7 es real y muy eficiente.",
        avatar: "AM",
        avatarColor: "#FF6B00",
        trip: "Viajó a Santorini",
    },
];

const Testimonials = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="relative w-full py-28 overflow-hidden" style={{ background: "#050505" }}>
            {/* Glow */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 65%)", filter: "blur(50px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                {/* Header */}
                <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="flex flex-col gap-4">
                        <span
                            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full self-start"
                            style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)", color: "#FF9500" }}
                        >
                            Testimonios
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-inter leading-tight">
                            Lo que dicen
                            <br />
                            <span className="text-gradient-orange">nuestros viajeros</span>
                        </h2>
                    </div>

                    {/* Controls */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-gray-400 hover:border-orange-600 hover:text-orange-500 transition-all duration-300"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300"
                            style={{ background: "linear-gradient(135deg,#FF6B00,#FF9500)" }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </ScrollReveal>

                {/* Slider */}
                <ScrollReveal direction="none" duration={0.6}>
                    <div className="overflow-hidden">
                        <Slider ref={(s) => (sliderRef.current = s)} {...settings}>
                            {testimonials.map((t, i) => (
                                <div key={i} className="px-3">
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        transition={{ duration: 0.3 }}
                                        className="glass-card rounded-2xl p-7 flex flex-col gap-5 h-full"
                                        style={{ border: "1px solid rgba(255,107,0,0.1)", minHeight: "260px" }}
                                    >
                                        {/* Top: avatar + stars */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                {/* Avatar */}
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                                                    style={{ background: `linear-gradient(135deg, ${t.avatarColor}CC, ${t.avatarColor}66)` }}
                                                >
                                                    {t.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                                    <p className="text-gray-500 text-xs">{t.location}</p>
                                                </div>
                                            </div>
                                            {/* Quote icon */}
                                            <Quote size={28} className="text-orange-600/30" />
                                        </div>

                                        {/* Stars */}
                                        <div className="flex gap-1">
                                            {[...Array(t.rating)].map((_, j) => (
                                                <Star key={j} size={14} fill="#FF9500" color="#FF9500" />
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className="text-gray-400 text-sm leading-relaxed flex-1">"{t.text}"</p>

                                        {/* Trip badge */}
                                        <div
                                            className="self-start px-3 py-1 rounded-full text-xs font-medium"
                                            style={{ background: "rgba(255,107,0,0.1)", color: "#FF9500", border: "1px solid rgba(255,107,0,0.2)" }}
                                        >
                                            ✈️ {t.trip}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </ScrollReveal>

                {/* Trust indicators */}
                <ScrollReveal delay={0.2} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "50K+", label: "Usuarios Activos" },
                        { value: "98%", label: "Satisfacción" },
                        { value: "120+", label: "Países Disponibles" },
                        { value: "4.9★", label: "En App Store" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center text-center gap-1 p-5 glass-card rounded-2xl"
                            style={{ border: "1px solid rgba(255,107,0,0.08)" }}
                        >
                            <span className="text-2xl font-extrabold text-gradient-orange">{stat.value}</span>
                            <span className="text-xs text-gray-500">{stat.label}</span>
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Testimonials;