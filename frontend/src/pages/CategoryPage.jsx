// import { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

// function CategoryPage() {

//   const { categoryName } = useParams();

//   const [products, setProducts] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(null);

//   // FETCH PRODUCTS
//   useEffect(() => {

//     fetchCategoryProducts();

//   }, [categoryName]);

//   const fetchCategoryProducts =
//     async () => {

//       try {

//         setLoading(true);

//         setError(null);

//         const response =
//           await fetch(

//             `http://127.0.0.1:8000/api/product/?category=${categoryName}`

//           );

//         if (!response.ok) {

//           throw new Error(
//             "Failed to fetch products"
//           );

//         }

//         const data =
//           await response.json();

//         setProducts(
//           data.results || data
//         );

//       } catch (err) {

//         console.error(err);

//         setError(
//           "Failed to load category products"
//         );

//       } finally {

//         setLoading(false);

//       }

//     };

//   // FORMAT PRICE
//   const formatPrice = (price) => {

//     return Number(price)
//       .toLocaleString("en-IN", {
//         maximumFractionDigits: 0,
//       });

//   };

//   // LOADING
//   if (loading) {

//     return (

//       <div className="min-h-screen bg-black text-white flex items-center justify-center">

//         <h1 className="text-3xl font-bold text-red-400">

//           Loading {categoryName}...

//         </h1>

//       </div>

//     );

//   }

//   // ERROR
//   if (error) {

//     return (

//       <div className="min-h-screen bg-black text-white flex items-center justify-center">

//         <h1 className="text-3xl font-bold text-red-500">

//           {error}

//         </h1>

//       </div>

//     );

//   }

//   return (

//     <section className="min-h-screen bg-black text-white px-6 py-20">

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto mb-16 text-center">

//         <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">

//           Premium Collection

//         </p>

//         <h1 className="text-5xl md:text-7xl font-black capitalize mb-5">

//           {categoryName}

//         </h1>

//         <p className="text-gray-400 text-lg">

//           {products.length} products available

//         </p>

//       </div>

//       {/* EMPTY */}
//       {products.length === 0 ? (

//         <div className="text-center py-32">

//           <h2 className="text-5xl font-black mb-5">

//             No Products Found

//           </h2>

//           <p className="text-gray-400">

//             No products available in this category.

//           </p>

//         </div>

//       ) : (

//         /* PRODUCTS */
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

//           {products.map((product) => (

//             <div
//               key={product.id}
//               className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-red-500/30 transition-all duration-300"
//             >

//               {/* IMAGE */}
//               <div className="relative overflow-hidden">

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover hover:scale-105 transition-all duration-500"
//                 />

//                 <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">

//                   PREMIUM

//                 </div>

//               </div>

//               {/* CONTENT */}
//               <div className="p-6">

//                 <p className="uppercase tracking-[4px] text-red-400 text-xs mb-3">

//                   {product.category?.name}

//                 </p>

//                 <h2 className="text-3xl font-black mb-4">

//                   {product.name}

//                 </h2>

//                 <p className="text-gray-400 mb-6 line-clamp-3">

//                   {product.description}

//                 </p>

//                 <div className="flex items-center justify-between gap-4">

//                   <h3 className="text-2xl font-black text-red-400">

//                     ₹{formatPrice(product.price)}

//                   </h3>

//                   <button className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold transition-all duration-300">

//                     Add To Cart

//                   </button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </section>

//   );

// }

// export default CategoryPage;




// import { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

// function CategoryPage() {

//   const { categoryName } = useParams();

//   const [products, setProducts] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState(null);

//   // CATEGORY GROUPS
//   const categoryGroups = {

//     electronics: [
//       "electronics",
//       "phones",
//       "laptops",
//       "gaming",
//     ],

//     fashion: [
//       "fashion",
//       "shoes",
//       "accessories",
//     ],

//   };

//   // FETCH PRODUCTS
//   useEffect(() => {

//     fetchCategoryProducts();

//   }, [categoryName]);

//   const fetchCategoryProducts =
//     async () => {

//       try {

//         setLoading(true);

//         setError(null);

//         let allProducts = [];

//         // CHECK GROUP CATEGORY
//         const groupedCategories =
//           categoryGroups[
//             categoryName.toLowerCase()
//           ];

//         // GROUP FETCH
//         if (groupedCategories) {

//           const requests =
//             groupedCategories.map((cat) =>

//               fetch(
//                 `http://127.0.0.1:8000/api/product/?category=${cat}`
//               ).then((res) => res.json())

