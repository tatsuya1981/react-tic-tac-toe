const Active = ({ activePlayer }) => {
  return (
    <>
      <div className={`turn-item circle ${activePlayer ? "active" : ""}`}>
        ○
      </div>
      <div className={`turn-item circle ${!activePlayer ? "active" : ""}`}>
        ×
      </div>
    </>
  );
};
export const Display = ({ player }) => {
  return (
    <>
      <header className="header">
        <h1>TIC TAC TOE</h1>
      </header>
      <div className="display">
        <div className="turn">
          <Active activePlayer={player} />
        </div>
        <div className="state">
          <span className="state-message"> </span>
        </div>
      </div>
    </>
  );
};
