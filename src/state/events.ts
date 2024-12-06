import { createEvent } from "effector";
import { ItemInterface } from "../types/item";

export const addItem = createEvent<ItemInterface>();
