import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  return (
    <div className="w-full bg-[#0f4a3f]">
      <div className="py-3 flex items-center justify-between w-full xl:w-[90vw] mx-auto px-4">
        <div>
          <NavLink to={"/"}>
            <img
              src="/assets/icons/logo.png"
              alt="logo"
              className="w-[200px] h-[50px]"
            />
          </NavLink>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4">
            <div className="flex text-[20px] text-white gap-4 items-center">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-emerald-600"
                  } active text-[14px] md:text-[1vw] font-semibold`
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-emerald-600"
                  } active text-[14px] md:text-[1vw] font-semibold`
                }
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-emerald-600"
                  } active text-[14px] md:text-[1vw] font-semibold`
                }
                to="/contact-us"
              >
                Contact Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-emerald-600"
                  } active text-[14px] md:text-[1vw] font-semibold`
                }
                to="/how-it-works"
              >
                How It Works
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-emerald-600"
                  } active text-[14px] md:text-[1vw] font-semibold`
                }
                to="/careers"
              >
                Careers
              </NavLink>
            </div>
          </div>
        </div>
        <div className="md:hidden relative">
          <button className="p-0" onClick={() => setToggleNav((prev) => !prev)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              color="white"
              className="h-[50px] w-[40px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "white" }}
            >
              <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
            </svg>
          </button>
          {toggleNav && (
            <div>
              <div className="absolute right-0 top-10 border-[#1b3b36] bg-white z-50 rounded-xl">
                <NavLink
                  onClick={() => setToggleNav((prev) => !prev)}
                  to="/"
                  target="_self"
                >
                  <div className="flex border-b-2 border-gray-300 items-center justify-start p-4  hover:text-white hover:bg-[#1b3b36] w-[320px] max-w-[320px] h-[60px] ">
                    <p className="mx-4">Home</p>
                  </div>
                </NavLink>

                <NavLink
                  onClick={() => setToggleNav((prev) => !prev)}
                  className=""
                  to="/careers"
                >
                  <div className="flex border-b-2 border-gray-300 items-center justify-start p-4  hover:text-white hover:bg-[#1b3b36] w-[320px] max-w-[320px] h-[60px] ">
                    <p className="mx-4">Careers</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => setToggleNav((prev) => !prev)}
                  className=""
                  to="/about"
                >
                  <div className="flex border-b-2 border-gray-300 items-center justify-start p-4  hover:text-white hover:bg-[#1b3b36] w-[320px] max-w-[320px] h-[60px] ">
                    <p className="mx-4">About Us</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => setToggleNav((prev) => !prev)}
                  className=""
                  to="/contact-us"
                >
                  <div className="flex border-b-2 border-gray-300 items-center justify-start p-4  hover:text-white hover:bg-[#1b3b36] w-[320px] max-w-[320px] h-[60px] ">
                    <p className="mx-4">Contact Us</p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => setToggleNav((prev) => !prev)}
                  className=""
                  to="/how-it-works"
                >
                  <div className="flex border-b-2 border-gray-300 items-center justify-start p-4  hover:text-white hover:bg-[#1b3b36] w-[320px] max-w-[320px] h-[60px] ">
                    <p className="mx-4">How it works</p>
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
