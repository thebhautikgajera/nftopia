"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Page_2 = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      name: "General",
      icon: "🌐",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            general information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Non-fungible tokens and their smart contracts allow for detailed
            attributes to be added, like the identity of the owner, rich
            metadata, or secure file links. The potent of non-fungible tokens to
            immutably prove digital ownership is an important progression for an
            increasingly digital world. They could see blockchain&apos;s promise
            of trustless security applied to the ownership or exchange of almost
            any asset.
          </p>
          <p className="px-[7.7vw] capitalize">
            There are business blogs on topics like how to start your own
            business, small business trends, marketing tips, and practical
            advice for business owners. Some of the most successful business
            blogs started over a decade ago, while other significant business
            blogs have skyrocketed to fame within the past couple of years.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of general
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              The Company may suspend or cancel the User&apos;s account if it
              considers that the User has breached these terms.
            </li>
            <li className="mb-2 capitalize">
              The User agrees to provide the mandatory information required for
              registration and also acknowledges that such information is true,
              complete and up to date.
            </li>
            <li className="mb-2 capitalize">
              Non-fungible tokens and their smart contracts allow for detailed
              attributes to be added, like the identity of the owner, rich
              metadata, or secure file links.
            </li>
            <li className="mb-2 capitalize">
              The Company may suspend or cancel the User&apos;s account if it
              considers that the User has breached these terms. accuracy or
              whether they are fit for a specific purpose or activity.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            services offered
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Their business blog is relatively hidden on the sites there&apos;s so
            much information the blog portion tends to hide. Recent posts advise
            small to medium businesses on topics like financial tips for
            starting a business from home, training your first employees, and
            the biggest marketing mistakes new entrepreneurs tend to make.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of services
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              If any provision in these Terms is declared to be invalid or
              unenforceable, it shall be substituted or deemed as it had not
              been included.
            </li>
            <li className="mb-2 capitalize">
              Derek Sivers&apos; blog uses one of the most straightforward layouts on
              the net. Derek has had a varied career. Wonders why people try to
              start a business too early.
            </li>
            <li className="mb-2 capitalize">
              They split their blog into articles on building an online business
              and a monthly issue of their new online magazine called
              Tradecraft. Each issue focuses on a theme and contains articles.
            </li>
          </ul>
        </>
      ),
    },
    {
      name: "Account",
      icon: "👤",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            account information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Your account is your gateway to our services. It allows you to access personalized features, manage your digital assets, and interact with our platform. Creating and maintaining an account is essential for a seamless experience on our platform. We prioritize the security and privacy of your account information.
          </p>
          <p className="px-[7.7vw] capitalize">
            Account management involves various aspects such as registration, login, profile updates, and security measures. We provide tools and options to help you keep your account secure and up-to-date. It&apos;s crucial to understand the responsibilities that come with having an account on our platform.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of account management
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Users are responsible for maintaining the confidentiality of their account credentials.
            </li>
            <li className="mb-2 capitalize">
              Regular password updates and enabling two-factor authentication are recommended for enhanced security.
            </li>
            <li className="mb-2 capitalize">
              Users should keep their profile information accurate and up-to-date.
            </li>
            <li className="mb-2 capitalize">
              The platform reserves the right to suspend or terminate accounts that violate our terms of service.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            account features
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Our platform offers various account features to enhance your user experience. These include personalized dashboards, transaction history, notification settings, and account recovery options. We continuously work on improving and expanding these features to meet our users&apos; needs.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of account features
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Personalized dashboards provide an overview of your account activity and digital assets.
            </li>
            <li className="mb-2 capitalize">
              Transaction history allows you to track and review your past activities on the platform.
            </li>
            <li className="mb-2 capitalize">
              Notification settings can be customized to keep you informed about important account events.
            </li>
          </ul>
        </>
      ),
    },
    {
      name: "Upload Artwork",
      icon: "🎨",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            artwork upload information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Uploading artwork to our platform is a crucial feature that allows creators to showcase and potentially monetize their digital creations. We support various file formats and provide tools to help you present your artwork in the best possible way. Understanding the upload process and guidelines is essential for a smooth experience.
          </p>
          <p className="px-[7.7vw] capitalize">
            When uploading artwork, consider aspects such as file size, resolution, and metadata. These factors can affect how your artwork is displayed and discovered on our platform. We also have policies in place to protect intellectual property rights and ensure the quality of content on our platform.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of artwork upload
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Ensure you have the rights to upload and sell the artwork you&apos;re submitting.
            </li>
            <li className="mb-2 capitalize">
              Follow the recommended file formats and size guidelines for optimal display.
            </li>
            <li className="mb-2 capitalize">
              Include relevant tags and descriptions to improve discoverability of your artwork.
            </li>
            <li className="mb-2 capitalize">
              Be aware of content restrictions and community guidelines when uploading artwork.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            artwork management
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            After uploading, you can manage your artwork through your creator dashboard. This includes options to edit details, set pricing, and track engagement. We provide analytics to help you understand how your artwork is performing on the platform.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of artwork management
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Regularly review and update your artwork details to keep them relevant and accurate.
            </li>
            <li className="mb-2 capitalize">
              Utilize analytics to understand your audience and optimize your artwork strategy.
            </li>
            <li className="mb-2 capitalize">
              Engage with your audience through comments and updates about your artwork.
            </li>
          </ul>
        </>
      ),
    },
    {
      name: "Wallet",
      icon: "💼",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            wallet information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Your wallet is a crucial component of your experience on our platform. It serves as a secure storage for your digital assets and enables you to participate in transactions. Understanding how to manage and secure your wallet is essential for a safe and efficient use of our services.
          </p>
          <p className="px-[7.7vw] capitalize">
            We support various types of wallets, including hot wallets (online) and cold wallets (offline). Each type has its own benefits and considerations in terms of accessibility and security. It&apos;s important to choose the wallet type that best suits your needs and usage patterns.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of wallet management
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Always keep your wallet&apos;s private keys and recovery phrases secure and never share them.
            </li>
            <li className="mb-2 capitalize">
              Regularly back up your wallet to prevent loss of access to your digital assets.
            </li>
            <li className="mb-2 capitalize">
              Be cautious of phishing attempts and only access your wallet through official channels.
            </li>
            <li className="mb-2 capitalize">
              Consider using hardware wallets for enhanced security of high-value assets.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            wallet features
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Our platform offers various wallet features to enhance your asset management experience. These include multi-currency support, transaction history, and integration with other platform services. We continuously work on improving wallet functionality and security.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of wallet features
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Multi-currency support allows you to manage various types of digital assets in one place.
            </li>
            <li className="mb-2 capitalize">
              Transaction history provides a clear record of all your wallet activities.
            </li>
            <li className="mb-2 capitalize">
              Integration with platform services enables seamless transactions and asset management.
            </li>
          </ul>
        </>
      ),
    },
    {
      name: "Transaction",
      icon: "💱",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            transaction information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Transactions are at the core of our platform&apos;s functionality. They enable the transfer of digital assets between users and facilitate the buying and selling of artwork. Understanding how transactions work, including fees, confirmation times, and security measures, is crucial for a smooth experience on our platform.
          </p>
          <p className="px-[7.7vw] capitalize">
            Our platform supports various types of transactions, including direct transfers, marketplace purchases, and smart contract interactions. Each type of transaction may have different requirements and implications. It&apos;s important to familiarize yourself with these differences to make informed decisions.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of transactions
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Always double-check transaction details before confirming to avoid errors.
            </li>
            <li className="mb-2 capitalize">
              Be aware of transaction fees and how they may affect the final amount.
            </li>
            <li className="mb-2 capitalize">
              Understand the concept of transaction confirmations and how they ensure security.
            </li>
            <li className="mb-2 capitalize">
              Familiarize yourself with the platform&apos;s dispute resolution process for transactions.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            transaction features
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Our platform offers various features to enhance your transaction experience. These include real-time transaction tracking, automated escrow services, and multi-signature capabilities for added security. We continuously work on improving these features to provide a seamless and secure transaction environment.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of transaction features
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Real-time tracking allows you to monitor the status of your transactions at any time.
            </li>
            <li className="mb-2 capitalize">
              Automated escrow services provide an additional layer of security for high-value transactions.
            </li>
            <li className="mb-2 capitalize">
              Multi-signature capabilities enable shared control over transactions, enhancing security for organizational accounts.
            </li>
          </ul>
        </>
      ),
    },
    {
      name: "Purchase & Sale",
      icon: "🛒",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            purchase and sale information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Buying and selling digital assets is a key feature of our platform. Whether you&apos;re a creator looking to monetize your artwork or a collector seeking unique digital pieces, understanding the purchase and sale process is crucial. This includes knowing about pricing mechanisms, fees, and the rights transferred during a sale.
          </p>
          <p className="px-[7.7vw] capitalize">
            Our platform supports various sale types, including fixed price sales, auctions, and limited editions. Each type has its own set of rules and considerations. It&apos;s important to familiarize yourself with these options to choose the best approach for your needs.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of purchases and sales
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Understand the full cost of a purchase, including platform fees and potential gas fees.
            </li>
            <li className="mb-2 capitalize">
              Be aware of the rights you&apos;re acquiring or selling with each transaction.
            </li>
            <li className="mb-2 capitalize">
              Familiarize yourself with the platform&apos;s policies on refunds and cancellations.
            </li>
            <li className="mb-2 capitalize">
              For creators, consider different pricing strategies and sale types to maximize your earnings.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            purchase and sale features
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Our platform offers various features to enhance the buying and selling experience. These include automated royalties for creators, bundle sales, and timed auctions. We continuously work on improving these features to provide a fair and efficient marketplace for all users.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of purchase and sale features
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Automated royalties ensure creators continue to benefit from secondary sales of their work.
            </li>
            <li className="mb-2 capitalize">
              Bundle sales allow for the creation and purchase of curated collections of digital assets.
            </li>
            <li className="mb-2 capitalize">
              Timed auctions create excitement and can help maximize the value of rare or highly sought-after pieces.
            </li>
          </ul>
        </>
      ),
    },
    {
      name: "Contact & Support",
      icon: "📞",
      content: (
        <>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] mt-[4vw]">
            contact and support information
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            Our support team is dedicated to ensuring you have the best possible experience on our platform. We offer various channels for contact and support, including email, live chat, and a comprehensive help center. Understanding how to effectively use these resources can help you quickly resolve issues and get the most out of our platform.
          </p>
          <p className="px-[7.7vw] capitalize">
            In addition to direct support, we also maintain a community forum where users can share experiences, ask questions, and provide mutual assistance. This can be a valuable resource for getting quick answers and learning from other users&apos; experiences.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            key points of contact and support
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              Check our help center first for answers to common questions and issues.
            </li>
            <li className="mb-2 capitalize">
              When contacting support, provide as much relevant information as possible to expedite resolution.
            </li>
            <li className="mb-2 capitalize">
              Be aware of our support hours and expected response times for different channels.
            </li>
            <li className="mb-2 capitalize">
              For urgent issues, use our live chat feature for the quickest response.
            </li>
          </ul>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw]">
            support features
          </h1>
          <p className="mb-4 capitalize px-[7.7vw]">
            We offer various features to enhance your support experience. These include a ticket tracking system, scheduled callback options, and a comprehensive FAQ section. We continuously work on improving these features to provide efficient and effective support to all our users.
          </p>
          <h1 className="text-3xl font-bold mb-4 capitalize px-[7.7vw] ">
            points of support features
          </h1>
          <ul className="list-decimal pl-[9.7vw] pr-[7.7vw] mb-4">
            <li className="mb-2 capitalize">
              The ticket tracking system allows you to monitor the progress of your support requests.
            </li>
            <li className="mb-2 capitalize">
              Scheduled callbacks provide the convenience of speaking with a support agent at a time that suits you.
            </li>
            <li className="mb-2 capitalize">
              Our FAQ section is regularly updated based on user feedback and common issues to provide quick solutions.
            </li>
          </ul>
        </>
      ),
    },
  ];
  const [activeMenu, setActiveMenu] = useState<number>(0); // Default to the first menu (General)

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
  };

  return (
  <>
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
              {menuItems[activeMenu].content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </>
  );
};

export default Page_2;
