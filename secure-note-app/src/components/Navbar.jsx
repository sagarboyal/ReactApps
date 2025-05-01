import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../store/ContextApi";

const Navbar = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  const { token, setToken, setCurrentUser, isAdmin, setIsAdmin } =
    useMyContext();

  const handleLogout = () => {
    localStorage.removeItem("JWT_TOKEN");
    localStorage.removeItem("USER");
    localStorage.removeItem("CSRF_TOKEN");
    localStorage.removeItem("IS_ADMIN");
    setToken(null);
    setCurrentUser(null);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md text-gray-800'>
      <nav className='flex items-center justify-between h-[74px] px-4 sm:px-8 lg:px-12'>
        {/* Logo */}
        <Link to='/'>
          <h3 className='text-2xl font-bold text-blue-600'>Secure Notes</h3>
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setHeaderToggle(!headerToggle)}
          className='lg:hidden text-2xl focus:outline-none'
        >
          {headerToggle ? <RxCross2 /> : <IoMenu />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            headerToggle ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center absolute lg:static top-[74px] left-0 w-full lg:w-auto bg-white lg:bg-transparent gap-4 lg:gap-6 py-6 lg:py-0 px-6 lg:px-0 shadow-md lg:shadow-none transition-all duration-300`}
        >
          {token && (
            <>
              <Link to='/notes'>
                <li
                  className={`${
                    pathName === "/notes" ? "text-blue-500 font-semibold" : ""
                  } hover:text-blue-400 transition duration-200`}
                >
                  My Notes
                </li>
              </Link>
              <Link to='/create-note'>
                <li
                  className={`${
                    pathName === "/create-note"
                      ? "text-blue-500 font-semibold"
                      : ""
                  } hover:text-blue-400 transition duration-200`}
                >
                  Create Note
                </li>
              </Link>
            </>
          )}

          <Link to='/contact'>
            <li
              className={`${
                pathName === "/contact" ? "text-blue-500 font-semibold" : ""
              } hover:text-blue-400 transition duration-200`}
            >
              Contact
            </li>
          </Link>

          <Link to='/about'>
            <li
              className={`${
                pathName === "/about" ? "text-blue-500 font-semibold" : ""
              } hover:text-blue-400 transition duration-200`}
            >
              About
            </li>
          </Link>

          {token ? (
            <>
              <Link to='/profile'>
                <li
                  className={`${
                    pathName === "/profile" ? "text-blue-500 font-semibold" : ""
                  } hover:text-blue-400 transition duration-200`}
                >
                  Profile
                </li>
              </Link>
              {isAdmin && (
                <Link to='/admin/users'>
                  <li
                    className={`${
                      pathName.startsWith("/admin")
                        ? "text-blue-500 font-semibold"
                        : ""
                    } uppercase hover:text-blue-400 transition duration-200`}
                  >
                    Admin
                  </li>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className='mt-2 lg:mt-0 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md transition duration-300'
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to='/signup'>
              <li className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition duration-300'>
                Sign Up
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
