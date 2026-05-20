// // import React, { useState, useEffect, useRef } from 'react'
// // import { Link } from 'react-router-dom'
// // import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";

// // const Navbar = () => {
// //   const [openMenu, setOpenMenu] = useState(null);
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const ref = useRef();

// //   // Close dropdown + mobile menu on outside click
// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (ref.current && !ref.current.contains(e.target)) {
// //         setOpenMenu(null);
// //         setMobileOpen(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handler);
// //     return () => document.removeEventListener("mousedown", handler);
// //   }, []);

// //   return (
// //     <>
// //       {/* NAVBAR */}
// //       <nav className="flex items-center justify-between bg-blue-600 text-white px-4 md:px-6 py-3 shadow-sm">

// //         {/* LOGO */}
// //         <div className="text-lg md:text-2xl font-bold tracking-wide">
// //           <Link to="/" className="hover:opacity-80">
// //             Saa<span className="text-yellow-300">h</span>
// //           </Link>
// //         </div>

// //         {/* SEARCH */}
// //         <div className="flex flex-1 mx-3 max-w-xs md:max-w-xl border border-white rounded-md focus-within:ring-2 focus-within:ring-blue-300">
// //           <input
// //             className="flex-1 px-3 py-1.5 md:px-4 md:py-2 outline-none text-black bg-white rounded-l-md placeholder-gray-500"
// //             type="text"
// //             placeholder="Search..."
// //           />
// //           <button className="bg-white text-black px-3 md:px-4 rounded-r-md hover:bg-gray-100 transition">
// //             <FiSearch size={18} />
// //           </button>
// //         </div>

// //         {/* HAMBURGER */}
// //         <div className="md:hidden">
// //           <FiMenu
// //             size={24}
// //             onClick={() => setMobileOpen(prev => !prev)}
// //             className="cursor-pointer"
// //           />
// //         </div>

// //         {/* DESKTOP RIGHT SECTION */}
// //         <div ref={ref} className="hidden md:flex items-center gap-6 text-base">

// //           {/* CATEGORIES */}
// //           <div className="relative">
// //             <span
// //               onClick={() =>
// //                 setOpenMenu(prev => prev === "category" ? null : "category")
// //               }
// //               className="cursor-pointer hover:text-yellow-300 transition"
// //             >
// //               Categories ▾
// //             </span>

// //             {openMenu === "category" && (
// //               <div className="absolute top-8 mt-2 left-0 bg-white text-gray-800 min-w-[180px] rounded-md shadow-md border py-1 z-50">
// //                 <Link to="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
// //                 <Link to="/category/fashion" className="block px-4 py-2 hover:bg-gray-100">Fashion</Link>
// //                 <Link to="/category/books" className="block px-4 py-2 hover:bg-gray-100">Books</Link>
// //                 <Link to="/category/kitchen" className="block px-4 py-2 hover:bg-gray-100">Home & Kitchen</Link>
// //               </div>
// //             )}
// //           </div>

// //           {/* CART */}
// //           <Link to="/cart" className="relative flex items-center hover:text-yellow-300 transition">
// //             <FiShoppingCart size={22} />
// //             <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
// //               0
// //             </span>
// //           </Link>

// //           {/* ACCOUNT */}
// //           <div className="relative">
// //             <span
// //               onClick={() =>
// //                 setOpenMenu(prev => prev === "account" ? null : "account")
// //               }
// //               className="flex items-center gap-1 cursor-pointer hover:text-yellow-300 transition"
// //             >
// //               Account <span className="text-xs">▾</span>
// //             </span>

// //             {openMenu === "account" && (
// //               <div className="absolute top-8 mt-2 right-0 bg-white text-gray-800 min-w-[180px] rounded-md shadow-md border py-1 z-50">
// //                 <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
// //                 <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
// //                 <Link to="/logout" className="block px-4 py-2 text-red-500 hover:bg-red-50">Logout</Link>
// //               </div>
// //             )}
// //           </div>

// //           {/* LOGIN */}
// //           <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
// //             <FiUser className="text-blue-600" size={18} />
// //             <span className="text-blue-600">Login</span>
// //           </button>

// //         </div>
// //       </nav>

// //       {/* MOBILE MENU */}
// //       {mobileOpen && (
// //         <div className="md:hidden bg-white text-black px-4 py-4 space-y-4 shadow-md border-t">

