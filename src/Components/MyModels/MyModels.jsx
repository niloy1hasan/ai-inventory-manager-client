import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModelCard from "../ModelCard/ModelCard";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Context/AuthContext.";


const MyModels = () => {
   const {user} = use(AuthContext);
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!user || !user.email) return;

     const fetchModels = async () => { 
      try {
          const res = await fetch(
            `https://ai-inventory-manager-server.vercel.app/my-models/${user.email}`
          );
          const data = await res.json();
          setModels(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchModels();
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
          {
            isLoading ? <div className="flex items-center justify-center h-[250px]">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div> : 
            (models.length === 0 ? (
            <p className="text-gray-500 text-lg">
              You haven’t created any models yet.
            </p>
          ) : (
            models.map((model) => (
              <ModelCard key={model._id} model={model} />
            ))
          ))
          }
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyModels;
