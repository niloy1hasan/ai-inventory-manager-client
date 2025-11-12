import React, { use, useRef } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext.";

const Navbar = () => {
  const {user, setUser, logoutUser} = use(AuthContext);
  const navigate = useNavigate();

  console.log(user);

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
      <nav className="bg-base-100 shadow-sm">
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
              <li><a>Home</a></li>
              <li><a>Add Model</a></li>
              <li><a>View Models</a></li>
            </ul>
          </div>
          <a className="text-sm">AI Model Inventory Manager</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><a href="">Add Model</a></li>
            <li><a>View Models</a></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
    
          {
            user ? 
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user.displayName}
            src={user.photoURL ? user.photoURL : 'src/assets/default-user.png'} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 border rounded-box z-1 mt-3 w-auto p-2 shadow">
          <div className="flex items-center gap-1.5">
             <div className="w-8 h-8">
          <img
          className="rounded-full"
            alt={user.displayName}
            src={user.photoURL ? user.photoURL : 'src/assets/default-user.png'} />
        </div> 

        <div>
          <h2 className="font-semibold">{user.displayName}</h2>
          <p className="text-[12px] text-gray-400">{user.email}</p>
        </div>
          </div>
          <div className="h-px bg-zinc-200 my-2"></div>
        <li>
          <a>
            Profile
            </a>
        </li>
        <li><a>Model Purchase</a></li>
        <li><a>Models</a></li>
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
