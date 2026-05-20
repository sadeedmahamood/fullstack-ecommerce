import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              TechVerse
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Discover premium gadgets, futuristic electronics,
              and curated tech products designed for modern lifestyles.
            </p>

            <div className="flex gap-4">

              <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                F
              </div>

              <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                I
              </div>

              <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                X
              </div>

            </div>
          </div>

          {/* SHOP LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Shop
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Smartphones
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-white transition">
                  Laptops
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-white transition">
                  Smart Watches
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-white transition">
                  Accessories
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/About" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/Careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/Blog" className="hover:text-white transition">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/Contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Subscribe to get the latest updates,
              offers, and product launches.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border border-zinc-700 rounded-full px-5 py-3 outline-none focus:border-white transition"
              />

              <button className="bg-white text-black py-3 rounded-full font-medium hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 TechVerse. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <Link to="/" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link to="/" className="hover:text-white transition">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer