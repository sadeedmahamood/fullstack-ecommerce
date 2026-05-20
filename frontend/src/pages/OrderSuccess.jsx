import { Link } from "react-router-dom";

import {
  FiCheckCircle,
  FiShoppingBag,
  FiHome,
} from "react-icons/fi";

const OrderSuccess = () => {

  const username =
    localStorage.getItem("username") ||
    "Customer";

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 py-20">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/20 blur-3xl rounded-full"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-sm rounded-[40px] p-10 md:p-14 text-center">

        {/* SUCCESS ICON */}
        <div className="w-32 h-32 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-10">

          <FiCheckCircle
            className="text-green-400"
            size={70}
          />

        </div>

        {/* TOP TEXT */}
        <p className="uppercase tracking-[6px] text-green-400 text-sm mb-5">

          Payment Successful

        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">

          Thank You,
          <br />
          {username}

        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">

          Your order has been placed successfully.
          Your payment was verified and your premium products
          will be processed shortly.

        </p>

        {/* INFO BOX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

          {/* STATUS */}
          <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

            <h3 className="text-3xl font-black text-green-400 mb-2">

              Paid

            </h3>

            <p className="text-gray-400">

              Payment Status

            </p>

          </div>

          {/* SHIPPING */}
          <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

            <h3 className="text-3xl font-black text-red-400 mb-2">

              3-5 Days

            </h3>

            <p className="text-gray-400">

              Estimated Delivery

            </p>

          </div>

          {/* SUPPORT */}
          <div className="bg-black/30 border border-white/10 rounded-3xl p-6">

            <h3 className="text-3xl font-black text-yellow-400 mb-2">

              24/7

            </h3>

            <p className="text-gray-400">

              Customer Support

            </p>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* VIEW ORDERS */}
          <Link
            to="/profile"
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3"
          >

            <FiShoppingBag size={22} />

            View Orders

          </Link>

          {/* CONTINUE SHOPPING */}
          <Link
            to="/products"
            className="w-full sm:w-auto border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300 px-8 py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3"
          >

            <FiHome size={22} />

            Continue Shopping

          </Link>

        </div>

      </div>

    </section>

  );

};

export default OrderSuccess;