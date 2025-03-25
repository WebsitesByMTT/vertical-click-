"use client"
import Link from "next/link";
import React , {useState} from "react";
import Drawer from "./Drawer";

const Header = () => {
 const [show ,setShow] = useState(false)
 const handleShow = ()=>{
     setShow((prev)=>(!prev))
 }

  return (
    <nav className=" flex justify-between items-center px-8 py-4 bg-white shadow-md overflow-hidden">
      {/* logo from public */}
      <Link href="/" className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-12" />
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
      <Drawer show={show} setShow={handleShow}/>
     
      <ul className="hidden lg:flex space-x-4">
        <li>
          <Link href="/" className="hover:text-[#F05186]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/our-services">Our Services</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
