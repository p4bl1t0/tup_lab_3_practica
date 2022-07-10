import { useState } from "react";
import "./Books.css";
import BookItem from "./BookItem.js";
import BooksFilter from "../filter/BooksFilter";

const Books = ({ books }) => {
  const [yearFilter, setYearFilter] = useState("all");

  const onYearFilterChanged = (value) => {
    setYearFilter(value);
  };

  const bookMapping = (books) => {
    return books.map((book) => {
      return (
        <BookItem
          title={book.title}
          author={book.author}
          dateRead={book.dateRead}
          pageCount={book.pageCount}
          key={book.id}
        />
      );
    });
  };

  let booksFiltered;
  if (yearFilter === "all") {
    booksFiltered = bookMapping(books);
  } else {
    booksFiltered = bookMapping(
      books.filter((book) => {
        return book.dateRead.getFullYear().toString() === yearFilter;
      })
    );
  }

  return (
    <div className="books-container">
      <div>
        <BooksFilter
          yearFilterValue={yearFilter}
          onYearFilterChanged={onYearFilterChanged}
        />
      </div>
      <div className="book-list-container">
        {booksFiltered.length === 0 ? (
          <p>No leíste libros en el año {yearFilter}</p>
        ) : (
          booksFiltered
        )}
      </div>
    </div>
  );
};

export default Books;
