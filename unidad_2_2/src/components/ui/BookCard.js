import "./BookCard.css";

const BookCard = ({ children, key }) => {
  return <div className="book-item-container" key={key}>{children}</div>;
};

export default BookCard;
