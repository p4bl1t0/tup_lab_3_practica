import "./BookForm.css";
import { useState } from "react";

const BookForm = ({ onBookAdded, onCancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };
  const pagesChangeHandler = (event) => {
    setPages(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title,
      author,
      pages,
      dateRead: new Date(date),
      id: Math.random().toString(),
    };
    onBookAdded(bookData);
    setTitle("");
    setAuthor("");
    setPages(0);
    setDate("");
  };

  const handleShowForm = (e) => {
    e.preventDefault();
    onCancel(false);
  };

  return (
    <div className="new-book">
      <form onSubmit={submitHandler}>
        <div className="new-book-controls">
          <div className="new-book-control">
            <label>Título</label>
            <input onChange={titleChangeHandler} type="text" value={title} />
          </div>
          <div className="new-book-control">
            <label>Autor</label>
            <input onChange={authorChangeHandler} type="text" value={author} />
          </div>
          <div className="new-book-control">
            <label>Páginas</label>
            <input
              onChange={pagesChangeHandler}
              type="number"
              min="1"
              step="1"
              value={pages}
            />
          </div>
          <div className="new-book-control">
            <label>¿Cuándo terminaste de leerlo?</label>
            <input
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
            />
          </div>
        </div>
        <div className="new-book-actions">
          <button className="cancel" onClick={handleShowForm}>
            Cancelar
          </button>
          <button type="submit">Guardar lectura</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
