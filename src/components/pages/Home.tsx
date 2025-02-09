import { Dispatch, SetStateAction } from "react"
import BookingSteps from "../organs/BookingSteps"
import HeroSection from "../organs/HeroSection"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"

interface HomeProps {
    userType: number;
    setUserType: Dispatch<SetStateAction<number>>;
}

const Home = ({ userType, setUserType } : HomeProps) => {    
    return (
        <>
            <HeroSection 
                userType={userType}
                setUserType={setUserType}
            />
            <Services />
            <TopDestination />
            <BookingSteps userType={userType} />
            <Testimonials />
            {/*<Partners />*/}
        </>
    )
}

export default Home