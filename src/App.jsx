import { useState } from "react";
import styled from "styled-components";
import { Display } from "./components/Display";
import { CellBoard } from "./components/CellBoard";
import { StateMessage } from "./components/StateMessage";

//////////  スタイル  //////////////

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

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
  const [actNum, setActNum] = useState(1);
  function handleClick(i) {
    const nextCells = cells.slice();
    if (cells[i] || checkWinner(cells)) {
      return;
    } else if(actNum === 9) {
      setWinMessage("Draw");
    }

    if (player) {
      nextCells[i] = "○";
    } else {
      nextCells[i] = "×";
    }
    setCells(nextCells);

    const newWinner = checkWinner(nextCells);
    if (newWinner) {
      setWinMessage(player ? "○ Win" : "× Win");
    } else {
      setPlayer(!player);
      setActNum((actNumPlus) => actNumPlus + 1);
    }
  }
 
  return (
    <>
      <Container>
        <main>
          <Display player={player} />
          <CellBoard cells={cells} handleClick={handleClick} />
          <StateMessage winMessage={winMessage} onRestart={onRestart} />
        </main>
      </Container>
    </>
  );
};
