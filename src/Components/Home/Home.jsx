import React from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
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
