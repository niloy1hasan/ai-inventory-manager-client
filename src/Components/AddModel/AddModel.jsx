import React, { useState, use } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext.";

const AddModel = () => {
  const { user } = use(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setFormData({ ...formData, [name]: value });
};


  const isValid = Object.values(formData).every((item) => item.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      toast.error("Please fill all fields");
      return;
    }

    if (!user || !user.email) {
      toast.error("something is wrong");
      return;
    }

    const newModel = {
      ...formData,
      createdBy: user.email,
      createdAt: new Date(),
      purchased: 0,
      view: 0,
    };

    fetch("https://ai-inventory-manager-server.vercel.app/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newModel),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("AI Model added successfully!");
        setFormData({
      name: "",
      framework: "",
      useCase: "",
      dataset: "",
      description: "",
      image: "",
    });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add model");
      })
      .finally(()=>{
        setTimeout(() => {
          navigate("/models");
        }, 1000);
      })
      
  };

  return (
    <div className="min-h-screen text-neutral-800 flex flex-col">
      <div className="max-w-6xl mx-auto flex-1 w-full px-6 py-10">
        <header className="mb-8 border-b border-neutral-300 pb-4 flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">Add New AI Model</h1>
          <p className="text-sm text-neutral-500">
            Fill all fields to register a new model
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white border border-[#3366cc]/20 rounded-xl shadow-sm h-full p-6 flex flex-col">
              <label className="text-lg font-semibold mb-3">Description</label>
              <textarea
                name="description"
                rows="12"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a detailed description about the AI model..."
                className="flex-1 resize-none border-none focus:ring-2 focus:ring-[#3366cc]/50 rounded-lg p-3 bg-neutral-50 text-neutral-700 outline-none transition"
              />
              {formData.description && (
                <p className="text-xs text-neutral-500 mt-2 text-right">
                  {formData.description.length} characters
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">

            <div className="bg-white border border-[#3366cc]/20 rounded-xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-2 text-neutral-700">
                Model Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., BERT"
                className="w-full border border-neutral-300 focus:border-[#3366cc] focus:ring-2 focus:ring-[#3366cc]/40 rounded-lg px-3 py-2 outline-none transition"
              />
            </div>

            <div className="bg-white border border-[#3366cc]/20 rounded-xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-2 text-neutral-700">
                Framework
              </label>

              <select
                name="framework"
                value={formData.framework}
                onChange={handleChange}
                className="w-full border border-neutral-300 focus:border-[#3366cc] focus:ring-2 focus:ring-[#3366cc]/40 rounded-lg px-3 py-2 outline-none transition bg-white"
              >
                <option value="">Select Framework</option>
                <option value="TensorFlow">TensorFlow</option>
                <option value="PyTorch">PyTorch</option>
                <option value="Keras">Keras</option>
                <option value="Scikit-learn">Scikit-learn</option>
                <option value="JAX">JAX</option>
              </select>
            </div>


            <div className="bg-white border border-[#3366cc]/20 rounded-xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-2 text-neutral-700">
                UseCase
              </label>
              <input
                type="text"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                placeholder="e.g., NLP"
                className="w-full border border-neutral-300 focus:border-[#3366cc] focus:ring-2 focus:ring-[#3366cc]/40 rounded-lg px-3 py-2 outline-none transition"
              />
            </div>

            <div className="bg-white border border-[#3366cc]/20 rounded-xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-2 text-neutral-700">
                Dataset
              </label>

              <select
                name="dataset"
                value={formData.dataset}
                onChange={handleChange}
                className="w-full border border-neutral-300 focus:border-[#3366cc] focus:ring-2 focus:ring-[#3366cc]/40 rounded-lg px-3 py-2 outline-none transition bg-white"
              >
                <option value="">Select Dataset</option>
                <option value="ImageNet">ImageNet</option>
                <option value="COCO">COCO</option>
                <option value="MNIST">MNIST</option>
                <option value="CIFAR-10">CIFAR-10</option>
                <option value="Wikipedia">Wikipedia</option>
              </select>
            </div>


            <div className="bg-white border border-[#3366cc]/20 rounded-xl p-5 shadow-sm">
              <label className="block text-sm font-semibold mb-2 text-neutral-700">
                Image
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="image url"
                className="w-full border border-neutral-300 focus:border-[#3366cc] focus:ring-2 focus:ring-[#3366cc]/40 rounded-lg px-3 py-2 outline-none transition"
              />

              {formData.image && (
                <div className="mt-4">
                  <img
                    src={formData.image}
                    alt="Model Preview"
                    className="rounded-lg border border-neutral-200 shadow-sm max-h-56 object-contain mx-auto"
                  />
                </div>
              )}
            </div>
          </div>

        </form>
      </div>

      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-neutral-300 backdrop-blur-sm py-3 px-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
              isValid
                ? "hover:bg-blue-900 bg-blue-700 active:scale-95"
                : "bg-blue-400 cursor-not-allowed"
            }`}
          >
            Add Model
          </button>
        </div>
      </div>

      <ToastContainer hideProgressBar></ToastContainer>
    </div>
  );
};

export default AddModel;
