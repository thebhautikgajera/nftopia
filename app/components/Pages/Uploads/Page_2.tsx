"use client";


import React, { useState, useCallback, FormEvent } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload, FaRedo } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Page_2 = () => {
  const [saleType, setSaleType] = useState("Fixed");
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    artworkName: "",
    category: "Illustrations",
    price: "",
    auctionStart: "",
    auctionEnd: "",
    auctionTime: "",
    currency: "USD",
    royalty: "",
    description: "",
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file before submitting.");
      return;
    }
    const formDataToSubmit = {
      ...formData,
      saleType,
      file: file.name,
    };
    alert(JSON.stringify(formDataToSubmit, null, 2));
  };

  const handleReset = () => {
    setFormData({
      artworkName: "",
      category: "Illustrations",
      price: "",
      auctionStart: "",
      auctionEnd: "",
      auctionTime: "",
      currency: "USD",
      royalty: "",
      description: "",
    });
    setFile(null);
    setSaleType("Fixed");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.div
        className="container mx-auto px-4 py-12 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          variants={itemVariants}
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="artworkName"
            >
              Artwork Name
            </label>
            <motion.input
              className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              id="artworkName"
              name="artworkName"
              type="text"
              placeholder="Enter artwork name"
              value={formData.artworkName}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <motion.select
              className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.02 }}
            >
              <option>Illustrations</option>
              <option>Paintings</option>
              <option>Digital Art</option>
              <option>Photography</option>
            </motion.select>
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="saleType"
            >
              Sale Type
            </label>
            <motion.select
              className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              id="saleType"
              onChange={(e) => setSaleType(e.target.value)}
              required
              whileFocus={{ scale: 1.02 }}
            >
              <option value="Fixed">Fixed</option>
              <option value="Open For Bid">Open For Bid</option>
              <option value="Auction">Auction</option>
            </motion.select>
          </motion.div>

          <AnimatePresence>
            {saleType === "Fixed" && (
              <motion.div
                className="mb-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <label
                  className="block text-indigo-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <motion.input
                  className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            )}

            {saleType === "Auction" && (
              <motion.div
                className="mb-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <label
                  className="block text-indigo-700 text-sm font-bold mb-2"
                  htmlFor="auctionTime"
                >
                  Auction Time
                </label>
                <div className="flex space-x-4">
                  <motion.input
                    className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    id="auctionStart"
                    name="auctionStart"
                    type="datetime-local"
                    value={formData.auctionStart}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    id="auctionEnd"
                    name="auctionEnd"
                    type="datetime-local"
                    value={formData.auctionEnd}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <motion.input
                  className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  id="auctionTime"
                  name="auctionTime"
                  type="text"
                  placeholder="Enter auction time (e.g., 3 days)"
                  value={formData.auctionTime}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="currency"
            >
              Currency
            </label>
            <motion.select
              className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.02 }}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </motion.select>
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="royalty"
            >
              Royalty (%)
            </label>
            <motion.input
              className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              id="royalty"
              name="royalty"
              type="number"
              placeholder="Enter royalty percentage"
              value={formData.royalty}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <motion.textarea
              className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              id="description"
              name="description"
              rows={4}
              placeholder="Enter artwork description"
              value={formData.description}
              onChange={handleInputChange}
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-indigo-700 text-sm font-bold mb-2"
              htmlFor="file"
            >
              Upload File
            </label>
            <div
              {...getRootProps()}
              className={`shadow-sm appearance-none border-2 border-dashed rounded-md w-full py-12 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-center cursor-pointer transition duration-300 ease-in-out ${
                isDragActive
                  ? "bg-purple-100 border-purple-300"
                  : "hover:bg-gray-50"
              }`}
            >
              <input {...getInputProps()} required />
              {isDragActive ? (
                <p className="text-purple-500">Drop the files here ...</p>
              ) : (
                <p className="text-indigo-600">
                  Drag &apos;n&apos; drop some files here, or click to select
                  files
                </p>
              )}
            </div>
            {file && (
              <motion.p
                className="mt-2 text-sm text-pink-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                File selected: {file.name}
              </motion.p>
            )}
          </motion.div>
          <motion.div className="mb-6" variants={itemVariants}>
            <p className="text-pink-600 text-sm font-medium mb-2">
              Allowed File Format: Any format, up to 1 GB
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-between"
            variants={itemVariants}
          >
            <motion.button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out flex items-center"
              type="button"
              onClick={handleReset}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaRedo className="mr-2" /> Reset All
            </motion.button>
            <motion.button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out flex items-center"
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaUpload className="mr-2" /> Upload Now
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Page_2;