//             );

//           const responses =
//             await Promise.all(requests);

//           responses.forEach((data) => {

//             const items =
//               data.results || data;

//             allProducts = [
//               ...allProducts,
//               ...items,
//             ];

//           });

//         }

//         // NORMAL CATEGORY
//         else {

//           const response =
//             await fetch(

//               `http://127.0.0.1:8000/api/product/?category=${categoryName}`

//             );

//           if (!response.ok) {

//             throw new Error(
//               "Failed to fetch products"
//             );

//           }

//           const data =
//             await response.json();

//           allProducts =
//             data.results || data;

//         }

//         // REMOVE DUPLICATES
//         const uniqueProducts =
//           Array.from(

//             new Map(
//               allProducts.map((item) => [
//                 item.id,
//                 item,
//               ])
//             ).values()

//           );

//         setProducts(uniqueProducts);

//       } catch (err) {

//         console.error(err);

//         setError(
//           "Failed to load category products"
//         );

//       } finally {

//         setLoading(false);

//       }

//     };

//   // FORMAT PRICE
//   const formatPrice = (price) => {

//     return Number(price)
//       .toLocaleString("en-IN", {
//         maximumFractionDigits: 0,
//       });

//   };

//   // LOADING
//   if (loading) {

//     return (

//       <div className="min-h-screen bg-black text-white flex items-center justify-center">

//         <h1 className="text-3xl font-bold text-red-400">

//           Loading {categoryName}...

//         </h1>

//       </div>

//     );

//   }

//   // ERROR
//   if (error) {

//     return (

//       <div className="min-h-screen bg-black text-white flex items-center justify-center">

//         <h1 className="text-3xl font-bold text-red-500">

//           {error}

//         </h1>

//       </div>

//     );

//   }

//   return (

//     <section className="min-h-screen bg-black text-white px-6 py-20">

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto mb-16 text-center">

//         <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">

//           Premium Collection

//         </p>

//         <h1 className="text-5xl md:text-7xl font-black capitalize mb-5">

//           {categoryName}

//         </h1>

//         <p className="text-gray-400 text-lg">

//           {products.length} products available

//         </p>

//       </div>

//       {/* EMPTY */}
//       {products.length === 0 ? (

//         <div className="text-center py-32">

//           <h2 className="text-5xl font-black mb-5">

//             No Products Found

//           </h2>

//           <p className="text-gray-400">

//             No products available in this category.

//           </p>

//         </div>

//       ) : (

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

//           {products.map((product) => (

//             <div
//               key={product.id}
//               className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-red-500/30 transition-all duration-300"
//             >

//               {/* IMAGE */}
//               <div className="relative overflow-hidden">

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover hover:scale-105 transition-all duration-500"
//                 />

//                 <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">

//                   PREMIUM

//                 </div>

//               </div>

//               {/* CONTENT */}
//               <div className="p-6">

//                 <p className="uppercase tracking-[4px] text-red-400 text-xs mb-3">

//                   {product.category?.name}

//                 </p>

//                 <h2 className="text-3xl font-black mb-4">

//                   {product.name}

//                 </h2>

//                 <p className="text-gray-400 mb-6 line-clamp-3">

//                   {product.description}

//                 </p>

//                 <div className="flex items-center justify-between gap-4">

//                   <h3 className="text-2xl font-black text-red-400">

//                     ₹{formatPrice(product.price)}

//                   </h3>

//                   <button className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold transition-all duration-300">

//                     Add To Cart

//                   </button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </section>

//   );

// }

// export default CategoryPage;

