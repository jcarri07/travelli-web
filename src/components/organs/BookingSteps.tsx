import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { List } from '../atoms/List'
import { Text } from '../atoms/Text'
import { BookingStepsTexts, TRAVELER, TravelStepsTexts } from '../particles/DataLists'
import { AirplaneTilt, Buildings, CheckCircle, CreditCard, CurrencyDollar, MagnifyingGlass, MapPin, MapTrifold, Notebook, PlusCircle, Receipt, Users } from '@phosphor-icons/react'
import { Card } from '../molecules/Card'
import CardImage2 from "../../assets/bookingImage2.jpeg"
import PlayaGrande from "../../assets/PlayaGrande.webp"
import ScrollReveal from '../atoms/ScrollReveal'

interface BookingStepsProps {
    userType: number;
}

const stepColors = ["#FF6B00", "#FF9500", "#FFB84D", "#FF6B00"];

const BookingSteps = ({ userType }: BookingStepsProps) => {
    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0: return <MagnifyingGlass size={15} color="white" weight="fill" />;
            case 1: return <Users size={15} color="white" weight="fill" />;
            case 2: return <CreditCard size={15} color="white" weight="fill" />;
            case 3: return <Notebook size={15} color="white" weight="fill" />;
            default: return "";
        }
    }, []);

    const renderAgencyIcons = useCallback((element: number) => {
        switch (element) {
            case 0: return <PlusCircle size={15} color="white" weight="fill" />;
            case 1: return <MapPin size={15} color="white" weight="fill" />;
            case 2: return <CurrencyDollar size={15} color="white" weight="fill" />;
            case 3: return <CheckCircle size={15} color="white" weight="fill" />;
            default: return "";
        }
    }, []);

    return (
        <section className="w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 py-24 gap-5" style={{ background: "#060606" }}>
            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px)`,
                    backgroundSize: "70px 70px",
                }}
            />

            <ScrollReveal className="relative z-10">
                <Text as="p" className="font-medium text-xs text-orange-500 tracking-widest uppercase px-4 py-1.5 rounded-full self-start"
                    style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.25)" }}
                >
                    {userType === TRAVELER ? BookingStepsTexts.firstText : TravelStepsTexts.firstText}
                </Text>
            </ScrollReveal>

            <main className="relative z-10 w-full grid md:grid-cols-2 lg:gap-16 gap-12 md:gap-10 mt-4">
                {/* Left: steps */}
                <div className="w-full flex flex-col gap-8 order-2 md:order-1">
                    <ScrollReveal>
                        <Text as="h2" className="lg:text-5xl md:text-3xl text-3xl text-white font-extrabold font-inter leading-tight">
                            {userType === TRAVELER ? BookingStepsTexts.secondText : TravelStepsTexts.secondText}
                        </Text>
                    </ScrollReveal>

                    <ul className="flex flex-col gap-6">
                        {(userType === TRAVELER ? BookingStepsTexts : TravelStepsTexts).listOfSteps.map((step, index) => (
                            <ScrollReveal key={index} delay={index * 0.08}>
                                <List className="flex gap-4 items-start justify-start">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center"
                                        style={{ background: `linear-gradient(135deg, ${stepColors[index]}, ${stepColors[index]}99)` }}
                                    >
                                        {userType === TRAVELER ? renderIcons(index) : renderAgencyIcons(index)}
                                    </motion.div>
                                    <div className="flex flex-col gap-0.5">
                                        <Text as="p" className="text-sm text-gray-300 leading-relaxed font-light">
                                            {step.text}
                                        </Text>
                                    </div>
                                </List>
                            </ScrollReveal>
                        ))}
                    </ul>
                </div>

                {/* Right: cards */}
                <div className="w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2">
                    <ScrollReveal direction="right">
                        {/* Main card */}
                        <Card
                            cardClass="lg:w-[75%] md:w-[85%] w-[90%] p-4 rounded-2xl flex flex-col gap-4 shadow-card-dark"
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                            imageAlt={BookingStepsTexts.cardOne.name}
                            imageSrc={PlayaGrande}
                            imageWrapperClass="h-[150px] overflow-hidden rounded-xl"
                            cover="object-cover object-top"
                            textWrapperClass="flex flex-col gap-3"
                        >
                            <Text as="h4" className="text-base font-semibold text-white">
                                {BookingStepsTexts.cardOne.name}
                            </Text>
                            <Text as="p" className="text-sm font-light text-gray-400">
                                {BookingStepsTexts.cardOne.date}
                            </Text>
                            <div className="flex items-center gap-3">
                                {[Receipt, MapTrifold, AirplaneTilt].map((Icon, i) => (
                                    <span
                                        key={i}
                                        className="p-2.5 rounded-xl text-orange-400"
                                        style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.15)" }}
                                    >
                                        <Icon size={16} color="currentColor" weight="light" />
                                    </span>
                                ))}
                            </div>
                            <Text as="p" className="text-sm font-light text-gray-400 flex items-center gap-2">
                                <Buildings size={16} color="#FF9500" weight="light" />
                                {BookingStepsTexts.cardOne.people}
                            </Text>
                        </Card>

                        {/* Floating mini card */}
                        <Card
                            cardClass="flex gap-3 justify-start items-start absolute lg:right-0 -right-4 bottom-8 py-3 px-4 rounded-xl shadow-glass"
                            style={{ background: "rgba(15,15,15,0.95)", border: "1px solid rgba(255,107,0,0.2)", backdropFilter: "blur(16px)" }}
                            imageAlt={BookingStepsTexts.cardTwo.destination}
                            imageSrc={CardImage2}
                            cover="object-cover object-top"
                            imageWrapperClass="h-12 w-12 rounded-full overflow-hidden flex-shrink-0"
                            textWrapperClass="flex flex-col gap-1"
                        >
                            <Text as="p" className="text-[10px] font-light text-gray-500">
                                {BookingStepsTexts.cardTwo.status}
                            </Text>
                            <Text as="h4" className="text-sm font-semibold text-white">
                                {BookingStepsTexts.cardTwo.destination}
                            </Text>
                            <Text as="p" className="text-[11px] text-gray-400 pb-2 relative before:w-[45%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-orange-600 before:to-orange-400 before:rounded-full">
                                {BookingStepsTexts.cardTwo.completion}
                            </Text>
                        </Card>
                    </ScrollReveal>
                </div>
            </main>
        </section>
    );
};

export default BookingSteps;