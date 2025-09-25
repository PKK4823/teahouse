import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Informamtion from "./pages/Informamtion";
import Flavor from "./pages/Flavor";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import { ReactLenis } from 'lenis/react';

const TeaHouse_app = () => {
  return (
    <>
      <ReactLenis root options={{ duration: 1.2, smoothTouch: false }}>
        <div className="wrap">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Informamtion" element={<Informamtion />} />
            <Route path="/Flavor" element={<Flavor />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default TeaHouse_app;