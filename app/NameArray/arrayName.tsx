"use client"
import { useState } from 'react';

const namesList = ["Ali","Hamad","Faisal","Hamza","Abdullah","Sheraz"];

export default function NameArray() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % namesList.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? namesList.length - 1 : prevIndex - 1
    );
  };

  const handleResetClick = () => {
    setCurrentIndex(0);
  };

  return (
    <div>
      <h1>{namesList[currentIndex]}</h1>
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}