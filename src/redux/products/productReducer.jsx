import productTypes from "./productTypes";
import { addItemsToChart } from "./productUtils";
import books from "../../data/booksData";

const defaultState = {
  data: books,
  addedItems: []
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case productTypes.VIEW_ALL_PRODUCTS:
      return {
        ...state,
        data: state.data
      };
    case productTypes.ADD_PRODUCTS:
      return {
        ...state,
        addedItems: addItemsToChart(state.addedItems, action.payload)
      };
    default:
      return state;
  }
};

export default productReducer;
