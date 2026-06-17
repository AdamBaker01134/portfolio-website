"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  type Tab = [name: string, route: string];
  const tabs: Array<Tab> = [
    ["Home", "/"],
    ["Education", "/education"],
    ["Work Experience", "/experience"],
    ["Publications", "/publications"],
    ["Skills", "/skills"],
    ["Contact", "/contact"],
  ];

  const isActiveRoute = (route: string) => {
    if (route === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(route);
  };

  return (
    <nav className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          Adam Baker
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 p-2 text-zinc-700 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {tabs.map(([name, route]) => (
            <li key={name}>
              <Link
                href={route}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveRoute(route)
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="mobile-nav"
        className={`${isMenuOpen ? "block" : "hidden"} border-t border-zinc-200 md:hidden`}
      >
        <ul className="flex flex-col px-4 py-2">
          {tabs.map(([name, route]) => (
            <li key={`mobile-${name}`}>
              <Link
                href={route}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveRoute(route)
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
