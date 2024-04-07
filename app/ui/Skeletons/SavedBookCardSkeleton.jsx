import React from 'react';

const SavedBookCardSkeleton = () => {
    return (
        <div
            className="
    border-gray-300 hover:border-gray-400 
    flex-none mx-2 my-3 bg-gray-100/20 rounded-lg shadow-md cursor-pointer hover:bg-gray-100/40 hover:shadow-lg hover:scale-105 transform origin-center transition-transform duration-300 ease-in-out
      w-44 sm:w-55 md:w-44 lg:w-48 xl:w-52 2xl:w-56
      h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80
    "
        ></div>
    );
};

export default SavedBookCardSkeleton;
