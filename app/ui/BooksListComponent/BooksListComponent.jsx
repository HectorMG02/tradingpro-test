'use client';

import React from 'react';
import BookCard from '../Cards/BookCard';
import BookCardSkeleton from '../Skeletons/BookCardSkeleton';

const BooksListComponent = ({
    books,
    handleToggleBookSaved,
    handleOpenModal,
    checkIsFavorite,
}) => {
    return (
        <div className="mt-10 bg-gray-500 p-5">
            <h2 className="text-2xl font-bold mb-3">Lista de libros</h2>
            <div className="grid grid-cols-3 gap-4">
                {books?.length > 0
                    ? books.map((book, index) => (
                          <div key={index}>
                              <BookCard
                                  book={book.book}
                                  showBookDetails={() =>
                                      handleOpenModal(book.book)
                                  }
                                  isFavorite={checkIsFavorite(book.book)}
                                  toggleFavorite={handleToggleBookSaved}
                              />
                          </div>
                      ))
                    : new Array(6)
                          .fill(0)
                          .map((_, index) => <BookCardSkeleton key={index} />)}
            </div>
        </div>
    );
};

export default BooksListComponent;
