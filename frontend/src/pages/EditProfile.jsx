import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FiUser,
  FiMail,
  FiLock,
  FiCamera,
  FiArrowLeft,
  FiSave,
} from "react-icons/fi";

const EditProfile = () => {

  const navigate = useNavigate();

  // USER DATA
  const currentUsername =
    localStorage.getItem("username") || "";

  // STATES
  const [formData, setFormData] =
    useState({

      username: currentUsername,

      email: "",

      password: "",

      confirmPassword: "",

    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    // PASSWORD VALIDATION
    if (

      formData.password &&
      formData.password !==
      formData.confirmPassword

    ) {

      setError(
        "Passwords do not match"
      );

      return;

    }

    try {

      setLoading(true);

      // TEMPORARY UPDATE
      localStorage.setItem(

        "username",

        formData.username

      );

      setSuccess(
        "Profile updated successfully"
      );

      setTimeout(() => {

        navigate("/profile");

      }, 1500);

    } catch (error) {

      console.log(error);

      setError(
        "Failed to update profile"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 blur-3xl rounded-full"></div>

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-14">

          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 border border-white/10 bg-white/5 hover:border-red-500/30 px-6 py-3 rounded-2xl transition-all duration-300"
          >

            <FiArrowLeft />

            Back

          </button>

          <p className="uppercase tracking-[6px] text-red-400 text-sm">

            Premium Account

          </p>

        </div>

        {/* MAIN CARD */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-sm h-fit">

            {/* PROFILE IMAGE */}
            <div className="flex flex-col items-center text-center">

              <div className="relative mb-8">

                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-6xl font-black shadow-2xl shadow-red-500/30">

                  {currentUsername
                    .charAt(0)
                    .toUpperCase()}

                </div>

                <button className="absolute bottom-2 right-2 w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-300 flex items-center justify-center shadow-xl shadow-red-500/30">

                  <FiCamera size={22} />

                </button>

              </div>

              <h2 className="text-4xl font-black mb-3">

                {currentUsername}

              </h2>

              <p className="text-gray-400 mb-8">

                Premium Customer

              </p>

              {/* STATUS */}
              <div className="w-full bg-black/30 border border-white/10 rounded-3xl p-6">

                <p className="text-gray-400 mb-3">

                  Membership Status

                </p>

                <h3 className="text-3xl font-black text-red-400 mb-2">

                  GOLD MEMBER

                </h3>

                <p className="text-sm text-gray-500">

                  Active Premium Access

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-sm">

            {/* HEADER */}
            <div className="mb-12">

              <h1 className="text-5xl md:text-6xl font-black mb-5 leading-tight">

                Edit
                <br />
                Profile

              </h1>

              <p className="text-gray-400 text-lg">

                Update your account details and security settings.

              </p>

            </div>

            {/* SUCCESS */}
            {success && (

              <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-2xl px-5 py-4 mb-6">

                {success}

              </div>

            )}

            {/* ERROR */}
            {error && (

              <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl px-5 py-4 mb-6">

                {error}

              </div>

            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* USERNAME */}
              <div>

                <label className="block text-sm text-gray-400 mb-4 uppercase tracking-[3px]">

                  Username

                </label>

                <div className="relative">

                  <FiUser
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                    size={22}
                  />

                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-lg outline-none focus:border-red-500 transition-all duration-300"
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-sm text-gray-400 mb-4 uppercase tracking-[3px]">

                  Email Address

                </label>

                <div className="relative">

                  <FiMail
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                    size={22}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-lg outline-none focus:border-red-500 transition-all duration-300"
                  />

                </div>

              </div>

              {/* PASSWORD GRID */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* PASSWORD */}
                <div>

                  <label className="block text-sm text-gray-400 mb-4 uppercase tracking-[3px]">

                    New Password

                  </label>

                  <div className="relative">

                    <FiLock
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                      size={22}
                    />

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="New password"
                      className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-lg outline-none focus:border-red-500 transition-all duration-300"
                    />

                  </div>

                </div>

                {/* CONFIRM */}
                <div>

                  <label className="block text-sm text-gray-400 mb-4 uppercase tracking-[3px]">

                    Confirm Password

                  </label>

                  <div className="relative">

                    <FiLock
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                      size={22}
                    />

                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      className="w-full bg-black/30 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-lg outline-none focus:border-red-500 transition-all duration-300"
                    />

                  </div>

                </div>

              </div>

              {/* SAVE BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 py-5 rounded-2xl text-lg font-semibold shadow-2xl shadow-red-500/20 disabled:opacity-50 flex items-center justify-center gap-3 mt-6"
              >

                <FiSave size={22} />

                {loading
                  ? "Saving Changes..."
                  : "Save Changes"}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

};

export default EditProfile;