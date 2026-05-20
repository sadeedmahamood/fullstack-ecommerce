

import { useEffect, useState } from "react";

import {
  Package,
  ShoppingCart,
  IndianRupee,
  Users,
  TrendingUp,
} from "lucide-react";

function AdminDashboard() {

  const [products, setProducts] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH DATA
  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData =
    async () => {

      try {

        // PRODUCTS
        const productResponse =
          await fetch(
            "http://127.0.0.1:8000/api/product/"
          );

        const productData =
          await productResponse.json();

        // ORDERS
        const orderResponse =
          await fetch(
            "http://127.0.0.1:8000/api/order/all_orders/",
            {
              headers: {
                Authorization:
                  `Bearer ${localStorage.getItem("access")}`,
              },
            }
          );

        const orderData =
          await orderResponse.json();

        setProducts(
          productData.results || productData
        );

        setOrders(orderData);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  // TOTAL SALES
  const totalSales =
    orders.reduce(

      (total, order) =>
        total +
        Number(order.total_price || 0),

      0

    );

  // TOTAL USERS
  const totalUsers =
    new Set(

      orders.map(
        (order) => order.user
      )

    ).size;

  // RECENT ORDERS
  const recentOrders =
    orders.slice(0, 5);

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-black text-white">

        <h1 className="text-4xl font-black text-red-500">

          Loading Dashboard...

        </h1>

      </div>

    );

  }

  return (

    <section className="min-h-screen text-white">

      {/* HEADER */}
      <div className="mb-14">

        <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">

          Admin Overview

        </p>

        <h1 className="text-5xl md:text-6xl font-black mb-5">

          Dashboard

        </h1>

        <p className="text-gray-400 text-lg">

          Manage products, orders and monitor your ecommerce business.

        </p>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-14">

        {/* PRODUCTS */}
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-gray-400 mb-3">

                Total Products

              </p>

              <h2 className="text-5xl font-black">

                {products.length}

              </h2>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20">

              <Package
                size={40}
                className="text-red-500"
              />

            </div>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            <span className="text-sm">

              Active inventory

            </span>

          </div>

        </div>

        {/* ORDERS */}
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-gray-400 mb-3">

                Total Orders

              </p>

              <h2 className="text-5xl font-black">

                {orders.length}

              </h2>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20">

              <ShoppingCart
                size={40}
                className="text-red-500"
              />

            </div>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            <span className="text-sm">

              Orders increasing

            </span>

          </div>

        </div>

        {/* SALES */}
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-gray-400 mb-3">

                Total Revenue

              </p>

              <h2 className="text-4xl font-black text-red-400">

                ₹{Number(totalSales).toLocaleString("en-IN")}

              </h2>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20">

              <IndianRupee
                size={40}
                className="text-red-500"
              />

            </div>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            <span className="text-sm">

              Revenue growing

            </span>

          </div>

        </div>

        {/* USERS */}
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl">

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-gray-400 mb-3">

                Customers

              </p>

              <h2 className="text-5xl font-black">

                {totalUsers}

              </h2>

            </div>

            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center border border-red-500/20">

              <Users
                size={40}
                className="text-red-500"
              />

            </div>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            <span className="text-sm">

              New customers

            </span>

          </div>

        </div>

      </div>

      {/* RECENT ORDERS */}
      <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl">

        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="uppercase tracking-[5px] text-red-400 text-sm mb-3">

              Order Tracking

            </p>

            <h2 className="text-4xl font-black">

              Recent Orders

            </h2>

          </div>

        </div>

        {recentOrders.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-3xl font-black mb-4">

              No Orders Yet

            </h2>

            <p className="text-gray-400">

              Orders will appear here after purchase.

            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-white/10 text-left">

                  <th className="pb-5 text-gray-400 font-medium">

                    Order ID

                  </th>

                  <th className="pb-5 text-gray-400 font-medium">

                    Customer

                  </th>

                  <th className="pb-5 text-gray-400 font-medium">

                    Amount

                  </th>

                  <th className="pb-5 text-gray-400 font-medium">

                    Status

                  </th>

                </tr>

              </thead>

              <tbody>

                {recentOrders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b border-white/5"
                  >

                    <td className="py-6 font-semibold">

                      #{order.id}

                    </td>

                    <td className="py-6">

                      {order.user || "Customer"}

                    </td>

                    <td className="py-6 text-red-400 font-bold">

                      ₹
                      {Number(
                        order.total_price
                      ).toLocaleString("en-IN")}

                    </td>

                    <td className="py-6">

                      <span
                        className={`px-5 py-2 rounded-full text-sm font-semibold ${
                          order.status === "C"
                            ? "bg-green-500/20 text-green-400"
                            : order.status === "P"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >

                        {order.status === "C"
                          ? "Completed"
                          : order.status === "P"
                          ? "Pending"
                          : "Cancelled"}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </section>

  );

}

export default AdminDashboard;