"use client";
import React, { useState } from "react";
import ToggleSwitch from "./TogggleSwitch";
import { AtSign, Github, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-transparent flex items-center px-6 justify-between sm:justify-center sm:gap-x-96 py-6">
      <h1 className="text-[#555555] text-md font-bold">DODI SUTA</h1>
      <div className="flex justify-between items-center sm:w-[630px]">
        <ToggleSwitch />
        <div className="gap-x-4 hidden sm:flex">
          <Link href={"https://github.com/sutaaa0"}>
            <Github className="cursor-pointer hover:bg-[#171717] p-2 hover:text-white text-[#555555] rounded-lg transition-all" size={50} />
          </Link>
          <Link href={"https://instagram.com/sutaaa0"}>
            <Instagram className="cursor-pointer hover:bg-[#171717] p-2 hover:text-white text-[#555555] rounded-lg transition-all" size={50} />
          </Link>
        </div>
        <div className="relative sm:hidden ms-3">
          <div className="bg-[#161616] border-[#171717] border-2 rounded-full">
            <button onClick={toggleDropdown} className="relative w-[45px] h-[45px] flex items-center justify-center">
              <AtSign size={45} className={`absolute cursor-pointer hover:bg-[#171717] p-2 hover:text-white text-[#555555] rounded-full transition-all duration-300 ${showDropdown ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`} />
              <X size={45} className={`absolute cursor-pointer hover:bg-[#171717] p-2 hover:text-white text-[#555555] rounded-full transition-all duration-300 ${showDropdown ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`} />
            </button>
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-[#161616] rounded-lg shadow-lg py-1 z-10">
              <Link href={"https://github.com/sutaaa0"}>
                <div className="flex items-center px-4 py-2 text-sm text-[#555555] hover:text-white">
                  <Github size={20} className="mr-2" />
                  GitHub
                </div>
              </Link>
              <Link href={"https://instagram.com/sutaaa0"}>
                <div className="flex items-center px-4 py-2 text-sm text-[#555555] hover:text-white">
                  <Instagram size={20} className="mr-2" />
                  LinkedIn
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
