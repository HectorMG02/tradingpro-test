import React from 'react';
import Image from 'next/image';
import HearthIcon from '../Icons/HearthIcon';

const BookDetails = ({ book, isOpen, onClose, toggleFavorite, isFavorite }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-main-color-900 bg-opacity-50 overflow-y-auto bg-scroll h-full w-full flex justify-center items-center z-10"
            onClick={onClose}
        >
            <div
                className="relative bg-main-color-700/90 rounded-lg shadow-xl flex flex-col sm:flex-row max-w-4xl mx-auto overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-gray-800/50 text-center p-4 sm:p-6  flex flex-col justify-between">
                    <div className="flex-1 mt-20 sm:mt-0">
                        <Image
                            src={book.cover}
                            alt={book.title}
                            width={200}
                            height={200}
                            priority
                            className="object-cover mx-auto h-full rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                        />
                    </div>
                    <div className="mt-4">
                        <p className=" text-white">ISBN</p>
                        <p className="text-gray-300">{book.ISBN}</p>
                    </div>
                </div>
                <div className="p-4 sm:p-8 flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold md:w-full sm:w-[90%] text-white">
                                {book.title}
                            </h2>
                            <div className="text-gray-300">
                                <p className="mt-2">
                                    Autor: {book.author.name}
                                </p>
                                <p>Género: {book.genre}</p>
                                <p>Páginas: {book.pages}</p>
                            </div>
                        </div>
                        <div className="w-8 h-8 absolute float-end right-2">
                            <HearthIcon
                                isFavorite={isFavorite}
                                toggleFavorite={() => {
                                    toggleFavorite(book);
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg sm:text-xl font-medium text-white">
                            Synopsis
                        </h3>
                        <p
                            className="mt-2 text-justify
                          mr-10 sm:mr-0 sm:text-left 
                          break-word text-sm sm:text-base
                          text-gray-300
                        "
                        >
                            {book.synopsis}
                        </p>
                    </div>
                    {book.author.otherBooks &&
                        book.author.otherBooks.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-lg sm:text-xl font-medium text-white">
                                    Otros libros
                                </h4>
                                <ul className="list-disc pl-5 mt-2 text-gray-300">
                                    {book.author.otherBooks.map(
                                        (title, index) => (
                                            <li key={index}>{title}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    <button
                        onClick={onClose}
                        className="relative 
                        mt-6 py-2 px-4 bg-main-color-400 rounded hover:bg-main-color-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 float-end"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
