"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/contents/projects";

const Projects = () => {
  const [numProjects, setNumProjects] = useState(projects.length);
  const [navDots, setNavDots] = useState([]);

  useLayoutEffect(() => {
    const projectCards = document.querySelectorAll(".project-card");
    const projectObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentIndex = entry.target.getAttribute('data-index');
            setNavDots(Array.from({ length: numProjects }, (_, index) => (
              <span key={index} className={`rounded-full w-3 h-3 ${index == currentIndex ? "bg-indigo-600" : "bg-white"}`}></span>
            )));
          }
        });
      },
      { threshold: 1 }
    );
    projectCards.forEach(card => projectObserver.observe(card));

    return () => {
      projectCards.forEach(card => projectObserver.unobserve(card));
    }  
  }, [])



  return (
    <div className="h-screen flex flex-col justify-around">
      <h1 className="basis-1/12 text-4xl font-bold text-center mt-10 mb-10">Projects</h1>

      {/* Mobile version */}
      <div className="col-span-8 self-stretch flex basis-10/12 gap-16 overflow-x-auto snap-mandatory snap-x scrollbar-hide">
        <div data-index="0" className="project-card flex-none w-full snap-center snap-always ">
          <ProjectCard project={projects[2]} />
        </div>
        <div data-index="1" className="project-card flex-none w-full snap-center snap-always ">
          <ProjectCard project={projects[1]} />
        </div>
        <div data-index="2" className="project-card flex-none w-full snap-center snap-always ">
          <ProjectCard project={projects[0]} />
        </div>
        <div data-index="3" className="project-card flex-none w-full snap-center snap-always ">
          <ProjectCard project={projects[3]} />
        </div>
      </div>
      <div className="basis-1/12 flex justify-center gap-3">
        {navDots}
      </div>

    </div>
  );
};

export default Projects;

