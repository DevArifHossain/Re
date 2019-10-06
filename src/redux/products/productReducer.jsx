import productTypes from "./productTypes";
import {
  addItemsToChart,
  decreaseItemFromCart,
  removeItemFromCart
} from "./productUtils";
import books from "../../data/booksData";
import featuredProducts from "../../data/featuredBooks";

const defaultState = {
  data: books,
  addedItems: [],
  featuredItems: featuredProducts
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case productTypes.VIEW_ALL_PRODUCTS:
      return {
        ...state,
        data: state.data
      };
    case productTypes.VIEW_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredItems: state.featuredItems
      };
    case productTypes.ADD_PRODUCTS:
      return {
        ...state,
        addedItems: addItemsToChart(state.addedItems, action.payload)
      };

    case productTypes.DECREASE_PRODUCT:
      return {
        ...state,
        addedItems: decreaseItemFromCart(state.addedItems, action.payload)
      };

    case productTypes.REMOVE_PRODUCT:
      return {
        ...state,
        addedItems: removeItemFromCart(state.addedItems, action.payload)
      };
    default:
      return state;
  }
};

export default productReducer;
