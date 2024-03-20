"use client";
import React, { useState, useEffect } from 'react';

const ImagesModal = ({ projectId }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate fetching images based on projectId
    // This should be replaced with actual API call
    const fetchedImages = [
      { id: 1, url: 'assets/images/image1.jpg' },
      { id: 2, url: 'assets/images/image2.png' },
      { id: 3, url: 'assets/images/image3.jpeg' },
    ]; // This is a placeholder, replace with actual fetch logic
    setImages(fetchedImages);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [projectId]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
        {images.length > 0 && (
          <img src={images[currentIndex].url} alt={`Image ${currentIndex + 1}`} className="w-1/2 h-auto" />
        )}
        <div className="flex justify-between w-full mt-4">
          <button onClick={goToPrevious} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Previous
          </button>
          <button onClick={goToNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagesModal;
