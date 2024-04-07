import React from 'react';

const GenreSelector = ({ genres, selectedGenre, onGenreChange, total }) => {
    return (
        <div>
            <select
                value={selectedGenre}
                onChange={onGenreChange}
                className="p-2
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

            <div className="mb-3">
                {total > 0 ? (
                    <p className="text-gray-300">
                        Mostrando {total} {total === 1 ? 'libro' : 'libros'}
                    </p>
                ) : (
                    <p className="text-gray-300">No hay libros disponibles</p>
                )}
            </div>
        </div>
    );
};

export default GenreSelector;
