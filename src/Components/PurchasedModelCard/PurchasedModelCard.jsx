import React from "react";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router";

const PurchasedModelCard = ({ purchase }) => {
  if (!purchase) return null;

  const {
    modelId,
    modelName,
    framework,
    useCase,
    dataset,
    image,
    createdBy,
    purchasedAt
  } = purchase;

  const formattedDate = new Date(purchasedAt).toLocaleDateString();

  return (
    <div className="card lg:card-side bg-base-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
  <figure className="lg:w-1/3">
    <img src={image} alt={modelName} className="h-64 w-full object-cover" />
  </figure>

  <div className="card-body flex flex-col justify-between lg:w-2/3">
    <div>
      <div className="flex items-start justify-between">
        <h2 className="card-title text-2xl font-bold text-gray-800 dark:text-neutral-200">
          {modelName}
        </h2>
      </div>
    </div>

    <p className="text-sm text-gray-600 dark:text-neutral-300 mt-2 line-clamp-3">
      {purchase.description || "No description available"}
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1 pr-3 text-sm mt-3">
      <p>
        <span className="font-semibold text-gray-700 dark:text-neutral-200">Framework:</span> {framework}
      </p>
      <p>
        <span className="font-semibold text-gray-700 dark:text-neutral-200">Use Case:</span> {useCase}
      </p>
      <p>
        <span className="font-semibold text-gray-700 dark:text-neutral-200">Dataset:</span> {dataset}
      </p>
      <p>
        <span className="font-semibold text-gray-700 dark:text-neutral-200">Created By:</span> {createdBy}
      </p>
    </div>

    <div className="flex items-center justify-between mt-4">
      <NavLink
        to={`/models/${modelId}`}
        className="btn btn-primary btn-sm outline-none border-none bg-blue-600 hover:bg-blue-800"
      >
        View Details
      </NavLink>

      <span className="text-xs text-gray-400 dark:text-neutral-400">
        Purchased: {formattedDate}
      </span>
    </div>
  </div>
    </div>
  );
};

export default PurchasedModelCard;