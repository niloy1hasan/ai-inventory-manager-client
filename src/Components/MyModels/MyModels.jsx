import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModelCard from "../ModelCard/ModelCard";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Context/AuthContext.";


const MyModels = () => {
   const {user} = use(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!user || !user.email) return;
    fetch(`http://localhost:3000/my-models/${user.email}`)
      .then(res => res.json())
      .then(data => setModels(data));
  }, [user]);

  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">My Models</h1>
          <p className="text-gray-600 max-w-2xl">
            All AI models I have created and published.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <NavLink to="/add-model">
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-800">
              + New Model
            </button>
          </NavLink>
        </div>

        <div className="my-5 flex flex-col gap-3">
          {models.length === 0 ? (
            <p className="text-gray-500 text-lg">
              You haven’t created any models yet.
            </p>
          ) : (
            models.map((model) => (
              <ModelCard key={model._id} model={model} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyModels;
