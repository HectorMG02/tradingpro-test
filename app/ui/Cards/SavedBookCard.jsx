import React from "react";
import Image from "next/image";

const SavedBookCard = ({ book, showBookDetails }) => {
  return (
    <div
      key={book.id}
      className="flex-none w-44 h-60 max-h-60 mx-4 bg-gray-100/20 rounded-lg shadow-md
        cursor-pointer
        hover:bg-gray-100/40 mt-3
        hover:shadow-lg hover:scale-105 transform origin-center transition-transform duration-300 ease-in-out 
    "
      onClick={showBookDetails}
    >
      <Image
        src={book.cover}
        alt={book.title}
        className="w-full rounded-lg"
        width={200}
        height={200}
      />
    </div>
  );
};

export default SavedBookCard;
