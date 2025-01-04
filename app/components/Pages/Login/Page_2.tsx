"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Page_2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Show alert with form data
    alert(`Email: ${formData.email}\nUsername: ${formData.username}\nPassword: ${formData.password}`);
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
            <h2 className="text-4xl font-[1000] mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Sign In Account
            </h2>
            <p className="text-gray-300 max-w-md">
              Welcome back! Please login to your account.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 relative">
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
            <div className="mb-4 relative">
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
              Sign In Account
            </motion.button>
            <div className="flex justify-center items-center">
              <p className="text-white text-[1.2vw] mt-6">
                Not Yet Registered?{" "}
                <a href="../../../pages/register" className="text-blue-400 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </motion.form>
        </main>
      </div>
    </>
  );
};

export default Page_2;
