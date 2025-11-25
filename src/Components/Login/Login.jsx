import { GoogleAuthProvider } from "firebase/auth";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext.";
import { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const Login = () => {
  const {signInUser, googleSignIn, addUserOnDb} = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();
    setDisabled(true);
    const email = e.target.userEmail.value;
    const password = e.target.userPassword.value;
    

    signInUser(email, password)
    .then(result => {
      console.log(result);
      e.target.reset();
      navigate(location.state==='/add-model' ? '/add-model' : '/');
    })
    .catch(error => {
      console.log(error);
      toast.error('Invalid Email and Password');
    })

    .finally(() => setDisabled(false));
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      const newUser = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };

      addUserOnDb(newUser);
      navigate(location.state==='/add-model' ? '/add-model' : '/');
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <section className="relative py-20 container px-4 max-w-7xl mx-auto lg:py-10 overflow-hidden">
  <div className="flex justify-center items-center">
    <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
      <h3 className="font-heading text-3xl text-gray-900 dark:text-neutral-200 font-semibold mb-4">
        Login to AI Model Inventory Manager
      </h3>
      <p className="text-sm text-gray-500 dark:text-neutral-400 mb-10">
        Greetings on your return! We kindly request you to enter your details.
      </p>

      <div className="flex mb-6 justify-center items-center -mx-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full bg-white dark:bg-gray-700 py-3 px-4 text-black dark:text-white border-gray-400 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-400 rounded-full border transition duration-100"
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
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>

      <div className="flex mb-6 items-center">
        <div className="w-full h-px bg-gray-300 dark:bg-gray-600"></div>
        <span className="mx-4 text-sm font-semibold text-gray-500 dark:text-neutral-400">
          Or
        </span>
        <div className="w-full h-px bg-gray-300 dark:bg-gray-600"></div>
      </div>

      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label className="block mb-1.5 text-sm text-gray-900 dark:text-neutral-200 font-semibold">
            Email
          </label>
          <input
            className="w-full py-3 px-4 text-sm text-gray-900 dark:text-neutral-200 placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:outline-purple rounded-lg bg-white dark:bg-gray-700 transition"
            type="email"
            placeholder="Enter your Email"
            name="userEmail"
            required
          />
        </div>

        <div className="mb-7">
          <div className="flex mb-1.5 items-center justify-between">
            <label className="block text-sm text-gray-900 dark:text-neutral-200 font-semibold">
              Password
            </label>
            <a className="inline-block text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-gray-900 dark:hover:text-neutral-200">
              Forget password?
            </a>
          </div>

          <input
            className="w-full py-3 px-4 text-sm text-gray-900 dark:text-neutral-200 placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:outline-purple rounded-lg bg-white dark:bg-gray-700 transition"
            type="password"
            placeholder="Enter your password"
            name="userPassword"
            required
          />
        </div>

        <button
          className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-blue-700 rounded-full overflow-hidden"
          type="submit"
          disabled={disabled}
        >
          <div
            className={`${
              disabled ? "hidden" : ""
            } absolute top-0 right-full w-full h-full bg-blue-900 dark:bg-blue-800 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500`}
          ></div>

          <span className="relative z-10">{disabled ? "Loading..." : "Login"}</span>
        </button>

        <span className="text-xs text-center flex justify-center font-semibold text-gray-900 dark:text-neutral-200">
          <span>Don’t have an account?</span>
          <NavLink
            to={"/register"}
            className="ml-1 inline-block text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Register
          </NavLink>
        </span>
      </form>
    </div>
  </div>
  <ToastContainer hideProgressBar />
    </section>
  );
};

export default Login;
