import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link  from "react-router-dom";


const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 ">
      <section className="wrapper md:py-0 py-5">
        <div className="grid grid-cols-1 md:grid-cols-5 ">
          {/* Exclusive */}
          <div>
            <h1 className="text-2xl font-bold">Exclusive</h1>
            <p className="mb-3 text-xl">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex items-center border border-white rounded-lg p-2 w-full max-w-xs justify-between">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent text-white outline-none w-full pr-2"
              />
              <img src="/images/email-icon.svg" alt="email-icon" />
            </div>
          </div>

          {/* Support */}
          <div className="ml-10">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <p className="mb-2">111 Bijoy sarani, Dhaka,</p>
            <p className="mb-2">DH 1515, Bangladesh.</p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p className="mb-2">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Account</h3>
            <Link className="mb-2">My Account</Link>
            <p className="mb-2">Login / Register</p>
            <p className="mb-2">Cart</p>
            <Link className="mb-2">Wishlist</Link>
            <p className="mb-2">Shop</p>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Terms Of Use</p>
            <p className="mb-2">FAQ</p>
            <p className="mb-2">Contact</p>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Download App</h3>
            <p className="text-sm mb-3">Save $3 with App New User Only</p>
            <div className="flex gap-3 mb-4">
              <img
                src="/images/Qr Code.svg"
                alt="QR Code"
                className="w-16 h-16"
              />
              <div className="flex flex-col gap-2">
                <img
                  src="/images/google.svg"
                  alt="Google Play"
                  className="w-28"
                />
                <img
                  src="/images/AppStore.svg"
                  alt="App Store"
                  className="w-28"
                />
              </div>
            </div>
            <div className="flex gap-4 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm">
          © Copyright Rimel 2022. All right reserved
        </div>
      </section>
    </footer>
  );
};

export default Footer;
