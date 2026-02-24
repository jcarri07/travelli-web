import { Image } from "../atoms/Image";
import logo from "../../assets/TravelliLogo.png";
import { Text } from "../atoms/Text";
import { appLinks, FooterTexts, socialMedia, TRAVELER } from "../particles/DataLists";
import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import ScrollReveal from "../atoms/ScrollReveal";

interface FooterProps {
    userType: number;
}

const Footer = ({ userType }: FooterProps) => {
    return (
        <footer className="w-full flex flex-col" style={{ background: "#080808" }}>
            {/* Divider glow */}
            <div className="w-full h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,0,0.3), transparent)" }} />

            <ScrollReveal direction="none" className="w-full">
                <section className="w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-8 md:gap-6">
                    {/* Brand col */}
                    <div className="flex flex-col items-start gap-4 lg:col-span-1">
                        <Image className="w-28 opacity-90 hover:opacity-100 transition-opacity" image={logo} alt="Travelli Logo" as="a" href="/" />
                        <Text className="text-sm text-gray-500 leading-relaxed" as="p">
                            {userType === TRAVELER ? FooterTexts.underLogoText : FooterTexts.underLogoTravelText}
                        </Text>
                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-2">
                            <Link
                                to={socialMedia.facebook}
                                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-orange-600 transition-all duration-300"
                            >
                                <FacebookLogo size={16} weight="fill" />
                            </Link>
                            <Link
                                to={socialMedia.instagram}
                                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-orange-600 transition-all duration-300"
                            >
                                <InstagramLogo size={16} weight="fill" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col gap-4 md:mt-4">
                        <Text className="text-sm font-semibold text-white uppercase tracking-widest" as="h3">
                            {FooterTexts.quickLinks.caption}
                        </Text>
                        <ul className="flex flex-col gap-2.5">
                            {FooterTexts.quickLinks.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.url}
                                        className="text-sm text-gray-500 hover:text-orange-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="flex flex-col gap-4 md:mt-4">
                        <Text className="text-sm font-semibold text-white uppercase tracking-widest" as="h3">
                            {FooterTexts.contacts.caption}
                        </Text>
                        <ul className="flex flex-col gap-2.5">
                            {FooterTexts.contacts.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.url}
                                        className="text-sm text-gray-500 hover:text-orange-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More */}
                    <div className="flex flex-col gap-4 md:mt-4">
                        <Text className="text-sm font-semibold text-white uppercase tracking-widest" as="h3">
                            {FooterTexts.more.caption}
                        </Text>
                        <ul className="flex flex-col gap-2.5">
                            {FooterTexts.more.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.url}
                                        className="text-sm text-gray-500 hover:text-orange-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* App download col */}
                    <div className="flex flex-col gap-4 md:mt-4">
                        <Text className="text-sm font-semibold text-white uppercase tracking-widest" as="h3">
                            Descarga la App
                        </Text>
                        <Text as="p" className="text-sm text-gray-500 leading-relaxed">
                            Disponible gratis en iOS y Android.
                        </Text>
                        <a href={appLinks.playStore}>
                            <img src={GooglePlay} alt="Google Play" className="w-32 opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                        <a href={appLinks.appStore}>
                            <img src={AppStore} alt="App Store" className="w-32 opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </section>
            </ScrollReveal>

            {/* Bottom bar */}
            <div className="w-full py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} Travelli. Hecho con ❤️ en Venezuela.
                </p>
                <p className="text-xs text-gray-600">
                    Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;