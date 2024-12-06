import { NavLink } from "react-router-dom";
import { ProgramCardProps } from "./cards/program-card";
import Button from "./button";

const ProgramCardRow = ({
  heading,
  hideButton,
  content,
  imgSrc,
  href,
}: ProgramCardProps) => {
  return (
    <div className="relative xl:pr-11 mt-14 w-full bg-white rounded-2xl shadow-xl max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full ">
          <img
            src={imgSrc}
            className="grow w-full object-cover max-md:max-w-full rounded-xl"
          />
        </div>
        <div className="flex md:text-left flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mx-4 self-stretch my-auto text-xl max-md:mt-1 max-md:max-w-full py-6">
            <h2 className="text-[18px] text-xl lg:text-[24px] font-semibold md:text-start text-emerald-900 capitalize max-md:max-w-full">
              {heading}
            </h2>
            <div className="mt-4 sub-text leading-8 text-stone-950 max-md:max-w-full">
              {content}
            </div>
            {!hideButton && (
              <div className="flex justify-start md:self-start self-center">
                <NavLink to={href ?? ""}>
                  <Button
                    type="button"
                    className="button mt-[30px] flex items-center gap-4 justify-center mx-auto"
                  >
                    Learn more
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCardRow;
