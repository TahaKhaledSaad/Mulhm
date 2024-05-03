import { BUY_CAKE } from "./ActionsTypes";

// Action [1]
export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
