"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import ImagesModal from "./ImagesModal";
import { useTheme } from "next-themes";

const ProjectCard = ({ project }) => {
  const { resolvedTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const imgRef = useRef(null);
  const titleRef = useRef(null);

  const handleMouseEnter = () => {
    imgRef.current.style.filter = "brightness(100%) grayscale(0)";
    titleRef.current.style.opacity = "0";
  };

  const handleMouseLeave = () => {
    imgRef.current.style.filter = "brightness(40%) grayscale(50%)";
    titleRef.current.style.opacity = "1";
  };

  const onClose = () => {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <ImagesModal projectId={project.id} onClose={onClose} />
      )}
      <div className={`h-5/6 bg-white dark:bg-slate-800 rounded-2xl shadow-md flex flex-col relative mx-2`}>
        {/* Upper Portion: Image and Title / Left Portion (lg) */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setShowModal(true)}
          className="w-full h-1/2 overflow-hidden cursor-pointer lg:w-1/2 lg:h-full"
        >
          <img
            src={project.screenshots[0].url}
            alt=""
            ref={imgRef}
            className="grayscale brightness-[40%] w-full h-1/2 object-cover absolute rounded-t-2xl duration-100 lg:h-full lg:w-1/2 lg:rounded-l-2xl"
          />
          <h2
            ref={titleRef}
            className="absolute text-3xl text-white font-bold w-full h-1/2 flex items-center justify-center top-0 select-none duration-100 lg:hidden"
          >
            {project.title}
          </h2>
        </div>
        {/* Lower Portion / Right Portion (lg) */}
        <div className="flex flex-col p-4 h-1/2 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full lg:gap-4 lg:p-8">
          {/* Title */}
          <h2 className="hidden text-3xl font-bold text-gray-800 dark:text-gray-200 lg:block">{project.title}</h2>
          {/* Category and Date */}
          <div className="flex justify-between items-center">
            <p className={`text-xs sm:text-sm text-white p-1 rounded-md ${project.category === "Client Project" ? "bg-green-400 dark:bg-green-600" : "bg-blue-400 dark:bg-blue-600"}`}>{project.category}</p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-200">{project.createdAt}</p>
          </div>
          {/* Description */}
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-200 mt-2 flex-1 overflow-y-auto">{project.description}</p>
          {/* Stack and Links */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-wrap">
              {project.stack.map((tech) => (
                <p key={tech} className="text-xs sm:text-sm text-gray-500 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 p-1 rounded-md mr-1 mb-1">{tech}</p>
              ))}
            </div>
            <div className="flex gap-1">
              {project.github_url!=="" && <Link href={project.github_url} target="_blank" rel="noopener noreferrer"><img src={`assets/icons/github-mark${resolvedTheme === "light" ? "" : "-white"}.svg`} alt="github icon" className="w-5 h-5 hover:fill-indigo-600 cursor-pointer duration-200 transform hover:scale-105 " /></Link>}
              {project.external_url!=="" && <Link href={project.external_url} target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined cursor-pointer rounded-md duration-200 hover:text-indigo-600 transform w-5 h-5 mt-[-2px] hover:scale-105">open_in_new</span></Link>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

