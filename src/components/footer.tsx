import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#051a15] py-10">
      <div className="w-full px-5 xl:px-0 xl:w-[90%] flex flex-col md:flex-row items-start justify-center mx-auto gap-[10vw] pt-[30px]">
        <div className="w-full md:w-[40vw]">
          <div className="max-w-[517px] mx-auto">
            <img src="/assets/icons/logo.png" alt="logo" />
            <p className="font-poppins text-white mt-[20px] text-[14px] lg:text-[1vw]">
              Vuior - Billpay Simplified
            </p>
            <div className="mt-[40px]">
              <h1 className="text-white text-[16px] lg:text-[1.2vw] mb-2">
              Follow Us on
              </h1>
              <div className="flex items-end gap-[10px] mt-[20px]">                
                <div className="cursor-pointer">
                  <SocialIcon
                    url="https://www.facebook.com/profile.php?id=61557178921559"
                    bgColor="#095C46"
                    fgColor="white"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
                <div className="cursor-pointer">
                  <SocialIcon
                    url="https://www.instagram.com/vuiorhq"
                    bgColor="#095C46"
                    fgColor="white"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-10 justify-between md:justify-around w-full md:w-[40vw]">
          <div>            
            <div className="flex flex-col gap-y-[16px] text-[#d6d6d6] font-normal text-[16px] lg:text-[1vw] font-manrope-100">
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-emerald-700 w-fit"}`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-emerald-700 w-fit"}`
                }
                to="/contact-us"
              >
                Contact
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-emerald-700 w-fit"}`
                }
                to="/how-it-works"
              >
                How it works
              </NavLink>
              <NavLink className={"mr-4"} to={"/faqs"}>
                FAQs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-emerald-700 w-fit"}`
                }
                to="/careers"
              >
                Careers
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-emerald-700 w-fit"}`
                }
                to="/about"
              >
                About us
              </NavLink>
              
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 lg:px-10">
        <hr className="mt-[30px] bg-[#0F4A3F]  h-[1px] border-0"></hr>
        <div className="w-full mx-auto mt-[30px]">
          <div className="md:mx-[40px] flex flex-wrap gap-4 pb-4 justify-between">
            <div>
              <p className="font-manrope-100 font-medium text-[12px] lg:text-[1vw] text-pretty  text-white">
                &copy; Copyright {(new Date().getFullYear())}.
              </p>
            </div>
            <div className="gird grid-cols-2 xl:grid-cols-4 items-center font-manrope-100 text-white text-[12px] lg:text-[12px] gap-4  md:gap-10">
              <NavLink className={"mr-4"} to={"/privacy-policy"}>
                Privacy Policy
              </NavLink>
              <NavLink className={"mr-4"} to={"/terms-of-service"}>
                Terms of Service
              </NavLink>
              <NavLink className={"mr-4"} to={"/cookies-policy"}>
                Cookies Policy
              </NavLink>
              <NavLink className={"mr-4"} to={"/data-protection-policy"}>
                Data Protection Policy
              </NavLink>
              <NavLink className={"mr-4"} to={"/contact-us"}>
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
