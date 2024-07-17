"use client"
import React, { useState, useEffect } from 'react';

// TypingHeadline component to display a typing effect for the words "DESIGN", "CODE", "CRAFT"
const TypingHeadline = () => {
  // Words to be typed out
  const words = ["DESIGN", "CODE", "CRAFT"];
  // State to track the current word index
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // State to track if the component is deleting characters
  const [isDeleting, setIsDeleting] = useState(false);
  // State to track the current text being displayed
  const [text, setText] = useState('');
  // State to track the typing speed
  const [speed, setSpeed] = useState(200);

  // useEffect hook to handle typing effect
  useEffect(() => {
    let timeout;

    // Handle deleting characters
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.substring(0, prev.length - 1));
        setSpeed(100); // Speed up deletion
      }, speed);
    } 
    // Handle adding characters
    else {
      timeout = setTimeout(() => {
        setText(words[currentWordIndex].substring(0, text.length + 1));
        setSpeed(200); // Normal speed for typing
      }, speed);
    }

    // If word is completely typed out, start deleting after a delay
    if (!isDeleting && text === words[currentWordIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } 
    // If word is completely deleted, move to the next word
    else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length); // Loop through words
    }

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, [text, isDeleting, speed, words, currentWordIndex]);

  return (
    <h1 className="text-[30px] leading-[30px] sm:text-[40px] sm:leading-[50px] text-white tracking-[2.95px] m-0  md:text-[59px] md:leading-[60px]">
      WE <span className="typewriter">{text}</span> WEB
    </h1>
  );
};

export default TypingHeadline;
