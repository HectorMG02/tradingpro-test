'use client'

import React, { useState } from 'react';
import BookCard from '../Cards/BookCard';
import BookCardSkeleton from '../Skeletons/BookCardSkeleton';
import BookDetails from '../Modals/BookDetails'; // Asegúrate de ajustar la ruta de importación
import { useBooksData } from '../../hooks/useBooksData';

const BooksListComponent = () => {
  const books = useBooksData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Función para abrir el modal y establecer el libro seleccionado
  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  return (
    <div className='mt-10 bg-gray-500 p-5'>
      <h2 className='text-2xl font-bold mb-3'>Lista de libros</h2>
      <div className='grid grid-cols-3 gap-4'>
        {books?.length > 0 ? (
          books.map((book, index) => (
            // Modifica BookCard para aceptar y manejar onClick o crear un wrapper aquí
            <div key={index}>
              <BookCard book={book.book} showBookDetails={() => handleOpenModal(book.book)} />
            </div>
          ))
        ) : (
          new Array(6).fill(0).map((_, index) => (
            <BookCardSkeleton key={index} />
          ))
        )} 
      </div>
      {isModalOpen && selectedBook && (
        <BookDetails book={selectedBook} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default BooksListComponent;
