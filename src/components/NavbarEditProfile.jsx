import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-8">
       <Link to='/'>
      <ul className="flex items-center border p-1 shadow-[0_10px_40px_5px_#66b1d6] rounded-lg hover:shadow-[0_10px_40px_5px_#4e98bd]">
        <li className="text-black font-bold">m</li>
        <li className="text-[#66b1d6] font-bold">AI</li>
        <li className="text-black font-bold">space</li>
      </ul>
      </Link>
      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
          <li>
            <Link to='/' className="px-4 text-black hover:text-[#53595c]">HOME</Link>
          </li>
          <li  className="">
            <Link to='/about' className="px-4 text-black hover:text-[#53595c]">ABOUT</Link>
          </li>
          <li  className="">
            <Link to='/app' className="px-4 text-black hover:text-[#53595c]">PLAYGROUND</Link>
          </li>
          <li  className="">
            <Link to='/profile' className="px-4 text-black hover:text-[#53595c]">PROFILE</Link>
          </li>
          <li  className="underline">
            <Link to='/editprofile' className="px-4 text-[#66b1d6] hover:text-[#4e98bd]">EDIT PROFILE</Link>
          </li>
            <li>
            <button className="px-4 text-black hover:text-[#53595c]" onClick={logout}>LOG OUT</button>
          </li>

        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="text-black focus:outline-none hover:text-[#66b1d6]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6H5v2h14V6zM19 11H5v2h14v-2zM5 16h14v-2H5v2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-white z-10 shadow-md">
          <ul className="flex flex-col items-center">
            <li className="">
              <Link to='/' className="block px-4 text-black hover:text-[#53595c]">HOME</Link>
            </li>
            <li  className="">
            <Link to='/about' className="px-4 text-black hover:text-[#53595c]">ABOUT</Link>
          </li>
          <li  className="">
            <Link to='/app' className="px-4 text-black hover:text-[#53595c]">PLAYGROUND</Link>
          </li>
          <li  className="">
            <Link to='/profile' className="px-4 text-black hover:text-[#53595c]">PROFILE</Link>
          </li>
          <li  className="underline">
            <Link to='/editprofile' className="px-4 text-[#66b1d6] hover:text-[#4e98bd]">EDIT PROFILE</Link>
          </li>
            <li>
            <button className="px-4 text-black hover:text-[#53595c]" onClick={logout}>LOG OUT</button>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;