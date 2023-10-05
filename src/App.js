import React from "react";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Blog from "./containers/blog/Blog";
import Possibility from "./containers/possibility/Possibility";
import Features from "./containers/features/Features";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
