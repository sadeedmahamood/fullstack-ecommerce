const Blog = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-600/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-24">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-6">
            Our Blog
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Insights For The
            <span className="block text-red-400">
              Modern Shopper
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore trends, design inspiration, ecommerce insights,
            and premium lifestyle content curated for modern consumers.
          </p>

        </div>

        {/* FEATURED SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-sm mb-28">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
              alt="Featured"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">
              Featured Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              The Future Of
              Premium Ecommerce
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              Discover how design, technology, and seamless digital
              experiences are shaping the next generation of online shopping.
            </p>

            <div className="flex items-center gap-6 text-gray-500">

              <p>May 08, 2026</p>
              <p>•</p>
              <p>8 min insight</p>

            </div>

          </div>

        </div>

        {/* BLOG GRID */}
        <div className="mb-28">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
              Latest Insights
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Stories & Inspiration
            </h2>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
                  alt="Blog"
                  className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-7">

                <p className="text-red-400 text-sm uppercase tracking-[4px] mb-4">
                  Technology
                </p>

                <h3 className="text-2xl font-semibold leading-snug mb-4">
                  How AI Is Changing Online Shopping
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Artificial intelligence is transforming product
                  recommendations and digital customer experiences.
                </p>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200"
                  alt="Blog"
                  className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-7">

                <p className="text-red-400 text-sm uppercase tracking-[4px] mb-4">
                  Lifestyle
                </p>

                <h3 className="text-2xl font-semibold leading-snug mb-4">
                  Minimal Design In Modern Products
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Clean aesthetics and premium experiences are shaping
                  the future of modern ecommerce products.
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">

              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200"
                  alt="Blog"
                  className="w-full h-[250px] object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-7">

                <p className="text-red-400 text-sm uppercase tracking-[4px] mb-4">
                  Ecommerce
                </p>

                <h3 className="text-2xl font-semibold leading-snug mb-4">
                  Building Trust In Digital Commerce
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Modern brands create loyalty through speed,
                  transparency, and seamless user experiences.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* QUOTE SECTION */}
        <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-white/10 rounded-[40px] p-10 md:p-16 text-center mb-24 hover:scale-105 duration-105">

          <p className="text-3xl md:text-5xl font-bold leading-relaxed max-w-4xl mx-auto">
            "Great ecommerce experiences are built
            through design, trust, and simplicity."
          </p>

        </div>

        {/* NEWSLETTER */}
        <div className="text-center">

          <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
            Newsletter
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Inspired
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Receive curated insights, ecommerce trends,
            and premium design inspiration directly in your inbox.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

            <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-red-500/20">
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Blog;