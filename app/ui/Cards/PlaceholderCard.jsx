import React from "react";

const PlaceholderCard = () => {
  return (
    <div
      className="flex-none w-44 h-64 max-h-64 mt-10 mx-4 rounded-lg flex justify-center items-center border-dashed border-4 border-gray-300
      hover:border-gray-400 transition-colors duration-300 ease-in-out
    "
    >
      <span className="text-white font-bold">Empty</span>
    </div>
  );
};

export default PlaceholderCard;
