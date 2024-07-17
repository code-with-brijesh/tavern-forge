import React from 'react'

// BtnComponent is a functional component that accepts props `title` and `variant`
const BtnComponent = ({ title, variant }) => {
  // Define the classes to apply to the button element
  const buttonClasses = `min-w-[120px] sm:min-w-[130px] md:min-w-[175px] min-h-[40px] sm:min-h-[50px] p-2 text-white text-base tracking-[0.8px] leading-5 rounded-[5px] transition-[0.5s] 
    ${
      variant === 'filled' ? 'bg-amber-500 hover:bg-[#fff] hover:text-amber-500' : 'border border-amber-500 border-solid hover:bg-amber-500'
    }`;

  // Return the button element with the computed classes and title
  return (
    <button className={buttonClasses}>{title}</button>
  );
}

export default BtnComponent;
