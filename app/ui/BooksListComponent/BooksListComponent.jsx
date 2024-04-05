'use client'

import React from 'react'
import BookCard from '../Cards/BookCard'
import BookCardSkeleton from '../Skeletons/BookCardSkeleton'
import { useBooksData } from '../../hooks/useBooksData'

const BooksListComponent = () => {
  const books = useBooksData();

  console.log(books)

  return (
    <div className='mt-10 bg-gray-500 p-5'>
      <h2 className='text-2xl font-bold mb-3'>Lista de libros</h2>
      <div className='grid grid-cols-3 gap-4'>
        {/* {books?.length > 0 ? (
          books.map((book, index) => (
            <BookCard key={index} book={book.book} />
          ))
        ) : (
          new Array(6).fill(0).map((_, index) => (
            <BookCardSkeleton key={index} />
          ))
        )} */}
         <BookCardSkeleton />
         <BookCard book={books[0].book} />
      </div>
    </div>
  )
}

export default BooksListComponent
