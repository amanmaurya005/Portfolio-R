import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Resume />
      <Blogs />
    </>
  );
}

export default App;
