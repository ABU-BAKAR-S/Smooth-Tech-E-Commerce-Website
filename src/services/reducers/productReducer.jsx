import {
  ERROR,
  LOADING,
  ADD_TO_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  SET_PRODUCTS,
  ADD_TO_WISHLIST,
  INCREMENT_COUNT,
  REMOVE_FROM_CART,
  CLEAR_SHOPPING_CART,
  REMOVE_FROM_WISHLIST,
} from "../constants";

export const initialState = {
  products: [],
  isLoading: false,
  error: null,
  cart: [],
  wishlist: [],
  count: 0,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case SET_PRODUCTS: {
      const { products, append } = action.payload;

      return {
        ...state,
        products: append ? [...state.products, ...products] : products,
        isLoading: false,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case ADD_TO_CART: {
      const product = action.payload;

      const exists = state.cart.find((item) => item.id === product.id);

      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }

    case REMOVE_FROM_CART: {
      const filteredItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filteredItem,
      };
    }

    case CLEAR_SHOPPING_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    case INCREASE_QTY: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case DECREASE_QTY: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }

    case ADD_TO_WISHLIST: {
      const foundItem = state.products.find(
        (item) => item.id === action.payload
      );

      return {
        ...state,
        wishlist: [...state.wishlist, foundItem],
      };
    }

    case REMOVE_FROM_WISHLIST: {
      const filteredItem = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        wishlist: filteredItem,
      };
    }

    case INCREMENT_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
  }
  return state;
};
