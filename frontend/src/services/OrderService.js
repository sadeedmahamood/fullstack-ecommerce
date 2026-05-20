

// import axios from "axios";

// const API =
//   "http://127.0.0.1:8000/api/order";

// // AUTH HEADER
// const authHeader = () => ({

//   headers: {

//     Authorization:
//       `Bearer ${localStorage.getItem("access")}`,

//   },

// });

// // CREATE ORDER
// export const checkoutOrder =
//   async (data) => {

//     const response =
//       await axios.post(

//         `${API}/checkout/`,

//         data,

//         authHeader()

//       );

//     return response.data;

// };

// // VERIFY PAYMENT
// export const verifyPayment =
//   async (data) => {

//     const response =
//       await axios.post(

//         `${API}/payment/verify/`,

//         data,

//         authHeader()

//       );

//     return response.data;

// };

// // ADD MY ORDER
// export const getMyOrders = async () => {

//   const response = await axios.get(

//     `${API}/orders/`,

//     authHeader()

//   );

//   return response.data;

// };



import axios from "axios";

const API =
  "http://127.0.0.1:8000/api/order";

// =========================
// AUTH HEADER
// =========================
const authHeader = () => ({

  headers: {

    Authorization:
      `Bearer ${localStorage.getItem("access")}`,

  },

});

// =========================
// CREATE ORDER
// =========================
export const checkoutOrder =
  async (data) => {

    try {

      const response =
        await axios.post(

          `${API}/checkout/`,

          data,

          authHeader()

        );

      return response.data;

    } catch (error) {

      console.log(
        "CHECKOUT ERROR:",
        error.response?.data
      );

      throw error;

    }

};

// =========================
// VERIFY PAYMENT
// =========================
export const verifyPayment =
  async (data) => {

    try {

      const response =
        await axios.post(

          `${API}/payment/verify/`,

          data,

          authHeader()

        );

      return response.data;

    } catch (error) {

      console.log(
        "VERIFY PAYMENT ERROR:",
        error.response?.data
      );

      throw error;

    }

};

// =========================
// GET MY ORDERS
// =========================
export const getMyOrders =
  async () => {

    try {

      const response =
        await axios.get(

          `${API}/orders/`,

          authHeader()

        );

      return response.data;

    } catch (error) {

      console.log(
        "GET ORDERS ERROR:",
        error.response?.data
      );

      throw error;

    }

};