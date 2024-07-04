import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
  return (
    <div className="game-board">
      {cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => onClick(index)}
          className={item === 'X' ? 'is-X' : item === 'O' ? 'is-O' : ''}
        />
      ))}
    </div>
  );
};

export default Board;
