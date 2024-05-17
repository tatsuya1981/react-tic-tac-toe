import styled from "styled-components";

//////////  スタイル  //////////////

const Button = styled.a`
  display: inline-block;
  border: 3px solid black;
  border-radius: 6px;
  transition: all 0.5 ease;
  font-weight: bold;
  padding: 4px 25px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &:hover{
    color: #fefefe;
    background-color: #000000;
  }
`;

const Message = styled.div`
  padding: 8px;
  text-align: center;
`;

/////// コンポーネント /////////////

const Restart = ({ onRestart }) => {
  return (
    <>
      <Button onClick={onRestart}>
        Restart
      </Button>
    </>
  );
};

export const StateMessage = ({ winMessage, onRestart }) => {
  return (
    <>
      <div>
        <Message>{winMessage}</Message>
        <div>
          <Restart onRestart={onRestart} />
        </div>
      </div>
    </>
  );
};
