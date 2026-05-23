import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // AUTO REDIRECT IF ALREADY LOGGED IN
  useEffect(() => {

    const token =
      localStorage.getItem("access");
    // const token =
    //   localStorage.getItem("token");

    const isAdmin =
      localStorage.getItem("is_admin") === "true";

    if (token && isAdmin) {

      navigate("/admin");

    }

    else if (token) {

      navigate("/products");

    }

  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const data = await loginUser(formData);

      console.log(
        "LOGIN SUCCESS:",
        data
      );

      // SAVE ACCESS TOKEN
      localStorage.setItem(
        "access",
        // "token",
        data.access
      );

      // SAVE REFRESH TOKEN
      localStorage.setItem(
        "refresh",
        data.refresh
      );

      // SAVE ADMIN STATUS
      localStorage.setItem(
        "is_admin",
        data.is_admin
      );

      // SAVE USERNAME
      localStorage.setItem(
        "username",
        data.username
      );

      alert("Login Successful");

      // REDIRECT BASED ON ROLE
      if (data.is_admin) {

        navigate("/admin");

      } else {

        navigate("/products");

      }

    } catch (err) {

      console.log(err);

      console.log(err.response);

      console.log(err.response?.data);

      setError(

        err.response?.data?.error ||

        "Invalid username or password"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 py-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full"></div>

      {/* CONTAINER */}
      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-[35px] p-8 md:p-10 backdrop-blur-sm">

        {/* HEADER */}
        <div className="text-center mb-10">

          <p className="uppercase tracking-[6px] text-red-400 text-sm mb-4">
            Welcome Back
          </p>

          <h1 className="text-5xl font-black mb-5">
            Login
          </h1>

          <p className="text-gray-400">
            Access your premium shopping account.
          </p>

        </div>

        {/* ERROR MESSAGE */}
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

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-500/20 disabled:opacity-50"
          >

            {loading
              ? "Logging In..."
              : "Login"}

          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center text-gray-400">

          Don’t have an account?

          <Link
            to="/register"
            className="text-red-400 hover:text-red-300 ml-2"
          >
            Register
          </Link>

        </div>

      </div>

    </section>

  );
};

export default Login;