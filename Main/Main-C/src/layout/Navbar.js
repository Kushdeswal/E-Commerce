import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assists/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Navbar = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };

  return (
    <>
      <header className="flex fixed top-0 left-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b-0 border-indigo-600 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 ">
        <nav
          className="z-50 max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-around sm:px-8 lg:px-8 "
          aria-label="Global "
        >
          <div className="flex items-center justify-between ">
            <img src={logo} alt="Logo" height={70} width={135} />
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between ml-4">
            <div class=" relative mx-auto hidden sm:block text-gray-600">
              <input
                class="border-2 font-medium border-gray-300 text-gray-500 bg-gray-50 h-10 px-5 pr-[140px] rounded-full text-sm  focus:outline-none"
                type="search"
                name="search"
                placeholder="Search Shoes"
              />
              <button
                type="submit"
                class="absolute right-0 top-0 mt-5 mr-4"
              ></button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300  sm:block"
          >
            <div className="flex items-center justify-between ">
              <div>
                <button className="flex text-sm font-medium text-gray-500 items-center justify-between mr-4 pl-[13px] h-9 rounded-md w-[80px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ">
                  Explore
                </button>
              </div>

              <div className="flex items-center justify-evenly ">
                <button
                  type="button"
                  class=" flex items-center justify-around rounded-full text-gray-500 text-sm  ml-2  h-10 w-10
                  bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400
                  "
                >
                  <FavoriteBorderOutlinedIcon />
                </button>

                <button
                  type="button"
                  class=" flex rounded-full items-center justify-around text-gray-500  text-sm ml-3 h-10 w-10
                  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"
                >
                  <ShoppingCartOutlinedIcon />
                </button>

                <button
                  type="button"
                  class="flex items-center justify-around rounded-full text-gray-500 text-sm ml-3 h-10 w-10
                  bg-gradient-to-r from-red-200 via-red-300 to-red-400 "
                >
                  <AccountCircleOutlinedIcon />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
