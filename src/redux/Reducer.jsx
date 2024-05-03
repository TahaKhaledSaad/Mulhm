import { BUY_CAKE } from "./ActionsTypes";

const initialState = {
  noOfCake: 10,
  noOfIceCream: 15,
};

export const Reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...prevState,
        noOfCake: prevState.noOfCake - 1,
      };
    default:
      return prevState;
  }
};