// //           {/* CATEGORIES */}
// //           <div>
// //           <p
// //             onClick={() =>
// //               setOpenMenu(prev =>
// //                 prev === "mobile-category" ? null : "mobile-category"
// //               )
// //             }
// //             className="flex items-center cursor-pointer font-medium"
// //           >
// //             Categories
// //             <span>▾</span>
// //           </p>

// //           {openMenu === "mobile-category" && (
// //             <div className="pl-4 mt-2 space-y-1">
// //               <Link to="/category/electronics" className="block">Electronics</Link>
// //               <Link to="/category/fashion" className="block">Fashion</Link>
// //               <Link to="/category/books" className="block">Books</Link>
// //             </div>
// //           )}
// //         </div>

// //           {/* CART */}
// //           <Link to="/cart" className="block text-xs">
// //             Cart
// //           </Link>

// //           {/* ACCOUNT */}
// //           <div>
// //             <p
// //               onClick={() =>
// //                 setOpenMenu(prev =>
// //                   prev === "mobile-account" ? null : "mobile-account"
// //                 )
// //               }
// //               className="flex items-center cursor-pointer font-medium"
// //             >
// //               Account
// //               <span>▾</span>
// //             </p>

// //             {openMenu === "mobile-account" && (
// //               <div className="pl-4 mt-2 space-y-1">
// //                 <Link to="/profile" className="block">My Profile</Link>
// //                 <Link to="/orders" className="block">My Orders</Link>
// //               </div>
// //             )}
// //           </div>

// //           {/* AUTH */}
// //           <div className="pt-2 border-t">
// //             <button className="block text-blue-600">Login</button>
// //             <button className="block text-red-500 mt-2">Logout</button>
// //           </div>

// //         </div>
// //       )}
// //     </>
// //   )
// // }

// // export default Navbar;

// import React, { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { FiSearch, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
// import Products from '../../pages/Products';

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const ref = useRef();

//   // Close dropdown + mobile menu on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setOpenMenu(null);
//         setMobileOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="flex items-center justify-between bg-black text-white px-4 md:px-6 py-3 shadow-sm border-b border-zinc-800">

//         {/* LOGO */}
//         <div className="text-lg md:text-2xl font-bold tracking-wide">
//           <Link to="/" className="hover:opacity-80">
//             Saa<span className="text-red-500">h</span>
//           </Link>
//         </div>

//         {/* SEARCH */}
//         <div className="flex flex-1 mx-3 max-w-xs md:max-w-xl border border-zinc-700 rounded-md focus-within:ring-2 focus-within:ring-zinc-500 bg-zinc-900">
//           <input
//             className="flex-1 px-3 py-1.5 md:px-4 md:py-2 outline-none text-white bg-zinc-900 rounded-l-md placeholder-gray-500"
//             type="text"
//             placeholder="Search..."
//           />
//           <button className="bg-zinc-800 text-white px-3 md:px-4 rounded-r-md hover:bg-zinc-700 transition">
//             <FiSearch size={18} />
//           </button>
//         </div>

//         {/* HAMBURGER */}
//         <div className="md:hidden">
//           <FiMenu
//             size={24}
//             onClick={() => setMobileOpen(prev => !prev)}
//             className="cursor-pointer"
//           />
//         </div>

//         {/* DESKTOP RIGHT SECTION */}
//         <div ref={ref} className="hidden md:flex items-center gap-6 text-base">

//           {/* CATEGORIES */}
//           <div className="relative">
//             <span
//               onClick={() =>
//                 setOpenMenu(prev => prev === "category" ? null : "category")
//               }
//               className="cursor-pointer hover:text-red-400 transition"
//             >
//               Categories ▾
//             </span>

//             {openMenu === "category" && (
//               <div className="absolute top-8 mt-2 left-0 bg-zinc-900 text-white min-w-[180px] rounded-md shadow-md border border-zinc-800 py-1 z-50">
//                 <Link to="/category/electronics" className="block px-4 py-2 hover:bg-zinc-800">Electronics</Link>
//                 <Link to="/category/fashion" className="block px-4 py-2 hover:bg-zinc-800">Fashion</Link>
//                 <Link to="/category/books" className="block px-4 py-2 hover:bg-zinc-800">Books</Link>
//                 <Link to="/category/kitchen" className="block px-4 py-2 hover:bg-zinc-800">Home & Kitchen</Link>
//               </div>
//             )}
//           </div>

