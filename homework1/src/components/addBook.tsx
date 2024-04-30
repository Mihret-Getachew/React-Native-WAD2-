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
    if (
      !newBook.title ||
      !newBook.format ||
      !newBook.genre ||
      !newBook.isbn ||
      !newBook.summary
    ) {
      setIsError("Could not add book");
      return;
    }
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
    <div className="container mt-5">
      <h3>Add New Book</h3>

      <input
        className="form-control mb-3"
        placeholder="Title"
        type="text"
        name="title"
        value={newBook.title}
        onChange={inputHandler}
      ></input>
      <input
        className="form-control mb-3"
        placeholder="Format"
        type="text"
        name="format"
        value={newBook.format}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="genre"
        className="form-control mb-3"
        placeholder="Genre"
        value={newBook.genre}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="isbn"
        className="form-control mb-3"
        placeholder="ISBN"
        value={newBook.isbn}
        onChange={inputHandler}
      ></input>
      <input
        type="text"
        name="summary"
        className="form-control mb-3"
        placeholder="Summary"
        value={newBook.summary}
        onChange={inputHandler}
      ></input>
      <button className="btn btn-primary mt-3" onClick={addBook}>
        Submit
      </button>
    </div>
  );
}
