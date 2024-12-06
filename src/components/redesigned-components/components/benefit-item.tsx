import { Check } from "lucide-react";

const BenefitItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="flex gap-3 items-start">
      <div className="mt-1 bg-[#042424c0]  p-1 flex items-center justify-center relative rounded-full">
        <Check color="white" size={15} />
      </div>
      <div>
        <h3 className="text-xl font-semibold  mb-1">{title}</h3>
        <p className="text-[#9ba1a6] text-md leading-relaxed">{description}</p>
      </div>
    </li>
  );
};

export default BenefitItem;
