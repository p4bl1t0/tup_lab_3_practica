import "./BookItem.css";
import DateRead from "./DateRead";
import BookCard from "../ui/BookCard";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  return (
    <BookCard className="book-item-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
      <button>Clickeame</button>
    </BookCard>
  );
};

export default BookItem;
