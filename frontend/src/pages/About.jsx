// function About() {
//   return (
//     <section className="bg-black text-white min-h-screen px-6 py-20">
//       <div className="max-w-6xl mx-auto">

//         {/* HEADING */}
//         <div className="text-center mb-20">
//           <p className="uppercase tracking-[5px] text-gray-400 mb-4">
//             About Us
//           </p>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             Redefining Modern Shopping
//           </h1>

//           <p className="text-gray-400 max-w-3xl mx-auto text-lg">
//             We combine premium design, curated products,
//             and seamless digital experiences to create
//             a modern ecommerce destination.
//           </p>
//         </div>

//         {/* CONTENT GRID */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* LEFT */}
//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200"
//               alt="About"
//               className="rounded-3xl shadow-2xl"
//             />
//           </div>

//           {/* RIGHT */}
//           <div>
//             <h2 className="text-3xl font-semibold mb-6">
//               Built For The Next Generation
//             </h2>

//             <p className="text-gray-400 leading-relaxed mb-6">
//               Our platform is designed for people who value
//               innovation, premium quality, and modern aesthetics.
//             </p>

//             <p className="text-gray-400 leading-relaxed mb-10">
//               From electronics to curated lifestyle products,
//               we focus on delivering experiences that feel
//               premium from browsing to checkout.
//             </p>

//             {/* STATS */}
//             <div className="grid grid-cols-3 gap-6">
//               <div>
//                 <h3 className="text-3xl font-bold">10K+</h3>
//                 <p className="text-gray-500">Customers</p>
//               </div>

//               <div>
//                 <h3 className="text-3xl font-bold">500+</h3>
//                 <p className="text-gray-500">Products</p>
//               </div>

//               <div>
//                 <h3 className="text-3xl font-bold">24/7</h3>
//                 <p className="text-gray-500">Support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


// const About = () => {
//   return (
//     <section className='bg-black text-white min-h-screen overflow-hidden relative  px-6 py-20'>
//         {/* DESIGN */}
//         <div className='absolute left-1/2 -translate-x-1/2  h-[700px] w-[600px] blur-3xl  bg-red-500/20 rounded-full  '></div>
//         {/* MAIN CONTAINER */}
//         <div className='max-w-6xl mx-auto'>
//             {/* HEADING */}
//             <div className="text-center mb-20">
//                 <p className="tracking-[6px] text-gray-300 mb-5 uppercase ">about us</p>
//                 <h1 className="text-5xl md:text-7xl font-bold mb-6">
//                     Redefineing Modern Shopping
//                 </h1>
//                 <p className="text-gray-400 max-4-3xl mx-auto text-lg">
//                     We combine premium design, curated product, and seamless digital experiences to create  <br />
//                     a modern ecommerce destination
//                 </p>
//             </div>
//             {/* CONTENT-GRID */}
//             <div className="grid md:grid-cols-2 gap-16">
//                 {/* LEFT-CONTENT */}
//                 <div>
//                  <img 
//                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200"
//                  alt="About"
//                  className="rounded-3xl shadow-2xl"
//                  ></img>
//                 </div>
//                 {/* RIGHT-CONTENT */}
//                 <div className="mt-7">
//                     <h2 className="text-4xl font-semibold mb-7">Build For The Next Generation</h2>
                    
//                     <p className="text-gray-400 leading-relaxed mb-6 ">
//                     Our platform is designed for people who value
//                     innovation, premium quality, and modern aesthetics.
//                     </p>

//                     <p className="text-gray-400 leading-relaxed mb-10">
//                     From electronics to curated lifestyle products,
//                     we focus on delivering experiences that feel
//                     premium from browsing to checkout.
//                     </p>

//                     {/* STATS */}
//                     <div className="grid grid-cols-3 gap-3">

//                         <div>
//                             <h3 className="text-3xl font-bold">10K+</h3>
//                             <p className="text-gray-300">Customer</p>
//                         </div>

//                         <div>
//                             <h3 className="text-3xl font-bold">500+</h3>
//                             <p className="text-gray-300">Product</p>
//                         </div>

//                         <div>
//                             <h3 className="text-3xl font-bold">24/7</h3>
//                             <p className="text-gray-300">Support</p>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default About



const About = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-600/20 blur-3xl rounded-full"></div>

      {/* TOP GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-28">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-6">
            About Our Brand
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Crafting The Future Of
            <span className="block text-red-400">
              Modern Ecommerce
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We create premium digital shopping experiences that blend
            innovation, aesthetics, and technology into one seamless
            destination for modern consumers.
          </p>

        </div>

        {/* MAIN ABOUT CARD */}
        <div className="grid lg:grid-cols-2 gap-14 items-center bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-sm shadow-[0_0_60px_rgba(255,0,0,0.08)]">

          {/* IMAGE SIDE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200"
              alt="Luxury Product"
              className="rounded-[30px] w-full h-full object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 -right-6 bg-black border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-md shadow-2xl">

              <h3 className="text-3xl font-bold text-red-400">
                10K+
              </h3>

              <p className="text-gray-400 text-sm">
                Happy Customers Worldwide
              </p>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div>

            <p className="text-red-400 uppercase tracking-[5px] text-sm mb-5">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Built For The Next
              Generation Of Shopping
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Our platform was created for people who appreciate premium
              products, modern design, and seamless experiences.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10 text-lg">
              From curated electronics to lifestyle essentials,
              every product and interaction is carefully designed
              to feel elegant, fast, and trustworthy.
            </p>

            {/* FEATURES */}
            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    Premium Quality
                  </h4>

                  <p className="text-gray-400">
                    Carefully selected products built for performance and style.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    Fast Digital Experience
                  </h4>

                  <p className="text-gray-400">
                    Smooth browsing, lightning-fast checkout, and responsive UI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <h4 className="font-semibold text-xl mb-1">
                    Customer-Centric
                  </h4>

                  <p className="text-gray-400">
                    We prioritize trust, support, and long-term customer value.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-5xl font-bold text-red-400 mb-3">10K+</h3>
            <p className="text-gray-400">Active Customers</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-5xl font-bold text-red-400 mb-3">500+</h3>
            <p className="text-gray-400">Premium Products</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-5xl font-bold text-red-400 mb-3">24/7</h3>
            <p className="text-gray-400">Customer Support</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-5xl font-bold text-red-400 mb-3">99%</h3>
            <p className="text-gray-400">Positive Reviews</p>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-28 text-center bg-gradient-to-r from-red-500/10 to-transparent border border-white/10 rounded-[40px] p-12">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Ecommerce
            Without Limits
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of customers discovering premium products
            with a modern shopping experience built for speed,
            trust, and elegance.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-500/20">
            Explore Products
          </button>

        </div>

      </div>

    </section>
  );
};

export default About;