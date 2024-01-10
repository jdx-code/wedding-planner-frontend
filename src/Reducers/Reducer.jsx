import { CATEGORYID } from "../constants/constants";
const defaultState = {};
export const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CATEGORYID:
      return { ...state, category_id: action.payload };
    default:
      return defaultState;
  }
};
