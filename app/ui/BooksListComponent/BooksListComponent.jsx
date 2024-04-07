import React from "react";
import BookCard from "../Cards/BookCard/BookCard";
import GenreSelector from "../GenreSelector/GenreSelector";
import PictureBookCard from "../Cards/PictureBookCard/PictureBookCard";

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
    <div
      className="mt-10 p-5 bg-main-color-800 
        rounded shadow-2xl"
    >
      <h2 className="text-2xl font-bold mb-3 text-white">Lista de libros</h2>
      <GenreSelector
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={onGenreChange}
        total={books.length}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index}>
            <div className="hidden md:block">
              <BookCard
                key={index}
                book={book.book}
                showBookDetails={() => handleOpenModal(book.book)}
                isFavorite={checkIsFavorite(book.book)}
                toggleFavorite={handleToggleBookSaved}
              />
            </div>
            <div className="md:hidden justify-center items-center flex flex-col w-full h-full">
              <PictureBookCard
                key={index}
                book={book.book}
                showBookDetails={() => handleOpenModal(book.book)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksListComponent;
