"use client";

import React, { Suspense } from "react";
import PictureBookCard from "../Cards/PictureBookCard";
import PlaceholderCard from "../Cards/PlaceholderCard";
import useStore from "../../store";

export default function SavedBooksComponent({ handleOpenModal }) {
  const savedBooks = useStore((state) => state.savedBooks);
  const removeBookFromSaved = useStore((state) => state.removeBookFromSaved);

  const placeholdersLength =
    5 - savedBooks.length > 0 ? 5 - savedBooks.length : 0;
  const placeholders = new Array(placeholdersLength).fill(0);

  return (
    <div className="mt-10p-4 md:p-5 bg-blue-chill-900 rounded shadow-2xl">
      <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">
        Libros guardados
      </h2>
      <div
        className="overflow-x-auto flex space-x-4 py-4 px-2 
                scrollbar-show scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-500
            "
      >
        {savedBooks.map((book, index) => (
          <Suspense key={index} fallback={<PlaceholderCard />}>
            <PictureBookCard
              book={book}
              onRemove={() => removeBookFromSaved(book.id)}
              showBookDetails={() => handleOpenModal(book)}
            />
          </Suspense>
        ))}
        {placeholders.map((_, index) => (
          <PlaceholderCard key={index} />
        ))}
      </div>
    </div>
  );
}
