const Contact = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-600/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-24">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-6">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Let's Build Something
            <span className="block text-red-400">
              Extraordinary
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Have questions, feedback, or partnership inquiries?
            Our team is always ready to help you with anything you need.
          </p>

        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">

          {/* CARD 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl mb-6">
              📧
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Email Us
            </h3>

            <p className="text-gray-400 mb-2">
              Our friendly team is here to help.
            </p>

            <p className="text-red-400">
              support@modernshop.com
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl mb-6">
              📞
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Call Us
            </h3>

            <p className="text-gray-400 mb-2">
              Mon-Fri from 8am to 5pm.
            </p>

            <p className="text-red-400">
              +91 98765 43210
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl mb-6">
              📍
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Visit Us
            </h3>

            <p className="text-gray-400 mb-2">
              Come say hello at our office.
            </p>

            <p className="text-red-400">
              Bangalore, India
            </p>

          </div>

        </div>

        {/* MAIN CONTACT SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-sm mb-24">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              We'd Love To
              Hear From You
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-10">
              Whether you have a question about products, pricing,
              shipping, or anything else, our team is ready to answer all your questions.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-red-500 transition-all duration-300 cursor-pointer">
                F
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-red-500 transition-all duration-300 cursor-pointer">
                I
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-red-500 transition-all duration-300 cursor-pointer">
                X
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300 resize-none"
            ></textarea>

            <button className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-red-500/20">
              Send Message
            </button>

          </form>

        </div>

        {/* FAQ SECTION */}
        <div className="mb-24">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-5 max-w-4xl mx-auto">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <h3 className="text-xl font-semibold mb-3">
                How long does shipping take?
              </h3>

              <p className="text-gray-400">
                Shipping usually takes 3-7 business days depending on your location.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <h3 className="text-xl font-semibold mb-3">
                Do you offer refunds?
              </h3>

              <p className="text-gray-400">
                Yes, we offer a 7-day refund policy for eligible products.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
              <h3 className="text-xl font-semibold mb-3">
                Can I track my order?
              </h3>

              <p className="text-gray-400">
                Absolutely. Tracking information will be sent after shipping.
              </p>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-red-500/10 to-transparent border border-white/10 rounded-[40px] p-12">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need More Assistance?
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Our support team is available 24/7 to provide guidance,
            answer questions, and ensure a seamless shopping experience.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-500/20">
            Explore Products
          </button>

        </div>

      </div>

    </section>
  );
};

export default Contact;