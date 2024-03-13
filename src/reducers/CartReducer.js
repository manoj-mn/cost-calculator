const initialState = {
  products: [],
  cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((p) => p.id !== payload.id) };

    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((p) =>
          p.id === payload.id ? (p.qty = payload.qty) : p.qty
        ),
      };

    default:
      return state;
  }
};

export default CartReducer;
