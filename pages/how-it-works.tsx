import MaxWidthContainer from "../components/max-width-container";
import JoinToday from "../components/redesigned-components/components/join-today";
import ShinyButton from "../components/redesigned-components/components/shiny-button";
import { FeatureSection } from "../components/redesigned-components/components/cards/feature-card";

const HowItWorks = () => {
  return (
    <div className=" md:pt-14">
      <MaxWidthContainer className="pt-10 pb-20 px-3 md:px-10">
        <div className="text-center w-full  flex flex-col items-center">
          <h1 className="mb-6 md:max-w-[70%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            How It Works
          </h1>
          <p className="text-secondary-text md:max-w-[70%] font-bold md:text-lg mb-8">
            React is the heartbeat of Vuior, where every move you make toward
            managing your bills early turns into savings. It's simple, smart,
            and designed to keep you financially ahead. Here’s how it works.
          </p>
          {/* <ShinyButton
            href={"/consultation"}
            className="relative w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Start
Saving Now
          </ShinyButton> */}
        </div>
      </MaxWidthContainer>
      <MaxWidthContainer className="">
        <FeatureSection
          title="Join for Free"
          description="No credit checks. No fees. Just smart savings."
          imageSrc="/icons/join.svg"
          imageAlt="Join for Free"
          buttonText="Sign Up"
          buttonHref="/create-account"
          className="bg-muted"
        />
        <FeatureSection
          title="Add Your Bills"
          description="Upload your rent, auto loan, phone, internet, or credit bills."
          imageSrc="/icons/addBills.svg"
          imageAlt="Add Bills"
          buttonHref="#"
          imagePosition="left"
          className="bg-background"
        />

        <FeatureSection
          title="Pay Early, Save More"
          description="The earlier you pay, the more you save—up to 25%. "
          imageSrc="/icons/payEarly.svg"
          imageAlt="Pay Early"
          buttonHref="#"
          className="bg-muted"
        />

        <FeatureSection
          title="Automated Alerts"
          description="Get real-time notifications on when to pay for the biggest savings."
          imageSrc="/icons/alerts.svg"
          imageAlt="Alerts"
          buttonHref="#"
          imagePosition="left"
        />

        <FeatureSection
          title="Exclusive Discounts"
          description="Through Vuior's provider network, you get better rates automatically."
          imageSrc="/icons/discounts.svg"
          imageAlt="Discounts"
          buttonHref="#"
          imagePosition="left"
        />
        <FeatureSection
          title="Track Your Savings"
          description="Your REACT Dashboard shows total savings, early payment bonuses, and progress"
          imageSrc="/icons/track.svg"
          imageAlt="Savings"
          buttonHref="#"
          className="bg-muted"
        />
      </MaxWidthContainer>
      {/* <div className="bg-[#042424] py-20 text-white">
        <MaxWidthContainer>
          <div className="text-center px-2 md:max-w-[80%] mx-auto">
            <h2 className="text-5xl font-semibold text-white mb-2">
              React Now
            </h2>
          </div>
          <ServiceCards services={services} />
        </MaxWidthContainer>
      </div> */}
      <MaxWidthContainer className="py-28 px-10">
        <h3 className="text-button-gpt   text-xl w-full text-center mb-4 font-semibold">
          Watch Your Savings Grow
        </h3>
        <div className="text-center w-full flex flex-col items-center">
          <h1 className="mb-6 md:max-w-[70%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
            Vuior is built on rewards.
          </h1>
          <p className="text-secondary-text md:max-w-[70%] font-bold md:text-lg mb-8">
            With Vuior it’s all about building good habits. React today with
            Vuior and start making every payment count! The earlier you move,
            the more you save. Now is the time to REACT, SAVE, and REWARD
            yourself with Vuior.
          </p>
          <ShinyButton
            href={"/create-account"}
            className="relative w-fit px-16 z-10 h-14  shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Start Saving Now
          </ShinyButton>
        </div>
      </MaxWidthContainer>
      <JoinToday
        title="Join Vuior Today"
        content="Managing your bills should put money back in your pocket. Sign up for free and start saving!"
      />
    </div>
  );
};

export default HowItWorks;
