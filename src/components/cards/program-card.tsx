import { NavLink } from "react-router-dom";
import Button from "../button";

export interface ProgramCardProps {
  heading: string;
  content: string;
  href?: string;
  imgSrc: string;
  hideButton?: boolean;
}

const ProgramCard = ({
  heading,
  hideButton,
  content,
  imgSrc,
  href,
}: ProgramCardProps) => {
  return (
    <div className="mx-auto self-stretch flex gap-2 flex-col justify-start items-center shadow-xl pb-6 rounded-2xl bg-white z-50">
      <div className="gradient-mask-bottom-subimg relative w-full h-80 lg:h-96 overflow-hidden rounded-t-xl">
        <img
          src={imgSrc}
          className="w-full !h-full object-cover"
          loading="lazy"
          alt=""
        />
      </div>
      <h1 className="text-[18px] px-1 text-center lg:text-[25px] mt-2 text-[#0f4a3f] font-semibold">
        {heading}
      </h1>
      <p className="sub-text grow leading-8 px-4 text-center">{content}</p>
      {!hideButton && (
        <div>
          <Button>
            <NavLink to={`${href}`}>Learn More</NavLink>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
