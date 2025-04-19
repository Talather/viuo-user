/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import ShinyButton from "./shiny-button";
import { ArrowTopRightIcon, CardStackIcon } from "@radix-ui/react-icons";
import { FileDiffIcon, Stars } from "lucide-react";
import MaxWidthContainer from "../../max-width-container";
import { NavLink } from "react-router-dom";
const transition = { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {
    filter: "blur(10px)",
    transform: "translateY(20%)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    transform: "translateY(0)",
    opacity: 1,
  },
};

const text = "Your Financial Future, Redefined with Vuior Billpay";
import At from "./../../../../public/assets/icons/AT&T.png";
import SouthernCompany from "./../../../../public/assets/icons/SouthernCompany.png";
import Mastercard from "./../../../../public/assets/icons/mastercard.png";
import Verizon from "./../../../../public/assets/icons/verizon.png";
import Exelon from "./../../../../public/assets/icons/exelon.png";

import { Image } from "@nextui-org/react";
const Hero = () => {
  const logos = [
    {
      src: At,
      alt: "At",
      width: 100,
    },
    {
      src: SouthernCompany,
      alt: "SouthernCompany",
      width: 100,
    },
    {
      src: Mastercard,
      alt: "Mastercard",
      width: 100,
    },
    {
      src: Verizon,
      alt: "Verizon",
      width: 100,
    },
    {
      src: Exelon,
      alt: "Exelon",
      width: "8rem",
    },
  ];
  const words = text.split(" ");

  return (

    <div className="bg-[#D7E0DC] ">
      <MaxWidthContainer className="px-20 py-10">
        <div className="flex my-5 gap-10">
          <div className="hero-container flex">
            <div className="md:max-w-[50%] md:hidden lg:block text-left p-10 pr-0">
              <h1 className="hero-text font-normal font-manrope-200 text-[#F4F4FC] mb-5">Your Financial Future,{"\n"}<strong className="font-manrope-600">Redefined With Vuior</strong> Billpay</h1>
              
              <span className="font-normal text-[#F4F4FC] msg-wrapper line-height-30 font-18">
                Welcome to Vuior, where paying your bills early{"\n"}rewards you with huge
                savings while putting{"\n"}up to 25% savings back in your pocket. 
              </span>

              <NavLink to="/create-account" className="mt-10 shadow-lg text-white transition-shadow duration-300 bg-black rounded-50 font-semibold text-4xl saving-btn">Start Saving Now
              </NavLink>             
              </div>
              <div className="md:max-w-[50%] md:hidden lg:block text-left ">
                <Image className="w-full" src="/assets/hero-banner-img.png"  />  
              </div>
          </div>
        </div>
      </MaxWidthContainer>
      <section className=" pb-10">
          <div className="w-full bg-[#FFF]">
            <div className="flex flex-wrap justify-center items-center  gap-6 gap-x-20 ">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center flex-row"
                >
                  {logo.width !== 100 ? (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain  rounded-none h-[10vw] sm:h-[5vw]"
                      height={logo.width}
                    />
                  ) : (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="object-contain h-[10vw] sm:h-[5vw] rounded-none"
                      // width={logo.width}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>    
  );
};

export default Hero;


