import { SHOW_ANSWER } from "./actions";

const initialState = {
  answer: "",
  realAnswer: ""
};

export const reducer = (state = initialState, action) => {
  if (action.type === SHOW_ANSWER) {
    return { ...state, answer: "Because 7 8 9" };
  }

  return state;
};
