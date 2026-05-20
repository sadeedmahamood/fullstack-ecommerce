// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";


// const FeaturedProducts = () => {
//   return (
//     <section className="bg-black text-white py-24 relative overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full"></div>

//       {/* CONTAINER */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* TOP SECTION */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

//           <div>
//             <p className="uppercase tracking-[6px] text-gray-400 mb-4">
//               Featured Products
//             </p>

//             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//               Trending Tech <br />
//               Essentials
//             </h2>
//           </div>

//           <p className="text-gray-400 max-w-md leading-relaxed">
//             Explore our handpicked collection of premium gadgets
//             crafted for performance, style, and everyday innovation.
//           </p>

//         </div>

//         {/* PRODUCT GRID */}
//         <Swiper
//   modules={[Autoplay]}
//   spaceBetween={30}
//   slidesPerView={1}
//   loop={true}
//   autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   breakpoints={{
//     640: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   }}
// >

//   {/* CARD 1 */}
//   <SwiperSlide>
//     <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

//       <div className="overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000"
//           alt="Smart Watch"
//           className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
//         />
//       </div>

//       <div className="p-6">
//         <p className="text-gray-400 text-sm mb-2">
//           Smart Wearables
//         </p>

//         <h3 className="text-2xl font-semibold mb-4">
//           Smart Watch Pro
//         </h3>

//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">
//             $299
//           </span>

//           <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//             Buy Now
//           </button>
//         </div>
//       </div>

//     </div>
//   </SwiperSlide>

//   {/* CARD 2 */}
//   <SwiperSlide>
//     <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

//       <div className="overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000"
//           alt="Headphones"
//           className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
//         />
//       </div>

//       <div className="p-6">
//         <p className="text-gray-400 text-sm mb-2">
//           Audio Devices
//         </p>

//         <h3 className="text-2xl font-semibold mb-4">
//           Air Bass X
//         </h3>

//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">
//             $199
//           </span>

//           <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//             Buy Now
//           </button>
//         </div>
//       </div>

//     </div>
//   </SwiperSlide>

//   {/* CARD 3 */}
//   <SwiperSlide>
//     <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

//       <div className="overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000"
//           alt="Laptop"
//           className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
//         />
//       </div>

//       <div className="p-6">
//         <p className="text-gray-400 text-sm mb-2">
//           Premium Laptops
//         </p>

//         <h3 className="text-2xl font-semibold mb-4">
//           UltraBook Elite
//         </h3>

//         <div className="flex items-center justify-between">
//           <span className="text-xl font-bold">
//             $1299
//           </span>

//           <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//             Buy Now
//           </button>
//         </div>
//       </div>

//     </div>
//   </SwiperSlide>

//   {/* CARD 4 */}
//         <SwiperSlide>
//             <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

//             <div className="overflow-hidden">
//                 <img
//                 src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1000"
//                 alt="Camera"
//                 className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
//                 />
//             </div>

//             <div className="p-6">
//                 <p className="text-gray-400 text-sm mb-2">
//                 Photography
//                 </p>

//                 <h3 className="text-2xl font-semibold mb-4">
//                 Vision X Camera
//                 </h3>

//                 <div className="flex items-center justify-between">
//                 <span className="text-xl font-bold">
//                     $899
//                 </span>

//                 <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//                     Buy Now
//                 </button>
//                 </div>
//             </div>

//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//   <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

//     <div className="overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1000"
//         alt="Gaming Setup"
//         className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
//       />
//     </div>

//     <div className="p-6">
//       <p className="text-gray-400 text-sm mb-2">
//         Gaming Gear
//       </p>

//       <h3 className="text-2xl font-semibold mb-4">
//         RGB Gaming Setup
//       </h3>

//       <div className="flex items-center justify-between">
//         <span className="text-xl font-bold">
//           $1499
//         </span>

//         <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//           Buy Now
//         </button>
//       </div>
//     </div>

//   </div>
// </SwiperSlide>
// <SwiperSlide>
//   <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

//     <div className="overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000"
//         alt="Luxury Watch"
//         className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
//       />
//     </div>

//     <div className="p-6">
//       <p className="text-gray-400 text-sm mb-2">
//         Luxury Wearables
//       </p>

//       <h3 className="text-2xl font-semibold mb-4">
//         Chrono Smart X
//       </h3>

//       <div className="flex items-center justify-between">
//         <span className="text-xl font-bold">
//           $499
//         </span>

//         <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
//           Buy Now
//         </button>
//       </div>
//     </div>

//   </div>
// </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   )
// }

// export default FeaturedProducts

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { getProducts } from "../../services/productService";

const FeaturedProducts = () => {
  
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);


  // =========================
  // FETCH PRODUCTS
  // =========================

  useEffect(() => {

    fetchProducts();

  }, []);


  const fetchProducts = async () => {

    try {

      const data = await getProducts();

      console.log(data);

      setProducts(data);

    } catch (error) {

      console.error(error);

    }

  };


  return (

    <section className="bg-black text-white py-24 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>

            <p className="uppercase tracking-[6px] text-gray-400 mb-4">
              Featured Products
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Trending Tech <br />
              Essentials
            </h2>

          </div>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Explore our handpicked collection of premium gadgets
            crafted for performance, style, and everyday innovation.
          </p>

        </div>


        {/* PRODUCTS SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >

          {products.map((product) => (

            <SwiperSlide key={product.id}>

              <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[280px] w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>


                {/* CONTENT */}
                <div className="p-6">

                  {/* CATEGORY */}
                  <p className="text-gray-400 text-sm mb-2">

                    {product.category?.name}

                  </p>


                  {/* PRODUCT NAME */}
                  <h3 className="text-2xl font-semibold mb-4 line-clamp-1">

                    {product.name}

                  </h3>


                  {/* PRICE + BUTTON */}
                  <div className="flex items-center justify-between">

                    <span className="text-xl font-bold">
                      ₹{product.price}
                    </span>

                    <button onClick={()=>
                      navigate('/products')
                    } className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">

                      Buy Now

                    </button>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>

  );
};

export default FeaturedProducts;