//           {/* CART */}
//           <Link to="/cart" className="relative flex items-center hover:text-red-400 transition">
//             <FiShoppingCart size={22} />
//             <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 rounded-full">
//               {Products.length}
//             </span>
//           </Link>

//           {/* ACCOUNT */}
//           <div className="relative">
//             <span
//               onClick={() =>
//                 setOpenMenu(prev => prev === "account" ? null : "account")
//               }
//               className="flex items-center gap-1 cursor-pointer hover:text-red-400 transition"
//             >
//               Account <span className="text-xs">▾</span>
//             </span>

//             {openMenu === "account" && (
//               <div className="absolute top-8 mt-2 right-0 bg-zinc-900 text-white min-w-[180px] rounded-md shadow-md border border-zinc-800 py-1 z-50">
//                 <Link to="/profile" className="block px-4 py-2 hover:bg-zinc-800">My Profile</Link>
//                 <Link to="/orders" className="block px-4 py-2 hover:bg-zinc-800">My Orders</Link>
//                 <Link to="/login" className="block px-4 py-2 text-red-400 hover:bg-zinc-800">Logout</Link>
//               </div>
//             )}
//           </div>

//           {/* LOGIN */}
//           <Link
//             to="/login"
//             className="flex items-center gap-2 bg-white px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
//           >
//             <FiUser className="text-black" size={18} />

//             <span className="text-black">
//               Login
//             </span>

//           </Link>

//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden bg-black text-white px-4 py-4 space-y-4 shadow-md border-t border-zinc-800">

//           {/* CATEGORIES */}
//           <div>
//             <p
//               onClick={() =>
//                 setOpenMenu(prev =>
//                   prev === "mobile-category" ? null : "mobile-category"
//                 )
//               }
//               className="flex items-center cursor-pointer font-medium"
//             >
//               Categories
//               <span>▾</span>
//             </p>

//             {openMenu === "mobile-category" && (
//               <div className="pl-4 mt-2 space-y-1 text-gray-300">
//                 <Link to="/category/electronics" className="block">Electronics</Link>
//                 <Link to="/category/fashion" className="block">Fashion</Link>
//                 <Link to="/category/books" className="block">Books</Link>
//               </div>
//             )}
//           </div>

//           {/* CART */}
//           <Link to="/cart" className="block text-sm hover:text-red-400 transition">
//             Cart
//           </Link>

//           {/* ACCOUNT */}
//           <div>
//             <p
//               onClick={() =>
//                 setOpenMenu(prev =>
//                   prev === "mobile-account" ? null : "mobile-account"
//                 )
//               }
//               className="flex items-center cursor-pointer font-medium"
//             >
//               Account
//               <span>▾</span>
//             </p>

//             {openMenu === "mobile-account" && (
//               <div className="pl-4 mt-2 space-y-1 text-gray-300">
//                 <Link to="/profile" className="block">My Profile</Link>
//                 <Link to="/orders" className="block">My Orders</Link>
//               </div>
//             )}
//           </div>

//           {/* AUTH */}
//           <div className="pt-2 border-t border-zinc-800">
//             <button className="block text-white">Login</button>
//             <button className="block text-red-400 mt-2">Logout</button>
//           </div>

//         </div>
//       )}
//     </>
//   )
// }

// export default Navbar


// ##################################################################################################



import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiLogOut,
} from "react-icons/fi";

