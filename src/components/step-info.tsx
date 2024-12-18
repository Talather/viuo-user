interface StepInfoProps {
  imgSrc?: string;
  number?: number;
  heading: string;
  content: string;
}
const StepInfo = ({ imgSrc, heading, content }: StepInfoProps) => {
  return (
    <div className="flex items-start relative">
      {imgSrc ? <img src={imgSrc} className="size-16 mr-4" /> : null}
      <div className="flex flex-col">
        <h2 className="text-[16px] lg:text-[20px] font-semibold text-emerald-900">
          {heading}
        </h2>
        <p className="mt-2 text-gray-700 sub-text">{content}</p>
      </div>
    </div>
  );
};

export default StepInfo;
