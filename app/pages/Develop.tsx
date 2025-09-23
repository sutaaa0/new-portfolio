"use client";

import Link from "next/link";
import { Mail, Github, Instagram } from "lucide-react";

export default function MinimalUnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Side - Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="text-center group">
              <h1 className="text-6xl md:text-7xl font-light text-gray-900 tracking-tight transition-transform duration-300 group-hover:scale-105">
                D—S
              </h1>
              <div className="flex items-center justify-center mt-2">
                <span className="text-sm text-gray-500">© 2025 Dodisuta</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-gray-900">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Portfolio Under Construction 🚧
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Hi, I’m <span className="font-medium">Dodi Suta</span> — a developer who loves
              clean code & seamless user experience. Currently building web
              applications with <span className="font-medium">React</span> &
              <span className="font-medium"> Next.js</span>. Passionate about
              modern web technologies.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              While my 2025 portfolio is in progress, you can find me here:
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="https://github.com/dodisuta"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors hover:bg-white shadow-sm"
              >
                <Github size={18} />
                GitHub
              </Link>

              <Link
                href="mailto:hello@dodisuta.dev"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors hover:bg-white shadow-sm"
              >
                <Mail size={18} />
                hello@dodisuta.dev
              </Link>

              <Link
                href="https://instagram.com/sutaa_28"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors hover:bg-white shadow-sm"
              >
                <Instagram size={18} />
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
