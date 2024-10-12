"use client";

import Link from "next/link";
import { Monitor } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg rounded-lg border border-gray-700 glow-effect">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Monitor className="text-green-500 mr-2" />
          <h1 className="text-lg font-semibold">Vedanth&apos;s Portfolio</h1>
        </div>
        <nav className="rounded-lg p-2 shadow-md floating-nav">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="hover:underline">Terminal</a>
              </Link>
            </li>
            <li>
              <Link href="/profile" legacyBehavior>
                <a className="hover:underline">Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/work" legacyBehavior>
                <a className="hover:underline">Work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
