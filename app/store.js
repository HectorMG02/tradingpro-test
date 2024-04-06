import {create} from 'zustand'
import localForage from 'localforage'

localForage.config({
  name: 'tradingproBooks',
  storeName: 'books',
});

const useStore = create(set => ({
  savedBooks: [],
  initializeBooks: async () => {
    const savedBooks = await localForage.getItem('savedBooks') || [];
    set({ savedBooks });
  },
  toggleBookSaved: async (bookToToggle) => {
    set(state => {
      const isCurrentlySaved = state.savedBooks.some(book => book.ISBN === bookToToggle.ISBN);
      const updatedSavedBooks = isCurrentlySaved
        ? state.savedBooks.filter(book => book.ISBN !== bookToToggle.ISBN)
        : [...state.savedBooks, bookToToggle];
      
      localForage.setItem('savedBooks', updatedSavedBooks);

      return {
        savedBooks: updatedSavedBooks,
      };
    });
  },
  selectedBook: null,
  isModalOpen: false,
  selectBook: (book) => set({ selectedBook: book, isModalOpen: true }),
  deselectBook: () => set({ selectedBook: null, isModalOpen: false }),
}));

export default useStore;
