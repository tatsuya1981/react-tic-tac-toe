import styled from "styled-components";

//////////  スタイル  //////////////

const CellClick = styled.td`
  background: #fefefe;
  height: 48px;
  width: 48px;
  cursor: pointer;
  text-align: center;
  font-size: 2rem;
`;
const Table = styled.td`
  background: black;
  border: 2px solid #fefefe;
  margin: auto;
`;

const Board = styled.table`
  padding: 16px;
`;
const Visuallyhidden = styled.caption`
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
  clip-path: inset(0px 0px 99.9% 99.9%);
  border: 0;
`;

/////// コンポーネント /////////////

function Cell({ value, onCellClick }) {
  return <CellClick onClick={onCellClick}>{value}</CellClick>;
}

export const CellBoard = ({ cells, handleClick }) => {
  return (
    <>
      <Board>
        <Table>
          <Visuallyhidden>table</Visuallyhidden>
          <tbody>
            <tr>
              <Cell value={cells[0]} onCellClick={() => handleClick(0)} />
              <Cell value={cells[1]} onCellClick={() => handleClick(1)} />
              <Cell value={cells[2]} onCellClick={() => handleClick(2)} />
            </tr>
            <tr>
              <Cell value={cells[3]} onCellClick={() => handleClick(3)} />
              <Cell value={cells[4]} onCellClick={() => handleClick(4)} />
              <Cell value={cells[5]} onCellClick={() => handleClick(5)} />
            </tr>
            <tr>
              <Cell value={cells[6]} onCellClick={() => handleClick(6)} />
              <Cell value={cells[7]} onCellClick={() => handleClick(7)} />
              <Cell value={cells[8]} onCellClick={() => handleClick(8)} />
            </tr>
          </tbody>
        </Table>
      </Board>
    </>
  );
};
