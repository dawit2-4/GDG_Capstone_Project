import React from "react";
import { Link } from "react-router-dom";

import errorBgImage from "../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col relative"
      style={{ backgroundImage: `url(${errorBgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Container for the link, positioned relative for z-index context */}
      <div className="relative z-10 w-full flex justify-center pt-6 sm:pt-8">
        {" "}
        {/* Added padding top */}
        <Link
          to="/"
          // Adjusted styling for better visibility and consistency
          className="text-amber-300 text-lg sm:text-xl font-bold hover:text-blue-200 transition duration-300 border-2 border-gray-300 rounded-lg px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm" // Added subtle background/blur
        >
          Go Back to Home
        </Link>
      </div>

      {/* Optional: You might want to add centered error text here */}
      <div className="relative z-10 flex flex-grow items-center justify-center text-center px-4">
        {/* <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">404</h1>
                 <p className="text-xl md:text-2xl text-gray-200 mt-4 drop-shadow-md">Page Not Found</p> */}
      </div>
    </div>
  );
};

export default ErrorPage;
