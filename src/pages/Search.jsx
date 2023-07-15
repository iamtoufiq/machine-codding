import { useLocation } from "react-router-dom";
import { BookCard } from "../components/bookcard/BookCard";
import { useFilter } from "../context/SearchFilterContext";
import "./Pages.css";

export const Search = () => {
  const { filteredBooks } = useFilter();
  const location = useLocation();
  console.log(location?.pathname === "/search");

  return (
    <>
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id}>
              <BookCard bookObj={book} />
            </div>
          ))
        ) : (
          <h1>Enter Book or Author or Category Name...</h1>
        )}
      </div>
    </>
  );
};
