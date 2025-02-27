import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import NavBar from "./components/organs/NavBar"
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Home from "./components/pages/Home";
import PrivacyPolicies from "./components/pages/PrivacyPolicies";
import { useEffect, useState } from "react";
import Footer from "./components/organs/Footer";
import { TRAVELER } from "./components/particles/DataLists";
import HowToDelete from "./components/pages/HowToDelete";
import PricingPlans from "./components/pages/Plans";
import TripDeepLinkRedirect from "./components/pages/TripDeepLinkRedirect";

function App() {
  const directory = useLocation();
  const [userType, setUserType] = useState<number>(TRAVELER);

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar
        userType={userType}
        setUserType={setUserType}
      />
      <Routes>
        <Route path="/" element={<Home userType={userType} setUserType={setUserType} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms-and-conditions.html" element={<TermsAndConditions />} />
        <Route path="/privacy-policies" element={<PrivacyPolicies />} />
        <Route path="/how-to-delete-account" element={<HowToDelete />} />
        <Route path="/plans" element={<PricingPlans />} />
        <Route path="/trip/app/:id" element={<TripDeepLinkRedirect />}/>
      </Routes>
      <Footer userType={userType}/>
    </div>
  )
}

export default App
