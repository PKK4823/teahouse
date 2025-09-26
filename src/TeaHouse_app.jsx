import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Flavor from "./pages/Flavor";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import { ReactLenis } from 'lenis/react';
import OnlineShop from "./pages/OnlineShop";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const TeaHouse_app = () => {
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <>
      <ReactLenis root options={{ duration: 1.2, smoothTouch: false }}>
        <div className="wrap">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/Flavor" element={<Flavor />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/OnlineShop" element={<OnlineShop />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default TeaHouse_app;