// import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
// import "./Navbar.css";
import logo from "./assets/logo.PNG";
import "./App.css";

const App = () => {
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
      <div className="bg-animation"></div>

      <div className="container">
        <h1 className="expertise">Our Expertise</h1>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h2>Mobile App Development</h2>
            <p>
              Native and cross-platform mobile applications designed for optimal
              user experience and performance across iOS and Android devices.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <h2>Web Development</h2>
            <p>
              Modern, responsive websites and web applications built with
              cutting-edge technologies for maximum performance and scalability.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-hashtag"></i>
            </div>
            <h2>Social Media Marketing</h2>
            <p>
              Engaging social media campaigns across all major platforms to
              build brand awareness and drive customer engagement.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-ad"></i>
            </div>
            <h2>PPC Advertising</h2>
            <p>
              Targeted pay-per-click campaigns on Google, Facebook, and other
              platforms to generate qualified leads and maximize ROI.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-pen-fancy"></i>
            </div>
            <h2>Content Marketing</h2>
            <p>
              Compelling content creation and marketing strategies that resonate
              with your audience and establish thought leadership.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2>E-Commerce Solutions</h2>
            <p>
              Complete online store setups with secure payment gateways and
              optimized shopping experiences for maximum conversions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
