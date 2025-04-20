import { useAuth } from "../../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import ShinyButton from "../../components/shiny-button";

export type Position = {
  width: number;
  left: number;
  opacity: number;
};

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [isHovered] = useState<boolean>(false);

  useEffect(() => {
    const blurElement = document.getElementById("bodyBlur");
    if (isHovered) {
      blurElement?.classList.add("blurred");
    } else {
      blurElement?.classList.remove("blurred");
    }

    return () => blurElement?.classList.remove("blurred");
  }, [isHovered]);

  return (
    <div className="">
      <div
        className={`nav-container z-50 py-10 md:flex hidden  min-h-[60px] max-w-[97%]  mx-auto transition-all duration-100  w-full ${
          isHovered ? "rounded-t-2xl" : "rounded-2xl"
        }`}
      >
        <ul className="flex w-full text-[14px] font-bold text-menu-items  items-center justify-evenly ">
          <li>
            <NavLink to="/">
              <img src="/assets/icons/logo-black.png" alt="logo" width={150} />
            </NavLink>
          </li>

          <div className="flex items-center bg-bg-navigation py-3 px-5 rounded-full header-navbar">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-button-gpt ${
                    isActive && "text-button-gpt"
                  }`
                }
              >
                <span>Home </span>
              </NavLink>
            </li>

            <li className="cursor-pointer  hidden md:block hover:text-button-gpt">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-button-gpt" : ""
                }
                to={"/contact-us"}
              >
                Contact
              </NavLink>
            </li>

            <li className="cursor-pointer  hidden md:block hover:text-button-gpt">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-button-gpt" : ""
                }
                to={"/how-it-works"}
              >
                How it works
              </NavLink>
            </li>

            {/* <li className="cursor-pointer  hidden md:block hover:text-button-gpt">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-button-gpt" : ""
                }
                to={"/consultation"}
              >
                Consultation
              </NavLink>
            </li> */}

            <li className="cursor-pointer  hidden lg:block hover:text-button-gpt">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-button-gpt" : ""
                }
                to={"/faqs"}
              >
                FAQs
              </NavLink>
            </li>

            <li className="cursor-pointer hidden md:block hover:text-button-gpt">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-button-gpt" : ""
                }
                to={"/careers"}
              >
                Careers
              </NavLink>
            </li>
            <li className="cursor-pointer  hover:text-button-gpt">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-button-gpt" : ""
                }
                to={"/about"}
              >
                About Us
              </NavLink>
            </li>
          </div>
          <div className="flex gap-3">
            {isAuthenticated ? (
              <ShinyButton
                hideIcon
                className="relative h-10 z-10 flex items-center overflow-hidden text-white  justify-center w-full px-4  bg-button-gpt hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full 
              rounded-full
      "
                // onClick={logout}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-button-gpt" : ""
                  }
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              </ShinyButton>
            ) : (
              <>
                <li className="relative z-50">
                  <Button
                    className="relative z-10 flex items-center overflow-hidden text-white  justify-center w-full px-4  bg-black hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full 
                    rounded-20
            "
                    to="/login"
                    as={NavLink}
                  >
                    <span className="z-10 font-bold">Log In</span>
                  </Button>
                </li>
                <li className="relative z-50">
                  <Button
                    className="relative z-10 flex items-center overflow-hidden text-black  justify-center w-full px-4 bg-white hover:bg-slate-100 border border-black transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full 
                    rounded-20            "
                    to="create-account"
                    as={NavLink}
                  >
                    <span className="z-10 font-bold">Sign Up</span>
                  </Button>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
