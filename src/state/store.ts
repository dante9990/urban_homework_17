import { createStore } from "effector";
import { addItem } from "./events";
import { ItemInterface } from "../types/item";
import { fetchItems } from "./effects";

export const itemsStore = createStore<ItemInterface[]>([])
  .on(addItem, (state, item) => [...state, item])
  .on(fetchItems.doneData, (state, items) => [...items, ...state]);
