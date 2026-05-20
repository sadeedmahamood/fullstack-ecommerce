import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getProducts,
  deleteProduct,
} from "../../services/productService";

function AdminProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await deleteProduct(id, token);

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white">

      <div className="p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-5xl font-black">
            Admin Products
          </h1>

          <Link
            to="/admin/products/create"
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-300 font-semibold"
          >
            + Add Product
          </Link>

        </div>

        {/* LOADING */}
        {loading ? (

          <h2 className="text-2xl">
            Loading...
          </h2>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="border border-white/10 bg-white/5 backdrop-blur-md p-5 rounded-3xl hover:border-red-500/30 transition-all duration-300"
              >

               {/* IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-2xl mb-5"
              />
            {/* <img
              src={
                product.image
                  ? product.image.startsWith("http")
                    ? product.image
                    : `http://127.0.0.1:8000${product.image}`
                  : "/no-image.png"
              }
              alt={product.name}
              className="w-full h-60 object-cover rounded-2xl mb-5 bg-zinc-900"
            /> */}

              {/* TITLE */}
              <h2 className="text-xl font-bold line-clamp-1">
                {product.name}
              </h2>

                {/* PRICE */}
                <p className="text-red-400 mt-2 text-lg font-semibold">
                  ₹{product.price}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-6">

                  {/* EDIT */}
                  <Link
                    to={`/admin/products/update/${product.id}`}
                    className="flex-1 text-center py-3 rounded-xl bg-white/10 hover:bg-blue-500 transition-all duration-300"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-300"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default AdminProducts;