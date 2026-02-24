import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X, AlignRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TRAVEL_AGENCY, TRAVELER } from "../particles/DataLists";
import { Image } from "../atoms/Image";
import TravelliLogo from "../../assets/TravelliLogo.png";

interface NavBarProps {
    userType: number;
    setUserType: Dispatch<SetStateAction<number>>;
}

const NavBar = ({ userType, setUserType }: NavBarProps) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    const navLinks = [
        { label: "Inicio", onClick: () => { navigate("/"); setOpen(false); } },
        { label: "Características", onClick: () => scrollTo("features") },
        { label: "Destinos", onClick: () => scrollTo("destinations") },
        { label: "Planes", onClick: () => { navigate("/plans"); setOpen(false); } },
    ];

    return (
        <>
            {/* Main nav */}
            <header
                className="fixed top-[3px] left-0 right-0 z-50 transition-all duration-500"
                style={{
                    background: scrolled
                        ? "rgba(0,0,0,0.88)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(18px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
            >
                <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="h-10 flex items-center"
                    >
                        <Image className="h-10" image={TravelliLogo} alt="Travelli Logo" />
                    </motion.a>

                    {/* Desktop links */}
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hidden lg:flex items-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <button
                                    onClick={link.onClick}
                                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
                                        style={{ background: "linear-gradient(90deg,#FF6B00,#FF9500)" }}
                                    />
                                </button>
                            </li>
                        ))}

                        {/* User type pills */}
                        <li className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
                            <button
                                onClick={() => setUserType(TRAVELER)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${userType === TRAVELER
                                    ? "text-white shadow-orange-glow"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                                style={userType === TRAVELER ? { background: "linear-gradient(135deg,#FF6B00,#FF9500)" } : {}}
                            >
                                Viajeros
                            </button>
                            <button
                                onClick={() => setUserType(TRAVEL_AGENCY)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${userType === TRAVEL_AGENCY
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                                style={userType === TRAVEL_AGENCY ? { background: "linear-gradient(135deg,#FF6B00,#FF9500)" } : {}}
                            >
                                Agencias
                            </button>
                        </li>
                    </motion.ul>

                    {/* Desktop CTA + lang */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="hidden lg:flex items-center gap-4"
                    >
                        <button className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
                            <Globe size={14} />
                            ES
                        </button>
                        <a
                            href="/plans"
                            className="btn-orange px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                        >
                            <span>Ver Planes</span>
                        </a>
                    </motion.div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden text-gray-300 hover:text-white p-2"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <AlignRight size={24} />}
                    </button>
                </nav>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="fixed inset-0 z-40 lg:hidden"
                        style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
                    >
                        <div className="flex flex-col h-full pt-28 px-8 pb-12">
                            {/* Close */}
                            <button
                                className="absolute top-6 right-6 text-gray-400 hover:text-white"
                                onClick={() => setOpen(false)}
                            >
                                <X size={28} />
                            </button>

                            {/* Links */}
                            <ul className="flex flex-col gap-6 flex-1">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.label}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07 + 0.1 }}
                                    >
                                        <button
                                            onClick={link.onClick}
                                            className="text-2xl font-semibold text-white hover:text-gradient-orange transition-colors"
                                        >
                                            {link.label}
                                        </button>
                                    </motion.li>
                                ))}
                                {/* Type pills */}
                                <motion.li
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex gap-3 pt-4"
                                >
                                    <button
                                        onClick={() => { setUserType(TRAVELER); setOpen(false); }}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${userType === TRAVELER
                                            ? "border-orange-600 text-white"
                                            : "border-white/20 text-gray-400"
                                            }`}
                                        style={userType === TRAVELER ? { background: "linear-gradient(135deg,#FF6B00,#FF9500)" } : {}}
                                    >
                                        Viajeros
                                    </button>
                                    <button
                                        onClick={() => { setUserType(TRAVEL_AGENCY); setOpen(false); }}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${userType === TRAVEL_AGENCY
                                            ? "border-orange-600 text-white"
                                            : "border-white/20 text-gray-400"
                                            }`}
                                        style={userType === TRAVEL_AGENCY ? { background: "linear-gradient(135deg,#FF6B00,#FF9500)" } : {}}
                                    >
                                        Agencias
                                    </button>
                                </motion.li>
                            </ul>

                            {/* Bottom CTA */}
                            <motion.a
                                href="/plans"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="btn-orange text-center py-4 rounded-2xl text-white font-semibold text-lg"
                            >
                                <span>Ver Planes</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;