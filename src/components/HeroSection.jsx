import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHandPeace } from "react-icons/fa";
import coder from "../assets/coder.svg";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import "../style/HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Initialize tsparticles engine
  const particlesInit = async (engine) => {
    await loadBasic(engine);
  };

  return (
    <section className="hero" id="hero">
      {/* ✅ Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#0c001a" },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 70,
              density: { enable: true, area: 800 },
            },
            color: { value: "#b26cff" },
            links: {
              enable: true,
              color: "#b26cff",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "out" },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container">
        <div className="text-section" data-aos="fade-right">
          <h2 className="greet">
            Hi There! <FaHandPeace className="wave" />
          </h2>
          <h1 className="name">
            I'M <span>Aman maurya</span>
          </h1>
          <h2 className="role">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>

        <div className="image-section" data-aos="fade-left">
          <img src={coder} alt="developer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;