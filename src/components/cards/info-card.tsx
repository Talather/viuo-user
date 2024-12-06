import { NavLink } from "react-router-dom";

interface InfoCardProps {
  imgSrc: string;
  label: string;
  href?: string;
  linkText: string;
}

const InfoCard = ({ imgSrc, linkText, label, href }: InfoCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center md:items-start mt-14 font-medium capitalize">
      <img
        src={imgSrc}
        alt="call"
        className="shrink-0 w-16 mt-1 aspect-square"
      />
      <div className="flex flex-col grow shrink-0 mt-2 basis-0 w-fit text-center md:text-start">
        <h2 className="text-[16px] lg:text-[1vw] text-emerald-900">{label}</h2>
        <NavLink
          to={href ?? ""}
          className="mt-1 text-[18px] lg:text-[1.2vw] text-stone-950"
        >
          {linkText}
        </NavLink>
      </div>
    </div>
  );
};

export default InfoCard;
