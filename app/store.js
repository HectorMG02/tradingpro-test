import create from 'zustand'

const useStore = create((set) => ({
  savedBooks: [],
  toggleBookSaved: (bookToToggle) => set((state) => {
    const isCurrentlySaved = state.savedBooks.some(book => book.id === bookToToggle.id);
    return {
      savedBooks: isCurrentlySaved
        ? state.savedBooks.filter(book => book.id !== bookToToggle.id)
        : [...state.savedBooks, bookToToggle],
    };
  }),
  selectedBook: null,
  isModalOpen: false,
  selectBook: (book) => set({ selectedBook: book, isModalOpen: true }),
  deselectBook: () => set({ selectedBook: null, isModalOpen: false }),
}))

export default useStore;
