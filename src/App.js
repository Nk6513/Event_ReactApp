import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import BuyTicket from "./components/BuyTicket";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import DashApp from "./components/dashboard/DashApp";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about-us" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/buy-ticket" element={<BuyTicket />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/dashboard/*" element={<DashApp />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
