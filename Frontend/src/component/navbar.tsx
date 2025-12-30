import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Detect scroll for shadow/glow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
    <header
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md  ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-2xl"
          : "bg-white/50 dark:bg-gray-900/50"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 text-white py-2 px-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { href: "#", label: "Facebook" },
              { href: "#", label: "Twitter" },
              { href: "#", label: "Instagram" },
              { href: "#", label: "LinkedIn" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
                aria-label={social.label}
              >
                {social.label[0]}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span>📞 +977-000000</span>
            <span>✉️ sales@skylinetravels.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-gray-900 dark:bg-gray-900/80 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 transform transition-transform hover:scale-110"
            >
              <img
                src="/assets/logo.jpg"
                alt="Skyline Travels"
                className="h-12 md:h-16 w-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <span className="text-xl md:text-2xl font-bold tracking-wide">
                Skyline Travels
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 font-medium">
              {[
                { label: "Plane Booking", path: "/planes" },
                { label: "Dashboard", path: "/dashboard" },
                { label: "International Tour", path: "/travelpackage" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="relative group px-3 py-1 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-1 hover:text-yellow-400 transition-colors">
                  About Us
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isAboutOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-gray-800 rounded-md shadow-2xl py-2 z-50 border border-gray-700">
                    <Link
                      to="/about"
                      className="flex items-center gap-1 px-3 py-1 hover:text-yellow-400 transition-colors"
                    >
                      About Skyline
                    </Link>
                    <Link
                      to="/about#company-profile"
                      className="block px-4 py-2 hover:text-yellow-400 transition-colors"
                    >
                      Company Profile
                    </Link>
                  </div>
                )}
              </div>

              {/* Login Buttons */}
              <Link
                to="/staff-login"
                className="flex items-center gap-1 px-3 py-1 hover:text-yellow-400 transition-colors"
              >
                Staff Login
              </Link>
              <Link
                to="/agent-login"
                className="flex items-center gap-1 px-3 py-1 hover:text-yellow-400 transition-colors"
              >
                Agent Login
              </Link>

              {/* Search Icon */}
              <button
                onClick={() => navigate("/search")}
                className="p-2 hover:text-yellow-400 transition-colors"
              >
                🔍
              </button>

              {/* Dark/Light Toggle */}
              <div
                className={`relative w-16 h-8 rounded-full p-1 cursor-pointer shadow-inner ${
                  isDark
                    ? "bg-gray-700"
                    : "bg-yellow-400"
                }`}
                onClick={toggleTheme}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center transform transition-transform duration-500 ${
                    isDark ? "translate-x-8" : "translate-x-0"
                  }`}
                >
                  {isDark ? "🌙" : "☀️"}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:text-yellow-400 transition-colors"
              >
                {isMobileMenuOpen ? "❌" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-2 pb-4 border-t border-gray-700 flex flex-col gap-2">
              {[
                { label: "Plane Booking", path: "/planes" },
                { label: "Dashboard", path: "/dashboard" },
                { label: "International Tour", path: "/travelpackage" },
                { label: "Contact", path: "/contact" },
                { label: "About Skyline", path: "/about" },
                { label: "Company Profile", path: "/about#company-profile" },
                { label: "Staff Login", path: "/login" },
                { label: "Agent Login", path: "/agent-login" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 rounded hover:bg-gray-800 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
    <div className="h-[128px]" />
    </>
  );
};

export default Navbar;
