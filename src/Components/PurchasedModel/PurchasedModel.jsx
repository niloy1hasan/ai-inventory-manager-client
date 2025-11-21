import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModelCard from "../ModelCard/ModelCard";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Context/AuthContext.";

const PurchasedModel = () => {
  const { user } = use(AuthContext);
  const [models, setModels] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-purchase/${user.email}`)
      .then(res => res.json())
      .then(data => setModels(data));
  }, [user?.email]);

  console.log(models);

  return (
    <>
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Purchased Models</h1>
          <p className="text-gray-600 max-w-2xl">
            All AI models you have purchased and now have access to.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <NavLink to="/models">
            <button className="btn btn-primary bg-blue-600 outline-none border-none hover:bg-blue-800">
              Browse More Models
            </button>
          </NavLink>
        </div>

        <div className="my-5 flex flex-col gap-3">
          {models.length === 0 ? (
            <p className="text-gray-500 text-lg">
              have not purchased any models yet.
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

export default PurchasedModel;
