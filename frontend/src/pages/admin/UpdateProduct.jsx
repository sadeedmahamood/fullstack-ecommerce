import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getSingleProduct,
  updateProduct,
} from "../../services/productService";

function UpdateProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("access");

  const [loading, setLoading] = useState(true);

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null,
  });

  useEffect(() => {

    fetchProduct();

  }, []);

  // FETCH PRODUCT
  const fetchProduct = async () => {

    try {

      const data = await getSingleProduct(id, token);

      if (!data) return;

      setFormData({
        name: data.name || "",
        description: data.description || "",
        price: data.price || "",
        stock: data.stock || "",
        image: null,
      });

      // EXISTING IMAGE PREVIEW
      if (data.image) {

        setPreview(
          `http://127.0.0.1:8000${data.image}`
        );

      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  // HANDLE TEXT INPUTS
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE IMAGE
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      image: file,
    });

    setPreview(
      URL.createObjectURL(file)
    );

  };

  // SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const form = new FormData();

      form.append("name", formData.name);

      form.append(
        "description",
        formData.description
      );

      form.append("price", formData.price);

      form.append("stock", formData.stock);

      if (formData.image) {

        form.append(
          "image",
          formData.image
        );

      }

      await updateProduct(
        id,
        form,
        token
      );

      alert("Product updated successfully");

      navigate("/admin/products");

    } catch (error) {

      console.error(error);

    }

  };

  // LOADING
  if (loading) {

    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Loading...
        </h1>

      </section>
    );

  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">

        <h1 className="text-5xl font-black mb-10">
          Update Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* NAME */}
          <div>

            <label className="block mb-2 text-sm text-white/70">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-red-500"
              required
            />

          </div>

          {/* DESCRIPTION */}
          <div>

            <label className="block mb-2 text-sm text-white/70">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-red-500"
              required
            />

          </div>

          {/* PRICE */}
          <div>

            <label className="block mb-2 text-sm text-white/70">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-red-500"
              required
            />

          </div>

          {/* STOCK */}
          <div>

            <label className="block mb-2 text-sm text-white/70">
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-red-500"
              required
            />

          </div>

          {/* IMAGE */}
          <div>

            <label className="block mb-2 text-sm text-white/70">
              Upload New Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-red-500"
            />

          </div>

          {/* IMAGE PREVIEW */}
          {preview && (

            <img
              src={preview}
              alt={formData.name}
              className="w-full h-80 object-cover rounded-2xl"
            />

          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition-all duration-300 font-bold text-lg"
          >
            Update Product
          </button>

        </form>

      </div>

    </section>
  );
}

export default UpdateProduct;