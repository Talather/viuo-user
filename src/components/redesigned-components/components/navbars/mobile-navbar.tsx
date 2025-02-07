import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { useAuth } from "../../../../hooks/useAuth";
import ShinyButton from "../shiny-button";

const MobileNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const blurElement = document.getElementById("bodyBlur");

    if (!blurElement) return;

    if (isOpen) {
      blurElement.classList.add("blurred", "overflow-hidden");
    } else {
      blurElement.classList.remove("blurred", "overflow-hidden");
    }

    return () => {
      blurElement.classList.remove("blurred", "overflow-hidden");
    };
  }, [isOpen]);

  const containerVariants = {
    closed: {
      height: 48,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "90vh",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      y: -6,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="md:hidden">
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className={`nav-container rounded-2xl flex flex-col shadow-sm min-h-[48px] md:max-w-[80%] max-w-[97%] mx-auto justify-start items-center transition-all duration-100 bg-bg-navigation top-3 fixed w-full left-1/2 -translate-x-1/2 overflow-hidden z-50`}
      >
        <div className="w-full flex justify-between items-center">
          <NavLink to={"/"} className={"flex ml-3 items-center justify-center"}>
            <img src={"/assets/icons/logo.png"} width={60} alt="Logo" />
          </NavLink>
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <ShinyButton href="/dashboard" hideIcon className="px-3 h-9">
                Dashboard
              </ShinyButton>
            ) : (
              <>
                <Button
                  className="relative z-10 flex items-center overflow-hidden text-white h-8 justify-center w-fit px-4 rounded-sm bg-button-gpt hover:bg-[#095c46] transition-all duration-200 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full 
             shadow-lg hover:shadow-xl
            "
                  to="/login"
                  as={NavLink}
                >
                  <span className="z-10 font-bold">Log In</span>
                </Button>
              </>
            )}
            <Hamburger
              direction="right"
              size={16}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
              className="w-full h-full  relative px-4 pt-8"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-4">
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/about"}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/contact-us"}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/faqs"}
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ's
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/careers"}
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/how-it-works"}
                    onClick={() => setIsOpen(false)}
                  >
                    How it works
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/create-account"}
                    onClick={() => setIsOpen(false)}
                  >
                    Sign up
                  </NavLink>
                  {/* <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/consultation"}
                    onClick={() => setIsOpen(false)}
                  >
                    Consultation
                  </NavLink> */}
                </div>
              </div>
              {/* <div className="absolute gap-5 bottom-2 flex items-end">
                <Button isIconOnly className="hover:bg-white" variant={"flat"}>
                  <GitHubLogoIcon />
                </Button>
                <Button className="hover:bg-white" isIconOnly variant={"flat"}>
                  <LucideYoutube />
                </Button>
                <Button className="hover:bg-white" isIconOnly variant={"flat"}>
                  <SlackIcon />
                </Button>
                <Button className="hover:bg-white" isIconOnly variant={"flat"}>
                  <TwitterLogoIcon />
                </Button>
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
