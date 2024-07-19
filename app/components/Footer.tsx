import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="sm:h-[300px] h-auto border-t border-[#161616] mt-12 w-full flex flex-col justify-center px-4 sm:px-[200px] py-8 sm:gap-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[#555555] text-md font-bold">DODI SUTA</h1>
        </div>
        <div className="flex gap-x-12">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[#555555] text-xs">MAIN</h1>
            <div className="text-white flex flex-col gap-y-5">
              <Link href={"/"}>Work</Link>
              <Link href={"/Info"}>Info</Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h1 className="text-[#555555] text-xs">CONTACT</h1>
            <div className="flex flex-col gap-y-3 text-white">
              <Link href={"https://instagram.com/sutaaa0"}>Instagram</Link>
              <Link href={"https://linkedin.com/sutaaa0"}>LinkedIn</Link>
              <Link href={"https://github.com/sutaaa0"}>Github</Link>
              <Link href={"mailto:dodisuta0@gmail.com"}>Gmail</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row gap-y-5 flex-col justify-center items-start sm:justify-between sm:items-center">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-white text-md">© 2024 Dodi Suta .All rights reserved.</h2>
          <p className="text-[#555555] text-xs">Made with love and coffee (50% sugar, less ice)</p>
        </div>
        <div>
          <p className="text-[#555555] text-xs">Last updated by Dodi on July 16, 2024, 8:57 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
