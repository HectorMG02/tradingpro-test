'use client';

import React from 'react';
import Image from 'next/image';
import SavedBookCard from '../Cards/SavedBookCard';
import PlaceholderCard from '../Cards/PlaceholderCard';
import useStore from '../../store';

export default function SavedBooksComponent() {
    const savedBooks = useStore((state) => state.savedBooks);
    const removeBookFromSaved = useStore((state) => state.removeBookFromSaved);

    const placeholders = new Array(6 - savedBooks.length).fill(0);

    return (
        <div className="bg-gray-500">
            <h2 className="text-2xl font-bold mb-3">Lista de lectura</h2>
            <div className="flex overflow-x-auto bg-scroll bg-gray-500 pb-10 gap-2 justify-center items-center">
                {savedBooks.map((book, index) => (
                    <SavedBookCard
                        book={book}
                        key={index}
                        onRemove={() => removeBookFromSaved(book.id)}
                    />
                ))}
                {placeholders.map((_, index) => (
                    <PlaceholderCard key={index} />
                ))}
            </div>
        </div>
    );
}
