import { ReactNode } from "react";

const JobOperatingCard = ({
  heading,
  content,
}: {
  heading: string;
  content: ReactNode;
}) => {
  return (
    <li>
      <h3 className="font-display font-medium text-2xl sm:text-3xl xl:text-2xl 2xl:text-4xl mb-4">
        {heading}
      </h3>
      <div className="cms">{content}</div>
    </li>
  );
};

export default JobOperatingCard;
