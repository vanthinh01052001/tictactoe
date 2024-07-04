import React from "react";

const Cell = ({ onClick, value, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
