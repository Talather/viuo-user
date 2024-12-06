import JobOperatingCard from "./cards/job-operating-card";
import HoverLink from "./hover-link";

const OperatingPrinciples = () => {
  return (
    <section className="selection:bg-gray-950 selection:text-gray-100 px-4">
      <div className="max-w-screen-2xl mx-auto md:p-20">
        <div className="md:p-2.5">
          <div className="py-4 md:py-0">
            <h2 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-12 md:pb-0.5 tracking-tight max-w-md">
              Our operating
              <span className="block">principles</span>
            </h2>
            <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-24 xl:gap-20 2xl:gap-28 mb-14">
              <JobOperatingCard
                content={
                  <p>
                    <strong>Startups are hard.</strong> We rank grit extremely
                    high when we&nbsp;think about growing our team. Experience
                    matters, but brand names on&nbsp;resumes mean less to us
                    than they might elsewhere.
                  </p>
                }
                heading="Grid &gt; Pedigree"
              />
              <JobOperatingCard
                content={
                  <p>
                    <strong>We work side by side.</strong> We meet, discuss, and
                    debate spontaneously. We’re looking for others who put a
                    premium on working alongside those they are building with.
                    Our office is in SoHo. Come visit us.
                  </p>
                }
                heading="In person &gt; Remote"
              />

              <JobOperatingCard
                content={
                  <p>
                    <strong>We have a ship by Friday culture.</strong>We hold
                    each other accountable. Sometimes the work we do is hard to
                    see, but the impact is deeply felt. If you want to grow and
                    be held accountable for real outcomes, we’re excited to meet
                    you.
                  </p>
                }
                heading="Accountability &gt; Optics"
              />
            </ul>
            <p className="flex">
              <HoverLink href="/">See open positions</HoverLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
