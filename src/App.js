import React, { useRef } from "react";
import './styles/main.css'
import Header from "./Header/header";
import Footer from "./footer/footer";
import HomePage from "./components/Home";
import Blog from "./components/blogComponents/Blog";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactMain from "./components/Contact/ContactMain";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import BlogMain from "./components/BlogPost/BlogMain";
import Category from "./components/Category/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/uiComponents/scroll";
import { redirect } from "react-router-dom";
import AboutSplide from "./components/AboutUs/aboutSplide";
import { useState, useLayoutEffect } from "react";




function App() {

  return (
    <div className="App">
      <Router >
          <ScrollToTop />
            <Header />
              <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/About" element={<AboutUs /> } />
                <Route path="/Contact" element={<ContactMain /> } />
                <Route path="/Privacy policy" element={<PrivacyPolicy />} />
                <Route path="/Blog/:id" element={<BlogMain /> } />
                {/*<Route path="/Home" element={<HomePage />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/About" element={<AboutUs /> } />
                <Route path="/Contact" element={<ContactMain /> } />
                <Route path="/Privacy policy" element={<PrivacyPolicy />} /> 
                <Route path="/Blog/:id" element={<BlogMain /> } />*/}
                <Route path="/Category" element={<Category />} />
            </Routes>
          {<Footer />}
        </Router>
    </div>
  );
}

export default App;
