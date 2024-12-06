import { createEffect } from "effector";
import { ItemInterface } from "../types/item";

export const fetchItems = createEffect<void, ItemInterface[], Error>(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Топор" },
        { id: 2, name: "Пила" },
        { id: 3, name: "Гвоздь" },
      ]);
    }, 1000);
  });
});
