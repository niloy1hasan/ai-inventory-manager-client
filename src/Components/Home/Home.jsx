import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router";
import ModelCard from "../ModelCard/ModelCard";

const Home = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await fetch(
          "https://ai-inventory-manager-server.vercel.app/models"
        );
        const data = await res.json();
        setModels(data.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };

    fetchModels();
  }, []);

  return (
    <>
      <section className="relative w-full h-[90vh] bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Welcome to AI Model Verse
              </h1>
              <p className="max-w-2xl text-lg md:text-xl mb-8 text-blue-100">
                A smart platform to add, manage, and organize your AI models — all in one place.
              </p>
              <NavLink
                to={"/login"}
                className="bg-white dark:bg-gray-800 text-blue-800 dark:text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              >
                Get Started
              </NavLink>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Explore Models Across AI Model Verse
              </h1>
              <p className="max-w-2xl text-lg md:text-xl mb-8 text-blue-100">
                Browse models shared by the community and discover new frameworks, datasets, and use-cases.
              </p>
              <NavLink
                to={"/models"}
                className="bg-white dark:bg-gray-800 text-blue-800 dark:text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              >
                Browse Models
              </NavLink>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                Build Your Personal AI Model Collection
              </h1>
              <p className="max-w-2xl text-lg md:text-xl mb-8 text-blue-100">
                Store and manage your AI models with metadata like framework, dataset, performance, and more.
              </p>
              <NavLink
                to={"/add-model"}
                className="bg-white dark:bg-gray-800 text-blue-800 dark:text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
              >
                Add Model
              </NavLink>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"></div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Latest AI Models
          </h2>
        </div>

        {/* Models Grid */}
        <div className="flex flex-col gap-3">
          {models.length ? (
            models.map((model) => <ModelCard key={model._id} model={model} />)
          ) : (
            <div className="flex items-center justify-center h-[250px]">
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200 dark:border-gray-700"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
              </div>
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="mt-8 flex justify-center">
          <NavLink
            to="/models"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            View More
          </NavLink>
        </div>
      </section>

      <section className="relative bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 dark:bg-blue-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            About AI Models
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            AI models are systems trained to recognize patterns, make predictions,
            and generate intelligent outputs from data. At their core, they rely on
            <span className="text-blue-800 dark:text-blue-400 font-semibold">
              {" "}
              neural networks
            </span>{" "}
            — computational structures inspired by the human brain — that process
            information and learn from experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Natural Language", desc: "Models like GPT understand and generate human-like text, powering chatbots, assistants, and translators." },
              { title: "Vision & Recognition", desc: "AI in vision identifies objects, detects emotions, and powers technologies like facial recognition and autonomous vehicles." },
              { title: "Decision Making", desc: "Machine learning models analyze data, detect patterns, and help organizations make informed, data-driven decisions." },
              { title: "Speech Recognition", desc: "Voice-driven AI enables speech-to-text systems, voice assistants, and real-time translation tools." },
              { title: "Predictive Analytics", desc: "Predictive AI models forecast trends, anticipate needs, and optimize performance across industries." },
              { title: "Robotics & Automation", desc: "AI-driven robots and automation systems perform complex, repetitive tasks with precision and adaptability." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-1000"
              >
                <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="my-10 mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-[1400px] lg:w-11/12 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-blue-800 dark:bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manage, Organize, and Explore Your AI Models Efficiently
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-200 dark:text-gray-300">
              Build your personal AI Model Inventory Manager today. Add, edit,
              and track your models effortlessly — from frameworks to datasets —
              all in one place. Start organizing smarter!
            </p>

            <div className="mt-10 flex flex-col lg:flex-row gap-6 items-center justify-center lg:gap-x-6">
              <a
                href="/register"
                className="rounded-md bg-green-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get Started Now
              </a>
              <a
                href="/login"
                className="text-lg font-semibold text-white hover:text-gray-300"
              >
                Already have an account? <span className="underline">Log In</span>
              </a>
            </div>

            {/* Background Gradient Circle */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#gradient-bg)"
                fillOpacity="0.7"
              ></circle>
              <defs>
                <radialGradient
                  id="gradient-bg"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
