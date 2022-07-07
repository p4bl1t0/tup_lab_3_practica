const CheckInput = ({ checkboxHandler, checkboxValue }) => {
  return (
    <div>
      <br></br>
      <label>
        <input
          type="checkbox"
          onChange={checkboxHandler}
          checked={checkboxValue}
        />
        Entrada 2
      </label>
    </div>
  );
};

export default CheckInput;
