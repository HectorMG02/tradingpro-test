import BookItem from "./BookItem";

const books = [
  {
    id: 1,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    coverUrl:
      "https://pics.filmaffinity.com/One_Piece_Serie_de_TV-647985949-large.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    coverUrl:
      "https://pics.filmaffinity.com/One_Piece_Serie_de_TV-647985949-large.jpg",
  },
];

export default function BookList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}
