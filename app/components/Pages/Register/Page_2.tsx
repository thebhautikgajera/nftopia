"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const Page_2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Show alert with form data
    alert(
      `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Gender: ${formData.gender}
      Email: ${formData.email}
      Username: ${formData.username}
      Password: ${formData.password}`
    );
  };

  return (
    <>
      <div
        className="min-h-screen pt-[4vw] pb-[4vw] flex flex-col text-white"
        id="bgPage1PageSignUp"
      >
        <main className="flex-grow flex flex-col items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-300 max-w-md">
              It&apos;s easy to create an account for non-fungible tokens and
              sell your items independently online securely in the world.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-3 mb-4">
              <div className="w-1/2 relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 bg-gray-800 bg-opacity-50 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="w-1/2 relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 bg-gray-800 bg-opacity-50 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 bg-opacity-50 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex space-x-3 mb-4">
              <div className="w-1/2 relative">
                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 bg-gray-800 bg-opacity-50 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="w-1/2 relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 bg-gray-800 bg-opacity-50 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300"
                  required
                />
              </div>
            </div>
            <div className="mb-6 relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-800 bg-opacity-50 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] text-white rounded-md font-semibold transition duration-300 transform hover:brightness-110"
            >
              Create Account
            </motion.button>
            <div className="flex justify-center items-center">
              <p className="text-white font-semibold text-[1.2vw] mt-6">
                Already have an account?{" "}
                <a href="../../../pages/login" className="text-blue-400 hover:underline">
                  Sign In
                </a>
              </p>
            </div>
          </motion.form>

          <div className="flex justify-center items-center my-9">
            <div className="flex-grow h-px bg-white"></div>
            <p className="mx-4 text-white font-extrabold uppercase text-2xl flex items-center">
              <span className="w-[20vw] h-[2px] bg-white mr-3"></span>
              or
              <span className="w-[20vw] h-[2px] bg-white ml-3"></span>
            </p>
            <div className="flex-grow h-px bg-white"></div>
          </div>

          <div className="flex flex-col space-y-4 mt-2 w-full max-w-3xl mx-auto">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(66, 133, 244, 0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-[.7vw] bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center space-x-4 transition duration-300 hover:from-blue-600 hover:to-blue-700 shadow-2xl transform hover:-translate-y-2 border-2 border-blue-400"
            >
              <FaGoogle className="text-3xl text-yellow-400" />
              <span className="font-bold text-lg tracking-wide">
                Sign up with Google
              </span>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 89, 152, 0.9)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-[.7vw] bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl flex items-center justify-center space-x-4 transition duration-300 hover:from-blue-800 hover:to-blue-900 shadow-2xl transform hover:-translate-y-2 border-2 border-blue-600"
            >
              <FaFacebookSquare className="text-3xl text-blue-300" />
              <span className="font-bold text-lg tracking-wide">
                Sign up with Facebook
              </span>
            </motion.button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page_2;
