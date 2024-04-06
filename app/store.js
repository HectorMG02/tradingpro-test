import create from "zustand";

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("savedBooksState", JSON.stringify(state));
};

const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("savedBooksState");
  return savedState
    ? JSON.parse(savedState)
    : { savedBooks: [], selectedBook: null, isModalOpen: false };
};

const useStore = create((set, get) => ({
  ...loadStateFromLocalStorage(),
  toggleBookSaved: (bookToToggle) =>
    set((state) => {
      const isCurrentlySaved = state.savedBooks.some(
        (book) => book.ISBN === bookToToggle.ISBN,
      );
      const newState = {
        savedBooks: isCurrentlySaved
          ? state.savedBooks.filter((book) => book.ISBN !== bookToToggle.ISBN)
          : [...state.savedBooks, bookToToggle],
      };
      saveStateToLocalStorage({ ...get(), ...newState });
      return newState;
    }),
  selectBook: (book) => {
    const newState = { selectedBook: book, isModalOpen: true };
    saveStateToLocalStorage({ ...get(), ...newState });
    set(newState);
  },
  deselectBook: () => {
    const newState = { selectedBook: null, isModalOpen: false };
    console.log("llega");
    saveStateToLocalStorage({ ...get(), ...newState });
    set(newState);
  },
}));

 

export default useStore;
