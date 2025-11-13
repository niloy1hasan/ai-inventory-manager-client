import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink, useLoaderData } from "react-router";
import ModelCard from "../ModelCard/ModelCard";
import Footer from "../Footer/Footer";

const AllModels = () => {
  const models = useLoaderData();
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const clearFilter = () => {
    setSelectedFilter("");
  };

  return (
    <>
    <div className="max-w-6xl mx-auto p-8">
      {/* Title and Subtitle */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Models</h1>
        <p className="text-gray-600 max-w-2xl">
          Discover and use thousands of machine learning models, including the
          most popular diffusion models and LLMs. Learn how to share with the
          community.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <NavLink to={"/add-model"}>
          <button className="btn btn-primary bg-blue-600 hover:bg-blue-800">
            + New Model
          </button>
        </NavLink>
        <button className="btn btn-outline">Your Models</button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex gap-2 px-5 items-center input input-bordered w-full outline-none rounded-full">
        <AiOutlineSearch size={"24px"} />
        <input
          type="text"
          placeholder="Search Models"
          className="outline-none text-[16px] border-none w-full"
        />
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-3">
        <button className="btn btn-outline btn-sm">
          <span className="mr-1">⚙</span> All Filters
        </button>

        {/* Dropdown Filters */}
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="select outline-none w-fit select-sm rounded-full"
        >
          <option value="" selected disabled>
            Framework
          </option>
          <option value="task">Task</option>
          <option value="datatype">Data Type</option>
          <option value="framework">Framework</option>
          <option value="publisher">Publisher</option>
          <option value="language">Language</option>
        </select>

        {/* Clear Button */}
        {selectedFilter && (
          <button
            onClick={clearFilter}
            className="btn bg-white btn-outline border hover:text-white hover:bg-red-500 btn-sm text-red-500 rounded-full"
          >
            ✕ Clear all
          </button>
        )}
      </div>

      <div className="my-5 flex flex-col gap-3">
        {models.map((model) => (
        <ModelCard key={model._id} model={model}></ModelCard>
      ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AllModels;
