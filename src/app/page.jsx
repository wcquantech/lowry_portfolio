import About from "@/sections/About";
import Welcome from "@/sections/Welcome";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import ImagesModal from "@/components/ImagesModal";

export default function Home() {

  return (
    <div className="flex flex-col">
      <section id="welcome">
        <Welcome />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
