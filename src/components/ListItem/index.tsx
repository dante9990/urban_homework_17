import { useUnit } from "effector-react";
import Item from "../Item";
import style from "./style.module.css";
import { itemsStore } from "../../state/store";

const ListItem = () => {
  const items = useUnit(itemsStore);
  return (
    <div className={style.container}>
      {items && items.map((item) => <Item key={item.id} name={item.name} />)}
    </div>
  );
};

export default ListItem;
