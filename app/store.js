import {create} from 'zustand';
import localForage from 'localforage';

localForage.config({
  name: 'tradingProBooks',
  storeName: 'books',
});


const channel = typeof window !== 'undefined' ? new BroadcastChannel('booklist_channel') : null;

const useStore = create((set, get) => ({
  savedBooks: [],
  initializeBooks: async () => {
    const savedBooks = await localForage.getItem('savedBooks') || [];
    set({ savedBooks });
  },
  toggleBookSaved: async (bookToToggle) => {
    const { savedBooks } = get();
    const isCurrentlySaved = savedBooks.some(book => book.ISBN === bookToToggle.ISBN);
    const updatedSavedBooks = isCurrentlySaved
      ? savedBooks.filter(book => book.ISBN !== bookToToggle.ISBN)
      : [...savedBooks, bookToToggle];

    await localForage.setItem('savedBooks', updatedSavedBooks);
    set({ savedBooks: updatedSavedBooks });

    channel?.postMessage('update');
  },
  selectedBook: null,
  isModalOpen: false,
  selectBook: (book) => set({ selectedBook: book, isModalOpen: true }),
  deselectBook: () => set({ selectedBook: null, isModalOpen: false }),
}));


channel?.addEventListener('message', async (event) => {
  if (event.data === 'update') {
    const savedBooks = await localForage.getItem('savedBooks');
    useStore.setState({ savedBooks });
  }
});

export default useStore;
