import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../store/ContextApi";

const Navbar = () => {
  // handle the header opening and closing menu for the tablet/mobile device
  const [headerToggle, setHeaderToggle] = useState(false);
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  // Access the states by using the useMyContext hook from the ContextProvider
  const { token, setToken, setCurrentUser, isAdmin, setIsAdmin } =
    useMyContext();

  const handleLogout = () => {
    localStorage.removeItem("JWT_TOKEN"); // Updated to remove token from localStorage
    localStorage.removeItem("USER"); // Remove user details as well
    localStorage.removeItem("CSRF_TOKEN");
    localStorage.removeItem("IS_ADMIN");
    setToken(null);
    setCurrentUser(null);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <header className='h-headerHeight z-50 text-textColor bg-headerColor shadow-lg flex items-center sticky top-0'>
      <nav className='sm:px-10 px-4 flex w-full h-full items-center justify-between'>
        <Link to='/'>
          <h3 className='font-montserrat text-logoText text-3xl font-bold tracking-wide'>
            Secure Notes
          </h3>
        </Link>

        <ul
          className={`lg:static absolute left-0 top-16 w-full lg:w-fit lg:px-0 sm:px-10 px-4 lg:bg-transparent bg-headerColor ${
            headerToggle
              ? "min-h-fit max-h-navbarHeight lg:py-0 py-4 shadow-md shadow-slate-700 lg:shadow-none"
              : "h-0 overflow-hidden"
          } lg:h-auto transition-all duration-200 font-montserrat text-textColor flex lg:flex-row flex-col lg:gap-8 gap-4 items-center justify-center`}
        >
          {token && (
            <>
              <Link to='/notes'>
                <li
                  className={`${
                    pathName === "/notes" ? "font-semibold text-blue-500" : ""
                  } py-2 cursor-pointer hover:text-blue-300 transition-all duration-300`}
                >
                  My Notes
                </li>
              </Link>
              <Link to='/create-note'>
                <li
                  className={`${
                    pathName === "/create-note"
                      ? "font-semibold text-blue-500"
                      : ""
                  } py-2 cursor-pointer hover:text-blue-300 transition-all duration-300`}
                >
                  Create Note
                </li>
              </Link>
            </>
          )}

          <Link to='/contact'>
            <li
              className={`${
                pathName === "/contact" ? "font-semibold text-blue-500" : ""
              } py-2 cursor-pointer hover:text-blue-300 transition-all duration-300`}
            >
              Contact
            </li>
          </Link>

          <Link to='/about'>
            <li
              className={`${
                pathName === "/about" ? "font-semibold text-blue-500" : ""
              } py-2 cursor-pointer hover:text-blue-300 transition-all duration-300`}
            >
              About
            </li>
          </Link>

          {token ? (
            <>
              <Link to='/profile'>
                <li
                  className={`${
                    pathName === "/profile" ? "font-semibold text-blue-500" : ""
                  } py-2 cursor-pointer hover:text-blue-300 transition-all duration-300`}
                >
                  Profile
                </li>
              </Link>
              {isAdmin && (
                <Link to='/admin/users'>
                  <li
                    className={`${
                      pathName.startsWith("/admin")
                        ? "font-semibold text-blue-500"
                        : ""
                    } py-2 cursor-pointer uppercase hover:text-blue-300 transition-all duration-300`}
                  >
                    Admin
                  </li>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className='w-24 text-center bg-customRed text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-red-600 transition-all duration-300'
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to='/signup'>
              <li className='w-24 text-center bg-btnColor font-semibold px-4 py-2 rounded-sm cursor-pointer hover:text-slate-300'>
                SignUp
              </li>
            </Link>
          )}
        </ul>

        <span
          onClick={() => setHeaderToggle(!headerToggle)}
          className='lg:hidden block cursor-pointer text-textColor shadow-md hover:text-slate-400 transition-all duration-300'
        >
          {headerToggle ? (
            <RxCross2 className='text-2xl' />
          ) : (
            <IoMenu className='text-2xl' />
          )}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
