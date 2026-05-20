import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
  checkoutOrder,
  verifyPayment,
} from "../services/orderService";

const Checkout = () => {

  const navigate = useNavigate();

  const { cartItems } = useCart();

  // TOTALS
  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      (Number(item.price) || 0) *
      (Number(item.quantity) || 1),
    0
  );

  const shipping = subtotal > 499 ? 0 : 100;

  const tax = subtotal * 0.05;

  const grandTotal = subtotal + shipping + tax;

  // FORM STATE
  const [formData, setFormData] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // PAYMENT
  const handlePayment = async () => {

    try {

      // CREATE ORDER
      const order = await checkoutOrder(formData);

      // RAZORPAY OPTIONS
      const options = {

        key: order.key,

        amount: order.amount,

        currency: "INR",

        name: "Modern Store",

        description: "Premium Ecommerce Payment",

        order_id: order.razorpay_order_id,

        handler: async function (response) {

          try {

            // VERIFY PAYMENT
            await verifyPayment({

              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,

            });

            alert("Payment Successful");

            navigate("/order-success");

          } catch (err) {

            console.error(err);

            alert("Payment Verification Failed");

          }

        },

        prefill: {
          name: "Customer",
          email: "customer@example.com",
        },

        theme: {
          color: "#ef4444",
        },

      };

      // OPEN RAZORPAY
      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (err) {

      console.error(err);

      alert("Checkout Failed");

    }

  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-black"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-5">
            Secure Checkout
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Complete Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Premium Order
            </span>

          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Enter your details and complete your purchase
            securely using Razorpay.
          </p>

        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-16 text-center max-w-3xl mx-auto backdrop-blur-sm">

            <div className="text-8xl mb-8">
              🛒
            </div>

            <h2 className="text-5xl font-black mb-6">
              No Items In Cart
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Add products before proceeding to checkout.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-red-500/30"
            >
              Explore Products
            </button>

          </div>

        ) : (

          <div className="grid xl:grid-cols-[1fr_420px] gap-10">

            {/* LEFT SIDE */}
            <div className="space-y-10">

              {/* SHIPPING */}
              <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-sm">

                <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">
                  Shipping Details
                </p>

                <h2 className="text-4xl font-black mb-10">
                  Delivery Address
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  {/* ADDRESS */}
                  <input
                    type="text"
                    name="address_line"
                    value={formData.address_line}
                    onChange={handleChange}
                    placeholder="Address Line"
                    className="bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition-all duration-300 md:col-span-2"
                  />

                  {/* CITY */}
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition-all duration-300"
                  />

                  {/* STATE */}
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition-all duration-300"
                  />

                  {/* PINCODE */}
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition-all duration-300"
                  />

                  {/* COUNTRY */}
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition-all duration-300"
                  />

                </div>

              </div>

              {/* PAYMENT METHOD */}
              <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-sm">

                <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">
                  Payment Method
                </p>

                <h2 className="text-4xl font-black mb-10">
                  Razorpay Secure Payment
                </h2>

                <div className="flex items-center justify-between bg-black/30 border border-white/10 rounded-3xl p-6">

                  <div className="flex items-center gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl">
                      💳
                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold mb-2">
                        Pay Using Razorpay
                      </h3>

                      <p className="text-gray-400">
                        UPI, Cards, Wallets, Net Banking & more
                      </p>

                    </div>

                  </div>

                  <div className="text-green-400 font-semibold">
                    Secure
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="h-fit sticky top-24">

              <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-sm">

                <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">
                  Order Summary
                </p>

                <h2 className="text-4xl font-black mb-10">
                  Your Order
                </h2>

                {/* PRODUCTS */}
                <div className="space-y-6 mb-10">

                  {cartItems.map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                    >

                      <img
                        src={item.thumbnail || item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />

                      <div className="flex-1">

                        <h3 className="font-semibold line-clamp-1">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          Quantity: {item.quantity || 1}
                        </p>

                      </div>

                      <h3 className="font-bold text-red-400">
                        ₹{
                          (Number(item.price) || 0) *
                          (Number(item.quantity) || 1)
                        }
                      </h3>

                    </div>

                  ))}

                </div>

                {/* TOTALS */}
                <div className="space-y-5 border-t border-white/10 pt-8 mb-10">

                  {/* SUBTOTAL */}
                  <div className="flex items-center justify-between">

                    <p className="text-gray-400 text-lg">
                      Subtotal
                    </p>

                    <h3 className="text-2xl font-bold">
                      ₹{subtotal}
                    </h3>

                  </div>

                  {/* SHIPPING */}
                  <div className="flex items-center justify-between">

                    <p className="text-gray-400 text-lg">
                      Shipping
                    </p>

                    <h3 className="text-2xl font-bold text-green-400">
                       ₹{shipping}
                    </h3>

                  </div>

                  {/* TAX */}
                  <div className="flex items-center justify-between">

                    <p className="text-gray-400 text-lg">
                      Tax
                    </p>

                    <h3 className="text-2xl font-bold">
                      ₹{tax}
                    </h3>

                  </div>

                </div>

                {/* GRAND TOTAL */}
                <div className="flex items-center justify-between border-t border-white/10 pt-8 mb-10">

                  <p className="text-2xl font-semibold">
                    Grand Total
                  </p>

                  <h2 className="text-5xl font-black text-red-400">
                    ₹{grandTotal}
                  </h2>

                </div>

                {/* PAY BUTTON */}
                <button
                  onClick={handlePayment}
                  className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-5 rounded-2xl text-xl font-semibold shadow-2xl shadow-red-500/30 mb-6"
                >
                  Pay With Razorpay
                </button>

                {/* TRUST BADGES */}
                <div className="grid grid-cols-3 gap-4">

                  <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-center">

                    <p className="text-2xl mb-2">
                      🔒
                    </p>

                    <p className="text-gray-400 text-sm">
                      Secure
                    </p>

                  </div>

                  <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-center">

                    <p className="text-2xl mb-2">
                      ⚡
                    </p>

                    <p className="text-gray-400 text-sm">
                      Fast
                    </p>

                  </div>

                  <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-center">

                    <p className="text-2xl mb-2">
                      🛡
                    </p>

                    <p className="text-gray-400 text-sm">
                      Trusted
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Checkout;    

