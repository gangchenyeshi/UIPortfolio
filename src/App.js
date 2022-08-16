import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';


// components
import MyNavbar from "./components/heading/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Works from "./components/pages/works/Works";
import AboutMe from "./components/pages/about/AboutMe";
import ContactMe from "./components/pages/contact/ContactMe";
import ECommerce from "./components/pages/works/ecommerce/Ecommerce";
import Otizi from "./components/pages/works/otizi/Otizi";
import DietNutrition from "./components/pages/works/dietnutrition/DietNutrition";


function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/works" element={<Works />} />
            <Route exact path="/works/e-commerce_bottega" element={<ECommerce/>} />
            <Route exact path="/works/otizi" element={<Otizi/>} />
            <Route exact path="/works/diet_n_nutrition" element={<DietNutrition/>} />
            <Route exact path="/contact_me" element={<ContactMe/>}/>

          
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
