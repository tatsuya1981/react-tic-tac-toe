function Cell({ value, onCellClick }) {
  return (
    <td className="cell js-cell" onClick={onCellClick}>
      {value}
    </td>
  );
}

export const CellBoard = ({ cells, handleClick }) => {
  return (
    <>
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
    </>
  );
};
