import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import { SearchFilterProvider } from "./context/SearchFilterContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BookProvider>
        <SearchFilterProvider>
          <App />
        </SearchFilterProvider>
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>
);
