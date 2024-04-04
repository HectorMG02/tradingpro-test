import Image from "next/image";

export default function BookItem({ book }) {
  return (
    <div className="border rounded shadow hover:shadow-md transition duration-200 p-3 flex flex-col items-center">
      <Image
        src={book.coverUrl}
        alt={`Portada de ${book.title}`}
        className="w-32 h-48 object-cover mb-2"
        width={32}
        height={48}
      />
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <button className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Añadir a la Lista
      </button>
    </div>
  );
}
