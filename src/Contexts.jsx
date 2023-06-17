import { createContext, useState } from "react";
import { useContext } from "react";
const context = createContext();

const Contexts = ({ children }) => {
  const [selecteds, setSelecteds] = useState("none");
  const handleCategoryChange = (e) => {
    setSelecteds(e.target.value);
  };
  const onSearch = () => {
    console.log("serach");
  };
  const books = [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg",
      category: "Read",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg",
      category: "Read",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg",
      category: "Read",
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495876752l/34152729.jpg",
      category: "Currently Reading",
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495876752l/34152729.jpg",
      category: "Currently Reading",
    },
    {
      id: 6,
      title: "Book 6",
      author: "Author 6",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495876752l/34152729.jpg",
      category: "Currently Reading",
    },
    {
      id: 7,
      title: "Book 7",
      author: "Author 7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SUbW6kgcfRv62Emyh2MR9oCdKZDeSfhieg&usqp=CAU",
      category: "Want to Read",
    },
    {
      id: 8,
      title: "Book 8",
      author: "Author 8",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SUbW6kgcfRv62Emyh2MR9oCdKZDeSfhieg&usqp=CAU",
      category: "Want to Read",
    },
    {
      id: 9,
      title: "Book 9",
      author: "Author 9",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SUbW6kgcfRv62Emyh2MR9oCdKZDeSfhieg&usqp=CAU",
      category: "Want to Read",
    },
  ];
  const shelves = [
    {
      title: "Currently Reading",
      books: books.filter((book) => book.category === "Currently Reading"),
    },
    {
      title: "Want to Read",
      books: books.filter((book) => book.category === "Want to Read"),
    },
    {
      title: "Read",
      books: books.filter((book) => book.category === "Read"),
    },
  ];
  const [value, setValue] = useState("");
  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <context.Provider
      value={{
        selecteds,
        setSelecteds,
        handleCategoryChange,
        onSearch,
        shelves,
        handleSearch,
      }}
    >
      {children}
    </context.Provider>
  );
};
//global hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
