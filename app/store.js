import { create } from "zustand";
import { useEffect } from "react";

// Estado inicial predeterminado
const defaultState = { savedBooks: [], selectedBook: null, isModalOpen: false };

// Función para cargar el estado desde localStorage
// Nota: Esta función ya no se llama directamente en la creación de la tienda.
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("savedBooksState");
  return savedState ? JSON.parse(savedState) : defaultState;
};

// Crea la tienda sin cargar inmediatamente desde localStorage
const useStore = create((set, get) => ({
  ...defaultState,
  toggleBookSaved: (bookToToggle) =>
    set((state) => {
      const isCurrentlySaved = state.savedBooks.some((book) => book.ISBN === bookToToggle.ISBN);
      const newState = {
        savedBooks: isCurrentlySaved
          ? state.savedBooks.filter((book) => book.ISBN !== bookToToggle.ISBN)
          : [...state.savedBooks, bookToToggle],
      };
      return newState;
    }),
  selectBook: (book) => {
    set({ selectedBook: book, isModalOpen: true });
  },
  deselectBook: () => {
    set({ selectedBook: null, isModalOpen: false });
  },
  // Nueva acción para establecer el estado directamente
  setState: (newState) => {
    set(newState);
  },
}));

// Hook personalizado para manejar localStorage
export const useHydratedStore = () => {
  const setState = useStore((state) => state.setState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const state = loadStateFromLocalStorage();
      setState(state);
    }
  }, [setState]);

  return useStore;
};

export default useStore;
