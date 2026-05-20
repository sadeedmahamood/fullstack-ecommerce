import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Cart = () => {

  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  // SAFE SUBTOTAL
  const subtotal = cartItems.reduce(

    (total, item) => {

      const price =
        Number(item.price) || 0;

      const quantity =
        Number(item.quantity) || 1;

      return total + price * quantity;

    },

    0
  );

  const shipping = 
    subtotal > 499 ? 0 : 100;

  const tax =
    cartItems.length > 0 ? (subtotal * 0.05) : 0;

  const grandTotal =
    subtotal + shipping + tax;

  // FORMAT PRICE
  const formatPrice = (price) => {

    return Number(price).toLocaleString(
      "en-IN",
      {
        maximumFractionDigits: 0,
      }
    );

  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* HERO */}
        <div className="text-center mb-16 max-w-4xl mx-auto">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-5">
            Shopping Cart
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Your Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Shopping Experience
            </span>

          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Review your selected products and continue
            your seamless premium shopping journey.
          </p>

        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-sm">

            <div className="text-8xl mb-8">
              🛒
            </div>

            <h2 className="text-5xl font-black mb-6">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">

              Looks like you haven’t added any premium
              products yet.

            </p>

            <button
              onClick={() =>
                navigate("/products")
              }
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-red-500/20"
            >

              Explore Products

            </button>

          </div>

        ) : (

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-10">

            {/* LEFT */}
            <div className="space-y-8">

              {cartItems.map((item) => {

                const quantity =
                  Number(item.quantity) || 1;

                const itemPrice =
                  Number(item.price) || 0;

                const totalPrice =
                  itemPrice * quantity;

                return (

                  <div
                    key={item.id}
                    className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-sm p-6 md:p-8"
                  >

                    <div className="flex flex-col lg:flex-row gap-8">

                      {/* IMAGE */}
                      <div className="relative rounded-[30px] overflow-hidden lg:w-[260px]">

                        <img
                          src={
                            item.image ||
                            item.thumbnail
                          }
                          alt={
                            item.name ||
                            item.title
                          }
                          className="w-full h-[260px] object-cover"
                        />

                        <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">

                          PREMIUM

                        </div>

                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 flex flex-col justify-between">

                        <div>

                          <p className="uppercase tracking-[4px] text-red-400 text-sm mb-4">

                            Exclusive Collection

                          </p>

                          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-5">

                            {item.name || item.title}

                          </h2>

                          <p className="text-gray-400 text-lg leading-relaxed mb-8">

                            Premium quality product designed
                            for modern lifestyles and exceptional experiences.

                          </p>

                        </div>

                        {/* BOTTOM */}
                        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

                          {/* QUANTITY */}
                          <div>

                            <p className="text-gray-500 text-sm mb-3">
                              Quantity
                            </p>

                            <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-2xl w-fit px-4 py-3">

                              <button
                                onClick={() =>
                                  decreaseQty(item.id)
                                }
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-500 transition-all duration-300 text-xl"
                              >
                                -
                              </button>

                              <span className="text-2xl font-bold w-10 text-center">

                                {quantity}

                              </span>

                              <button
                                onClick={() =>
                                  increaseQty(item.id)
                                }
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-500 transition-all duration-300 text-xl"
                              >
                                +
                              </button>

                            </div>

                          </div>

                          {/* PRICE */}
                          <div>

                            <p className="text-gray-500 text-sm mb-2">

                              Total Price

                            </p>

                            <h3 className="text-3xl md:text-4xl font-black text-red-400">

                              ₹{formatPrice(totalPrice)}

                            </h3>

                          </div>

                          {/* REMOVE */}
                          <button
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            className="border border-red-500/20 bg-red-500/10 hover:bg-red-500 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
                          >

                            Remove

                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            {/* RIGHT */}
            <div className="h-fit sticky top-24">

              <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-sm">

                <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">

                  Order Summary

                </p>

                <h2 className="text-4xl font-black mb-10">

                  Checkout Details

                </h2>

                {/* SUMMARY */}
                <div className="space-y-6 mb-10">

                  <div className="flex justify-between">

                    <p className="text-gray-400 text-lg">
                      Subtotal
                    </p>

                    <h3 className="text-2xl font-bold">

                      ₹{formatPrice(subtotal)}

                    </h3>

                  </div>

                  <div className="flex justify-between">

                    <p className="text-gray-400 text-lg">
                      Shipping
                    </p>

                    <h3 className="text-2xl font-bold text-green-400">
                       ₹{formatPrice(shipping)}
                    </h3>

                  </div>

                  <div className="flex justify-between">

                    <p className="text-gray-400 text-lg">
                      Tax
                    </p>

                    <h3 className="text-2xl font-bold">

                      ₹{formatPrice(tax)}

                    </h3>

                  </div>

                </div>

                {/* TOTAL */}
                <div className="border-t border-white/10 pt-8 mb-10">

                  <div className="flex justify-between items-center gap-5">

                    <p className="text-2xl font-semibold">

                      Grand Total

                    </p>

                    <h2 className="text-3xl md:text-5xl font-black text-red-400 text-right">

                      ₹{formatPrice(grandTotal)}

                    </h2>

                  </div>

                </div>

                {/* BUTTONS */}
                <div className="space-y-5">

                  <button
                    onClick={() =>
                      navigate("/checkout")
                    }
                    className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-500/20"
                  >

                    Proceed To Checkout

                  </button>

                  <button
                    onClick={() =>
                      navigate("/products")
                    }
                    className="w-full border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300 py-5 rounded-2xl text-lg font-semibold"
                  >

                    Continue Shopping

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>

  );

};

export default Cart;