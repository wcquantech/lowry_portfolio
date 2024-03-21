"use client";
import React, { useState, useEffect } from 'react';
import projects from '@/contents/projects';

const ImagesModal = ({ projectId, onClose }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const images = projects.find((project) => project.id === projectId).screenshots;
    setImages(images);
  }, [projectId]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-gray-700 bg-opacity-70">
      <span onClick={goToPrevious} className="material-symbols-outlined absolute left-0 sm:left-[5%] z-50 m-4 cursor-pointer text-white scale-[200%] bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full duration-100">arrow_left</span>
      {images.length > 0 && (
        images[currentIndex].type === "image" ? (
          <img src={images[currentIndex].url} alt={`Image ${currentIndex + 1}`} className="h-auto w-auto sm:max-h-[80%] sm:max-w-[80%]" />
        ) : (
          <iframe src={`https://youtube.com/embed/${images[currentIndex].url.split("/")[3]}`} title="YouTube video" width="80%" height="80%" />
        )
      )
      }
      <span onClick={goToNext} className="material-symbols-outlined absolute right-0 sm:right-[5%] z-50 m-4 cursor-pointer text-white scale-[200%] bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full duration-100">arrow_right</span>
      <button onClick={onClose} className="absolute top-0 right-0 z-50 m-6">
        <span className="material-symbols-outlined cursor-pointer p-2 rounded-md duration-100 text-white scale-150 hover:text-indigo-600 hover:scale-[200%]">close</span>
      </button>
    </div>
  );
};

export default ImagesModal;
