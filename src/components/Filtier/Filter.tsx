import React from "react";
import { Link } from "react-router-dom";

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <Link to="/" className="filter__btn">
        All Todo
      </Link>
      <Link to="/not-ready" className="filter__btn">
        Not Ready
      </Link>
      <Link to="/all-done" className="filter__btn">
        Done
      </Link>
    </div>
  );
};

export default Filter;
