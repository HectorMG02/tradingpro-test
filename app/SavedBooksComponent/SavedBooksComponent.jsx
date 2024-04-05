import Image from "next/image";
import BookCard from "../ui/Cards/BookCard";
import PlaceholderCard from "../ui/Cards/PlaceholderCard";


export default function SavedBooksComponent() {
  // Asumimos que tienes una lista de libros guardados (aquí están simulados)
  const savedBooks = [
    { id: 1, title: "Libro 1", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg" },
    { id: 2, title: "Libro 2", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg" },
    { id: 3, title: "Libro 3", coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg" },
  ];

  const placeholders = new Array(5).fill(0); // Crear placeholders

  return (
    <div className="bg-gray-500 p-5">
      <h2 className="text-2xl font-bold mb-3">Lista de lectura</h2>
      <div className="flex overflow-x-auto
        bg-scroll bg-gray-500 pb-4 gap-2
      ">
        {savedBooks.map((book, index) => (
         <BookCard book={book} key={index} />
        ))}
        {placeholders.map((_, index) => (
         <PlaceholderCard key={index} />
        ))}
      </div>
    </div>
  );
}
