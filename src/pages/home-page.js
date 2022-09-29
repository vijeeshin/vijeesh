import React from "react";

export const HomePage = () => {
  return (
    <div>
      <div className="w-full pattern pt-20 ">
        <div className="container mx-auto">
          <nav
            className="relative w-full flex flex-wrap items-center justify-start md:justify-between py-4 px-4 xl:px-0 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light  text-gray-500  hover:text-gray-700  focus:text-gray-700  
  "
          >
            <div className="w-full md:w-auto text-center md:text-left">
              <a className="font-semibold text-4xl mb-4 text-white font-prompt">
                Vigeesh Kumar
              </a>
            </div>
            <div className="w-full md:w-auto">
              <div className="container-fluid w-full flex flex-wrap items-center justify-between px-0 sm:px-6">
                <button
                  className="navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    className="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
                <div
                  className="collapse navbar-collapse flex-grow items-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li className="nav-item p-2">
                      <a
                        className="nav-link text-white font-rubik hover:text-gray-700 focus:text-gray-700 p-0"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item p-2">
                      <a
                        className="nav-link text-white font-rubik hover:text-gray-700 focus:text-gray-700 p-0"
                        href="#"
                      >
                        Technologics
                      </a>
                    </li>
                    <li className="nav-item p-2">
                      <a
                        className="nav-link text-white font-rubik hover:text-gray-700 focus:text-gray-700 p-0"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item p-2">
                      <a
                        className="nav-link text-white font-rubik hover:text-gray-700 focus:text-gray-700 p-0"
                        href="#"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <section>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="py-20 ">
                <img
                  src={require("../assets/images/profile-image.png")}
                  className={
                    "w-24 h-24 md:w-80 md:h-auto md:rounded-none rounded-full mx-auto shadow-sm"
                  }
                />
              </div>
              <div className="py-20">
                <div className="hero">
                  <span className="text-carmine-pink text-base leading-5 font-light uppercase inline-block relative pl-[50px] mb-10">
                    React, React Native, Backend Developer
                  </span>
                </div>
                <h1 className="font-bold text-7xl text-white uppercase inline-block relative">
                  Build your next idea with Me
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
