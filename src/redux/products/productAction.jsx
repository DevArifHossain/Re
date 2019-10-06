import productTypes from "./productTypes";

export const viewProductsAction = () => ({
  type: productTypes.VIEW_ALL_PRODUCTS
});

export const viewFeaturedProductsAction = () => ({
  type: productTypes.VIEW_FEATURED_PRODUCTS
});

export const addProductAction = item => ({
  type: productTypes.ADD_PRODUCTS,
  payload: item
});

export const decreaseProductAction = item => ({
  type: productTypes.DECREASE_PRODUCT,
  payload: item
});

export const removeProductAction = item => ({
  type: productTypes.REMOVE_PRODUCT,
  payload: item
});
