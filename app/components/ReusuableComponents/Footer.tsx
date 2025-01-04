import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/home/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-[10vw]">
        <div className="flex px-[4vw] flex-row justify-between items-start ">
          <div className="mb-8  md:w-1/3">
            <Image src={Logo} alt="Logo" width={150} height={50} />
            <p className="text-[1vw] mt-[2.5vw] capitalize">
              We provide one-stop solutions for all IT <br /> items; your bliss
              is just a click away. Star <br /> Tech trusts in quality client We
              provide <br /> one-stop solutions for all IT items; your <br />{" "}
              bliss is just a click away. Star Tech trusts <br /> in quality
              client
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-[6vw]">
            <div>
              <h3 className="text-xl font-bold mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Proper Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Buy Products
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Compare Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Career
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Build Ecommerce
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Marketplace</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  3D Artworks
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Photography
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Flat Illustration
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Painting
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Intro Videos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Insight Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Global Partners
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Forum
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Virtual World
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Community
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-gray-300">
                  Brand Assets
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-2 border-t border-white pt-8 text-center ">
          <div className="flex justify-end">
            <p className="text-sm">
              &copy; Copyrighted & Designed by <Link href="https://github.com/thebhautikgajera" className="hover:text-gray-300" target="_blank">The Bhautik Gajera</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
