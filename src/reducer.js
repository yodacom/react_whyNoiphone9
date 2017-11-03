import { SHOW_ANSWER, SHOW_REAL_ANSWER } from "./actions";

const initialState = {
  answer: "",
  realAnswer: ""
};

export const reducer = (state = initialState, action) => {
  if (action.type === SHOW_ANSWER) {
    return { ...state, answer: " Because 7 8 9" };
  }
  if (action.type === SHOW_REAL_ANSWER) {
    return { ...state, realAnswer: " Because 7 'ATE' 9" };
  }

  return state;
};
