import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { Image } from "../atoms/Image";
import TravelliLogo from '../../assets/TravelliLogo.png';
import { TRAVEL_AGENCY, TRAVELER } from "../particles/DataLists"
import { List } from "../atoms/List";
import { useNavigate } from "react-router-dom";
import { ArrowCircleRight, CirclesFour } from "@phosphor-icons/react";
import { Slide } from "react-awesome-reveal";

interface NavBarProps {
    userType: number;
    setUserType: Dispatch<SetStateAction<number>>;
}

const NavBar = ({userType, setUserType} : NavBarProps) => {
    const navigate = useNavigate()

    console.log(userType);
    console.log(navigate);

    const [open, setOpen] = useState(false)
    // const [scrollY, setScrollY] = useState(0)
    const [navBarColor, setNavBarColor] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <header className="w-full h-auto bg-transparent overflow-x-hidden fixed z-50 top-0 left-0">
            <Slide direction="down">
                <nav className={`w-full md:h-24 h-20 ${navBarColor ? "bg-white" : "bg-transparent"} lg:px-24 md:px-12 px-8 flex justify-between items-center`}>
                    <Image as="a" href="/" className="md:h-14 h-12" image={TravelliLogo} alt="Logo" />
                    <div className="lg:flex hidden items-center gap-20">
                        <ul className="flex items-center justify-center gap-6">
                            <div
                                onClick={() => setUserType(TRAVELER)}
                                className={`cursor-pointer p-2 border-b-2 border-transparent ${
                                    userType === TRAVELER ? ' border-white' : ''
                                } ${navBarColor ? '' : 'text-white'}`}
                            >
                                Soy Viajeros
                            </div>
                            <div
                                onClick={() => setUserType(TRAVEL_AGENCY)}
                                className={`cursor-pointer p-2 border-b-2 border-transparent ${
                                    userType === TRAVEL_AGENCY ? ' border-white' : ''
                                } ${!navBarColor ? 'text-white' : ''}`}
                            >
                                Soy Agencias
                            </div>
                            <List className={`${!navBarColor ? 'text-white' : ''}`}>
                                <select className="border-none font-light text-base outline-none bg-transparent">
                                    <option value="ES" selected>ES</option>
                                </select>
                            </List>
                        </ul>
                    </div>
                    <div className="lg:hidden flex gap-4 items-center">
                        <select className="border-none outline-none font-light text-sm bg-transparent">
                            <option value="ES" selected>ES</option>
                        </select>
                        <div className="hamburger text-gray-950 cursor-pointer" onClick={handleToggle}>
                            <CirclesFour size={30} color="currentColor" weight="fill" />
                        </div>
                    </div>
                </nav>
            </Slide>


            {/* Mobile Nav  */}
            <nav className={`flex justify-end lg:hidden h-screen w-full bg-gray-950/90 fixed top-0  ${open ? "right-0" : "-right-[120vw]"} transition-all duration-500 ease-out`}>
                <div className={`w-[70%] h-screen bg-white flex flex-col justify-between items-center relative ${open ? "right-0" : "-right-[120vw]"} transition-all duration-500 ease-out delay-300`}>
                    <section className="w-full px-4 py-6 flex flex-col gap-16">
                        <div className="w-full flex justify-between items-center">
                            <Image as="a" href="/" className="md:h-12 h-10" image={TravelliLogo} alt="Logo" />
                            <div className="hamburger text-gray-950 cursor-pointer" onClick={handleToggle}>
                                <ArrowCircleRight size={25} color="currentColor" weight="fill" />
                            </div>
                        </div>
                        <ul className="flex flex-col gap-3 pl-2">
                            <div
                                onClick={() => setUserType(TRAVELER)}
                                className={`cursor-pointer p-2 border-b-2 border-transparent ${
                                    userType === TRAVELER ? ' border-white' : ''
                                }`}
                            >
                                Soy Viajero
                            </div>
                            <div
                                onClick={() => setUserType(TRAVEL_AGENCY)}
                                className={`cursor-pointer p-2 border-b-2 border-transparent ${
                                    userType === TRAVEL_AGENCY ? ' border-white' : ''
                                }`}
                            >
                                Soy Agencia
                            </div>
                        </ul>
                    </section>
                </div>
            </nav>
        </header >
    )
}

export default NavBar