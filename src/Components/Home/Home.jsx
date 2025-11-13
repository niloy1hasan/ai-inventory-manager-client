import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>

    <section className="relative w-full h-[90vh] bg-gray-100 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        {/* ====== Slide 1 ====== */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Powering the Future with AI
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8 text-blue-100">
              Explore how artificial intelligence is transforming industries — from automation to innovation.
            </p>
            <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </SwiperSlide>

        {/* ====== Slide 2 ====== */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Smarter Systems, Brighter Tomorrow
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8 text-blue-100">
              AI models are reshaping technology, improving efficiency, and enabling groundbreaking solutions.
            </p>
            <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        {/* ====== Slide 3 ====== */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Empower Innovation with Machine Learning
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8 text-blue-100">
              Build smarter products and elevate experiences through intelligent automation and data insights.
            </p>
            <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg">
              Discover More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Decorative blur background circle */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"></div>
    </section>
     
     
     
    <section className="relative bg-white text-gray-800 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          About AI Models
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          AI models are systems trained to recognize patterns, make predictions,
          and generate intelligent outputs from data. At their core, they rely on
          <span className="text-blue-800 font-semibold"> neural networks</span> —
          computational structures inspired by the human brain — that process
          information and learn from experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Natural Language
            </h3>
            <p className="text-gray-700">
              Models like GPT understand and generate human-like text, powering
              chatbots, assistants, and translators.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Vision & Recognition
            </h3>
            <p className="text-gray-700">
              AI in vision identifies objects, detects emotions, and powers
              technologies like facial recognition and autonomous vehicles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Decision Making
            </h3>
            <p className="text-gray-700">
              Machine learning models analyze data, detect patterns, and help
              organizations make informed, data-driven decisions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Speech Recognition
            </h3>
            <p className="text-gray-700">
              Voice-driven AI enables speech-to-text systems, voice assistants,
              and real-time translation tools.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Predictive Analytics
            </h3>
            <p className="text-gray-700">
              Predictive AI models forecast trends, anticipate needs, and
              optimize performance across industries.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Robotics & Automation
            </h3>
            <p className="text-gray-700">
              AI-driven robots and automation systems perform complex, repetitive
              tasks with precision and adaptability.
            </p>
          </div>
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
          <div className="relative isolate overflow-hidden bg-blue-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manage, Organize, and Explore Your AI Models Efficiently
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-200">
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
                Already have an account?{" "}
                <span className="underline">Log In</span>
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
      <Footer></Footer>
    </>
  );
};

export default Home;
