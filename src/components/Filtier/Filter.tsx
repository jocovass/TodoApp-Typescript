import React from "react";

const Filter: React.FC = () => {
  return (
    <div className="filter">
      <button className="filter__btn">All Todo</button>
      <button className="filter__btn">Ready</button>
      <button className="filter__btn">Done</button>
    </div>
  );
};

export default Filter;
