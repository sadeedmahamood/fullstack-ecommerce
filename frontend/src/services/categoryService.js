import axios from "axios";

const API =
  "http://127.0.0.1:8000/api/product/categories/";

// GET CATEGORIES
export const getCategories = async () => {

  try {

    const response =
      await axios.get(API);

    return response.data;

  } catch (error) {

    console.log(error);

    return [];

  }

};