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
