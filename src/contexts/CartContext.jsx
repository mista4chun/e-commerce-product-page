import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  quantity: 0,
  cart: false,
  cartOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "addItems": {
      return { ...state, cart: true };
    }
    case "toggleCart": {
      return { ...state, cartOpen: !state.cartOpen };
    }
    case "increment": {
      return { ...state, quantity: state.quantity + 1 };
    }
    case "decrement": {
      return { ...state, quantity: Math.max(state.quantity - 1, 0) };
    }
    case "deleteItems": {
      return { ...state, cart: false, quantity: 0, cartOpen: false };
    }
    default:
      throw new Error("Action unknown");
  }
}

function CartProvider({ children }) {
  const [{ cartOpen, quantity, cart }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <CartContext.Provider
      value={{
        quantity,
        cartOpen,
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
