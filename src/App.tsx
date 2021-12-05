import Header from "components/Header";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
