import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t border-[#161616] mt-12 py-8 px-4 md:px-8 lg:px-[200px]">
      {/* Main footer content */}
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 mb-12">
        {/* Logo/Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-[#555555] text-lg font-bold">DODI SUTA</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
          {/* Main Links */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#555555] text-xs uppercase text-center md:text-left">
              Main
            </h2>
            <nav className="text-white flex flex-col gap-4 text-center md:text-left">
              <Link href="/" className="hover:text-[#555555] transition-colors">
                Work
              </Link>
              <Link href="/Info" className="hover:text-[#555555] transition-colors">
                Info
              </Link>
            </nav>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#555555] text-xs uppercase text-center md:text-left">
              Contact
            </h2>
            <nav className="text-white flex flex-col gap-4 text-center md:text-left">
              <Link
                href="https://instagram.com/sutaaa0"
                className="hover:text-[#555555] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com/sutaaa0"
                className="hover:text-[#555555] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/sutaaa0"
                className="hover:text-[#555555] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
              <Link
                href="mailto:dodisuta0@gmail.com"
                className="hover:text-[#555555] transition-colors"
              >
                Gmail
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between text-center md:text-left">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-sm">
            © 2024 Dodi Suta. All rights reserved.
          </h2>
          <p className="text-[#555555] text-xs">
            Made with love and coffee (50% sugar, less ice)
          </p>
        </div>
        <div>
          <p className="text-[#555555] text-xs">
            Last updated by Dodi on July 16, 2024, 8:57 PM
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;