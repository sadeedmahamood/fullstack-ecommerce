// import axios from "axios";

// // const API_URL = "http://127.0.0.1:8000/api/product/"; // your Django endpoint
// const API_URL = "https://dummyjson.com/products?limit=194";

// export const getProducts = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

// import axios from "axios";

// const categories = [
//   "smartphones",
//   "laptops",
//   "tablets",
//   "mens-watches",
//   "womens-watches",
//   "sunglasses",
//   "mens-shoes",
//   "womens-shoes",
//   "mens-shirts",
//   "womens-dresses",
// ];

// export const getProducts = async () => {

//   try {

//     const requests = categories.map((category) =>
//       axios.get(
//         `https://dummyjson.com/products/category/${category}?limit=50`
//       )
//     );

//     const responses = await Promise.all(requests);

//     const products = responses.flatMap(
//       (response) => response.data.products
//     );

//     return products;

//   } catch (error) {

//     console.error("Error fetching products:", error);
//     return [];

//   }
// };


import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/product/";


// ======================
// GET ALL PRODUCTS
// ======================

export const getProducts = async () => {

  try {

    const response = await axios.get(BASE_URL);

    return response.data.results || response.data;

  } catch (error) {

    console.error("Error fetching products:", error);

    return [];

  }

};


// ======================
// GET SINGLE PRODUCT
// ======================

export const getSingleProduct = async (id, token) => {

  try {

    const response = await axios.get(
      `${BASE_URL}${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.error("Error fetching single product:", error);

    return null;

  }

};


// ======================
// CREATE PRODUCT
// ======================

export const createProduct = async (productData, token) => {

  try {

    const response = await axios.post(
      `${BASE_URL}create/`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;

  } catch (error) {

    console.error("Error creating product:", error);

    return null;

  }

};


// ======================
// UPDATE PRODUCT
// ======================

export const updateProduct = async (id, productData, token) => {

  try {

    const response = await axios.put(
      `${BASE_URL}update/${id}/`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;

  } catch (error) {

    console.error("Error updating product:", error);

    return null;

  }

};


// ======================
// DELETE PRODUCT
// ======================

export const deleteProduct = async (id, token) => {

  try {

    const response = await axios.delete(
      `${BASE_URL}delete/${id}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;

  } catch (error) {

    console.error("Error deleting product:", error);

    return null;

  }

};


// ======================
// GET CATEGORIES
// ======================

export const getCategories = async () => {

  try {

    const response = await axios.get(
      `${BASE_URL}categories/`
    );

    return response.data;

  } catch (error) {

    console.error("Error fetching categories:", error);

    return [];

  }

};