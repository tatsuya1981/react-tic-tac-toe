import { useState } from "react";
import "./sass/index.sass";

function Cell({ value, onCellClick }) {
  return (
    <td class="cell js-cell" onClick={onCellClick}>
      {value}
    </td>
  );
}

export const App = () => {
  const [cells, setCells] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextCells = cells.slice();
    nextCells[i] = "×";
    setCells(nextCells);
  }
  return (
    <>
      <div class="l-container">
        <main class="l-main">
          <header class="header">
            <h1>TIC TAC TOE</h1>
          </header>
          <div class="display">
            <div class="turn">
              <div class="turn-item circle active">○</div>
              <div class="turn-item cross">×</div>
            </div>
            <div class="state">
              <span class="state-message"> </span>
            </div>
          </div>
          <div class="l-board">
            <table class="table js-table">
              <caption class="visuallyhidden">table</caption>
              <tbody>
                <tr class="row">
                  <Cell value={cells[0]} onCellClick={() => handleClick(0)} />
                  <Cell value={cells[1]} onCellClick={() => handleClick(1)} />
                  <Cell value={cells[2]} onCellClick={() => handleClick(2)} />
                </tr>
                <tr class="row">
                  <Cell value={cells[3]} onCellClick={() => handleClick(3)} />
                  <Cell value={cells[4]} onCellClick={() => handleClick(4)} />
                  <Cell value={cells[5]} onCellClick={() => handleClick(5)} />
                </tr>
                <tr class="row">
                  <Cell value={cells[6]} onCellClick={() => handleClick(6)} />
                  <Cell value={cells[7]} onCellClick={() => handleClick(7)} />
                  <Cell value={cells[8]} onCellClick={() => handleClick(8)} />
                </tr>
              </tbody>
            </table>
          </div>
          <div class="l-footer footer">
            <div class="state-message js-state-message">starting...</div>
            <div>
              <a class="button js-restart">RESTART</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
