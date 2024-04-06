'use client';

import React from 'react';

const GenreSelector = ({ genres, selectedGenre, onGenreChange }) => {
    return (
        <select
            value={selectedGenre}
            onChange={onGenreChange}
            className="mb-4 p-2
            bg-gray-100/20
            rounded-lg
            shadow-md
            cursor-pointer
            hover:bg-gray-100/40
            focus:outline-none"
        >
            <option value="Todos">Todos</option>
            {genres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
    );
};

export default GenreSelector;
