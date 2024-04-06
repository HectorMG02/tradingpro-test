'use client'

import SavedBooksComponent from "./ui/SavedBooksComponent/SavedBooksComponent";
import BooksListComponent from "./ui/BooksListComponent/BooksListComponent";
import BookDetails from './ui/Modals/BookDetails';
import useLogic from './logic';

export default function Home() {
  const {
    books,
    selectedBook,
    isModalOpen,
    deselectBook,
    checkIsFavorite,
    handleOpenModal,
    handleToggleBookSaved
   } = useLogic();

  return (
    <div className="m-10">
      <SavedBooksComponent handleOpenModal={handleOpenModal} />
      <BooksListComponent 
            books={books}
            handleToggleBookSaved={handleToggleBookSaved}
            handleOpenModal={handleOpenModal}
            checkIsFavorite={checkIsFavorite}
      />

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
