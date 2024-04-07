import { create } from "zustand";
import localForage from "localforage";

localForage.config({
  name: "tradingProBooks",
  storeName: "books",
});

const genres = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];

const channel =
  typeof window !== "undefined"
    ? new BroadcastChannel("booklist_channel")
    : null;

const useStore = create((set, get) => ({
  savedBooks: [],
  genres,
  selectedGenre: "Todos",
  initializeBooks: async () => {
    const savedBooks = (await localForage.getItem("savedBooks")) || [];
    const selectedGenre =
      (await localForage.getItem("selectedGenre")) || "Todos";
    set({ savedBooks, selectedGenre });
  },
  toggleBookSaved: async (bookToToggle) => {
    const { savedBooks } = get();
    const isCurrentlySaved = savedBooks.some(
      (book) => book.ISBN === bookToToggle.ISBN,
    );
    const updatedSavedBooks = isCurrentlySaved
      ? savedBooks.filter((book) => book.ISBN !== bookToToggle.ISBN)
      : [...savedBooks, bookToToggle];

    await localForage.setItem("savedBooks", updatedSavedBooks);
    set({ savedBooks: updatedSavedBooks });

    channel?.postMessage({ type: "update" });
  },
  setSelectedGenre: async (genre) => {
    await localForage.setItem("selectedGenre", genre);
    set({ selectedGenre: genre });
    channel?.postMessage({ type: "SET_SELECTED_GENRE", genre });
  },
  selectedBook: null,
  isModalOpen: false,
  selectBook: (book) => set({ selectedBook: book, isModalOpen: true }),
  deselectBook: () => set({ selectedBook: null, isModalOpen: false }),
}));

channel?.addEventListener("message", async (event) => {
  switch (event.data.type) {
    case "update":
      const savedBooks = await localForage.getItem("savedBooks");
      useStore.setState({ savedBooks });
      break;
    case "SET_SELECTED_GENRE":
      const selectedGenre = event.data.genre;
      useStore.setState({ selectedGenre });
      break;
    default:
      break;
  }
});

export default useStore;
