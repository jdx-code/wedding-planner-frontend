import { CATEGORYID } from "../constants/constants";

export const CategoryId = (cat_id) => {
  return {
    type: CATEGORYID,
    payload:cat_id
  };
};
