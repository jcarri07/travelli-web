import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "../atoms/ScrollReveal";

const destinations = [
    {
        name: "Salto Ángel",
        country: "Bolívar, Venezuela",
        image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
        price: "Desde $120",
        tag: "Aventura",
        tagColor: "#FF6B00",
    },
    {
        name: "Los Roques",
        country: "Archipiélago, Venezuela",
        image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
        price: "Desde $180",
        tag: "Playa",
        tagColor: "#FF9500",
    },
    {
        name: "Mérida",
        country: "Los Andes, Venezuela",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        price: "Desde $60",
        tag: "Montaña",
        tagColor: "#FFB84D",
    },
    {
        name: "Isla Margarita",
        country: "Nueva Esparta, Venezuela",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        price: "Desde $90",
        tag: "Relax",
        tagColor: "#FF6B00",
    },
    {
        name: "Morrocoy",
        country: "Falcón, Venezuela",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        price: "Desde $75",
        tag: "Naturaleza",
        tagColor: "#FF9500",
    },
    {
        name: "Roraima",
        country: "Gran Sabana, Venezuela",
        image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80",
        price: "Desde $200",
        tag: "Trekking",
        tagColor: "#FFB84D",
    },
];

interface ParallaxCardProps {
    dest: (typeof destinations)[0];
    index: number;
}

const ParallaxCard = ({ dest, index }: ParallaxCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
            style={{ height: index % 3 === 0 ? "380px" : "320px" }}
        >
            {/* Parallax image */}
            <motion.img
                src={dest.image}
                alt={dest.name}
                style={{ y }}
                className="absolute inset-0 w-full h-[115%] object-cover will-change-transform"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Tag badge */}
            <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold"
                style={{ background: `${dest.tagColor}CC`, backdropFilter: "blur(8px)" }}
            >
                {dest.tag}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-orange-400 text-xs">
                    <MapPin size={12} />
                    <span>{dest.country}</span>
                </div>
                <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                <div className="flex items-center justify-between mt-1">
                    <span
                        className="text-sm font-semibold"
                        style={{ color: dest.tagColor }}
                    >
                        {dest.price}
                    </span>
                    <motion.button
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-1 text-white/70 hover:text-white text-xs transition-colors"
                    >
                        Explorar <ArrowRight size={12} />
                    </motion.button>
                </div>
            </div>

            {/* Hover border glow */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                    boxShadow: `inset 0 0 0 1px ${dest.tagColor}50`,
                }}
            />
        </motion.div>
    );
};

const TopDestination = () => {
    return (
        <section id="destinations" className="relative w-full py-28 bg-black overflow-hidden">
            {/* Glow */}
            <div
                className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #FF9500 0%, transparent 65%)", filter: "blur(60px)" }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
                {/* Header */}
                <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="flex flex-col gap-4">
                        <span
                            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full self-start"
                            style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)", color: "#FF9500" }}
                        >
                            Destinos Populares
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-inter leading-tight">
                            Los mejores lugares
                            <br />
                            <span className="text-gradient-orange">del mundo te esperan</span>
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors md:mb-2 group"
                    >
                        Ver todos los destinos
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </ScrollReveal>

                {/* Masonry-like grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {destinations.map((dest, index) => (
                        <ParallaxCard key={dest.name} dest={dest} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopDestination;