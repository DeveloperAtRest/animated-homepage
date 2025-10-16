"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const [videoState, setVideoState] = useState("small"); // small, expanded, shrink
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 1200) setVideoState("small");
      else if (scrollY >= 1200 && scrollY < 2500) setVideoState("expanded");
      else setVideoState("shrink");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { title: "High-Quality Chips", image: "./images/chips.png" },
    { title: "Professional Cards", image: "./images/cards.png" },
    { title: "Custom Poker Tables", image: "./images/set.png" },
    { title: "Card Shuffler", image: "./images/table.png" },
  ];

  const testimonials = [
    { name: "Rajesh", text: "Best poker chips I've ever used!", image: "/images/testimonial1.jpg" },
    { name: "Anjali", text: "Professional cards with amazing quality.", image: "/images/testimonial2.jpg" },
    { name: "Sonia", text: "Love the custom poker tables!", image: "/images/testimonial3.jpg" },
  ];

  const animationVariants = {
    construct: { opacity: 1, y: 0, scale: 1 },
    destruct: { opacity: 0, y: 50, scale: 0.95 },
  };

  return (
    <main style={{ position: "relative" }}>
      {/* Cursor Light */}
      <div
        className="cursor-light"
        style={{ transform: `translate(${cursor.x - 50}px, ${cursor.y - 50}px)` }}
      />

      {/* Header */}
      <header className="header" >
        <div className="logo">PokerStuff</div>
        <nav className="nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#features">Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="hero"
        initial="destruct"
        animate="construct"
        exit="destruct"
        variants={animationVariants}
        transition={{ duration: 1 }}
      >
        <img className="hero-bg" src="./images/banner.png" alt="Hero Background" />
        <div className="hero-content">
          <motion.h1
            variants={animationVariants}
            initial="destruct"
            animate="construct"
            exit="destruct"
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to PokerStuff India
          </motion.h1>
          <motion.p
            variants={animationVariants}
            initial="destruct"
            animate="construct"
            exit="destruct"
            transition={{ duration: 1, delay: 0.4 }}
          >
            Premium Poker Accessories for Every Player
          </motion.p>
          <motion.button
            variants={animationVariants}
            initial="destruct"
            animate="construct"
            exit="destruct"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Shop Now
          </motion.button>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section id="features" className="features">
        <motion.h2
          variants={animationVariants}
          initial="destruct"
          whileInView="construct"
          exit="destruct"
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>

        <div className="testimonial-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              variants={animationVariants}
              initial="destruct"
              whileInView="construct"
              exit="destruct"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={f.image} alt={f.title} />
              <h3>{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <motion.h2
          variants={animationVariants}
          initial="destruct"
          whileInView="construct"
          exit="destruct"
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              variants={animationVariants}
              initial="destruct"
              whileInView="construct"
              exit="destruct"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={t.image} alt={t.name} />
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <motion.h2
          variants={animationVariants}
          initial="destruct"
          whileInView="construct"
          exit="destruct"
          viewport={{ once: true }}
        >
          Ready to Elevate Your Poker Game?
        </motion.h2>
        <motion.button
          variants={animationVariants}
          initial="destruct"
          whileInView="construct"
          exit="destruct"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
}
