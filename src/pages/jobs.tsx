import MaxWidthContainer from "../components/max-width-container";
import HoverLink from "../components/hover-link";
import OperatingPrinciples from "../components/operating-principles";

const Jobs = () => {
  return (
    <MaxWidthContainer>
      <section className="bg-blue-100 text-green-800 selection:bg-gray-950 selection:text-gray-100 pt-20 md:pt-16 px-4">
        <div className="max-w-screen-2xl mx-auto md:p-20">
          <div className="md:p-2.5">
            <h1 className="font-display font-medium tracking-tighter text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-7 md:mb-9 pb-0.5">
              <span className="block overflow-hidden font-display tracking-tight text-base sm:text-lg lg:text-3xl xl:text-4xl leading-none mb-2.5 md:mb-5 xl:-ml-0.5">
                <span className="block">
                  Don’t work on incremental solutions
                </span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl overflow-hidden leading-[1.075]">
                  <span className="block">
                    Join us in shaping
                    <span className="hidden lg:inline">the future</span>
                  </span>
                </span>
              </span>
            </h1>
            <p className="md:text-lg xl:max-w-lg xl:pr-20 mb-10 font-medium">
              It is a gargantuan undertaking to bring Basic Capital to market.
              We need your grit and intellectual horsepower to help us make it a
              reality.
            </p>
            <p className="flex pb-4 md:pb-0">
              <HoverLink href="/">See open positions</HoverLink>
            </p>
          </div>
        </div>
      </section>
      <OperatingPrinciples />
    </MaxWidthContainer>
  );
};

export default Jobs;
