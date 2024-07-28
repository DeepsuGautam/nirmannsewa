import React from 'react';
import { FaHardHat } from 'react-icons/fa'; // Importing the construction hat icon from react-icons

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100">
      <div className="flex flex-col items-center">
        <FaHardHat className="w-16 h-16 text-orange-500 animate-bounce" />
        <p className="mt-4 text-orange-700 font-semibold text-lg">Loading...</p>
        <div className="flex mt-4 space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-200"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
