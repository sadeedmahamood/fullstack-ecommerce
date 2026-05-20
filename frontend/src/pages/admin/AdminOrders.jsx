import { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/orders/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders(response.data);

    } catch (error) {

      console.error(
        "Error fetching orders:",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  const getStatusStyle = (status) => {

    switch (status) {

      case "Completed":

        return "bg-green-500/20 border border-green-500/20 text-green-400";

      case "Shipping":

        return "bg-blue-500/20 border border-blue-500/20 text-blue-400";

      case "Pending":

        return "bg-yellow-500/20 border border-yellow-500/20 text-yellow-400";

      default:

        return "bg-gray-500/20 border border-gray-500/20 text-gray-400";

    }
  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* CONTAINER */}
      <div className="relative z-10 p-8">

        {/* TOP */}
        <div className="mb-14">

          <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
            Admin Orders
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-5">
            Order Management
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            Track customer purchases and monitor order status.
          </p>

        </div>

        {/* LOADING */}
        {loading ? (

          <h2 className="text-2xl">
            Loading Orders...
          </h2>

        ) : (

          <div className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-sm">

            {/* HEADER */}
            <div className="grid grid-cols-4 px-8 py-6 border-b border-white/10 text-gray-400 uppercase tracking-[3px] text-sm">

              <p>Order ID</p>

              <p>Customer</p>

              <p>Status</p>

              <p className="text-right">
                Total
              </p>

            </div>

            {/* ROWS */}
            <div className="divide-y divide-white/5">

              {orders.length > 0 ? (

                orders.map((order) => (

                  <div
                    key={order.id}
                    className="grid grid-cols-4 items-center px-8 py-6 hover:bg-white/[0.03] transition-all duration-300"
                  >

                    {/* ORDER ID */}
                    <h3 className="font-semibold text-lg">
                      #{order.id}
                    </h3>

                    {/* CUSTOMER */}
                    <p className="text-gray-300">
                      {order.user?.username}
                    </p>

                    {/* STATUS */}
                    <div>

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(order.status)}`}
                      >
                        {order.status}
                      </span>

                    </div>

                    {/* TOTAL */}
                    <h3 className="text-right text-2xl font-black text-red-400">

                      ₹{order.total_price}

                    </h3>

                  </div>

                ))

              ) : (

                <div className="p-10 text-center text-gray-400">

                  No Orders Found

                </div>

              )}

            </div>

          </div>

        )}

      </div>

    </section>

  );
}

export default AdminOrders;