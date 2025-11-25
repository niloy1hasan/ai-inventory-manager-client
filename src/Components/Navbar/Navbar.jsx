import React, { use, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext.";

const Navbar = () => {
  const {user, setUser, logoutUser} = use(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkMode(true);
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
  }
}, []);

const handleToggle = () => {
  if (darkMode) {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
  setDarkMode(!darkMode);
};

  const logoutModal = useRef();

  const handleLogout = () => {
    logoutUser()
    .then(result => {
      console.log(result);
      setUser(null);
      navigate('/login');
    })
    .catch(error => {
      console.log(error);
    });
    logoutModal.current.close();
  }

      return (
    <>
      <nav className="bg-base-100 dark:bg-gray-900 sticky z-50 top-0 shadow-sm">
        <div className="navbar max-w-[1800px] mx-auto lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow"
            >
              <li ><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/add-model'}>Add Model</NavLink></li>
              <li><NavLink to={'/models'}>All Models</NavLink></li>
              {
              user && 
                <>
                <li><NavLink to={'/my-models'}>My Models</NavLink></li>
                <li><NavLink to={'/purchased-models'}>Purchased Models</NavLink></li>
                </>
            }
            </ul>
          </div>
          <NavLink to={'/'} className='select-none cursor-pointer'>
            <h1 class="flex items-baseline font-semibold">
              <span class="text-lg tracking-wide dark:text-gray-100 text-gray-800">
              AI
            </span>

            <span class="text-[16px] text-gray-500">
              Model
            </span>

            <span class="text-lg font-bold tracking-tight bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-600 to-blue-500">
              Verse
            </span>
</h1>
</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-medium"><NavLink to={'/'}>Home</NavLink></li>
            <li className="font-medium"><NavLink to={'/add-model'}>Add Model</NavLink></li>
            <li className="font-medium"><NavLink to={'/models'}>All Models</NavLink></li>
            {
              user && 
                <>
                <li className="font-medium"><NavLink to={'/my-models'}>My Models</NavLink></li>
                <li className="font-medium"><NavLink to={'/purchased-models'}>Purchased Models</NavLink></li>
                </>
            }
          </ul>
        </div>


        <div className="pr-3 lg:pr-0 navbar-end flex gap-3">

        <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" checked={darkMode} onChange={handleToggle} value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
          </label>
    
          {
            user ? 
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={user.photoURL ? user.photoURL : 'src/assets/default-user.png'} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 border rounded-box z-1 mt-3 w-auto p-2 shadow">
          <div className="flex items-center gap-1.5">
             <div className="w-8 h-8">
          <img
          className="rounded-full h-8 w-8"
            src={user.photoURL ? user.photoURL : 'src/assets/default-user.png'} />
        </div> 

        <div>
          <h2 className="font-semibold text-nowrap">{user.displayName}</h2>
          <p className="text-[12px] text-nowrap text-gray-400">{user.email}</p>
        </div>
          </div>
          <div className="h-px bg-zinc-200 my-2"></div>
        <li>
          <a>
            Profile
            </a>
        </li>
        <li><NavLink to={'/purchased-models'}>Model Purchase</NavLink></li>
        <li><NavLink to={'/models'}>Models</NavLink></li>
        <div className="h-px bg-zinc-200 my-0.5"></div>
        <li><a>Settings</a></li>
        <li><a onClick={()=>{logoutModal.current?.showModal()}}>Logout</a></li>
      </ul>
    </div> : <NavLink to={'/login'} className="btn rounded-full px-6 bg-blue-600 hover:bg-blue-800 text-white">Login</NavLink>
          }
          
        </div>
      </div>
      </nav>

<dialog ref={logoutModal}  className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Logout</h3>
    <p className="py-4">Do you want to logout?</p>
    <div className="modal-action">
      <form method="dialog" className="flex gap-1.5">
        <button className="btn">Close</button>
        <button type="button" onClick={handleLogout} className="btn bg-red-600 text-white hover:bg-red-700">Logout</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
};

export default Navbar;
