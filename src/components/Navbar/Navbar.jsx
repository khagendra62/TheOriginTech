import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.PNG";

const Navbar = () => {
  useEffect(() => {
    const createParticles = () => {
      const particleContainer = document.getElementById("particles");
      const numberOfParticles = 50;

      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 4 + 6 + "s";

        particleContainer.appendChild(particle);
      }
    };

    createParticles();

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const buttons = document.querySelectorAll(
      ".btn-primary, .btn-secondary, .cta-button"
    );
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.05)";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });
    });
  }, []);

  return (
    <>
      <div className="animated-background"></div>
      <div className="overlay"></div>
      <div className="floating-particles" id="particles"></div>

      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
            {/* <h1>ORIGINTECH</h1> */}
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#solutions">Solutions</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#portfolio">Our Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">
            Partnering for Innovation and Digital Excellence
          </p>
          <h1 className="hero-title">YOUR ORIGIN OF INNOVATION</h1>
          <div className="hero-buttons">
            <button className="btn-primary">Request a Quote</button>
            <button className="btn-secondary">Why Choose Us?</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
