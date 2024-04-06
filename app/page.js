"use client";

import SavedBooksComponent from "./ui/SavedBooksComponent/SavedBooksComponent";
import BooksListComponent from "./ui/BooksListComponent/BooksListComponent";
import BookDetails from "./ui/Modals/BookDetails";
import DashboardSkeleton from "./ui/Skeletons/DashboardSkeleton";
import useLogic from "./logic";

export default function Home() {
  const {
    books,
    selectedBook,
    isModalOpen,
    deselectBook,
    checkIsFavorite,
    handleOpenModal,
    handleToggleBookSaved,
    genres,
    selectedGenre,
    handleGenreChange,
  } = useLogic();

  return (
    <div className="m-10">
      {books.length > 0 ? (
        <>
          {" "}
          <SavedBooksComponent handleOpenModal={handleOpenModal} />
          <BooksListComponent
            books={books}
            handleToggleBookSaved={handleToggleBookSaved}
            handleOpenModal={handleOpenModal}
            checkIsFavorite={checkIsFavorite}
            genres={genres}
            selectedGenre={selectedGenre}
            handleGenreChange={handleGenreChange}
          />
        </>
      ) : (
        <>
          <DashboardSkeleton />
        </>
      )}

      {isModalOpen && selectedBook && (
        <BookDetails
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={deselectBook}
          toggleFavorite={handleToggleBookSaved}
          isFavorite={checkIsFavorite(selectedBook)}
        />
      )}
    </div>
  );
}
