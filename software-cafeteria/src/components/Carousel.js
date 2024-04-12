import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96">
      {images.map((image, index) => (
        <Transition
          key={index}
          show={index === currentIndex}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        </Transition>
      ))}
    </div>
  );
};

export default Carousel;
