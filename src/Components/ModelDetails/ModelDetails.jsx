import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";

export default function ModelDetails() {
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const [currentUser, setCurrentUser] = useState("user@example.com");
  const [purchased, setPurchased] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fakeModel = {
      _id: id,
      name: "BERT",
      framework: "TensorFlow",
      useCase: "NLP",
      dataset: "Wikipedia",
      description:
        "BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based model designed for understanding the context of words in text. It’s used for NLP tasks such as question answering, sentiment analysis, and text classification.",
      image: "https://i.ibb.co/6nVv7cP/sample-bert.png",
      createdBy: "user@example.com",
      createdAt: "2025-10-28T11:54:00.000Z",
      purchased: 3,
      profilePic: "https://i.pravatar.cc/100?img=12",
      views: 120,
      rating: 4.7,
    };
    setModel(fakeModel);
    setPurchased(fakeModel.purchased);
  }, [id]);

  const handlePurchase = () => setPurchased((prev) => prev + 1);
  const handleEdit = () => alert("Edit model functionality coming soon!");
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this model?")) {
      alert("Model deleted successfully!");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project-section");
      if (!projectSection) return;
      const sectionTop = projectSection.getBoundingClientRect().top;
      setIsSticky(sectionTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!model) return <div className="p-10 text-center">Loading...</div>;
  const isCreator = currentUser === model.createdBy;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div
        className={`transition-all duration-300 ${
          isSticky
            ? "fixed top-16 left-0 right-0 bg-white z-20 py-3"
            : ""
        }`}
      >
        <div
          className={`flex flex-wrap justify-between items-center gap-3 ${
            isSticky ? "max-w-6xl mx-auto px-6" : ""
          }`}
        >
          <div className="hidden md:flex items-center gap-3">
           {!isSticky ? (
            <><img
                src={model.profilePic}
                alt="profile"
                className="w-10 h-10 rounded-full border" /><div>
                  <p className="font-semibold text-gray-800">{model.createdBy}</p>

                  <p className="text-xs text-gray-500">
                    {new Date(model.createdAt).toLocaleDateString()}
                  </p>
                </div></>
            ): <>
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
            {model.name}
          </h1>
            </>}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="flex gap-3">
              <span className="bg-gray-100 px-3 py-1 rounded-md">
              💰 {purchased}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
              <FaEye /> {model.views}
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
              <FaStar className="text-yellow-500" /> {model.rating}
            </span>
            </div>

            <button
              onClick={handlePurchase}
              className="btn btn-sm btn-primary text-white"
            >
              Purchase
            </button>

            {isCreator && (
              <>
                <button onClick={handleEdit} className="btn btn-sm btn-warning">
                  Update
                </button>
                <button onClick={handleDelete} className="btn btn-sm btn-error">
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Spacer to prevent layout shift when sticky */}
      {isSticky && <div className="h-20"></div>}

      {/* Project Section */}
      <div id="project-section" className="flex flex-col justify-center md:justify-around md:flex-row gap-10">
        <div className="flex flex-col justify-center ">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">
            {model.name}
          </h1>
          <p className="text-gray-600 text-lg">
            A model built with <strong>{model.framework}</strong> for{" "}
            <strong>{model.useCase}</strong> tasks.
          </p>
        </div>
        <div>
          <img
            src={model.image}
            alt={model.name}
            className="w-[200px] rounded-lg object-cover mx-auto border"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-[80%_auto] gap-10 mt-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {model.description}
          </p>
        </div>

        {/* Right: Metadata */}
        <div className="space-y-3 p-5">
          <p>
            <span className="font-semibold">Framework:</span>{" "}
            {model.framework}
          </p>
          <p>
            <span className="font-semibold">Dataset:</span> {model.dataset}
          </p>
          <p>
            <span className="font-semibold">Use Case:</span> {model.useCase}
          </p>
          <p className="text-sm text-gray-500">
            Created on {new Date(model.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
