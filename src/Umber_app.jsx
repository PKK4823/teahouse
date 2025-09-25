import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Flavor from "./pages/Flavor"
import FAQ from "./pages/FAQ"
import ContactUs from "./pages/ContactUs"

const Umber_app = () => {
  return (
    <div className="wrap">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Flavor" element={<Flavor />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Umber_app
