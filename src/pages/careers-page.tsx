import MaxWidthContainer from "../components/max-width-container";
import ShinyButton from "../components/redesigned-components/components/shiny-button";
import ServiceCards from "../components/redesigned-components/components/service-cards";
import { whyJoinUs } from "../data";

const CareersPage = () => {
  return (
    <div>
      <MaxWidthContainer className="md:pt-20 pt-10 pb-20 px-2 md:px-10">
        <div className="text-center w-full  flex flex-col items-center">
          <h3 className="font-bold mb-5 text-button-gpt">
            Innovate, Empower, Thrive
          </h3>
          <h1 className="mb-6 md:max-w-[70%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            Join Vuior Billpay
          </h1>
          <p className="text-secondary-text md:max-w-[70%] font-bold md:text-lg mb-8">
            Vuior is on a mission to redefine how people manage and save on
            their bills. As a rapidly growing company, we’re seeking passionate,
            innovative thinkers to join our team.
          </p>
          <ShinyButton
            href={"/careers/open-positions"}
            className="relative w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Apply Now
          </ShinyButton>
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <div className="bg-[#042424] py-20 text-white">
          <MaxWidthContainer>
            <div className="text-center px-2 md:max-w-[80%] mx-auto">
              <h2 className="text-5xl font-semibold text-white mb-2">
              Why Work at Vuior Billpay?
              </h2>
            </div>
            <ServiceCards className="lg:grid-cols-2" services={whyJoinUs} />
            <ShinyButton
              hideIcon
              href={"/careers/open-positions"}
              className="relative mx-auto w-fit px-10 mt-5 z-10 h-14 shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
            >
              Explore our remote positions
            </ShinyButton>
          </MaxWidthContainer>
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer>
        <div className="py-20 px-3 mx-auto rounded-2xl">
          <h2 className="mb-8 text-center text-4xl mx-auto font-bold  text-primary-text ">
            Be Part of Our Vision!
          </h2>
          <p className="text-secondary-text mx-auto text-center md:max-w-[70%] font-bold md:text-lg mb-8">
            At Vuior, we believe in the power of community and innovation to
            create lasting change. Our ecosystem thrives on the diverse
            perspectives, experiences, and skills of our team members. We
            welcome you to be part of that journey. Together, let’s build
            something extraordinary. <br /> Join the Vuior ecosystem today and
            be part of a team that’s shaping the future of finance!
          </p>
          <ShinyButton
            href={"/careers/open-positions"}
            className="relative mx-auto w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Apply Now
          </ShinyButton>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default CareersPage;
