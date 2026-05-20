import axios from "axios";

const API =
  "http://127.0.0.1:8000/api/accounts";


// LOGIN
export const loginUser = async (userData) => {

  try {

    const response = await axios.post(

      `${API}/login/`,

      userData

    );

    return response.data;

  } catch (error) {

    console.log(

      "LOGIN ERROR:",

      error.response?.data

    );

    throw error;

  }

};


// REGISTER
export const registerUser = async (userData) => {

  try {

    const response = await axios.post(

      `${API}/register/`,

      userData

    );

    return response.data;

  } catch (error) {

    console.log(

      "REGISTER ERROR:",

      error.response?.data

    );

    throw error;

  }

};