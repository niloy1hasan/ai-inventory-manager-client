import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router";
import ModelCard from "../ModelCard/ModelCard";
import Footer from "../Footer/Footer";

const FRAMEWORKS = [
  "TensorFlow",
  "PyTorch",
  "JAX",
  "Keras",
  "MXNet",
  "ONNX Runtime"
];

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [modelData, setModelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      const fetchModels = async () => {
        try {
          const res = await fetch(
            "https://ai-inventory-manager-server.vercel.app/models"
          );
          const data = await res.json();
          setModels(data);
          setModelData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchModels();
    }, []);

  const [isSearching, setIsSearching] = useState(false);

  const [selectedFrameworks, setSelectedFrameworks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const toggleFramework = (fw) => {
  setIsSearching(true);
  const current = selectedFrameworks;
  let updated;

  if (current.includes(fw)) {
    updated = current.filter((item) => item !== fw);
  } else {
    updated = [...current, fw];
  }

  setSelectedFrameworks(updated);
  setIsSearching(false);
};


  const clearAllFrameworks = () => {
    setSelectedFrameworks([]);
  };

  const removeSingleFramework = (fw) => {

    setSelectedFrameworks((prev) => prev.filter((item) => item !== fw));
  };

  const handleSearch = (e) => {
    setIsSearching(true);
    const search = e.target.value;
    setSearchText(search);

    if (!search.length) {
      setModels(modelData);
      setIsSearching(false);
      return;
    }

    fetch("https://ai-inventory-manager-server.vercel.app/search-models", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ search })
    })
      .then((res) => res.json())
      .then((data) => {
      setModels(data);
      setIsSearching(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    let filtered = modelData;

    if (searchText.length > 0) {
      filtered = models;
    }

    if (selectedFrameworks.length > 0) {
      filtered = filtered.filter((model) =>
        selectedFrameworks.includes(model.framework)
      );
    }

    setModels(filtered);

  }, [selectedFrameworks, searchText]);

  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Models</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover and use thousands of machine learning models, including the
            most popular diffusion models and LLMs.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <NavLink to={"/add-model"}>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-800">
              + New Model
            </button>
          </NavLink>
          <NavLink to={"/my-models"}>
            <button className="btn btn-outline">My Models</button>
          </NavLink>
        </div>

        <div className="mb-6 flex gap-2 px-5 items-center input input-bordered w-full rounded-full">
          <AiOutlineSearch size={"24px"} />
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search Models"
            className="outline-none text-[16px] border-none w-full"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">

          <div className="dropdown">
            <label tabIndex={0} className="btn">
              <span className="mr-1">⚙</span>Filter By Framework
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 w-60 rounded-box shadow p-2"
            >
              {FRAMEWORKS.map((fw) => (
                <li key={fw}>
                  <label className="label cursor-pointer text-black">
                    <input
                      type="checkbox"
                      checked={selectedFrameworks.includes(fw)}
                      onChange={() => toggleFramework(fw)}
                      className="checkbox checkbox-sm"
                    />
                    <span>{fw}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {selectedFrameworks.map((fw) => (
            <div
              key={fw}
              className="badge badge-primary bg-blue-600 border-0 py-3 px-4 cursor-pointer rounded-full flex items-center gap-2"
              onClick={() => removeSingleFramework(fw)}
            >
              {fw} ✕
            </div>
          ))}

          {selectedFrameworks.length > 0 && (
            <button
              onClick={clearAllFrameworks}
              className="btn btn-outline btn-sm rounded-full text-red-600 border-red-300 hover:bg-red-500 hover:text-white"
            >
              ✕ Clear All
            </button>
          )}

        </div>

        {(!isSearching && !isLoading) ? <div className="my-5 flex flex-col gap-3">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div> : <div className="flex items-center justify-center h-[250px]">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>}
      </div>

      <Footer />
    </>
  );
};

export default AllModels;
