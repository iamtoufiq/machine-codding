import { useState } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import { useGlobalHook } from "../Contexts";

const Main = ({ handleCategoryChanges, selecteds }) => {
  const { shelves } = useGlobalHook();
  return (
    <div className="bookshelf-container">
      <h1>My Bookshelf</h1>
      <Link to="/search">Search</Link>
      <select value={selecteds} onChange={handleCategoryChanges}>
        <option value="Read">Read</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="none">None</option>
      </select>
      {selecteds === "none" ? (
        shelves.map((shelf) => (
          <Shelf
            key={shelf.title}
            title={shelf.title}
            books={shelf.books}
            onCategoryChange={handleCategoryChanges}
          />
        ))
      ) : (
        <Shelf
          key={selecteds}
          title={selecteds}
          books={
            shelves.find((shelf) => shelf.title === selecteds)?.books || []
          }
          onCategoryChange={handleCategoryChanges}
        />
      )}
    </div>
  );
};

Main.propTypes = {
  handleCategoryChanges: PropTypes.func.isRequired,
};

export default Main;
