import { useEffect, useState } from 'react';
import { useBooksData } from "./hooks/useBooksData";
import useStore from "./store";




const useLogic = () => {
  const genres = [ 'Fantasía', 'Ciencia ficción', 'Zombies', 'Terror' ]

  const rawBooks = useBooksData(); // Libros originales sin filtrar
  const [books, setBooks] = useState(rawBooks); // Estado para libros filtrados
  // Nuevo estado para manejar el género seleccionado
  const [selectedGenre, setSelectedGenre] = useState('Todos');

  const selectBook = useStore((state) => state.selectBook);
  const initializeBooks = useStore((state) => state.initializeBooks);
  const savedBooks = useStore((state) => state.savedBooks);
  const selectedBook = useStore((state) => state.selectedBook);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const deselectBook = useStore((state) => state.deselectBook);
  const toggleBookSaved = useStore((state) => state.toggleBookSaved);

  useEffect(() => {
    initializeBooks();
  }, [initializeBooks]);

  const checkIsFavorite = (book) => {
    return savedBooks.some((savedBook) => savedBook.ISBN === book.ISBN);
  };

  const handleOpenModal = (book) => {
    selectBook(book);
  };

  const handleToggleBookSaved = async (book) => {
    await toggleBookSaved(book);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  useEffect(() => {
    if (selectedGenre === 'Todos') {
      setBooks(rawBooks);
    } else {
      setBooks(rawBooks.filter(book => book.book.genre === selectedGenre));
    }
  }, [selectedGenre, rawBooks]);


  return {
    books,
    selectedBook,
    isModalOpen,
    deselectBook,
    checkIsFavorite,
    handleOpenModal,
    handleToggleBookSaved,
    genres,
    handleGenreChange
  };
};

export default useLogic;
