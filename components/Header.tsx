"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Terminal,
  User,
  Briefcase,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Terminal", icon: Terminal },
    { href: "/profile", text: "Profile", icon: User },
    { href: "/work", text: "Work", icon: Briefcase },
    { href: "/contact", text: "Contact", icon: Mail },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-green-400 p-4 shadow-lg border-b border-green-400/30 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="text-green-500 mr-2" />
            <h1 className="text-lg font-mono font-semibold">
              Vedanth&apos;s_Portfolio $
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="font-mono hidden md:block">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * links.indexOf(link),
                  }}
                >
                  <Link href={link.href} passHref>
                    <motion.a
                      className="flex items-center hover:text-green-300 transition-colors duration-200"
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.text}
                      {hoveredLink === link.href && (
                        <motion.span
                          className="ml-1 text-green-500"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 5 }}
                        >
                          _
                        </motion.span>
                      )}
                    </motion.a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg border-t border-green-400/30 z-50 rounded-t-xl shadow-lg md:hidden">
        <div className="flex justify-between items-center h-16 px-4">
          {links.slice(0, 2).map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.text}
              icon={<link.icon className="h-6 w-6" />}
              className="w-16"
            />
          ))}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center justify-center text-green-400 hover:text-green-300 w-16 h-full"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <ChevronDown className="h-6 w-6" />
            ) : (
              <ChevronUp className="h-6 w-6" />
            )}
            <span className="text-[10px] mt-1">More</span>
          </button>
          {links.slice(2).map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.text}
              icon={<link.icon className="h-6 w-6" />}
              className="w-16"
            />
          ))}
        </div>
      </nav>

      {/* Mobile Expanded Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-16 left-0 right-0 bg-black bg-opacity-95 backdrop-filter backdrop-blur-lg border-t border-green-400/30 z-40 rounded-t-xl shadow-lg p-4 space-y-4 md:hidden"
          >
            <div className="flex items-center">
              <Terminal className="text-green-500 mr-2" />
              <h1 className="text-lg font-mono font-semibold text-green-400">
                Vedanth&apos;s_Portfolio $
              </h1>
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-row items-center space-x-2 text-green-400 hover:text-green-300 hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-mono transition-colors duration-300 w-full"
              >
                <link.icon className="h-6 w-6" />
                <span>{link.text}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  icon,
  className = "",
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-full text-sm font-mono transition-all duration-300
        ${
          isActive
            ? "text-green-300 bg-gray-800"
            : "text-green-400 hover:text-green-300"
        }
        ${className}
      `}
    >
      <span className={`${isActive ? "text-green-300" : ""}`}>{icon}</span>
      <span className="text-[10px]">{label}</span>
    </Link>
  );
};

export default Header;
