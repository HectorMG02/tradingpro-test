'use client';

import React, { Suspense } from 'react';
import SavedBookCard from '../Cards/SavedBookCard';
import PlaceholderCard from '../Cards/PlaceholderCard';
import useStore from '../../store';

export default function SavedBooksComponent({ handleOpenModal }) {
    const savedBooks = useStore((state) => state.savedBooks);
    const removeBookFromSaved = useStore((state) => state.removeBookFromSaved);

    const placeholdersLength =
        6 - savedBooks.length > 0 ? 6 - savedBooks.length : 0;

    const placeholders = new Array(placeholdersLength).fill(0);

    return (
        <div className="mt-10 bg-gray-500 p-5">
            <h2 className="text-2xl font-bold mb-3">Lista de libros</h2>
            <div className="flex overflow-x-auto overflow-y-hidden bg-scroll bg-gray-500 pb-14 gap-2 justify-center items-center">
                {savedBooks.map((book, index) => (
                    <Suspense key={index} fallback={<PlaceholderCard />}>
                        <SavedBookCard
                            book={book}
                            key={index}
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
