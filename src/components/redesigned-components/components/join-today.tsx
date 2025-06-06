import MaxWidthContainer from "../../max-width-container";
import { NavLink } from "react-router-dom";
const JoinToday = ({
  title = "It's Free to Join",
  content = "No credit check. No hidden fees. Just real savings.",
}: {
  title?: string;
  content?: string;
}) => {
  return (
    <div className="bg-[#0F4A3F] py-10 text-white">
      <MaxWidthContainer>
        <div className="flex flex-col items-center justify-center md:flex-row my-20 gap-10 px-md-0 px-10">
          <div className="md:max-w-[50%] lg:block text-md-right text-center ">
            <h1 className="text-md-5xl text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-[#fff] text-md my-2 leading-relaxed font-manrope-100 font-14 text-md-left text-center">
              {content}
            </p>
          </div>
          <div className="md:max-w-[50%] lg:block text-left ">
            <NavLink to="/create-account" className="bg-[#69FFE0] w-fit mx-auto rounded-full text-black px-8 py-4 font-extrabold font-28">
            Join Now
            </NavLink>          
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default JoinToday;
