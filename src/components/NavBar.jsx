"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide Navbar on Scroll Down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  return (
    <nav className={`fixed z-10 h-16 p-5 mb-3 w-screen flex items-center justify-between border-b border-gray-200 bg-white bg-opacity-60 backdrop-blur-sm transition-all duration-300 ${visible ? "top-0" : "top-[-100%]"}`}>
      <Link href="/" className="text-2xl font-bold cursor-pointer select-none hover:transform hover:scale-105 duration-200 link-animation">LOWRY WONG</Link>

      {/* Desktop or Large Screen Navigation */}
      <div className="hidden items-center space-x-4 sm:flex">
        <Link
          href="#about"
          className="cursor-pointer select-none hover:text-indigo-600 duration-200"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="cursor-pointer select-none hover:text-indigo-600 duration-200"
        >
          Projects
        </Link>
        <Link 
          href="#contact" 
          className="cursor-pointer select-none hover:text-indigo-600 duration-200 border-r pr-4"
        >
          Contact
        </Link>
        <span className="material-symbols-outlined cursor-pointer rounded-md duration-200 hover:text-indigo-600 transform hover:scale-105">dark_mode</span>
        <Link href="https://github.com/wcquantech" target="_blank" rel="noopener noreferrer"><img src="assets/icons/github-mark.svg" alt="github icon" className="w-5 h-5 hover:fill-indigo-600 cursor-pointer duration-200 transform hover:scale-105 " /></Link>
      </div>

      {/* Mobile Navigation */}
      <div className="relative sm:hidden">
        {/* Menu Button */}
        <span 
          className={`material-symbols-outlined cursor-pointer p-2 rounded-md duration-200 ${isMenuOpen ? "text-indigo-600 scale-105" : "hover:text-indigo-600 transform hover:scale-105 duration-200"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>menu
        </span>
        {/* Dropdown Menu */}
        <div 
          className={`text-xl absolute right-0 mt-4 p-3 flex-col items-end gap-2 bg-white bg-opacity-90 rounded-lg shadow-md w-44 ${isMenuOpen ? "flex" : "hidden"}`}
        >
          <Link 
            href="#about" 
            className="w-full rounded-md p-2 hover:text-indigo-600 text-end active:transform active:scale-95 duration-200" 
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </Link>
          <Link 
            href="#projects" 
            className="w-full rounded-md p-2 hover:text-indigo-600 text-end active:transform active:scale-95 duration-200" 
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="w-full rounded-md p-2 hover:text-indigo-600 text-end active:transform active:scale-95 duration-200 border-b" 
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          {/* Theme Switch and GitHub Buttons */}
          <div className="flex justify-end items-center gap-2">
            <span className="material-symbols-outlined cursor-pointer p-2 rounded-md duration-200 hover:text-indigo-600 transform hover:scale-105">dark_mode</span>
            <Link href="https://github.com/wcquantech" target="_blank" rel="noopener noreferrer"><img src="assets/icons/github-mark.svg" alt="github icon" className="w-5 h-5 hover:fill-indigo-600 cursor-pointer duration-200 transform hover:scale-105 " /></Link>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
