import { useEffect, useState } from "react";
import { data } from "../lib/data.js";

export const useBooksData = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks(data.library);
    }, 1000);
  }, []);

  return books;
};
