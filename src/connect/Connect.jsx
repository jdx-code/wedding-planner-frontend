import { CategoryId } from "../Actions/Action";

export const mapStateToProps = (state) => {
  return state;
};
export const mapDispatchToProps = (dispatch) => {
  return {
    handleCategory: (id) => dispatch(CategoryId(id)),
  };
};
