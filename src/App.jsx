import { useState } from "react";
import "./sass/index.sass";

function Cell({ value, onCellClick }) {
  return (
    <td className="cell js-cell" onClick={onCellClick}>
      {value}
    </td>
  );
}

export const App = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winMessage, setWinMessage] = useState("processing");
  function handleClick(i) {
    const nextCells = cells.slice();

    if(cells[i] || checkWinner(cells)) return;

    if(player) {
      nextCells[i] = "○";
    } else {
      nextCells[i] = "×";
    }
    setCells(nextCells);
    setPlayer(!player);

      const newWinner = checkWinner(nextCells);
        if(newWinner) {
          setWinMessage(player? "○ Win" : "× Win");
        } else {
          setWinMessage("processing")
        }
  }
  return (
    <>
      <div className="l-container">
        <main className="l-main">
          <header className="header">
            <h1>TIC TAC TOE</h1>
          </header>
          <div className="display">
            <div className="turn">
              <div className="turn-item circle active">○</div>
              <div className="turn-item cross">×</div>
            </div>
            <div className="state">
              <span className="state-message"> </span>
            </div>
          </div>
          <div className="l-board">
            <table className="table js-table">
              <caption className="visuallyhidden">table</caption>
              <tbody>
                <tr className="row">
                  <Cell value={cells[0]} onCellClick={() => handleClick(0)} />
                  <Cell value={cells[1]} onCellClick={() => handleClick(1)} />
                  <Cell value={cells[2]} onCellClick={() => handleClick(2)} />
                </tr>
                <tr className="row">
                  <Cell value={cells[3]} onCellClick={() => handleClick(3)} />
                  <Cell value={cells[4]} onCellClick={() => handleClick(4)} />
                  <Cell value={cells[5]} onCellClick={() => handleClick(5)} />
                </tr>
                <tr className="row">
                  <Cell value={cells[6]} onCellClick={() => handleClick(6)} />
                  <Cell value={cells[7]} onCellClick={() => handleClick(7)} />
                  <Cell value={cells[8]} onCellClick={() => handleClick(8)} />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="l-footer footer">
            <div className="state-message js-state-message">{winMessage}</div>
            <div>
              <a className="button js-restart">Restart</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

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
      cells[first] && cells[first] === cells[second] && cells[second] === cells[third]
    );
  });
}