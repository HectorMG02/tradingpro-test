import create from 'zustand'

const useStore = create((set) => ({
  savedBooks: [],
  toggleBookSaved: (bookToToggle) => set((state) => {
    const isCurrentlySaved = state.savedBooks.some(book => book.ISBN === bookToToggle.ISBN);
    return {
      savedBooks: isCurrentlySaved
        ? state.savedBooks.filter(book => book.ISBN !== bookToToggle.ISBN)
        : [...state.savedBooks, bookToToggle],
    };
  }),
  selectedBook: null,
  isModalOpen: false,
  selectBook: (book) => set({ selectedBook: book, isModalOpen: true }),
  deselectBook: () => {
    console.log("llega")
    return set({ selectedBook: null, isModalOpen: false })
  }
}))

export default useStore;
