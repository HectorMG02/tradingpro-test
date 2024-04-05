import SavedBooksComponent from "./ui/SavedBooksComponent/SavedBooksComponent";
import BooksListComponent from "./ui/BooksListComponent/BooksListComponent";

export default function Home() {
  return (
    <div className="m-10">
      <SavedBooksComponent />
      <BooksListComponent />
    </div>
  )
}
