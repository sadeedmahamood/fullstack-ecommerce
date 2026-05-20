// // const Profile = () => {
// //   return (
// //     <section className="relative min-h-screen bg-black text-white overflow-hidden">

// //       {/* BACKGROUND */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

// //       {/* CONTAINER */}
// //       <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">

// //         {/* HEADING */}
// //         <div className="text-center mb-16">

// //           <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
// //             My Profile
// //           </p>

// //           <h1 className="text-5xl md:text-6xl font-black mb-6">
// //             Account Dashboard
// //           </h1>

// //           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
// //             Manage your account details and track your recent orders.
// //           </p>

// //         </div>

// //         {/* PROFILE CARD */}
// //         <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-[35px] p-8 md:p-10 mb-10">

// //           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

// //             {/* LEFT */}
// //             <div className="flex items-center gap-6">

// //               <img
// //                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200"
// //                 alt="Profile"
// //                 className="w-24 h-24 rounded-full object-cover border-4 border-red-500"
// //               />

// //               <div>

// //                 <h2 className="text-3xl font-bold mb-2">
// //                   Alex Morgan
// //                 </h2>

// //                 <p className="text-gray-400 mb-1">
// //                   alex@example.com
// //                 </p>

// //                 <p className="text-red-400 font-medium">
// //                   Premium Member
// //                 </p>

// //               </div>

// //             </div>

// //             {/* RIGHT */}
// //             <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
// //               Edit Profile
// //             </button>

// //           </div>

// //         </div>

// //         {/* STATS */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

// //           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

// //             <h3 className="text-4xl font-black text-red-400 mb-2">
// //               24
// //             </h3>

// //             <p className="text-gray-400">
// //               Orders
// //             </p>

// //           </div>

// //           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

// //             <h3 className="text-4xl font-black text-red-400 mb-2">
// //               12
// //             </h3>

// //             <p className="text-gray-400">
// //               Wishlist
// //             </p>

// //           </div>

// //           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

// //             <h3 className="text-4xl font-black text-red-400 mb-2">
// //               5
// //             </h3>

// //             <p className="text-gray-400">
// //               Reviews
// //             </p>

// //           </div>

// //           <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">

// //             <h3 className="text-4xl font-black text-red-400 mb-2">
// //               Gold
// //             </h3>

// //             <p className="text-gray-400">
// //               Plan
// //             </p>

// //           </div>

// //         </div>

// //         {/* RECENT ORDERS */}
// //         <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

// //           <div className="flex items-center justify-between mb-10">

// //             <div>

// //               <p className="uppercase tracking-[6px] text-red-400 text-sm mb-3">
// //                 Recent Orders
// //               </p>

// //               <h2 className="text-4xl font-bold">
// //                 Shopping Activity
// //               </h2>

// //             </div>

// //             <button className="border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold">
// //               View All
// //             </button>

// //           </div>

// //           {/* ORDER LIST */}
// //           <div className="space-y-5">

// //             {/* ORDER */}
// //             <div className="bg-black/30 border border-white/10 rounded-3xl p-5 flex items-center justify-between gap-5">

// //               <div className="flex items-center gap-5">

// //                 <img
// //                   src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200"
// //                   alt="Product"
// //                   className="w-20 h-20 rounded-2xl object-cover"
// //                 />

// //                 <div>

// //                   <h3 className="text-xl font-semibold mb-1">
// //                     Premium Smartphone
// //                   </h3>

// //                   <p className="text-gray-400 text-sm">
// //                     Order #PRM10245
// //                   </p>

// //                 </div>

// //               </div>

// //               <div className="text-right">

// //                 <h3 className="text-2xl font-bold text-red-400 mb-1">
// //                   ₹89,999
// //                 </h3>

// //                 <p className="text-green-400 text-sm font-medium">
// //                   Delivered
// //                 </p>

// //               </div>

// //             </div>

// //             {/* ORDER */}
// //             <div className="bg-black/30 border border-white/10 rounded-3xl p-5 flex items-center justify-between gap-5">

// //               <div className="flex items-center gap-5">

// //                 <img
// //                   src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200"
// //                   alt="Product"
// //                   className="w-20 h-20 rounded-2xl object-cover"
// //                 />

// //                 <div>

// //                   <h3 className="text-xl font-semibold mb-1">
// //                     Luxury Smart Watch
// //                   </h3>

// //                   <p className="text-gray-400 text-sm">
// //                     Order #PRM10246
// //                   </p>

// //                 </div>

// //               </div>

// //               <div className="text-right">

// //                 <h3 className="text-2xl font-bold text-red-400 mb-1">
// //                   ₹24,999
// //                 </h3>

// //                 <p className="text-yellow-400 text-sm font-medium">
// //                   Shipping
// //                 </p>

// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // };

// // export default Profile;

// import { useNavigate } from "react-router-dom";

