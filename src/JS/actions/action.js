import { INCREMENT, DECREMENT, INPUTINC } from "../actionsTypes/actionsTypes";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const inputInc = (newNum) => {
    return {
      type: INPUTINC,
      payload:newNum
    };
  };
  
