import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <h1 className="w-28 sm:w-32 lg:w-40 bold text-2xl text-cyan-900">
        prompt2art
      </h1>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @prompt2art | All right reserved.
      </p>
      <div className="flex gap-2.5">
        <a
          href="https://www.facebook.com/profile.php?id=100017282291299"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={35} src={assets.facebook_icon} alt="Facebook" />
        </a>

        <a
          href="https://github.com/gaurav1642"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={30} src={assets.github_icon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/gaurav__1642"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={32} src={assets.instagram_icon} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
