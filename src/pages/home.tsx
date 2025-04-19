import { Image } from "@nextui-org/react";
import MaxWidthContainer from "../components/max-width-container";
import Benefits from "../components/redesigned-components/components/benefits";
import Hero from "../components/redesigned-components/components/hero";
import ServiceCards from "../components/redesigned-components/components/service-cards";
import JoinToday from "../components/redesigned-components/components/join-today";
import FAQs from "../components/redesigned-components/components/faqs";
import { reactNow } from "../data";
import ShinyButton from "../components/redesigned-components/components/shiny-button";
import { useEffect } from "react";
declare global {
  interface Window {
    Elfsight?: {
      init: () => void;
    };
  }
}
const ElfsightWidget = () => {
  useEffect(() => {
    // Ensure Elfsight script is loaded properly
    if (window.Elfsight) {
      window.Elfsight.init();
    }
  }, []);

  return (
    <div
      className="elfsight-app-74a16cb8-c27c-4060-b3c5-c546fd78fdea"
      data-elfsight-app-lazy
    ></div>
  );
};

const HomePage = () => {
  return (
    <div>
      <ElfsightWidget />
      <MaxWidthContainer>
        <Hero />
      </MaxWidthContainer>
      <div className="bg-[#207D6C] text-white">
        <MaxWidthContainer className="p-20">
          <div className="services-container p-20">
          <div className="text-center px-2 md:max-w-[90%] mx-auto">
            <h2 className="text-5xl font-semibold text-[#99E1D3] mb-2">
              Turning Your Payments into Savings!
            </h2>
            <p className="text-white font-normal font-12 font-manrope-100 text-md my-6 mb-10 leading-relaxed">
              Managing bills can be overwhelming. Vuior transforms every payment
              into an opportunity to save more and stress less— empowering you
              to take control of your finances, one early payment at a time.
            </p>
            <hr/>
          </div>

          <h2 className="text-4xl mt-10 text-center font-extrabold text-white mb-5">
            Why Choose Vuior?
          </h2>
          <ServiceCards services={reactNow} />

         </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer className="p-4 px-4 md:px-10">
        <div className="flex flex-col items-center justify-center md:flex-row my-20 gap-10">
          <div className="md:max-w-[50%] md:hidden lg:block ">
            <Image
              className="w-full"
              src="/assets/brand/start.png"
            />
          </div>
          <Benefits
            hideList
            heading="Start Your Vuior <strong>REWARDS</strong> Journey Today!"
            content={`Start managing your bills smarter and saving more. Vuior is easy to use, \nand joining is completely free—no strings attached, no hidden fees.\nYou’ll even earn your first rewards within days!\nManaging your bills should put money back in your pocket.\nSign up for free and start saving! Join Vuior Today
`}
          />
        </div>
      </MaxWidthContainer>
      <JoinToday />
      <div className="w-full ">
        <MaxWidthContainer className="">
          <FAQs />
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default HomePage;
