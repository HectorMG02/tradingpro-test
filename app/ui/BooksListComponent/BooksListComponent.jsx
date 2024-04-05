'use client';

import React, { useState } from 'react';
import BookCard from '../Cards/BookCard';
import BookCardSkeleton from '../Skeletons/BookCardSkeleton';
import BookDetails from '../Modals/BookDetails';
import { useBooksData } from '../../hooks/useBooksData';
import useStore from '../../store';

const BooksListComponent = () => {
    const books = useBooksData();
    const selectBook = useStore((state) => state.selectBook);
    const savedBooks = useStore((state) => state.savedBooks);
    const selectedBook = useStore((state) => state.selectedBook);
    const isModalOpen = useStore((state) => state.isModalOpen);
    const deselectBook = useStore((state) => state.deselectBook);
    const toggleBookSaved = useStore((state) => state.toggleBookSaved);

    const checkIsFavorite = (book) => {
        return savedBooks.some((savedBook) => savedBook.id === book.id);
    };

    const handleOpenModal = (book) => {
        selectBook(book);
    };

    const handleToggleBookSaved = (book) => {
        toggleBookSaved(book);
    };

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
                                  toggleBookFavorite={() =>
                                      handleToggleBookSaved(book.book)
                                  }
                              />
                          </div>
                      ))
                    : new Array(6)
                          .fill(0)
                          .map((_, index) => <BookCardSkeleton key={index} />)}
            </div>
            {isModalOpen && selectedBook && (
                <BookDetails
                    book={selectedBook}
                    isOpen={isModalOpen}
                    onClose={deselectBook}
                />
            )}
        </div>
    );
};

export default BooksListComponent;
