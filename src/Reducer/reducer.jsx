const cartReducer = (state, action) => {
  switch (action.type) {
    case "SETTING_THE_PRODUCT":
      return {
        ...state,
        filter_products: [action.payload.booksData],
        all_products: [...action.payload.booksData],
      };

    default:
      return state;
  }
};

export default cartReducer;
