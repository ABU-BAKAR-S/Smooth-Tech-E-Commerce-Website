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
  CLEAR_WISHLIST,
  SET_LOGGED_IN,
  SET_SEARCH_ITEMS,
  SET_BTN_DISABLE,
} from "../constants";

export const initialState = {
  count: 0,
  total: 0,
  error: null,
  products: [],
  isLoading: false,
  searchItems: "",
  disableBtn: false,
  cart: JSON.parse(localStorage.getItem("cartItem")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishItem")) || [],
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
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

      let updatedCart;
      if (exists) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REMOVE_FROM_CART: {
      const filteredItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItem", JSON.stringify(filteredItem));
      return {
        ...state,
        cart: filteredItem,
      };
    }

    case CLEAR_SHOPPING_CART: {
      localStorage.removeItem("cartItem");
      return {
        ...state,
        cart: [],
      };
    }

    case INCREASE_QTY: {
      let increaseQty = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cartItem", JSON.stringify(increaseQty));
      return {
        ...state,
        cart: increaseQty,
      };
    }

    case DECREASE_QTY: {
      let decreaseQty = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cartItem", JSON.stringify(decreaseQty));
      return {
        ...state,
        cart: decreaseQty,
      };
    }

    case ADD_TO_WISHLIST: {
      const foundItem = state.products.find(
        (item) => item.id === action.payload
      );
      let updatedWishlist = [...state.wishlist, foundItem];
      localStorage.setItem("wishItem", JSON.stringify(updatedWishlist));

      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }

    case REMOVE_FROM_WISHLIST: {
      const filteredItem = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishItem", JSON.stringify(filteredItem));
      return {
        ...state,
        wishlist: filteredItem,
      };
    }

    case CLEAR_WISHLIST: {
      localStorage.removeItem("wishItem");
      return {
        ...state,
        wishlist: [],
      };
    }

    case INCREMENT_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case SET_LOGGED_IN: {
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }

    case SET_SEARCH_ITEMS: {
      return {
        ...state,
        searchItems: action.payload,
      };
    }

    case SET_BTN_DISABLE: {
      return {
        ...state,
        disableBtn: action.payload,
      };
    }
  }
  return state;
};
