import { ChangeEvent, useEffect, useState } from "react";
import { Books } from "./types";
import axios from "axios";
import { nanoid } from "nanoid";
import DisplayBook from "./components/displayBook";
import AddBook from "./components/addBook";
function App() {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const getBook = async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };
    getBook();
  }, []);

  return (
    <div className="container pt-3">
      <DisplayBook books={books} />
      <AddBook setBooks={setBooks} books={books} />
    </div>
  );
}

export default App;
