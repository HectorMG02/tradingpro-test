'use client';

import React, { useState } from 'react';
import BookCard from '../Cards/BookCard';
import GenreSelector from '../GenreSelector/GenreSelector'; // Asegúrate de ajustar la ruta de importación según tu estructura

const BooksListComponent = ({
    books,
    handleToggleBookSaved,
    handleOpenModal,
    checkIsFavorite,
    genres,
    handleGenreChange,
    selectedGenre,
}) => {
    const onGenreChange = (event) => {
        const genre = event.target.value;
        handleGenreChange(genre);
    };

    return (
        <div className="mt-10 bg-gray-500 p-5">
            <h2 className="text-2xl font-bold mb-3">Lista de libros</h2>
            <GenreSelector
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreChange={onGenreChange}
                total={books.length}
            />
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                {books.map((book, index) => (
                    <BookCard
                        key={index}
                        book={book.book}
                        showBookDetails={() => handleOpenModal(book.book)}
                        isFavorite={checkIsFavorite(book.book)}
                        toggleFavorite={handleToggleBookSaved}
                    />
                ))}
            </div>
        </div>
    );
};

export default BooksListComponent;
