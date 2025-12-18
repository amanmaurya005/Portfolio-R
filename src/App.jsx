import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
