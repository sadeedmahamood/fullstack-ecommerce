import React, {

  createContext,
  useContext,
  useEffect,
  useState,

} from "react";

import {

  addToCartAPI,
  getCartAPI,
  removeCartItemAPI,
  updateQuantityAPI,

} from "../services/cartService";

const CartContext = createContext();


// CUSTOM HOOK
export const useCart = () =>
  useContext(CartContext);


// PROVIDER
export const CartProvider = ({
  children
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  const [loading, setLoading] =
    useState(false);


  // =========================
  // FETCH CART
  // =========================
  const fetchCart = async () => {

    try {

      setLoading(true);

      const data =
        await getCartAPI();

      setCartItems(data.items);

    } catch (error) {

      console.log(
        "Fetch cart error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  // =========================
  // LOAD CART ON START
  // =========================
  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (token) {

      fetchCart();

    }

  }, []);


  // =========================
  // ADD TO CART
  // =========================
  const addToCart = async (
    productId,
    quantity = 1
  ) => {

    try {

      await addToCartAPI(
        productId,
        quantity
      );

      fetchCart();

    } catch (error) {

      console.log(
        "Add to cart error:",
        error
      );

    }

  };


  // =========================
  // REMOVE ITEM
  // =========================
  const removeFromCart = async (
    productId
  ) => {

    try {

      await removeCartItemAPI(
        productId
      );

      fetchCart();

    } catch (error) {

      console.log(
        "Remove cart error:",
        error
      );

    }

  };


  // =========================
  // INCREASE QUANTITY
  // =========================
  const increaseQty = async (
    productId
  ) => {

    try {

      await updateQuantityAPI(
        productId,
        "increase"
      );

      fetchCart();

    } catch (error) {

      console.log(
        "Increase quantity error:",
        error
      );

    }

  };


  // =========================
  // DECREASE QUANTITY
  // =========================
  const decreaseQty = async (
    productId
  ) => {

    try {

      await updateQuantityAPI(
        productId,
        "decrease"
      );

      fetchCart();

    } catch (error) {

      console.log(
        "Decrease quantity error:",
        error
      );

    }

  };


  // =========================
  // CLEAR CART
  // =========================
  const clearCart = () => {

    setCartItems([]);

  };


  return (

    <CartContext.Provider
      value={{

        cartItems,
        loading,

        addToCart,
        removeFromCart,

        increaseQty,
        decreaseQty,

        clearCart,
        fetchCart,

      }}
    >

      {children}

    </CartContext.Provider>

  );

};