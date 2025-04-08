import MaxWidthContainer from "../components/max-width-container";
import JoinToday from "../components/redesigned-components/components/join-today";
import PaddingContainer from "../components/redesigned-components/components/padding-container";
import ShinyButton from "../components/redesigned-components/components/shiny-button";
import ServiceCards from "../components/redesigned-components/components/service-cards";
import { commitmentsArr } from "../data";

import ChooseCard from "../components/redesigned-components/components/cards/choose-card";
import { Image } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <div>
      <MaxWidthContainer className="pt-10 md:pt-20 pb-20 px-10">
        <div className="text-center w-full  flex flex-col items-center">
          <h1 className="mb-6 md:max-w-[90%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            A Smarter Way to Pay, A Rewarding Way to Save
          </h1>
          <p className="text-secondary-text md:max-w-[90%] font-semibold md:text-lg mb-8">
          At <strong>Vuior Billpay</strong>, we believe that paying your bills should benefit you—not just your providers. The <strong>Vuior Billpay Experience</strong> turns routine bill payments into moments of reward and financial growth. 
          </p>
          <ShinyButton
            href={"/create-account"}
            className="relative w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Join Now
          </ShinyButton>
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Why Choose Vuior?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ChooseCard
                title="Huge savings"
                description="Pay early and save big! With
Vuior, settle your bills early to unlock exclusive savings of up to 25%."
              />
              <ChooseCard
                title="No Credit Check, No Fees"
                description="We believe in financial empowerment for all. Join Vuior
REWARDS for free—no credit checks required!"
              />
              <ChooseCard
                title="Comprehensive Coverage"
                description="We cover all types of household bills, including utilities, internet, phone, cable, insurance, and more, to help you simplify your finances and
reduce your monthly expenses."
              />
            </div>
          </div>
        </section>
      </MaxWidthContainer>
      <div className="bg-[#042424] py-20 mb-20 text-white">
        <MaxWidthContainer>
          <div className="text-center md:max-w-[80%] mx-auto">
            <h2 className="text-5xl font-semibold text-white mb-2">
              Our Mission
            </h2>
            <p className="text-[#9ba1a6] max-w-[70%] mx-auto text-md my-6 leading-relaxed">
            To turn everyday payments into powerful opportunities for savings. Whether it's 5 or 15 days  early, <strong> Vuior Billpay rewards you </strong> for staying ahead. 
            </p>
            <ShinyButton
              href="/create-account"
              className="w-fit mx-auto rounded-full px-7 py-2"
            >
              Join Us
            </ShinyButton>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex  gap-10 md:items-center md:justify-between">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold mb-4">Who We Are</h2>
                <p className="text-xl mb-6">
                We're a <strong>community-driven platform</strong> built on the belief that every payment should reward responsibility. Whether it's rent, internet, mobile plans, loans, or utilities, we give you the tools to <strong> manage smarter, save bigger, and grow financially.</strong>
                </p>
                {/* <ShinyButton className="w-fit">Learn More About Us</ShinyButton> */}
              </div>
              <div className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
                <Image
                  src="/assets/brand/whoAreWe.jpeg"
                  alt="Who Are We"
                  width={450}
                  className="rounded-lg  lg:h-[400px] h-[300px]  md:object-contain lg:object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-10 md:items-center md:justify-between">
              <div className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
                <Image
                  src="/assets/brand/whatWeDo.jpeg"
                  alt="What we do"
                  width={450}
                  className="rounded-lg  lg:h-[400px] h-[300px]  md:object-contain lg:object-cover shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mt-5 md:mt-0">
                <h2 className="text-3xl font-extrabold mb-4">What We Do</h2>
                <p className="text-xl mb-6">
                By paying early, our users unlock <strong>exclusive savings of up to 25%.</strong>  We've partnered with top-tier providers to negotiate discounts, optimize payment plans, and <strong>put money back into your hands.</strong> 
                </p>
                {/* <ShinyButton className="w-fit">Learn More About Us</ShinyButton> */}
              </div>
            </div>
          </div>
        </section>
      </MaxWidthContainer>

      <MaxWidthContainer className="">
        <div className="bg-[#042424] py-20 text-white">
          <div className="text-center px-2 md:max-w-[80%] mx-auto">
            <h2 className="text-5xl  font-semibold text-white mb-7">
              Our Commitments
            </h2>
          </div>
          <MaxWidthContainer>
            <ServiceCards
              className="lg:grid-cols-2"
              services={commitmentsArr}
            />
          </MaxWidthContainer>
        </div>
      </MaxWidthContainer>
      <PaddingContainer className=" rounded-2xl py-8 my-10 md:max-w-[60%] mx-auto">
        <h2 className="text-5xl font-semibold   text-center">
          The Vuior Experience
        </h2>
        <p className="text-[#9ba1a6] text-md my-6 leading-relaxed text-center">
          Is about turning every bill into an opportunity for growth. Join us,
          take control of your finances, and watch your savings grow—one early
          payment at a time.
        </p>
      </PaddingContainer>
      <JoinToday
        title="Join Vuior Today"
        content="Managing your bills should put money back in your pocket. Sign up for free and start saving!"
      />
    </div>
  );
};

export default AboutPage;
