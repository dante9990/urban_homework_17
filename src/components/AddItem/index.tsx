import { ChangeEvent, FormEvent, useState } from "react";
import style from "./style.module.css";
import { useUnit } from "effector-react";
import { itemsStore } from "../../state/store";
import { addItem } from "../../state/events";

const AddItem = () => {
  const [itemText, setItemText] = useState("");
  const items = useUnit(itemsStore);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemText(e.target.value);
  };

  const handleAddItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemText.trim()) {
      const newItem = {
        id: items.length + 1,
        name: itemText,
      };
      addItem(newItem);
      setItemText("");
    }
  };

  return (
    <form className={style.container} onSubmit={(e) => handleAddItem(e)}>
      <input
        type="text"
        placeholder="Введите предмет"
        onChange={(e) => handleChange(e)}
        value={itemText}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddItem;
