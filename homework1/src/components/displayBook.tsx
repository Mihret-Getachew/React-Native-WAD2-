import { Books } from "../types";

interface displayProp {
  books: Books[];
}
export default function DisplayBook({ books }: displayProp) {
  return (
    <>
      <h3>All Books</h3>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">ISBN</th>
            <th scope="col">Format</th>
            <th scope="col">Summary</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.isbn}</td>
              <td>{book.format}</td>
              <td>{book.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
