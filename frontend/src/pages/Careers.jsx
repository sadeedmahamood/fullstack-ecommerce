const Careers = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-600/20 blur-3xl rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto mb-24">

          <p className="uppercase tracking-[8px] text-red-400 text-sm mb-6">
            Careers
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Build The Future
            <span className="block text-red-400">
              With Our Team
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are building modern ecommerce experiences powered by innovation,
            creativity, and technology. Join a team that values bold ideas,
            collaboration, and growth.
          </p>

        </div>

        {/* COMPANY OVERVIEW */}
        <div className="grid lg:grid-cols-2 gap-14 items-center bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-14 backdrop-blur-sm mb-24">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-5">
              Why Join Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Work With Passion,
              Build With Purpose
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Our culture is driven by creativity, ownership,
              and continuous learning. We believe great products
              are built by empowered people.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg mb-10">
              From engineering to design and customer experience,
              every team member contributes to shaping the future
              of digital commerce.
            </p>

            {/* BENEFITS */}
            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">
                    Flexible Work Culture
                  </h4>

                  <p className="text-gray-400">
                    Remote-friendly environment with healthy work-life balance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">
                    Career Growth
                  </h4>

                  <p className="text-gray-400">
                    Learn, experiment, and grow with mentorship and real projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">
                    Innovative Team
                  </h4>

                  <p className="text-gray-400">
                    Collaborate with ambitious people building premium experiences.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
              alt="Team"
              className="rounded-[30px] w-full object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-8 -left-6 bg-black border border-white/10 rounded-3xl px-6 py-5 backdrop-blur-md shadow-2xl">

              <h3 className="text-3xl font-bold text-red-400">
                50+
              </h3>

              <p className="text-gray-400 text-sm">
                Creative Professionals
              </p>

            </div>

          </div>

        </div>

        {/* OPEN POSITIONS */}
        <div className="mb-24">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
              Open Roles
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Current Opportunities
            </h2>

          </div>

          <div className="space-y-6">

            {/* JOB CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-semibold mb-3">
                    Frontend Developer
                  </h3>

                  <div className="flex flex-wrap gap-4 text-gray-400">

                    <p>Remote</p>
                    <p>•</p>
                    <p>Full Time</p>
                    <p>•</p>
                    <p>2+ Years Experience</p>

                  </div>

                </div>

                <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                  Apply Now
                </button>

              </div>

            </div>

            {/* JOB CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-semibold mb-3">
                    UI/UX Designer
                  </h3>

                  <div className="flex flex-wrap gap-4 text-gray-400">

                    <p>Bangalore</p>
                    <p>•</p>
                    <p>Full Time</p>
                    <p>•</p>
                    <p>3+ Years Experience</p>

                  </div>

                </div>

                <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                  Apply Now
                </button>

              </div>

            </div>

            {/* JOB CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <h3 className="text-3xl font-semibold mb-3">
                    Backend Engineer
                  </h3>

                  <div className="flex flex-wrap gap-4 text-gray-400">

                    <p>Hybrid</p>
                    <p>•</p>
                    <p>Full Time</p>
                    <p>•</p>
                    <p>4+ Years Experience</p>

                  </div>

                </div>

                <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                  Apply Now
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* CULTURE SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

            <h3 className="text-3xl font-bold text-red-400 mb-4">
              Innovation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We embrace bold ideas and modern technologies to create premium experiences.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

            <h3 className="text-3xl font-bold text-red-400 mb-4">
              Collaboration
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Great products are built through teamwork, communication, and trust.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

            <h3 className="text-3xl font-bold text-red-400 mb-4">
              Growth
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Continuous learning and professional development are part of our culture.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-red-500/10 to-transparent border border-white/10 rounded-[40px] p-12">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Join Our Journey?
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Become part of a team building the next generation
            of ecommerce experiences for customers worldwide.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-500/20">
            View All Positions
          </button>

        </div>

      </div>

    </section>
  );
};

export default Careers;