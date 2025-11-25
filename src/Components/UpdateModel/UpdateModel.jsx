import React, { useState, useEffect, use } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext.";

const UpdateModel = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const loadedModel = useLoaderData();

  const [formData, setFormData] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
    image: "",
  });

  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (loadedModel) {
      setFormData({
        name: loadedModel.name || "",
        framework: loadedModel.framework || "",
        useCase: loadedModel.useCase || "",
        dataset: loadedModel.dataset || "",
        description: loadedModel.description || "",
        image: loadedModel.image || "",
      });
    }
  }, [loadedModel]);

  useEffect(() => {
  if (!user || !loadedModel) return;

  if (user.email !== loadedModel.createdBy) {
    toast.error("You are not allowed to edit this model.");
    
    setTimeout(() => {
        navigate(-1);
      }, 1200);
  }
}, [user, loadedModel, navigate]);

  

  const handleChange = (e) => {
    const newForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(newForm);
    setHasChanged(
      JSON.stringify(newForm) !==
        JSON.stringify({
          name: loadedModel.name || "",
          framework: loadedModel.framework || "",
          useCase: loadedModel.useCase || "",
          dataset: loadedModel.dataset || "",
          description: loadedModel.description || "",
          image: loadedModel.image || "",
        })
    );
  };

  const isValid = Object.values(formData).every((item) => item.trim() !== "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (user.email !== loadedModel.createdBy) {
    toast.error("You are not allowed to edit this model.");
    setTimeout(() => {
        navigate(-1);
      }, 1200);
    
  }

    if (!isValid) {
      toast.error("Please fill all fields");
      return;
    }



    try {
      const res = await fetch(`https://ai-inventory-manager-server.vercel.app/models/${loadedModel._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update model");//change here

      toast.success("Model updated successfully!");
      setHasChanged(false);

      setTimeout(() => {
        navigate(`/models/${loadedModel._id}`);
      }, 1200);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update model");
    }
  };

  return (
    <div className="min-h-screen text-neutral-800 dark:text-neutral-200 flex flex-col">
  <div className="max-w-6xl mx-auto flex-1 w-full px-6 py-10">
    <header className="mb-8 border-b border-neutral-300 dark:border-neutral-600 pb-4 flex flex-col lg:flex-row items-center justify-between">
      <h1 className="text-3xl font-bold">Update AI Model</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Modify the details and update the model information
      </p>
    </header>

    <form onSubmit={handleUpdate} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Description Field */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="bg-white dark:bg-gray-800 border border-[#3366cc]/20 dark:border-[#3366cc]/40 rounded-xl shadow-sm h-full p-6 flex flex-col">
          <label className="text-lg font-semibold mb-3 dark:text-neutral-200">Description</label>
          <textarea
            name="description"
            rows="12"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a detailed description about the AI model..."
            className="flex-1 resize-none border-none focus:ring-2 focus:ring-[#3366cc]/50 rounded-lg p-3 bg-neutral-50 dark:bg-gray-700 text-neutral-700 dark:text-neutral-200 outline-none transition"
          />
          {formData.description && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-right">
              {formData.description.length} characters
            </p>
          )}
        </div>
      </div>

      {/* Other Fields */}
      <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
        {["name", "framework", "useCase", "dataset", "image"].map((field) => (
          <div
            key={field}
            className="bg-white dark:bg-gray-800 border border-[#3366cc]/20 dark:border-[#3366cc]/40 rounded-xl p-5 shadow-sm"
          >
            <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-200">
              {field === "name"
                ? "Model Name"
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "image" ? "url" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={
                field === "name"
                  ? "e.g., BERT"
                  : field === "framework"
                  ? "e.g., TensorFlow"
                  : field === "useCase"
                  ? "e.g., NLP"
                  : field === "dataset"
                  ? "e.g., ImageNet"
                  : "image url"
              }
              className="w-full border border-neutral-300 dark:border-neutral-600 focus:border-[#3366cc] focus:ring-2 focus:ring-[#3366cc]/40 rounded-lg px-3 py-2 outline-none transition bg-white dark:bg-gray-700 text-neutral-700 dark:text-neutral-200"
            />
            {field === "image" && formData.image && (
              <div className="mt-4">
                <img
                  src={formData.image}
                  alt="Model Preview"
                  className="rounded-lg border border-neutral-200 dark:border-neutral-600 shadow-sm max-h-56 object-contain mx-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </form>
  </div>

  {/* Footer Button */}
  <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-neutral-300 dark:border-neutral-600 backdrop-blur-sm py-3 px-6 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-end">
      <button
        onClick={handleUpdate}
        disabled={!hasChanged || !isValid}
        className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
          hasChanged && isValid
            ? "hover:bg-blue-900 bg-blue-700 active:scale-95"
            : "bg-blue-400 cursor-not-allowed"
        }`}
      >
        Update Model
      </button>
    </div>
  </div>

  <ToastContainer hideProgressBar />
    </div>

  );
};

export default UpdateModel;
