import styled from "styled-components";

//////////  スタイル  //////////////

const TuenItem = styled.div`
  text-align: center;
  padding: 8px;
  font-size: 1.2rem;
  width: 100%;
  ${(props) => props.activePlayer && `border-bottom: 4px solid black;`}
  }
`;

const Header = styled.h1`
  font-size: 1.2rem;
  text-align: center;
`;

const TurnDisplay = styled.div`
  display: flex;
  width: 70%;
  padding: 8px 16px;
  margin: 0 auto;
`;

const State = styled.span`
  padding: 18px;
  text-align: center;
`;

/////// コンポーネント /////////////

const Active = ({ activePlayer }) => {
  return (
    <>
      <TuenItem activePlayer={activePlayer}>○</TuenItem>
      <TuenItem activePlayer={!activePlayer}>×</TuenItem>
    </>
  );
};
export const Display = ({ circle }) => {
  return (
    <>
      <Header>TIC TAC TOE</Header>
      <div>
        <TurnDisplay>
          <Active activePlayer={circle} />
        </TurnDisplay>
        <div>
          <State> </State>
        </div>
      </div>
    </>
  );
};
