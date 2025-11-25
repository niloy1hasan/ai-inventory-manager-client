import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          {/* About Section */}
          <div>
            <NavLink to={'/'} className='select-none cursor-pointer'>
            <h1 className="flex items-baseline font-semibold mb-7">
              <span className="text-lg tracking-wide text-white">
              AI
            </span>

            <span className="text-[16px] text-gray-300">
              Model
            </span>

            <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-600 to-blue-500">
              Verse
            </span>
</h1>
</NavLink>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-6"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li className="mb-6"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li className="mb-6"><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-white">Documentation</a></li>
            </ul>
          </div>

          {/* User Tools */}
          <div>
            <h4 className="text-lg text-white font-bold mb-7">User Tools</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</a></li>
              <li className="mb-6"><a href="/models" className="text-gray-400 hover:text-white">My Models</a></li>
              <li className="mb-6"><a href="/add-model" className="text-gray-400 hover:text-white">Add Model</a></li>
              <li className="mb-6"><a href="/api-access" className="text-gray-400 hover:text-white">API Access</a></li>
              <li><a href="/account" className="text-gray-400 hover:text-white">Account Settings</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg text-white font-bold mb-7">Resources</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="/faq" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li className="mb-6"><a href="/api-docs" className="text-gray-400 hover:text-white">API Docs</a></li>
              <li className="mb-6"><a href="/tutorials" className="text-gray-400 hover:text-white">Tutorials</a></li>
              <li className="mb-6"><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white">Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg text-white font-bold mb-7">Support</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="/support" className="text-gray-400 hover:text-white">Customer Support</a></li>
              <li className="mb-6"><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li className="mb-6"><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li className="mb-6"><a href="/license" className="text-gray-400 hover:text-white">License</a></li>
              <li><a href="/feedback" className="text-gray-400 hover:text-white">Give Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 px-10 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            {/* Logo / Title */}

            <NavLink to={'/'} className='select-none tracking-wide cursor-pointer'>
            <h1 className="flex items-baseline font-semibold">
              <span className="text-lg tracking-wide text-white">
              AI
            </span>

            <span className="text-[16px] text-gray-300">
              Model
            </span>

            <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-600 to-blue-500">
              Verse
            </span>
</h1>
</NavLink>

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} AI Model Verse. All rights reserved.
            </p>

            <a
  href="https://github.com/niloy1hasan/ai-inventory-manager-client"
  target="_blank"
  className="lg:pr-6 text-gray-400 hover:text-white transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582 
      0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
      1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.603-2.665-.303-5.466-1.332-5.466-5.93 
      0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 3.003-.404 
      11.47 11.47 0 0 1 3.003.404c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 
      1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.475 5.92.43.372.813 1.102.813 2.222 
      0 1.606-.014 2.898-.014 3.293 0 .323.19.7.8.58C20.565 21.796 24 17.297 24 12 
      24 5.37 18.63 0 12 0z" />
  </svg>
</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;