// ##################################################################################

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function CategoryPage() {

//   const { categoryName } = useParams();

//   const [products, setProducts] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState(null);

//   // CATEGORY GROUPS
//   const categoryGroups = {

//     electronics: [
//       "electronics",
//       "phones",
//       "laptops",
//       "gaming",
//     ],

//     fashion: [
//       "fashion",
//       "shoes",
//       "accessories",
//     ],

//   };

//   // FETCH PRODUCTS
//   useEffect(() => {

//     fetchCategoryProducts();

//   }, [categoryName]);

//   const fetchCategoryProducts = async () => {

//     try {

//       setLoading(true);

//       setError(null);

//       let allProducts = [];

//       // GROUP CATEGORY
//       const groupedCategories =
//         categoryGroups[
//           categoryName.toLowerCase()
//         ];

//       // GROUP FETCH
//       if (groupedCategories) {

//         const requests =
//           groupedCategories.map((cat) =>

//             fetch(
//               `http://127.0.0.1:8000/api/product/?category=${cat}`
//             ).then((res) => res.json())

//           );

//         const responses =
//           await Promise.all(requests);

//         responses.forEach((data) => {

//           const items =
//             data.results || data;

//           allProducts = [
//             ...allProducts,
//             ...items,
//           ];

//         });

//       }

//       // NORMAL CATEGORY
//       else {

//         const response =
//           await fetch(
//             `http://127.0.0.1:8000/api/product/?category=${categoryName}`
//           );

//         if (!response.ok) {

//           throw new Error(
//             "Failed to fetch products"
//           );

//         }

//         const data =
//           await response.json();

//         allProducts =
//           data.results || data;

//       }

//       // REMOVE DUPLICATES
//       const uniqueProducts =
//         Array.from(
//           new Map(
//             allProducts.map((item) => [
//               item.id,
//               item,
//             ])
//           ).values()
//         );

//       setProducts(uniqueProducts);

//     } catch (err) {

//       console.error(err);

//       setError(
//         "Failed to load category products"
//       );

//     } finally {

//       setLoading(false);

//     }

//   };

//   // FORMAT PRICE
//   const formatPrice = (price) => {

//     return Number(price)
//       .toLocaleString("en-IN", {
//         maximumFractionDigits: 0,
//       });

//   };

//   // ADD TO CART
//   const addToCart = async (productId) => {

//     try {

//       const token =
//         localStorage.getItem("access");

//       const response =
//         await fetch(
//           "http://127.0.0.1:8000/api/cart/add/",
//           {
//             method: "POST",

//             headers: {
//               "Content-Type":
//                 "application/json",

//               Authorization:
//                 `Bearer ${token}`,
//             },

//             body: JSON.stringify({
//               product_id: productId,
//               quantity: 1,
//             }),
//           }
//         );

//       const data =
//         await response.json();

//       if (response.ok) {

//         alert("Added To Cart");

//       } else {

//         alert(
//           data.error ||
//           "Failed To Add Cart"
//         );

//       }

//     } catch (error) {

//       console.error(error);

//       alert("Something went wrong");

//     }

//   };

//   // LOADING
//   if (loading) {

//     return (

//       <div className="min-h-screen bg-black text-white flex items-center justify-center">

//         <h1 className="text-3xl font-bold text-red-400">

//           Loading {categoryName}...

//         </h1>

//       </div>

//     );

//   }

//   // ERROR
//   if (error) {

//     return (

//       <div className="min-h-screen bg-black text-white flex items-center justify-center">

//         <h1 className="text-3xl font-bold text-red-500">

//           {error}

//         </h1>

//       </div>

//     );

//   }

//   return (

//     <section className="min-h-screen bg-black text-white px-6 py-20">

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto mb-16 text-center">

//         <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">

//           Premium Collection

//         </p>

//         <h1 className="text-5xl md:text-7xl font-black capitalize mb-5">

//           {categoryName}

//         </h1>

//         <p className="text-gray-400 text-lg">

//           {products.length} products available

//         </p>

//       </div>

//       {/* EMPTY */}
//       {products.length === 0 ? (

//         <div className="text-center py-32">

//           <h2 className="text-5xl font-black mb-5">

//             No Products Found

//           </h2>

//           <p className="text-gray-400">

//             No products available in this category.

//           </p>

//         </div>

//       ) : (

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

//           {products.map((product) => (

//             <div
//               key={product.id}
//               className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-red-500/30 transition-all duration-300 flex flex-col"
//             >

//               {/* IMAGE */}
//               <div className="relative overflow-hidden">

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-[320px] w-full object-cover hover:scale-105 transition-all duration-500"
//                 />

//                 <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">

//                   PREMIUM

//                 </div>

//               </div>

//               {/* CONTENT */}
//               <div className="p-6 flex flex-col flex-1">

//                 <p className="uppercase tracking-[4px] text-red-400 text-xs mb-3">

//                   {product.category?.name}

//                 </p>

//                 <h2 className="text-2xl font-black mb-4 min-h-[64px]">

//                   {product.name}

//                 </h2>

//                 <p className="text-gray-400 mb-6 line-clamp-3 flex-1">

//                   {product.description}

//                 </p>

//                 {/* BOTTOM */}
//                 <div className="flex items-center justify-between gap-4 mt-auto">

//                   <h3 className="text-2xl font-black text-red-400">

//                     ₹{formatPrice(product.price)}

//                   </h3>

//                   <button
//                     onClick={() =>
//                       addToCart(product.id)
//                     }
//                     className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap"
//                   >

//                     Add To Cart

//                   </button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </section>

//   );

// }

// export default CategoryPage;



import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { addToCartAPI } from "../services/cartService";
function CategoryPage() {

  const { categoryName } =
    useParams();

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  // CATEGORY GROUPS
  const categoryGroups = {

    electronics: [
      "electronics",
      "phones",
      "laptops",
      "gaming",
    ],

    fashion: [
      "fashion",
      "shoes",
      "accessories",
    ],

  };

  // FETCH PRODUCTS
  useEffect(() => {

    fetchCategoryProducts();

  }, [categoryName]);

  const fetchCategoryProducts =
    async () => {

      try {

        setLoading(true);

        setError(null);

        let allProducts = [];

        // GROUP CATEGORY
        const groupedCategories =
          categoryGroups[
            categoryName.toLowerCase()
          ];

        // GROUP FETCH
        if (groupedCategories) {

          const requests =
            groupedCategories.map((cat) =>

              fetch(
                `http://127.0.0.1:8000/api/product/?category=${cat}`
              ).then((res) => res.json())

            );

          const responses =
            await Promise.all(requests);

          responses.forEach((data) => {

            const items =
              data.results || data;

            allProducts = [
              ...allProducts,
              ...items,
            ];

          });

        }

        // NORMAL CATEGORY
        else {

          const response =
            await fetch(
              `http://127.0.0.1:8000/api/product/?category=${categoryName}`
            );

          if (!response.ok) {

            throw new Error(
              "Failed to fetch products"
            );

          }

          const data =
            await response.json();

          allProducts =
            data.results || data;

        }

        // REMOVE DUPLICATES
        const uniqueProducts =
          Array.from(

            new Map(
              allProducts.map((item) => [
                item.id,
                item,
              ])
            ).values()

          );

        setProducts(uniqueProducts);

      } catch (err) {

        console.error(err);

        setError(
          "Failed to load category products"
        );

      } finally {

        setLoading(false);

      }

    };

  // FORMAT PRICE
  const formatPrice = (price) => {

    return Number(price)
      .toLocaleString("en-IN", {
        maximumFractionDigits: 0,
      });

  };

  // ADD TO CART
  const addToCart = async (
    productId
  ) => {

    try {

      const response =
        await addToCartAPI(
          productId,
          1
        );

      console.log(response);

      alert(
        "Product Added To Cart"
      );

      // OPTIONAL PAGE REFRESH
      window.location.reload();

    } catch (error) {

      console.error(error);

      alert(

        error.response?.data
          ?.detail ||

        error.response?.data
          ?.error ||

        "Failed To Add Cart"

      );

    }

  };

  // LOADING
  if (loading) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        <h1 className="text-3xl font-bold text-red-400">

          Loading {categoryName}...

        </h1>

      </div>

    );

  }

  // ERROR
  if (error) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        <h1 className="text-3xl font-bold text-red-500">

          {error}

        </h1>

      </div>

    );

  }

  return (

    <section className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 text-center">

        <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">

          Premium Collection

        </p>

        <h1 className="text-5xl md:text-7xl font-black capitalize mb-5">

          {categoryName}

        </h1>

        <p className="text-gray-400 text-lg">

          {products.length}
          {" "}
          products available

        </p>

      </div>

      {/* EMPTY */}
      {products.length === 0 ? (

        <div className="text-center py-32">

          <h2 className="text-5xl font-black mb-5">

            No Products Found

          </h2>

          <p className="text-gray-400">

            No products available
            in this category.

          </p>

        </div>

      ) : (

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-red-500/30 transition-all duration-300 flex flex-col"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[320px] w-full object-cover hover:scale-105 transition-all duration-500"
                />

                <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold">

                  PREMIUM

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <p className="uppercase tracking-[4px] text-red-400 text-xs mb-3">

                  {product.category?.name}

                </p>

                <h2 className="text-2xl font-black mb-4 min-h-[64px]">

                  {product.name}

                </h2>

                <p className="text-gray-400 mb-6 line-clamp-3 flex-1">

                  {product.description}

                </p>

                {/* BOTTOM */}
                <div className="flex items-center justify-between gap-4 mt-auto">

                  <h3 className="text-2xl font-black text-red-400">

                    ₹
                    {formatPrice(
                      product.price
                    )}

                  </h3>

                  <button
                    onClick={() =>
                      addToCart(
                        product.id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap"
                  >

                    Add To Cart

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default CategoryPage;