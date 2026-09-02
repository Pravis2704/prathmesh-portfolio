"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-semibold text-black">
            {portfolioData.shortName}
          </span>

          <span className="hidden text-sm font-medium text-white sm:block">
            {portfolioData.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-slate-200"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen && (
          <div className="glass absolute left-4 right-4 top-[76px] rounded-2xl p-4 lg:hidden">
            <div className="flex flex-col">
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}