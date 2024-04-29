import React from "react";
import { Books } from "../types";
interface displayProp {
  books: Books[];
}
export default function DisplayBook({ books }: displayProp) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {book.title},{book.format},{book.genre},{book.id},{book.isbn},
          {book.summary}
        </div>
      ))}
    </div>
  );
}