// import {
//   FiUser,
//   FiShoppingBag,
//   FiHeart,
//   FiStar,
//   FiLogOut,
// } from "react-icons/fi";

// const Profile = () => {

//   const navigate = useNavigate();

//   // USER DATA
//   const username =
//     localStorage.getItem("username") || "Guest User";

//   const isAdmin =
//     localStorage.getItem("is_admin") === "true";

//   // LOGOUT
//   const handleLogout = () => {

//     localStorage.removeItem("token");

//     localStorage.removeItem("refresh");

//     localStorage.removeItem("is_admin");

//     localStorage.removeItem("username");

//     navigate("/login");

//   };

//   // DUMMY ORDERS
//   const orders = [
//     {
//       id: "PRM10245",
//       name: "Premium Smartphone",
//       image:
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
//       price: "89,999",
//       status: "Delivered",
//       statusColor: "text-green-400",
//     },

//     {
//       id: "PRM10246",
//       name: "Luxury Smart Watch",
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
//       price: "24,999",
//       status: "Shipping",
//       statusColor: "text-yellow-400",
//     },
//   ];

//   return (

//     <section className="relative min-h-screen bg-black text-white overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

//       {/* MAIN */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

//         {/* HEADER */}
//         <div className="text-center mb-16">

//           <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
//             My Account
//           </p>

//           <h1 className="text-5xl md:text-6xl font-black mb-6">
//             Profile Dashboard
//           </h1>

//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Manage your account, orders, and shopping activity.
//           </p>

//         </div>

//         {/* PROFILE CARD */}
//         <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-[35px] p-8 md:p-10 mb-10">

//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

//             {/* LEFT */}
//             <div className="flex items-center gap-6">

//               {/* AVATAR */}
//               <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center text-4xl font-black">

//                 {username.charAt(0).toUpperCase()}

//               </div>

//               {/* USER INFO */}
//               <div>

//                 <h2 className="text-3xl font-bold mb-2">

//                   {username}

//                 </h2>

//                 <p className="text-gray-400 mb-2">

//                   {isAdmin
//                     ? "Administrator Account"
//                     : "Premium Customer"}

//                 </p>

//                 <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 text-sm">

//                   <FiUser />

//                   Active Account

//                 </div>

//               </div>

//             </div>

//             {/* BUTTONS */}
//             <div className="flex flex-wrap gap-4">

//               <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-7 py-4 rounded-2xl font-semibold">

//                 Edit Profile

//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all duration-300 px-7 py-4 rounded-2xl font-semibold flex items-center gap-2"
//               >

//                 <FiLogOut />

//                 Logout

//               </button>

//             </div>

//           </div>

//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

//           {/* ORDERS */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

//             <FiShoppingBag
//               className="text-red-400 mb-5"
//               size={30}
//             />

//             <h3 className="text-4xl font-black mb-2">
//               24
//             </h3>

//             <p className="text-gray-400">
//               Total Orders
//             </p>

//           </div>

//           {/* WISHLIST */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

//             <FiHeart
//               className="text-red-400 mb-5"
//               size={30}
//             />

//             <h3 className="text-4xl font-black mb-2">
//               12
//             </h3>

//             <p className="text-gray-400">
//               Wishlist
//             </p>

//           </div>

//           {/* REVIEWS */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

//             <FiStar
//               className="text-red-400 mb-5"
//               size={30}
//             />

//             <h3 className="text-4xl font-black mb-2">
//               5
//             </h3>

//             <p className="text-gray-400">
//               Reviews
//             </p>

//           </div>

//           {/* MEMBERSHIP */}
//           <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

//             <FiUser
//               className="text-red-400 mb-5"
//               size={30}
//             />

//             <h3 className="text-2xl font-black mb-2">
//               GOLD
//             </h3>

//             <p className="text-gray-400">
//               Membership
//             </p>

//           </div>

//         </div>

//         {/* RECENT ORDERS */}
//         <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

//           {/* TOP */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

//             <div>

//               <p className="uppercase tracking-[6px] text-red-400 text-sm mb-3">
//                 Recent Orders
//               </p>

//               <h2 className="text-4xl font-bold">
//                 Shopping Activity
//               </h2>

//             </div>

//             <button className="border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold">

//               View All

//             </button>

//           </div>

//           {/* ORDERS */}
//           <div className="space-y-5">

//             {orders.map((order) => (

//               <div
//                 key={order.id}
//                 className="bg-black/30 border border-white/10 rounded-3xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
//               >

//                 {/* LEFT */}
//                 <div className="flex items-center gap-5">

//                   <img
//                     src={order.image}
//                     alt={order.name}
//                     className="w-24 h-24 rounded-2xl object-cover"
//                   />

//                   <div>

//                     <h3 className="text-xl font-semibold mb-2">

//                       {order.name}

