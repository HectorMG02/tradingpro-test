import React from 'react'
import Image from 'next/image'

const BookCard = ({book}) => {
  return (
    <div
    key={book.id}
    className="flex-none w-44 h-60 mr-4 bg-gray-100/20 rounded-lg shadow-md
        cursor-pointer
        hover:bg-gray-100/40
        hover:shadow-lg hover:scale-105 transform origin-center transition-transform duration-300 ease-in-out 
    "
  >
    <h3 className="text-lg text-center font-semibold my-3">{book.title}</h3>
    <Image
      src={book.coverUrl}
      alt={book.title}
      className="w-full h-full object-cover rounded-lg"
        width={200}
        height={200}
    />
  </div>
  )
}

export default BookCard