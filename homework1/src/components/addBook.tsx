import React, { ChangeEvent, useState } from "react";
import { Books } from "../types";
import { nanoid } from "nanoid";
import axios from "axios";
interface addBookProps {
  books: Books[];
  setBooks: (books: Books[]) => void;
}

export default function AddBook({ setBooks, books }: addBookProps) {
  const [newBook, setNewBook] = useState<Books>({
    id: "",
    title: "",
    format: "",
    genre: "",
    summary: "",
    isbn: "",
  });
  const [isError, setIsError] = useState<string>("");
  const addBook = async () => {
    const addnewBook = { ...newBook, id: nanoid() };

    try {
      const response = await axios.post(
        "http://localhost:3001/books",
        addnewBook
      );
      if (response.status === 201) {
        setBooks([...books, newBook]);
      }
    } catch (e) {
      setIsError("coudn't fetch the data");
    }
    setNewBook({
      id: "",
      title: "",
      genre: "",
      summary: "",
      isbn: "",
      format: "",
    });
  };
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewBook({ ...newBook, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={newBook.title}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="format"
        value={newBook.format}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="genre"
        value={newBook.genre}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="isbn"
        value={newBook.isbn}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="summary"
        value={newBook.summary}
        onChange={inputHandler}
      ></input>
      <button onClick={addBook}>submit</button>
    </div>
  );
}
