import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar lg:px-10">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3"
          >
            <NavLink to="/" className={({ isActive }) => `text-gray-700 font-medium ${isActive ? "text-textColor font-extrabold" : "hover:text-textColor"}`}>
              Home
            </NavLink>

            <NavLink to="/statistics" className={({ isActive }) => `text-gray-700 font-medium ${isActive ? "text-textColor font-extrabold" : "hover:text-textColor"}`}>
              Statistics
            </NavLink>

            <NavLink to="/dashboard" className={({ isActive }) => `text-gray-700 font-medium ${isActive ? "text-textColor font-extrabold" : "hover:text-textColor"}`}>
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-10 rounded-lg hidden md:block" src="/assets/banner.jpg" alt="Logo" />
        <Link to={'/'} className="btn btn-ghost md:text-2xl text-xl font-bold">Gadget Heaven</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8">
          <NavLink to="/" className={({ isActive }) => `text-gray-700 font-medium ${isActive ? "text-textColor font-extrabold" : "hover:text-textColor"}`}>
            Home
          </NavLink>

          <NavLink to="/statistics" className={({ isActive }) => `text-gray-700 font-medium ${isActive ? "text-textColor font-extrabold" : "hover:text-textColor"}`}>
            Statistics
          </NavLink>

          <NavLink to="/dashboard" className={({ isActive }) => `text-gray-700 font-medium ${isActive ? "text-textColor font-extrabold" : "hover:text-textColor"}`}>
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
       <Link className="border border-gray-200 bg-white rounded-full p-3 text-lg"><BsCart3 /></Link>
       <Link className="border border-gray-200 bg-white rounded-full p-3 text-lg"><FiHeart /></Link>
      </div>
    </div>
  );
};

export default Navbar;