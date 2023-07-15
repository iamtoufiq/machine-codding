import { useNavigate, useLocation } from "react-router";
import "./Nav.css";
import { useFilter } from "../../context/SearchFilterContext";
import { useEffect } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { inputData, searchHandler, showArrow, setShowArrow } = useFilter();

  useEffect(() => {
    location?.pathname === "/search" ? setShowArrow(true) : setShowArrow(false);
  }, [location]);

  return (
    <>
      <div className="navbar">
        <i
          className={`fa-solid ${showArrow ? "fa-arrow-left" : ""}`}
          onClick={() => navigate("/")}
        ></i>
        <input
          placeholder="Search for books..."
          className="search"
          onClick={() => navigate("/search")}
          value={inputData}
          onChange={searchHandler}
        />
      </div>
    </>
  );
};
