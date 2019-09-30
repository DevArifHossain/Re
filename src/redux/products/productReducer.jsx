import productTypes from "./productTypes";
import { addItemsToChart } from "./productUtils";
import books from "../../data/booksData";

import HarryPotterAndSorcerStone from "../../assets/images/books/fiction/Harry-Potter-and-the-Sorcerers-Stone.jpg";

const defaultState = {
  data: books,
  addedItems: [
    {
      id: 234324,
      title: "Harry Potter and the Sorcerer's Stone",
      imgUrl: HarryPotterAndSorcerStone,
      author: "J.K. Rowling",
      price: "12.00",
      publisher: "Scholastic Inc",
      length: "322 pages",
      language: "English",
      quantity: 22
    }
  ]
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
