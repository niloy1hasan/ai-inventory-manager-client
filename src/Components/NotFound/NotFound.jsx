import React from 'react';
import { NavLink } from 'react-router';

const NotFound = () => {
    return (
         <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900">404</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">Page not found</p>
          <p className="mt-2 text-sm text-gray-600">
            Sorry, we couldn't find the page or model you're looking for. This page doesn’t exist.
          </p>
        </div>

        <div className="mt-8">
          <NavLink
            to={'/'}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="mr-2 -ml-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18m-9-9l9 9-9 9"
              />
            </svg>
            Go back home
          </NavLink>
        </div>
      </div>
    </div>
    );
};

export default NotFound;