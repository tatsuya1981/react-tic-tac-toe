import { useState } from "react";
import styled from "styled-components";
import "./sass/index.sass";
import { Display } from "./components/Display";
import { CellBoard } from "./components/CellBoard";
import { StateMessage } from "./components/StateMessage";

//////////  関数  //////////////

function checkWinner(cells) {
  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winPattern.some((pattern) => {
    const [first, second, third] = pattern;
    return (
      cells[first] &&
      cells[first] === cells[second] &&
      cells[second] === cells[third]
    );
  });
}

const onRestart = () => {
  window.location.reload();
};

/////// コンポーネント //////////

export const App = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winMessage, setWinMessage] = useState("processing");
  function handleClick(i) {
    const nextCells = cells.slice();

    if (cells[i] || checkWinner(cells)) return;

    if (player) {
      nextCells[i] = "○";
    } else {
      nextCells[i] = "×";
    }
    setCells(nextCells);
    setPlayer(!player);

    const newWinner = checkWinner(nextCells);
    if (newWinner) {
      setWinMessage(player ? "○ Win" : "× Win");
    }
  }
  return (
    <>
      <div className="l-container">
        <main className="l-main">
          <Display player={player} />
          <CellBoard cells={cells} handleClick={handleClick} />
          <StateMessage winMessage={winMessage} onRestart={onRestart} />
        </main>
      </div>
    </>
  );
};
