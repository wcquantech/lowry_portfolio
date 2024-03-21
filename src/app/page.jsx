"use client";
import About from "@/sections/About";
import Welcome from "@/sections/Welcome";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import ImagesModal from "@/components/ImagesModal";
import { useEffect } from "react";

export default function Home() {
  // Using Intersection Observer to implement fade in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
    );
    const sections = document.querySelectorAll(".sections");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section id="welcome" className="sections">
        <Welcome />
      </section>

      <section id="about" className="sections">
        <About />
      </section>

      <section id="projects" className="sections">
        <Projects />
      </section>

      <section id="contact" className="sections">
        <Contact />
      </section>
    </div>
  );
}
