import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[660px] bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <p className="uppercase tracking-[6px] text-gray-400 mb-5">
            Premium Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Elevate Your <br />
            Digital Lifestyle
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            Discover modern gadgets, premium electronics,
            and curated products designed for the future.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Shop Now
            </Link>

            <button className="border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
<div className="relative flex justify-center">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-[500px] h-[600px] object-cover rounded-3xl shadow-2xl"
  >
    <source
      src="https://videos.pexels.com/video-files/853828/853828-hd_1920_1080_25fps.mp4"
      type="video/mp4"
    />
  </video>

</div>
      </div>
    </section>
  );
}

export default HeroSection;
