import React from "react";
import { FaBars } from "react-icons/fa";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 z-10   ">
        <div className="  container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="  w-full text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              CarEzy
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="FaBars">
                <FaBars icon={FaBars} className="w-10 h-10  p-2.5" />
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex  flex-col lg:flex-row w-full">
              <ul className="flex flex-col w-full lg:w-max lg:flex-row list-none lg:ml-auto">
                <li className="nav-item ">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Link 1</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Link 2</span>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col w-full lg:w-max lg:flex-row list-none lg:ml-auto">
                <li className="nav-item  px-2  ">
                  <div class="flex  ">
                    <button class="uppercase   w-full px-3 py-2 rounded-2xl  bg-indigo-300 hover:bg-indigo-600 focus:outline-none transform hover:translate-y-1 transition-all  text-white  duration-500 opacity-75 ">
                      signin
                    </button>
                  </div>
                </li>
                <li className="nav-item px-2  ">
                  <div class="flex ">
                    <button class="uppercase   w-full px-3 py-2  rounded-2xl text-white  bg-red-300 hover:bg-gray-600 focus:outline-none transform hover:translate-y-1 transition-all duration-500 opacity-75 ">
                      Login
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
