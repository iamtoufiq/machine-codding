import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ title, books }) => {
  return (
    <div className="shelf">
      <h2>{title}</h2>
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default Shelf;
