const Restart = ({ onRestart }) => {
  return (
    <>
      <a className="button js-restart" onClick={onRestart}>
        Restart
      </a>
    </>
  );
};

export const StateMessage = ({ winMessage, onRestart }) => {
  return (
    <>
      <div className="l-footer footer">
        <div className="state-message js-state-message">{winMessage}</div>
        <div>
          <Restart onRestart={onRestart} />
        </div>
      </div>
    </>
  );
};
