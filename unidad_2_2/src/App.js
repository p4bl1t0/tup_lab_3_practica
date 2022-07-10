import { useState } from "react";
import "./App.css";
import Books from "./components/books/Books";
import BookForm from "./components/books/BookForm";

const DUMMY_BOOKS = [
  {
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
    id: 1,
  },
  {
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
    id: 2,
  },
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
    id: 3,
  },
  {
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
    id: 4,
  },
];

const App = () => {
  const [books, setBooks] = useState(DUMMY_BOOKS);
  const [showForm, setShowForm] = useState(false);
  console.log(books);

  const bookAddedHandler = (bookData) => {
    const newBookArray = [bookData, ...books];
    setBooks(newBookArray);
  };

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="App">
      <h2>Books Champion App</h2>
      <p>Quiero Leer Libros</p>
      {showForm ? (
        <BookForm
          onBookAdded={bookAddedHandler}
          onCancel={setShowForm}
        ></BookForm>
      ) : (
        <button className="add-lecture" type="submit" onClick={handleShowForm}>
          Agregar lectura
        </button>
      )}
      <Books books={books} />
    </div>
  );
};

export default App;
