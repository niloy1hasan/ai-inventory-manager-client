import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <section className="relative py-20 container px-4 max-w-7xl mx-auto lg:py-10 overflow-hidden">
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                <h3 className="font-heading text-3xl text-gray-900 font-semibold mb-4">
                  Register for AI Model Inventory Manager
                </h3>
                <p className="text-sm text-gray-500 mb-10">
                  Greetings on your return! We kindly request you to enter your
                  details.
                </p>

                {/* Social Login Buttons */}
                
                <div className="flex mb-6 justify-center items-center -mx-2">
                    <button className="btn w-full bg-white py-3 px-4 text-black border-gray-400 hover:border-gray-800 rounded-full border  transition duration-100"><svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Register with Google
                </button>
                </div>

                {/* Divider */}
                <div className="flex mb-6 items-center">
                  <div className="w-full h-px bg-gray-300"></div>
                  <span className="mx-4 text-sm font-semibold text-gray-500">
                    Or
                  </span>
                  <div className="w-full h-px bg-gray-300"></div>
                </div>

                {/* Register Form */}
                <form>

                  <div className="mb-6">
                    <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                      Name
                    </label>
                    <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text"
                        placeholder="Enter your Name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                      Email
                    </label>
                    <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                        Photo URL
                    </label>
                    <input className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="url"
                      placeholder="Enter your Photo URL"
                    />
                  </div>

                  <div className="mb-7">
                    <div className="flex mb-1.5 items-center justify-between">
                      <label className="block text-sm text-gray-900 font-semibold">
                        Password
                      </label>
                      
                    </div>
                    <div className="relative">
                      <input
                        className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="password"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                      >
                        <img
                          src="saturn-assets/images/sign-up/icon-eye.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex mb-6 items-center">
                    <input type="checkbox" id="remember" />
                    <label
                      className="ml-2 text-xs text-gray-800"
                      htmlFor="remember"
                    >
                     Accept our <a className='underline'>Terms and Conditions</a>
                    </label>
                  </div>

                  <button
                    className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-blue-700 rounded-full overflow-hidden"
                    type="submit"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-blue-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Register</span>
                  </button>

                  <span className="text-xs text-center flex justify-center font-semibold text-gray-900">
                    <span>Already have an account?</span>
                    <NavLink to={'/login'}
                      className="ml-1 inline-block text-blue-900 hover:text-blue-700"
                      href="#"
                    >
                      Login
                    </NavLink>
                  </span>
                </form>
            </div>
          </div>
    </section>
    );
};

export default Register;