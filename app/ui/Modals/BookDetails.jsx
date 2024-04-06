import React from "react";
import Image from "next/image";
import HearthIcon from "../Icons/HearthIcon";
import useStore from "../../store";

const BookDetails = ({ book, isOpen, onClose, toggleFavorite, isFavorite }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-700/90 rounded-lg shadow-xl flex flex-col md:flex-row max-w-4xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-800/50 text-center p-6 flex flex-col justify-between">
          <div className="flex-1">
            <Image
              src={book.cover}
              alt={book.title}
              width={200}
              height={200}
              priority
              className="object-cover h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
          </div>
          <div className="mt-4">
            <p>ISBN</p>
            <p>{book.ISBN}</p>
          </div>
        </div>
        <div className="p-8 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{book.title}</h2>
              <p className="mt-2">Autor: {book.author.name}</p>
              <p>Género: {book.genre}</p>
              <p>Páginas: {book.pages}</p>
            </div>
            <HearthIcon
              isFavorite={isFavorite}
              toggleFavorite={() => {
                toggleFavorite(book);
              }}
            />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-medium">Synopsis</h3>
            <p className="mt-2 text-justify">{book.synopsis}</p>
          </div>
          {book.author.otherBooks && book.author.otherBooks.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xl font-medium">Otros libros</h4>
              <ul className="list-disc pl-5 mt-2">
                {book.author.otherBooks.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={onClose}
            className="mt-6 py-2 px-4 bg-gray-800
                    absolute right-5 bottom-5
            rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
