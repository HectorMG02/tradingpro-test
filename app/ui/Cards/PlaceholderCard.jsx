import React from 'react';

const PlaceholderCard = () => {
    return (
        <div
            className="flex-none w-44 sm:w-55 md:w-44 lg:w-48 xl:w-52 2xl:w-56
            h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 
            lg:mt-3 md:mt-4 sm:mt-10 mt-3 mx-4 rounded-lg flex justify-center items-center border-dashed border-4 border-gray-300
      hover:border-gray-400 transition-colors duration-300 ease-in-out
    "
        >
            <span className="text-white font-bold">Empty</span>
        </div>
    );
};

export default PlaceholderCard;