const Navbar = () => {

  const navigate = useNavigate();

  const [openMenu, setOpenMenu] =
    useState(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const ref = useRef();

  // AUTH
  const token =
    localStorage.getItem("access");

  const isAdmin =
    localStorage.getItem("is_admin") === "true";

  const username =
    localStorage.getItem("username");

  // CART COUNT
  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  // CLOSE MENUS
  useEffect(() => {

    const handler = (e) => {

      if (
        ref.current &&
        !ref.current.contains(e.target)
      ) {

        setOpenMenu(null);

        setMobileOpen(false);

      }

    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    localStorage.removeItem("is_admin");

    localStorage.removeItem("username");

    navigate("/login");

  };

  return (

    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-black/95 backdrop-blur-xl text-white px-4 md:px-8 py-4 border-b border-white/10">

        {/* LOGO */}
        <Link
          to={
            isAdmin
              ? "/admin/products"
              : "/"
          }
          className="text-2xl md:text-3xl font-black tracking-wide"
        >

          <span className="text-white">
            LUXE
          </span>

          <span className="text-red-500">
            MART
          </span>

        </Link>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 mx-8 max-w-2xl border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">

          <input
            type="text"
            placeholder="Search premium products..."
            className="flex-1 bg-transparent px-5 py-3 outline-none text-white placeholder-gray-500"
          />

          <button className="px-5 bg-red-500 hover:bg-red-600 transition-all duration-300">

            <FiSearch size={20} />

          </button>

        </div>

        {/* MOBILE MENU */}
        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className="md:hidden"
        >

          <FiMenu size={26} />

        </button>

        {/* DESKTOP RIGHT */}
        <div
          ref={ref}
          className="hidden md:flex items-center gap-7"
        >

          {/* CATEGORIES */}
          <div className="relative">

            <button
              onClick={() =>
                setOpenMenu(
                  openMenu === "categories"
                    ? null
                    : "categories"
                )
              }
              className="hover:text-red-400 transition"
            >
              Categories ▾
            </button>

            {openMenu === "categories" && (

              <div className="absolute top-10 left-0 w-56 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl py-3">

                <Link
                  to="/category/electronics"
                  className="block px-5 py-3 hover:bg-white/5 transition"
                >
                  Electronics
                </Link>

                <Link
                  to="/category/fashion"
                  className="block px-5 py-3 hover:bg-white/5 transition"
                >
                  Fashion
                </Link>

                <Link
                  to="/category/accessories"
                  className="block px-5 py-3 hover:bg-white/5 transition"
                >
                  Accessories
                </Link>

                <Link
                  to="/category/shoes"
                  className="block px-5 py-3 hover:bg-white/5 transition"
                >
                  Shoes
                </Link>

              </div>

            )}

          </div>

          {/* CART */}
          {!isAdmin && (

            <Link
              to="/cart"
              className="relative hover:text-red-400 transition"
            >

              <FiShoppingCart size={23} />

              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                {cartItems.length}

              </span>

            </Link>

          )}

          {/* ACCOUNT */}
          {token ? (

            <div className="relative">

              <button
                onClick={() =>
                  setOpenMenu(
                    openMenu === "account"
                      ? null
                      : "account"
                  )
                }
                className="flex items-center gap-2 hover:text-red-400 transition"
              >

                <FiUser size={20} />

                <span>
                  {username}
                </span>

              </button>

              {openMenu === "account" && (

                <div className="absolute top-10 right-0 w-56 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl py-3">

                  {!isAdmin && (

                    <Link
                      to="/profile"
                      className="block px-5 py-3 hover:bg-white/5 transition"
                    >
                      My Profile
                    </Link>

                  )}

                  {isAdmin && (

                    <Link
                      to="/admin/products"
                      className="block px-5 py-3 hover:bg-white/5 transition"
                    >
                      Admin Dashboard
                    </Link>

                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-5 py-3 text-red-400 hover:bg-white/5 transition"
                  >

                    <FiLogOut />

                    Logout

                  </button>

                </div>

              )}

            </div>

          ) : (

            <Link
              to="/login"
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
            >
              Login
            </Link>

          )}

        </div>

      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (

        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-5 text-white">

          <Link
            to="/category/electronics"
            className="block"
          >
            Electronics
          </Link>

          <Link
            to="/category/fashion"
            className="block"
          >
            Fashion
          </Link>

          <Link
            to="/category/accessories"
            className="block"
          >
            Accessories
          </Link>

          <Link
            to="/category/shoes"
            className="block"
          >
            Shoes
          </Link>

          {!isAdmin && (

            <Link
              to="/cart"
              className="block"
            >
              Cart
            </Link>

          )}

          {token ? (

            <button
              onClick={handleLogout}
              className="text-red-400"
            >
              Logout
            </button>

          ) : (

            <Link
              to="/login"
              className="text-red-400"
            >
              Login
            </Link>

          )}

        </div>

      )}

    </>
  );

};

export default Navbar;