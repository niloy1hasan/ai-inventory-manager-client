import React, { use, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext.";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, googleSignIn, addUserOnDb, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();


  const handleRegister = (e) => {
    e.preventDefault();
    setDisabled(true);

    const name = e.target.userName.value;
    const email = e.target.userEmail.value;
    const url = e.target.userImgURL.value;
    const password = e.target.userPassword.value;
    const acceptTerms = e.target.termConditions.checked;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!acceptTerms) {
      toast.warn("Please accept our terms and conditions");
      return;
    }

    if (!passwordPattern.test(password)) {
      toast.error("Password is invalid");
      return;
    }

    fetch(`https://ai-inventory-manager-server.vercel.app/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          toast.error("User already exists");
          return;
        }

        createUser(email, password)
          .then((result) => {
            e.target.reset();

            const profile = {
              displayName: name,
              photoURL: url,
            };

            const newUser = {
              email,
              name,
              photoURL: url,
            };

            addUserOnDb(newUser);

            updateProfile(result.user, profile)
              .then(() => {})
              .catch((error) => console.log(error));


              setUser({ email: email, displayName: name, photoURL: url });

            navigate(location.state==='/add-model' ? '/add-model' : '/');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => console.log(err))
      .finally(() => setDisabled(false));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };

        addUserOnDb(newUser);
        console.log(result);
        navigate(location.state==='/add-model' ? '/add-model' : '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

          <div className="flex mb-6 justify-center items-center -mx-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full bg-white py-3 px-4 text-black border-gray-400 hover:border-gray-800 rounded-full border  transition duration-100"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Sign in with Google
            </button>
          </div>

          <div className="flex mb-6 items-center">
            <div className="w-full h-px bg-gray-300"></div>
            <span className="mx-4 text-sm font-semibold text-gray-500">Or</span>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                Name
              </label>
              <input
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                type="text"
                placeholder="Enter your Name"
                name="userName"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                Email
              </label>
              <input
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                type="email"
                placeholder="Enter your Email"
                name="userEmail"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1.5 text-sm text-gray-900 font-semibold">
                Photo URL
              </label>
              <input
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                type="url"
                placeholder="Enter your Photo URL"
                name="userImgURL"
                required
              />
            </div>

            <div className="mb-7">
              <div className="flex mb-1.5 items-center justify-between">
                <label className="block text-sm text-gray-900 font-semibold">
                  Password
                </label>
              </div>
              <input
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex mb-6 items-center">
              <input type="checkbox" id="remember" name="termConditions" />
              <label className="ml-2 text-xs text-gray-800" htmlFor="remember">
                Accept our <a className="underline">Terms and Conditions</a>
              </label>
            </div>

            <button
              className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-blue-700 rounded-full overflow-hidden"
              type="submit"
              disabled={disabled}
            >
              <div
                className={`${
                  disabled ? "hidden" : ""
                } absolute top-0 right-full w-full h-full bg-blue-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500`}
              ></div>

              <span className="relative z-10">
                {disabled ? "Loading..." : "Register"}
              </span>
            </button>

            <span className="text-xs text-center flex justify-center font-semibold text-gray-900">
              <span>Already have an account?</span>
              <NavLink
                to={"/login"}
                className="ml-1 inline-block text-blue-900 hover:text-blue-700"
                href="#"
              >
                Login
              </NavLink>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer hideProgressBar></ToastContainer>
    </section>
  );
};

export default Register;
