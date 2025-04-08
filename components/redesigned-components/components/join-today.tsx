import MaxWidthContainer from "../../max-width-container";
import ShinyButton from "./shiny-button";

const JoinToday = ({
  title = "It’s Free to Join",
  content = "No credit check. No hidden fees. Just real savings.",
}: {
  title?: string;
  content?: string;
}) => {
  return (
    <div className="bg-[#042424] py-20 text-white">
      <MaxWidthContainer>
        <div className="text-center md:max-w-[80%] mx-auto">
          <h2 className="text-5xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-[#9ba1a6] text-md my-6 leading-relaxed">
            {content}
          </p>
          <ShinyButton
            href="/create-account"
            className="w-fit mx-auto rounded-full px-7 py-2"
          >
            Join Now
          </ShinyButton>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default JoinToday;
