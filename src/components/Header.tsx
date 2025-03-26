"use client";
import Link from "next/link";
import React, { useState } from "react";
import Drawer from "./Drawer";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between overflow-hidden bg-white px-8 py-4 shadow-md">
      {/* logo from public */}
      <Link href="/" className="flex items-center">
        <img src="/images/logo.png" alt="logo" className="mr-2 w-12" />
        <p className="text-2xl font-bold text-gray-800">Vertical Click</p>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 lg:hidden"
        onClick={handleShow}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <Drawer show={show} setShow={handleShow} />

      <ul className="hidden space-x-4 lg:flex">
        <li>
          <Link
            href="/"
            className="text-lg font-normal hover:text-[#F05186] xl:text-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className="text-lg font-normal hover:text-[#F05186] xl:text-xl"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/our-services"
            className="text-lg font-normal hover:text-[#F05186] xl:text-xl"
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="text-lg font-normal hover:text-[#F05186] xl:text-xl"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
