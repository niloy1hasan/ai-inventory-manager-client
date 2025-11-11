import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          {/* About Section */}
          <div>
            <h4 className="text-lg text-white font-bold mb-7">AI Model Manager</h4>
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
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
            {/* Logo / Title */}
            <a href="/" className="text-lg font-semibold text-white tracking-wide">
              AI Model Manager
            </a>

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} AI Model Manager. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;