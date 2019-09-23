import productTypes from "./productTypes";
import books from "../../data/booksData";

const defaultState = {
  data: books
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case productTypes.VIEW_ALL_PRODUCTS:
      return {
        ...state,
        data: state.data
      };
    default:
      return state;
  }
};

export default productReducer;
