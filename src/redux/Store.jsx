import { Reducer } from "./Reducer";
import { createStore } from "redux";

// Store
export const Store = createStore(Reducer);

// Subscribe
export const Unsubscribe = () => {
  console.log("Updated State", Store.getState());
};
