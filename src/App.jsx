import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCogs, FaMobileAlt, FaUsers } from "react-icons/fa";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

const LandingPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">Code</div>
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Get Started</a></li>
        </ul>
      </nav>

      <div className="hero">
        <motion.h1 className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Elevate Your Coding Experience
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Elevate Your Coding Experience
        </motion.p>

        <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  <button className="cta-button">
    <FaRocket className="icon" /> Get Started
  </button>
</motion.div>

<div className="features" id="features">
  <h2 className="features-title">Why Choose Us?</h2>
  <div className="features-grid">
    
    <div className="feature-item">
      <FaCogs className="feature-icon" />
      <h3>Customizable</h3>
      <p>Highly flexible and easy to tailor to your needs.</p>
    </div>

    <div className="feature-item">
      <FaMobileAlt className="feature-icon" />
      <h3>Responsive</h3>
      <p>Seamless experience across all devices.</p>
    </div>

    <div className="feature-item">
      <FaUsers className="feature-icon" />
      <h3>Community</h3>
      <p>Join a vibrant and supportive developer community.</p>
    </div>

    <div className="feature-item">
      <FaRocket className="feature-icon" />
      <h3>Performance</h3>
      <p>Optimized for speed and efficiency.</p>
    </div>

  </div>
</div>
<div className="footer">
  <p className="footer-text"> 2025 Code Artistique. All rights reserved</p>
</div>




      </div>
    </div>
  );
};

export default LandingPage;
