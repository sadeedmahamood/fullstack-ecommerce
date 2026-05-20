// import { useEffect, useState } from "react";

// import { getCategories }
// from "../../services/categoryService";

// const AdminCategory = () => {

//   const [categories, setCategories] =
//     useState([]);

//   const [loading, setLoading] =
//     useState(true);

//   // FETCH
//   useEffect(() => {

//     fetchCategories();

//   }, []);

//   const fetchCategories = async () => {

//     try {

//       const data =
//         await getCategories();

//       setCategories(data);

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   };

//   return (

//     <section className="min-h-screen bg-black text-white px-6 py-20">

//       {/* HEADER */}
//       <div className="mb-16">

//         <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">

//           Admin Panel

//         </p>

//         <h1 className="text-5xl md:text-6xl font-black mb-5">

//           Categories

//         </h1>

//         <p className="text-gray-400 text-lg">

//           Manage your ecommerce categories.

//         </p>

//       </div>

//       {/* LOADING */}
//       {loading ? (

//         <div className="text-center py-32">

//           <h2 className="text-3xl font-bold text-red-400">

//             Loading Categories...

//           </h2>

//         </div>

//       ) : categories.length === 0 ? (

//         <div className="bg-white/5 border border-white/10 rounded-[35px] p-20 text-center">

//           <h2 className="text-4xl font-black mb-5">

//             No Categories Found

//           </h2>

//         </div>

//       ) : (

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

//           {categories.map((category) => (

//             <div
//               key={category.id}
//               className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
//             >

//               <p className="uppercase tracking-[4px] text-red-400 text-sm mb-4">

//                 Product Category

//               </p>

//               <h2 className="text-4xl font-black mb-6">

//                 {category.name}

//               </h2>

//               <div className="flex items-center justify-between">

//                 <div>

//                   <p className="text-gray-500 text-sm mb-2">

//                     Total Products

//                   </p>

//                   <h3 className="text-5xl font-black text-red-400">

//                     {category.product_count}

//                   </h3>

//                 </div>

//                 <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-3xl">

//                   📦

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </section>

//   );

// };

// export default AdminCategory;

import { useEffect, useState } from "react";

import { getCategories } from "../../services/categoryService";

const AdminCategory = () => {

  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH
  useEffect(() => {

    fetchCategories();

  }, []);

  const fetchCategories = async () => {

    try {

      const data =
        await getCategories();

      setCategories(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <div className="mb-16">

        <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">

          Admin Panel

        </p>

        <h1 className="text-5xl md:text-6xl font-black mb-5">

          Categories

        </h1>

        <p className="text-gray-400 text-lg">

          Manage your ecommerce categories.

        </p>

      </div>

      {/* LOADING */}
      {loading ? (

        <div className="text-center py-32">

          <h2 className="text-3xl font-bold text-red-400">

            Loading Categories...

          </h2>

        </div>

      ) : categories.length === 0 ? (

        <div className="bg-white/5 border border-white/10 rounded-[35px] p-20 text-center">

          <h2 className="text-4xl font-black mb-5">

            No Categories Found

          </h2>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((category) => (

            <div
              key={category.id}
              className="bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
            >

              <p className="uppercase tracking-[4px] text-red-400 text-sm mb-4">

                Product Category

              </p>

              <h2 className="text-4xl font-black mb-6">

                {category.name}

              </h2>

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-sm mb-2">

                    Total Products

                  </p>

                  <h3 className="text-5xl font-black text-red-400">

                    {category.product_count}

                  </h3>

                </div>

                <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-3xl">

                  📦

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

};

export default AdminCategory;