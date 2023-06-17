import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { title, author, image } = book;

  return (
    <div className="book">
      <img src={image} alt={title} />
      <div className="book-details">
        <h3>{title}</h3>
        <p>{author}</p>

        <hr />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default Book;
