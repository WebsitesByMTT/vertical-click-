import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* logo from public */}
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-12" />
        <p className="text-2xl font-bold text-gray-800">Vertical Click</p>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-[#F05186]">
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
