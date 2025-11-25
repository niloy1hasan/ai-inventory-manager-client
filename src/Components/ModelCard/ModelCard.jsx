import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";

const ModelCard = ({ model }) => {
  const navigate = useNavigate();
  if (!model) return null;

  const {name, framework, useCase, dataset, description, image, createdBy, createdAt, views} = model;

  const formattedDate = new Date(createdAt).toLocaleDateString();

  const increaseView = async (id) => {
    try {
      await fetch(`https://ai-inventory-manager-server.vercel.app/models/view/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        }
      });
    } catch (error) {
      console.error("Failed to increase view:", error);
    } finally {
      navigate(`/models/${id}`);
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <figure className="lg:w-1/3">
        <img src={image} alt={name} className="h-64 w-full object-cover" />
      </figure>

      <div className="card-body flex flex-col justify-between lg:w-2/3">
        <div>
          <div className="flex items-start justify-between">
            <h2 className="card-title text-2xl font-bold text-gray-800 dark:text-gray-200">
              {name}
            </h2>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
              <FaEye className="text-gray-500 dark:text-gray-400" />
              <span>{views || 0}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 pr-3 gap-x-4 gap-y-1 text-sm mt-3">
          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Framework:</span>{" "}
            {framework}
          </p>
          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Use Case:</span>{" "}
            {useCase}
          </p>
          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Dataset:</span>{" "}
            {dataset}
          </p>
          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Created By:</span>{" "}
            {createdBy}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={()=> increaseView(model._id)}
            className="btn btn-primary btn-sm outline-none border-none bg-blue-600 hover:bg-blue-800"
          >
            View Details
          </button>

          <span className="text-xs text-gray-400 dark:text-gray-300">
            Created: {formattedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
