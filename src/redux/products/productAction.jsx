import productTypes from "./productTypes";

export const viewProductsAction = () => ({
  type: productTypes.VIEW_ALL_PRODUCTS
});

export const addProductAction = item => ({
  type: productTypes.ADD_PRODUCTS,
  payload: item
});
