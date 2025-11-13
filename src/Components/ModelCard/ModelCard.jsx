import React from 'react';
import { FaEye } from "react-icons/fa";
import { NavLink } from 'react-router';

const ModelCard = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
      {/* Image Section */}
      <figure className="lg:w-1/3">
        <img
          src="https://i.ibb.co/6nVv7cP/sample-bert.png"
          alt="BERT Model"
          className="h-64 w-full object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="card-body flex flex-col justify-between lg:w-2/3">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between">
            <h2 className="card-title text-2xl font-bold text-gray-800">
              BERT
            </h2>
            {/* View Count */}
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <FaEye className="text-gray-500" />
              <span>1</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2">
            A transformer-based model for natural language processing tasks like
            text classification.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-3">
          <p>
            <span className="font-semibold text-gray-700">Framework:</span>{" "}
            TensorFlow
          </p>
          <p>
            <span className="font-semibold text-gray-700">Use Case:</span> NLP
          </p>
          <p>
            <span className="font-semibold text-gray-700">Dataset:</span>{" "}
            Wikipedia
          </p>
          <p>
            <span className="font-semibold text-gray-700">Created By:</span>{" "}
            user@example.com
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <NavLink to={'/model-details'}><button className="btn btn-primary btn-sm outline-none border-none bg-blue-600 hover:bg-blue-800">View Details</button></NavLink>

          {/* Created Time */}
          <span className="text-xs text-gray-400">
            Created: Oct 28, 2025
          </span>
        </div>
      </div>
    </div>
    );
};

export default ModelCard;