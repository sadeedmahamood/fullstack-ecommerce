

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { useCart } from "../context/CartContext";

function Products() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  // FETCH PRODUCTS
  const fetchProducts = async () => {

    try {

      const data = await getProducts();

      // DJANGO API SUPPORT
      const loadedProducts = Array.isArray(data)
        ? data
        : data.results || [];

      console.log(loadedProducts);

      setProducts(loadedProducts);
      setFilteredProducts(loadedProducts);

    } catch (err) {

      console.error(err);
      setError("Failed to load products");

    } finally {

      setLoading(false);

    }

  };

  // FILTER PRODUCTS
  const filterProducts = (type) => {

    setActiveFilter(type);

    // ALL PRODUCTS
    if (type === "all") {

      setFilteredProducts(products);

    }

    // ELECTRONICS
    else if (type === "electronics") {

      const electronicsCategories = [
        "electronics",
        "phones",
        "mobiles",
        "laptops",
        "computers",
        "gadgets",
      ];

      const filtered = products.filter((product) => {

        const categoryName =
          typeof product.category === "string"
            ? product.category.toLowerCase()
            : product.category?.name?.toLowerCase() || "";

        return electronicsCategories.includes(categoryName);

      });

      setFilteredProducts(filtered);

    }

    // LUXURY
    else if (type === "luxury") {

      const luxuryCategories = [
        "fashion",
        "shoes",
        "accessories",
        "watches",
        "bags",
        "clothing",
      ];

      const filtered = products.filter((product) => {

        const categoryName =
          typeof product.category === "string"
            ? product.category.toLowerCase()
            : product.category?.name?.toLowerCase() || "";

        return luxuryCategories.includes(categoryName);

      });

      setFilteredProducts(filtered);

    }

    // TRENDING
    else if (type === "trending") {

  const filtered = products.filter((product) => {

    const categoryName =
      typeof product.category === "string"
        ? product.category.toLowerCase()
        : product.category?.name?.toLowerCase() || "";

    return (
      product.price > 1000 ||
      categoryName === "electronics" ||
      categoryName === "phones" ||
      categoryName === "laptops"
    );

  });

  setFilteredProducts(filtered);

}

    // NEW ARRIVALS
    else if (type === "new") {

      const filtered = [...products]
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

      setFilteredProducts(filtered);

    }

  };

  // LOADING UI
  if (loading) {

    return (

      <section className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">

        <div className="absolute w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center">

          <div className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>

          <h2 className="text-3xl font-bold mb-3">
            Loading Products
          </h2>

          <p className="text-gray-400 text-lg">
            Preparing premium shopping experience...
          </p>

        </div>

      </section>

    );

  }

  // ERROR UI
  if (error) {

    return (

      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="bg-white/5 border border-red-500/20 backdrop-blur-sm rounded-[40px] p-14 text-center max-w-xl">

          <h2 className="text-5xl font-bold mb-6 text-red-400">
            Oops!
          </h2>

          <p className="text-gray-400 text-lg">
            {error}
          </p>

        </div>

      </section>

    );

  }

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-black"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* HERO */}
        <div className="text-center max-w-5xl mx-auto mb-24">

          <p className="uppercase tracking-[10px] text-red-400 text-sm mb-6">
            Premium Collection
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">

            Elevate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Shopping Experience
            </span>

          </h1>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Discover curated premium products designed for modern lifestyles,
            cutting-edge technology, and seamless digital experiences.
          </p>

          {/* HERO BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-red-500/30">
              Explore Collection
            </button>

            <button
              onClick={() => filterProducts("new")}
              className="border border-white/10 bg-white/5 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold"
            >
              New Arrivals
            </button>

          </div>

        </div>

        {/* HEADER */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 mb-16">

          <div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Products
            </h2>

            <p className="text-gray-400 text-lg">
              {filteredProducts.length} premium products available
            </p>

          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => filterProducts("all")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-red-500 shadow-lg shadow-red-500/20"
                  : "bg-white/5 border border-white/10 hover:border-red-500/40 backdrop-blur-sm"
              }`}
            >
              All Products
            </button>

            <button
              onClick={() => filterProducts("electronics")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "electronics"
                  ? "bg-red-500 shadow-lg shadow-red-500/20"
                  : "bg-white/5 border border-white/10 hover:border-red-500/40 backdrop-blur-sm"
              }`}
            >
              Electronics
            </button>

            <button
              onClick={() => filterProducts("luxury")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "luxury"
                  ? "bg-red-500 shadow-lg shadow-red-500/20"
                  : "bg-white/5 border border-white/10 hover:border-red-500/40 backdrop-blur-sm"
              }`}
            >
              Luxury
            </button>

            <button
              onClick={() => filterProducts("trending")}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === "trending"
                  ? "bg-red-500 shadow-lg shadow-red-500/20"
                  : "bg-white/5 border border-white/10 hover:border-red-500/40 backdrop-blur-sm"
              }`}
            >
              Trending
            </button>

          </div>

        </div>

        {/* PRODUCTS */}
        {filteredProducts.length === 0 ? (

          <div className="bg-white/5 border border-white/10 rounded-[50px] p-20 text-center backdrop-blur-sm">

            <h2 className="text-5xl font-bold mb-6">
              No Products Found
            </h2>

            <p className="text-gray-400 text-lg">
              Please check back later for new arrivals.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="group relative bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-sm hover:-translate-y-3 hover:border-red-500/30 transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={
                      product.image?.startsWith("http")
                        ? product.image
                        : `http://127.0.0.1:8000${product.image}`
                    }
                    alt={product.name}
                    className="h-[360px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

                  {/* BADGE */}
                  <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-red-500/30">
                    PREMIUM
                  </div>

                  {/* FAVORITE */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500">

                    <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300">
                      ❤
                    </button>

                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <p className="text-gray-300 text-sm uppercase tracking-[4px] mb-3">
                      Exclusive Collection
                    </p>

                    <h3 className="text-3xl font-bold leading-tight">
                      {product.name}
                    </h3>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  <p className="text-gray-400 leading-relaxed mb-8">
                    {product.description
                      ? product.description.slice(0, 100)
                      : "Premium quality product crafted for modern lifestyles."}
                  </p>

                  {/* PRICE */}
                  <div className="flex items-end justify-between mb-8">

                    <div>

                      <p className="text-gray-500 text-sm mb-2">
                        Starting From
                      </p>

<h4 className="text-2xl md:text-3xl font-black text-red-400">

  ₹{
    Number(product.price).toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    })
  }

</h4>

                    </div>

                    <div className="text-right">

                      <p className="text-green-400 text-sm mb-1">
                        In Stock
                      </p>

                      <p className="text-gray-500 text-sm">
                        Fast Delivery
                      </p>

                    </div>

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/20"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}


                {/* BOTTOM CTA */}
        <div className="mt-32 bg-gradient-to-r from-red-500/10 to-transparent border border-white/10 rounded-[50px] p-14 md:p-20 text-center backdrop-blur-sm">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-6">
            Premium Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Designed For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Modern Consumers
            </span>
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Experience next-generation ecommerce with premium products,
            seamless shopping, and exceptional customer experience.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-12 py-5 rounded-full text-xl font-semibold shadow-2xl shadow-red-500/30">
            Start Shopping
          </button>

        </div>

      </div>

    </section>

  );

}

export default Products;