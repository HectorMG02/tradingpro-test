import React from 'react';
import Image from 'next/image';
import HearthIcon from '../Icons/HearthIcon';

const BookCard = ({ book, showBookDetails, isFavorite, toggleFavorite }) => {
    const formatSynopsis = (synopsis, title) => {
        const titleLimit = 20;
        const synopsisLimit = 50;

        if (synopsis.length > synopsisLimit && title.length > titleLimit) {
            return `${synopsis.substring(0, synopsisLimit)}...`;
        }

        return synopsis;
    };

    return (
        <div
            className="flex flex-col h-52 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row
        transition-transform duration-500 ease-in-out transform hover:scale-105 overflow-hidden cursor-pointer hover:shadow-xl
    "
            onClick={showBookDetails}
        >
            <div className="rounded-t-lg md:rounded-none md:rounded-l-lg relative md:w-300px h-full bg-neutral-200 dark:bg-neutral-800">
                <Image
                    src={book.cover}
                    alt={book.title}
                    width={200}
                    height={200}
                    objectFit="cover"
                    className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg h-full w-full"
                />
            </div>
            <div className="flex flex-col justify-start p-6">
                <div className="flex justify-between items-start">
                    <h5 className="text-xl font-medium">{book.title}</h5>
                    <HearthIcon
                        isFavorite={isFavorite}
                        toggleFavorite={() => {
                            toggleFavorite(book);
                        }}
                    />
                </div>
                <p className="text-xs mb-2 text-neutral-500 dark:text-neutral-300">
                    {book.author?.name}
                </p>
                <div
                    className={`flex items-center justify-center text-center transition-transform duration-500 ease-in-out ${book.showDescription ? 'rotate-y-0' : 'rotate-y-180'}`}
                >
                    <p className="text-left">
                        {formatSynopsis(book.synopsis, book.title)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
