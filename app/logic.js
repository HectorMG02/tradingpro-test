import { useBooksData } from "./hooks/useBooksData";
import useStore from "./store";

const useLogic = () => {
  const books = useBooksData();
  const selectBook = useStore((state) => state.selectBook);
  const savedBooks = useStore((state) => state.savedBooks);
  const selectedBook = useStore((state) => state.selectedBook);
  const isModalOpen = useStore((state) => state.isModalOpen);
  const deselectBook = useStore((state) => state.deselectBook);
  const toggleBookSaved = useStore((state) => state.toggleBookSaved);

  const checkIsFavorite = (book) => {
    return savedBooks.some((savedBook) => savedBook.ISBN === book.ISBN);
  };

  const handleOpenModal = (book) => {
    selectBook(book);
  };

  const handleToggleBookSaved = (book) => {
    toggleBookSaved(book);
  };

  return {
    books,
    selectedBook,
    isModalOpen,
    deselectBook,
    checkIsFavorite,
    handleOpenModal,
    handleToggleBookSaved,
  };
};

export default useLogic;
