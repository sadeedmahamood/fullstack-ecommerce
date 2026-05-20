import axios from "axios";

const API = "http://127.0.0.1:8000/api/cart";


// =========================
// AUTH HEADER (JWT)
// =========================
const authHeader = () => ({

  headers: {

    Authorization:
      `Bearer ${localStorage.getItem("access")}`,

  },

});


// =========================
// ADD TO CART
// =========================
export const addToCartAPI = async (

  productId,
  quantity = 1

) => {

  const response = await axios.post(

    `${API}/add/`,

    {

      product_id: productId,
      quantity,

    },

    authHeader()

  );

  return response.data;

};


// =========================
// VIEW CART
// =========================
export const getCartAPI = async () => {

  const response = await axios.get(

    `${API}/view/`,

    authHeader()

  );

  return response.data;

};


// =========================
// REMOVE ITEM
// =========================
export const removeCartItemAPI = async (

  productId

) => {

  const response = await axios.delete(

    `${API}/remove/`,

    {

      ...authHeader(),

      data: {

        product_id: productId,

      },

    }

  );

  return response.data;

};


// =========================
// UPDATE QUANTITY
// =========================
export const updateQuantityAPI = async (

  productId,
  action

) => {

  const response = await axios.patch(

    `${API}/update/`,

    {

      product_id: productId,
      action,

    },

    authHeader()

  );

  return response.data;

};