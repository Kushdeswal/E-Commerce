import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";



const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1300 , min:1000 },
      items: 3,
      slidesToSlide: 1
      
    },
    desktop: {
      breakpoint: { max:1300, min:1000},
      items:3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max:800, min:400 },
      items:2,
      slidesToSlide: 1

    },
    mobile: {
      breakpoint: { max:800, min: 400},
      items:1,
      slidesToSlide: 1

    }
  };
  return (
    <div className=" sm:-mt-8 -mt-6 flex justify-center   ">
     <div className=" w-5/6  ">
        <div className=" rounded-3xl mt-12 shadow-2xl  ">
            <div className=" text-3xl font-semibold  text-purple-800 hover:text-purple-600 ml-4 ">
              <h1 className="pt-3">skywalkers</h1>
            </div>
            <div className="">
              <Carousel responsive={responsive} ssr={true}  autoPlay={true}  autoPlaySpeed={4000} >
              {/* card===1 */} 
              <div className="w-[300px] h-[450px] ml-4 lg:ml-7 mt-3 mb-4 bg-white  rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] shadow-lg hover:transform  hover:scale-105 hover:shadow-2xl transition delay-75">
                <div className="relative h-62 w-full mb-3 ">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-red-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      {" "}
                      <FavoriteBorderOutlinedIcon />{" "}
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                    alt="Just a flower"
                    className=" w-[400px] h-[220px] object-fill  rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm ml-2 flex items-center text-gray-600">
                      <StarIcon className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg ml-3 cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        Lorem ipsum
                      </h2>
                      <div className="flex items-center  text-white text-xs font-medium  px-2 py-1 mr-4  rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-black font-semibold mt-1 ml-3">
                    $240.00
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600 ">
                    <div className="flex-1 inline-flex items-center ml-2 mb-1">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-1">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3 bg-blue-600 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-yellow-400 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-red-500 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-green-500 rounded-full"></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-1">
                      <span className="text-secondary whitespace-nowrap mr-2 text-sm font-medium  ">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        <span className="hover:text-purple-500 p-1 py-0">
                          S
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          M
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          L
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start mb-4 ">
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium ml-2   md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                      <span>Add Cart</span>
                    </button>
                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center ">
                      <VisibilityOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
              {/* card===2 */}
              <div className="w-[300px] h-[450px] ml-4 bg-white mt-3 mb-4  rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] shadow-lg hover:transform  hover:scale-105 hover:shadow-2xl transition delay-75">
                <div className="relative h-62 w-full mb-3 ">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-red-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      {" "}
                      <FavoriteBorderOutlinedIcon />{" "}
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                    alt="Just a flower"
                    className=" w-[400px] h-[220px] object-fill  rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm ml-2 flex items-center text-gray-600">
                      <StarIcon className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg ml-3 cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        Lorem ipsum
                      </h2>
                      <div className="flex items-center  text-white text-xs font-medium  px-2 py-1 mr-4  rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-black font-semibold mt-1 ml-3">
                    $240.00
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center ml-2 mb-1">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-1">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3 bg-blue-600 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-yellow-400 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-red-500 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-green-500 rounded-full"></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-1">
                      <span className="text-secondary whitespace-nowrap mr-2 text-sm font-medium  ">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        <span className="hover:text-purple-500 p-1 py-0">
                          S
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          M
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          L
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start mb-4 ">
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium ml-2   md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                      <span>Add Cart</span>
                    </button>
                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center ">
                      <VisibilityOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
              {/* card===3 */}
              <div className="w-[300px] h-[450px] ml-2 bg-white mt-3 mb-4 rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] shadow-lg hover:transform  hover:scale-105 hover:shadow-2xl transition delay-75">
                <div className="relative h-62 w-full mb-3 ">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-red-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      {" "}
                      <FavoriteBorderOutlinedIcon />{" "}
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                    alt="Just a flower"
                    className=" w-[400px] h-[220px] object-fill  rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm ml-2 flex items-center text-gray-600">
                      <StarIcon className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg ml-3 cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        Lorem ipsum
                      </h2>
                      <div className="flex items-center  text-white text-xs font-medium  px-2 py-1 mr-4  rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-black font-semibold mt-1 ml-3">
                    $240.00
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center ml-2 mb-1">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-1">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3 bg-blue-600 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-yellow-400 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-red-500 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-green-500 rounded-full"></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-1">
                      <span className="text-secondary whitespace-nowrap mr-2 text-sm font-medium  ">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        <span className="hover:text-purple-500 p-1 py-0">
                          S
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          M
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          L
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm  font-medium justify-start mb-4">
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium ml-2   md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                      <span>Add Cart</span>
                    </button>
                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center ">
                      <VisibilityOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
              {/* card==4 */}
              <div className="w-[300px] h-[450px] ml-1 bg-white mt-3 mb-4 rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] shadow-lg hover:transform  hover:scale-105 hover:shadow-2xl transition delay-75">
                <div className="relative h-62 w-full mb-3 ">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-red-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      {" "}
                      <FavoriteBorderOutlinedIcon />{" "}
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                    alt="Just a flower"
                    className=" w-[400px] h-[220px] object-fill  rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm ml-2 flex items-center text-gray-600">
                      <StarIcon className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg ml-3 cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        Lorem ipsum
                      </h2>
                      <div className="flex items-center  text-white text-xs font-medium  px-2 py-1 mr-4  rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-black font-semibold mt-1 ml-3">
                    $240.00
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center ml-2 mb-1">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-1">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3 bg-blue-600 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-yellow-400 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-red-500 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-green-500 rounded-full"></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-1">
                      <span className="text-secondary whitespace-nowrap mr-2 text-sm font-medium  ">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        <span className="hover:text-purple-500 p-1 py-0">
                          S
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          M
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          L
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm  font-medium justify-start mb-4">
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium ml-2   md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                      <span>Add Cart</span>
                    </button>
                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center ">
                      <VisibilityOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
              {/* card--5 */}
              <div className="w-[300px] h-[450px] ml-1 bg-white mt-3 mb-4 rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] shadow-lg hover:transform  hover:scale-105 hover:shadow-2xl transition delay-75">
                <div className="relative h-62 w-full mb-3 ">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-red-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      {" "}
                      <FavoriteBorderOutlinedIcon />{" "}
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                    alt="Just a flower"
                    className=" w-[400px] h-[220px] object-fill  rounded-2xl"
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm ml-2 flex items-center text-gray-600">
                      <StarIcon className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg ml-3 cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        Lorem ipsum
                      </h2>
                      <div className="flex items-center  text-white text-xs font-medium  px-2 py-1 mr-4  rounded-lg bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-black font-semibold mt-1 ml-3">
                    $240.00
                  </div>
                  <div className="lg:flex  py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center ml-2 mb-1">
                      <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-1">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3 bg-blue-600 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-yellow-400 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-red-500 rounded-full"></span>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <span className="block w-3 h-3  bg-green-500 rounded-full"></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1 inline-flex items-center mb-1">
                      <span className="text-secondary whitespace-nowrap mr-2 text-sm font-medium  ">
                        Size
                      </span>
                      <div className="cursor-pointer text-gray-400 ">
                        <span className="hover:text-purple-500 p-1 py-0">
                          S
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          M
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          L
                        </span>
                        <span className="hover:text-purple-500 p-1 py-0">
                          XL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm  font-medium justify-start mb-4">
                    <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium ml-2   md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                      <span>Add Cart</span>
                    </button>
                    <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center ">
                      <VisibilityOutlinedIcon />
                    </button>
                  </div>
                </div>
              </div>
              </Carousel>
            </div>
            <div className="text-right text-xl  font-semibold pb-5 mr-8">
              <u > See All</u>
            </div>
          
        </div>
      </div>

    </div>
  );
};

export default Slider;
