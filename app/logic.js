import { useEffect, useState } from "react";
import { useBooksData } from "./hooks/useBooksData";
import useStore from "./store";

const useLogic = () => {
  const rawBooks = useBooksData(); 
  const [books, setBooks] = useState(rawBooks);

  const selectBook = useStore((state) => state.selectBook);
  const initializeBooks = useStore((state) => state.initializeBooks);
  const savedBooks = useStore((state) => state.savedBooks);
  const selectedBook = useStore((state) => state.selectedBook);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const deselectBook = useStore((state) => state.deselectBook);
  const toggleBookSaved = useStore((state) => state.toggleBookSaved);
  
  const genres = useStore((state) => state.genres);
  const selectedGenre = useStore(state => state.selectedGenre);
  const setSelectedGenre = useStore(state => state.setSelectedGenre);

  useEffect(() => {
    initializeBooks();
  }, [initializeBooks]);

  useEffect(() => {
    const filteredBooks = selectedGenre === "Todos" ? rawBooks : rawBooks.filter((book) => book.book.genre === selectedGenre);
    setBooks(filteredBooks);
  }, [selectedGenre, rawBooks]);

  const checkIsFavorite = (book) => {
    return savedBooks.some((savedBook) => savedBook.ISBN === book.ISBN);
  };

  const handleOpenModal = (book) => {
    selectBook(book);
  };

  const handleToggleBookSaved = async (book) => {
    await toggleBookSaved(book);
  };

  const handleGenreChange = async (genre) => {
    await setSelectedGenre(genre);
  };

  useEffect(() => {
      document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  return {
    books,
    selectedBook,
    isModalOpen,
    deselectBook,
    checkIsFavorite,
    handleOpenModal,
    handleToggleBookSaved,
    genres,
    handleGenreChange,
    selectedGenre
  };
};

export default useLogic;
