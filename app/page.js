"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <Intro onReveal={() => setReady(true)} />
      <Navbar ready={ready} />
      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
