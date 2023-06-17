import { useState } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { useGlobalHook } from "../Contexts";

const Search = ({ onCategoryChange }) => {
  const { shelves, selecteds, handleSearch } = useGlobalHook();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = shelves.flatMap((shelf) =>
    shelf.books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Search Books</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search books..."
      />
      <Link to="/">
        <button>Back</button>
      </Link>

      {selecteds === "none" ? (
        <Shelf
          key="Search Results"
          title="Search Results"
          books={filteredBooks}
          onCategoryChange={onCategoryChange}
        />
      ) : (
        <Shelf
          key={selecteds}
          title={selecteds}
          books={filteredBooks.filter((book) => book.category === selecteds)}
          onCategoryChange={onCategoryChange}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default Search;
