import { FC } from "react";
import style from "./style.module.css";

type Props = {
  name: string;
};

const Item: FC<Props> = ({name}) => {
  return (
    <div className={style.container}>
      <span>
        {name}
      </span>
    </div>
  );
};

export default Item;
