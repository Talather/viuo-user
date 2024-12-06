import { NavLink } from "react-router-dom";
import Button from "./button";

interface EnsureProps {
  heading: string;
  content: string;
  buttonText: string;
  hideButton?: boolean;
  href?: string;
}

const Ensure = ({
  heading,
  href,
  hideButton,
  content,
  buttonText,
}: EnsureProps) => {
  return (
    <div className="w-full mt-10 font-poppins">
      <div className="flex justify-center items-center px-16 py-9 font-medium bg-emerald-500  bg-opacity-20 max-md:px-5">
        <div className="flex flex-col items-center max-w-full w-[80vw]">
          <div className="heading font-semibold text-[#0f4a3f] capitalize w-fit mx-auto">
            <h1>{heading}</h1>
            <div className="border-b-4 border-[#23ab84] w-[90%]"></div>
          </div>
          <div className="self-stretch mt-6 sub-text leading-10 text-center capitalize text-[#0e0e0e] max-md:max-w-full">
            {content}
          </div>
          {!hideButton && (
            <NavLink to={href ?? ""} className="mt-10">
              <Button>{buttonText}</Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ensure;
