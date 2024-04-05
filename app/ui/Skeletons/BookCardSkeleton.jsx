import React from 'react';

const BookCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row animate-pulse">
    <div className="rounded-t-lg md:rounded-none md:rounded-l-lg relative md:w-44 h-full bg-gray-300" />
    
    <div className="flex flex-col justify-start p-6 space-y-3">
      <div className="flex justify-between items-start mt-1">
        <div className="h-6 w-40 bg-gray-300 rounded"></div> 
        <div className="h-6 w-6 ml-28">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentcolor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
        </div>
      </div>
      <div className="h-3 w-16 bg-gray-300 rounded"></div>
      <div className="mt-5">
      <div className="h-3 my-2 bg-gray-300 rounded w-full"></div>
      <div className="h-3 my-2 bg-gray-300 rounded w-52"></div>
      </div>
    </div>
  </div>
  )
}

export default BookCardSkeleton;
