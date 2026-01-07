const Ui = ({ quote, updateFunc }) => {
  return (
    <div>
      <p>{quote?.quote ?? "Loading..."}</p>
      <button onClick={() => updateFunc((r) => !r)}>Get Quote </button>
    </div>
  );
};

export default Ui;
