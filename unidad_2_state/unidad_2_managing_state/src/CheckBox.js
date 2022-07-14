export default function CheckBox({ checkBox, setCheckBox }) {
  
  const checkBoxHabdler = () => {
    setCheckBox(checkBox === 1 ? 0 : 1);
  };

  return (
    <div>
      <label>
        Entrada 2: <input type="checkbox" onClick={checkBoxHabdler} />
      </label>
    </div>
  );
}
