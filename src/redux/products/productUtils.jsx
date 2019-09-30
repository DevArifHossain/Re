export const addItemsToChart = (addedItems, newItem) => {
  const existingItem = addedItems.find(item => item.id === newItem.id);

  if (existingItem) {
    return addedItems.map(item =>
      item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  }

  return [...addedItems, { ...newItem, quantity: 1 }];
};

export const decreaseItemFromCart = (addedItems, decreaseItem) => {
  return addedItems.map(item =>
    item.id === decreaseItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : { ...item }
  );
};

export const removeItemFromCart = (addedItems, removeItem) => {
  return addedItems.filter(item => item.id !== removeItem.id);
};
