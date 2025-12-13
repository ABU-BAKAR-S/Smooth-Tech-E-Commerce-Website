import { useCallback, useEffect, useReducer } from "react";
import { ProductsContext } from "../context";
import {
  initialState,
  productReducer,
} from "../services/reducers/productReducer";
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  CLEAR_SHOPPING_CART,
  DECREASE_QTY,
  ERROR,
  INCREASE_QTY,
  INCREMENT_COUNT,
  LOADING,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  SET_PRODUCTS,
} from "../services/constants";

export const ProductStore = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { count } = state;
  const LIMIT = 30;

  const fetchProducts = useCallback(async () => {
    dispatch({ type: LOADING });

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${count * LIMIT}`
      );
      const data = await res.json();

      dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: data.products,
          append: count > 0,
        },
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  }, [count, LIMIT]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const value = {
    products: state.products,
    cart: state.cart,
    wishlist: state.wishlist,
    isLoading: state.isLoading,
    error: state.error,
    count: state.count,
    addToCart: (cartItem) => {
      dispatch({ type: ADD_TO_CART, payload: cartItem });
    },
    removeFromCart: (id) => {
      dispatch({ type: REMOVE_FROM_CART, payload: id });
    },
    increaseQuantity: (id) => {
      dispatch({ type: INCREASE_QTY, payload: id });
    },
    decreaseQuantity: (id) => {
      dispatch({ type: DECREASE_QTY, payload: id });
    },
    clearCart: () => {
      dispatch({ type: CLEAR_SHOPPING_CART });
    },
    addToWishlist: (id) => {
      dispatch({ type: ADD_TO_WISHLIST, payload: id });
    },
    removeFromWishlist: (id) => {
      dispatch({ type: REMOVE_FROM_WISHLIST, payload: id });
    },
    incrementCount: () => {
      dispatch({ type: INCREMENT_COUNT });
    },
  };

  console.log(value.count);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