//                     </h3>

//                     <p className="text-gray-400 text-sm">

//                       Order #{order.id}

//                     </p>

//                   </div>

//                 </div>

//                 {/* RIGHT */}
//                 <div className="text-left md:text-right">

//                   <h3 className="text-2xl font-black text-red-400 mb-2">

//                     ₹{order.price}

//                   </h3>

//                   <p className={`${order.statusColor} text-sm font-medium`}>

//                     {order.status}

//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// };

// export default Profile;


import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
} from "react-icons/fi";

import { getMyOrders } from "../services/orderService";

const Profile = () => {

  const navigate = useNavigate();

  // USER DATA
  const username =
    localStorage.getItem("username") ||
    "Guest User";

  const isAdmin =
    localStorage.getItem("is_admin") === "true";

  // STATES
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH ORDERS
  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const data =
        await getMyOrders();

      setOrders(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    localStorage.removeItem("is_admin");

    localStorage.removeItem("username");

    navigate("/login");

  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">

            My Account

          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">

            Profile Dashboard

          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">

            Manage your account and track your orders.

          </p>

        </div>

        {/* PROFILE CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-[35px] p-8 md:p-10 mb-10">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* LEFT */}
            <div className="flex items-center gap-6">

              {/* AVATAR */}
              <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center text-4xl font-black">

                {username.charAt(0).toUpperCase()}

              </div>

              {/* USER INFO */}
              <div>

                <h2 className="text-3xl font-bold mb-2">

                  {username}

                </h2>

                <p className="text-gray-400 mb-2">

                  {isAdmin
                    ? "Administrator Account"
                    : "Premium Customer"}

                </p>

                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 text-sm">

                  <FiUser />

                  Active Account

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button onClick={()=>
                navigate('/edit-profile')
              }
               className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-7 py-4 rounded-2xl font-semibold">

                Edit Profile

              </button>

              <button
                onClick={handleLogout}
                className="border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all duration-300 px-7 py-4 rounded-2xl font-semibold flex items-center gap-2"
              >

                <FiLogOut />

                Logout

              </button>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          {/* ORDERS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

            <FiShoppingBag
              className="text-red-400 mb-5"
              size={30}
            />

            <h3 className="text-4xl font-black mb-2">

              {orders.length}

            </h3>

            <p className="text-gray-400">

              Total Orders

            </p>

          </div>

          {/* SAVED ITEMS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

            <FiHeart
              className="text-red-400 mb-5"
              size={30}
            />

            <h3 className="text-4xl font-black mb-2">

              --

            </h3>

            <p className="text-gray-400">

              Saved Items

            </p>

          </div>

          {/* MEMBERSHIP */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-7">

            <FiUser
              className="text-red-400 mb-5"
              size={30}
            />

            <h3 className="text-2xl font-black mb-2">

              GOLD

            </h3>

            <p className="text-gray-400">

              Membership

            </p>

          </div>

        </div>

        {/* ORDERS */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

          {/* TOP */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

            <div>

              <p className="uppercase tracking-[6px] text-red-400 text-sm mb-3">

                Recent Orders

              </p>

              <h2 className="text-4xl font-bold">

                Shopping Activity

              </h2>

            </div>

          </div>

          {/* LOADING */}
          {loading ? (

            <div className="text-center py-20">

              <h2 className="text-3xl font-bold text-red-400">

                Loading Orders...

              </h2>

            </div>

          ) : orders.length === 0 ? (

            <div className="text-center py-20">

              <h2 className="text-4xl font-black mb-5">

                No Orders Yet

              </h2>

              <p className="text-gray-400">

                Start shopping to see your orders here.

              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {orders.map((order) => (

                <div
                  key={order.order_id}
                  className="bg-black/30 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >

                  {/* LEFT */}
                  <div>

                    <h3 className="text-2xl font-bold mb-2">

                      Order #{order.order_id}

                    </h3>

                    <p className="text-gray-400 mb-2">

                      {new Date(
                        order.created_at
                      ).toLocaleDateString()}

                    </p>

                    <div className="space-y-1">

                      {order.items.map(
                        (item, index) => (

                          <p
                            key={index}
                            className="text-sm text-gray-300"
                          >

                            {item.product}
                            {" × "}
                            {item.quantity}

                          </p>

                        )
                      )}

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="text-left md:text-right">

                    <h3 className="text-3xl font-black text-red-400 mb-3">

                      ₹{
                        Number(
                          order.total_price
                        ).toLocaleString("en-IN")
                      }

                    </h3>

                    <p
                      className={`text-sm font-semibold ${
                        order.status === "C"
                          ? "text-green-400"
                          : order.status === "P"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >

                      {order.status === "C"
                        ? "Completed"
                        : order.status === "P"
                        ? "Pending"
                        : "Cancelled"}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </section>

  );

};

export default Profile;