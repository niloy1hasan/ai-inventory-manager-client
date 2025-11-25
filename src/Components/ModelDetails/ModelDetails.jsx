import React, { useEffect, useState, use, useRef } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext.";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

export default function ModelDetails() {
  const model = useLoaderData();
  const { createdBy } = model;
  const { user } = use(AuthContext);
  const [purchased, setPurchased] = useState(model?.purchased || 0);
  const [isSticky, setIsSticky] = useState(false);
  const deleteModal = useRef(null);
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [creatorInfo, setCreatorInfo] = useState([]);

  useEffect(() => {
  if (!user?.email || !model?._id) return;

  fetch(`https://ai-inventory-manager-server.vercel.app/my-purchase/${user.email}`)
    .then(res => res.json())
    .then(data => {
      const alreadyBought = data.some(p => p.modelId === model._id);
      setIsPurchased(alreadyBought);
    });
}, [user?.email, model?._id]);


 useEffect(() => {
    if (!createdBy) return;

    const fetchCreator = async () => {
      try {
        const res = await fetch(
          `https://ai-inventory-manager-server.vercel.app/users/${createdBy}`
        );
        const data = await res.json();
        setCreatorInfo(data);
      } catch (err) {
        console.error("Failed to load creator info:", err);
      }
    };

    fetchCreator();
  }, [createdBy]);






  const handlePurchase = async () => {
  if (!user?.email) {
    alert("Please login first");
    return;
  }

  setLoadingPurchase(true);

  try {
    const res = await fetch(`https://ai-inventory-manager-server.vercel.app/purchase/${model._id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buyerEmail: user.email }),
    });

    const data = await res.json();

    if (data.modelId) {
      setPurchased(prev => prev + 1);
      setIsPurchased(true);
      toast.success("Purchased Successfully!");
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoadingPurchase(false);
  }
};


  const handleDelete = async() => {
  try {
    const res = await fetch(`https://ai-inventory-manager-server.vercel.app/models/${model._id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      console.log('delete');
    }
  } catch (err) {
    console.error(err);
  }
  finally{
    navigate('/models');
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

  const isCreator = user?.email === model.createdBy;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <div
        className={`transition-all duration-300 ${
          isSticky ? "fixed top-16 left-0 right-0 bg-white z-20 py-3" : ""
        }`}
      >
        <div
          className={`flex flex-wrap justify-between items-center gap-3 ${
            isSticky ? "max-w-6xl mx-auto px-6" : ""
          }`}
        >
          <div className="hidden md:flex items-center gap-3">
            {!isSticky ? (
              <>
                <img
                  src={creatorInfo?.photoURL || "../../assets/default-user.png"}
                  alt="profile"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {model.createdBy || user?.email || "Unknown"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(model.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </>
            ) : (
              <h1 className="text-4xl font-bold mb-2 text-gray-800">
                {model.name}
              </h1>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="flex gap-3">
              <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
                <FaCloudDownloadAlt />
 {purchased}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
                <FaEye /> {model.views || 0}
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-md flex items-center gap-1">
                <FaStar className="text-yellow-500" /> {model.rating || 0}
              </span>
            </div>

          {!isCreator &&  (isPurchased ? (
  <button className="btn btn-sm bg-gray-400 text-white" disabled>
    Purchased
  </button>
) : (
  <button
    onClick={handlePurchase}
    disabled={loadingPurchase}
    className="btn btn-sm btn-primary text-white"
  >
    {loadingPurchase ? "Processing..." : "Purchase"}
  </button>
))}


            {isCreator && (
              <>
                <NavLink to={`/update-model/${model._id}`}>
                <button className="btn btn-sm btn-warning">
                  Edit
                </button>
                </NavLink>
                <button onClick={()=> deleteModal.current?.showModal()} className="btn btn-sm btn-error">
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {isSticky && <div className="h-20"></div>}

      {/* Project Section */}
      <div
        id="project-section"
        className="flex flex-col justify-center md:justify-around md:flex-row gap-10"
      >
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
            src={model.image || "../../assets/default-user.png"}
            alt={model.name}
            className="w-[200px] rounded-lg object-cover mx-auto border"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="grid md:grid-cols-[80%_auto] gap-10 mt-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {model.description || "No description provided."}
          </p>
        </div>

        <div className="space-y-3 p-5">
          <p>
            <span className="font-semibold">Framework:</span> {model.framework}
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
<dialog ref={deleteModal} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Delete Model</h3>
    <p className="py-4">Do you want to delete this model?</p>
    <div className="modal-action">
      <form method="dialog" className="flex gap-2">
        <button className="btn">Close</button>
        <button onClick={handleDelete} className="btn text-white bg-red-500 hover:bg-red-700">Delete</button>
      </form>
    </div>
  </div>
</dialog>
<ToastContainer hideProgressBar></ToastContainer>
    </div>
  );
}
