import React, { useState } from "react";
import { Logo } from "../assets";
import { Fade } from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed sm:bg-[#fffdfdbd] dark:sm:bg-slate-900 sm:p-0 p-[20px] sm:shadow-xl">
      <div
        className={`flex w-full bg-[#fffdfdbd] dark:bg-slate-900 justify-between items-center sm:px-[50px] border-t border-x ${
          !open && "border-b"
        } rounded-full sm:border-none border-slate-800 dark:border-slate-200`}
      >
        <img className="p-3 max-w-[80px] sm:w-[100px]" src={Logo} />
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden block text-black dark:text-slate-400"
        >
          <Fade size={15} />
        </button>
        <ul className="hidden sm:flex flex-row dark:text-slate-300 text-[15px] p-1 gap-3">
          <li className="py-3 px-2 md:px-5 hover:font-semibold dark:hover:text-slate-200 hover:scale-110 cursor-pointer ease-in-out transition-all">
            Home
          </li>
          <li className="py-3 px-2 md:px-5 hover:font-semibold dark:hover:text-slate-200 hover:scale-110 cursor-pointer ease-in-out transition-all">
            About
          </li>
          <li className="py-3 px-2 md:px-5 hover:font-semibold dark:hover:text-slate-200 hover:scale-110 cursor-pointer ease-in-out transition-all">
            Login
          </li>
        </ul>
      </div>
      {open && (
        <ul className="bg-[#fffdfdbd] dark:bg-slate-900 flex flex-col justify-center text-black dark:text-slate-300 text-[15px] p-1 gap-3 px-[20px] border-x border-b rounded-2xl border-slate-700 dark:border-slate-200">
          <li className="py-3 px-5 hover:font-semibold dark:hover:text-slate-200 cursor-pointer">
            Home
          </li>
          <li className="py-3 px-5 hover:font-semibold dark:hover:text-slate-200 cursor-pointer">
            About
          </li>
          <li className="py-3 px-5 hover:font-semibold dark:hover:text-slate-200 cursor-pointer">
            Login
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
