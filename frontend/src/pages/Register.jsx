import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../services/authService";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE REGISTER
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    // PASSWORD CHECK
    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError("Passwords do not match");

      return;

    }

    setLoading(true);

    try {

      const data = await registerUser({

        username: formData.username,

        email: formData.email,

        password: formData.password,

      });

      console.log("REGISTER SUCCESS:", data);

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      console.log(err);

      console.log(err.response);

      console.log(err.response?.data);

      setError(

        err.response?.data?.error ||

        err.response?.data?.email?.[0] ||

        "Registration failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 py-20">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

        {/* HEADER */}
        <div className="text-center mb-10">

          <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
            Create Account
          </p>

          <h1 className="text-5xl font-black mb-5">
            Register
          </h1>

          <p className="text-gray-400">
            Join the premium shopping experience.
          </p>

        </div>

        {/* ERROR */}
        {error && (

          <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl px-5 py-4 mb-6 text-sm">

            {error}

          </div>

        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* USERNAME */}
          <div>

            <label className="block text-sm text-gray-400 mb-3">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

          </div>

          {/* EMAIL */}
          <div>

            <label className="block text-sm text-gray-400 mb-3">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="block text-sm text-gray-400 mb-3">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

          </div>

          {/* CONFIRM PASSWORD */}
          <div>

            <label className="block text-sm text-gray-400 mb-3">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-all duration-300"
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-500/20 disabled:opacity-50"
          >

            {loading
              ? "Creating Account..."
              : "Register"}

          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center text-gray-400">

          Already have an account?

          <Link
            to="/login"
            className="text-red-400 hover:text-red-300 ml-2"
          >
            Login
          </Link>

        </div>

      </div>

    </section>

  );
};

export default Register;