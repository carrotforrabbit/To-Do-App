import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";
import "./_form.scss";

export default function Form() {
  const [valueInput, setValueInput] = useState("");
  const { context, setContext } = useContext(MyContext);

  function handleItem() {
    if (valueInput) {
      const cloneItems = [...context];
      const id = cloneItems.length;
      const obj = { id, value: valueInput };
      const resultCloneItems = [...cloneItems, obj];
      setContext(resultCloneItems);
      setValueInput("");
    }
  }

  return (
    <div className="form">
      <input
        className="form__input"
        type="text"
        value={valueInput}
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
      />
      <button onClick={handleItem} className="form__button">
        Send
      </button>
    </div>
  );
}
