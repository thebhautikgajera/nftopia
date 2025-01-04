"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const Page_2 = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "General",
      icon: "🌐",
      questions: [
        {
          question: "What is cryptocurrency (NFT) marketplace?",
          answer:
            "Non-fungible tokens and their smart contracts allow for detailed attributes to be added, like the identity of the owner, rich metadata, or secure file links. The potent of non-fungible tokens to immutably prove digital ownership is an important progression for an increasingly digital world. They could see blockchain's promise of trustless security applied to the ownership or exchange of almost any asset.",
        },
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Follow the prompts to enter your details and verify your email address.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.",
        },
        {
          question: "What cryptocurrencies do you support?",
          answer:
            "We currently support Ethereum (ETH) and Bitcoin (BTC). We're always looking to expand our supported cryptocurrencies.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our customer support team through the 'Contact Us' page on our website, or by emailing support@example.com.",
        },
      ],
    },
    {
      name: "Account",
      icon: "👤",
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password.",
        },
        {
          question: "Can I change my username?",
          answer:
            "Yes, you can change your username in your account settings. Please note that this can only be done once every 30 days.",
        },
        {
          question: "How do I verify my account?",
          answer:
            "To verify your account, go to your account settings and click on 'Verify Account'. You'll need to provide a government-issued ID and follow the prompts.",
        },
        {
          question:
            "What should I do if I suspect unauthorized access to my account?",
          answer:
            "If you suspect unauthorized access, immediately change your password and contact our support team.",
        },
        {
          question: "How can I delete my account?",
          answer:
            "To delete your account, please contact our support team. Note that this action is irreversible and you'll lose all your data.",
        },
      ],
    },
    {
      name: "Upload Artwork",
      icon: "🎨",
      questions: [
        {
          question: "What file formats are supported for artwork uploads?",
          answer:
            "We support JPEG, PNG, GIF, and SVG file formats for artwork uploads.",
        },
        {
          question: "Is there a file size limit for uploads?",
          answer: "Yes, the maximum file size for uploads is 100MB.",
        },
        {
          question: "Can I edit my artwork after uploading?",
          answer:
            "Once an artwork is minted as an NFT, it cannot be edited. However, you can add or modify the description and other metadata.",
        },
        {
          question: "How long does it take for my uploaded artwork to appear?",
          answer:
            "Usually, uploaded artworks appear instantly. If there's a delay, it shouldn't take more than a few minutes.",
        },
        {
          question: "Can I upload multiple artworks at once?",
          answer:
            "Yes, you can upload up to 10 artworks at once using our bulk upload feature.",
        },
      ],
    },
    {
      name: "Wallet",
      icon: "💼",
      questions: [
        {
          question: "How do I connect my wallet?",
          answer:
            "Click on the 'Connect Wallet' button in the top right corner and select your wallet provider. Follow the prompts to complete the connection.",
        },
        {
          question: "Which wallets are supported?",
          answer: "We support MetaMask, WalletConnect, and Coinbase Wallet.",
        },
        {
          question: "Is it safe to connect my wallet?",
          answer:
            "Yes, connecting your wallet is safe. We never have access to your private keys or funds.",
        },
        {
          question: "Can I disconnect my wallet?",
          answer:
            "Yes, you can disconnect your wallet at any time from your account settings.",
        },
        {
          question: "What should I do if I lose access to my wallet?",
          answer:
            "If you lose access to your wallet, you'll need to recover it using your seed phrase. We cannot recover wallets for you.",
        },
      ],
    },
    {
      name: "Transaction",
      icon: "💱",
      questions: [
        {
          question: "How long do transactions take?",
          answer:
            "Transaction times can vary depending on network congestion. Most transactions are confirmed within a few minutes to an hour.",
        },
        {
          question: "What are gas fees?",
          answer:
            "Gas fees are the cost of performing transactions on the Ethereum network. They're paid to miners who process the transactions.",
        },
        {
          question: "Can I cancel a transaction?",
          answer:
            "Once a transaction is broadcast to the network, it cannot be cancelled. However, you can try to replace it with a higher gas fee transaction.",
        },
        {
          question: "What happens if my transaction fails?",
          answer:
            "If a transaction fails, the NFT or funds will remain in your wallet. You may still be charged gas fees for the attempted transaction.",
        },
        {
          question: "How can I check the status of my transaction?",
          answer:
            "You can check the status of your transaction using the transaction hash on a blockchain explorer like Etherscan.",
        },
      ],
    },
    {
      name: "Purchase & Sale",
      icon: "🛒",
      questions: [
        {
          question: "How do I purchase an NFT?",
          answer:
            "To purchase an NFT, connect your wallet, navigate to the NFT you want to buy, and click the 'Buy Now' or 'Place Bid' button.",
        },
        {
          question: "How do I sell my NFT?",
          answer:
            "To sell your NFT, go to your profile, select the NFT you want to sell, click 'Sell', and set your price or auction details.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We currently accept Ethereum (ETH) for all purchases and sales.",
        },
        {
          question: "Are there any fees for buying or selling?",
          answer:
            "Yes, there's a platform fee of 2.5% on all sales. Buyers don't pay any additional fees beyond the purchase price and gas fees.",
        },
        {
          question: "What happens after I make a purchase?",
          answer:
            "After a successful purchase, the NFT will be transferred to your wallet. This process is automatic and usually takes a few minutes.",
        },
      ],
    },
    {
      name: "Contact & Support",
      icon: "📞",
      questions: [
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our support team through the 'Contact Us' page on our website or by emailing support@example.com.",
        },
        {
          question: "What are your support hours?",
          answer:
            "Our support team is available 24/7 to assist you with any questions or issues.",
        },
        {
          question: "How long does it take to get a response?",
          answer:
            "We aim to respond to all inquiries within 24 hours, but often much sooner.",
        },
        {
          question: "Do you offer phone support?",
          answer:
            "We currently do not offer phone support, but we provide comprehensive email and chat support.",
        },
        {
          question: "How can I report a bug or suggest a feature?",
          answer:
            "You can report bugs or suggest features through our 'Feedback' form in the app or by emailing feedback@example.com.",
        },
      ],
    },
  ];
  const [activeMenu, setActiveMenu] = useState<number>(0); // Default to the first menu (General)
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    const currentItemIndex = menuItems.findIndex(
      (item) => item.name.toLowerCase() === pathname.split("/").pop()
    );
    if (currentItemIndex !== -1) {
      setActiveMenu(currentItemIndex);
    }
  }, [pathname]);

  const toggleMenu = (index: number) => {
    setActiveMenu(index);
    setActiveQuestion(null);
  };

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-auto mt-[2vw] mb-[3vw] py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center flex-wrap gap-4">
          {menuItems.map((item, menuIndex) => (
            <motion.button
              key={menuIndex}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeMenu === menuIndex
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105"
              }`}
              onClick={() => toggleMenu(menuIndex)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {activeMenu !== null && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {menuItems[activeMenu].questions.map((q, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    className="flex justify-start gap-[2vw] items-center w-full p-4 text-left"
                    onClick={() => toggleQuestion(qIndex)}
                  >
                    {activeQuestion === qIndex ? (
                      <FaMinus className="text-blue-500" />
                    ) : (
                      <FaPlus className="text-blue-500" />
                    )}
                    <span className="font-medium text-gray-700">
                      {q.question}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeQuestion === qIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="p-4 bg-gray-50 border-t border-gray-200 text-gray-600">
                          {q.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page_2;
