import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* logo from public */}
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-12" />
        <p className="text-2xl font-bold text-gray-800">Vertical Click</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 lg:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <ul className="hidden lg:flex space-x-4">
        <li>
          <a href="/" className="hover:text-[#F05186]">
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/our-services">Our Services</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
