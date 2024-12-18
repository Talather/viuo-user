import BenefitItem from "./benefit-item";

const Benefits = ({
  hideList,
  heading,
  content,
}: {
  content: string;
  heading: string;
  hideList?: boolean;
}) => {
  return (
    <div className="lg:max-w-[50%]">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold mb-2 leading-tight">{heading}</h2>
        <p className="text-[#9ba1a6] text-md leading-relaxed">{content}</p>
      </div>
      {!hideList && (
        <ul className="flex flex-col gap-4">
          <BenefitItem
            title="Boosting Quality with Tech"
            description="With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards."
          />
          <BenefitItem
            title="Optimization Production Process"
            description="Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output."
          />
          <BenefitItem
            title="Al-Driven Production"
            description="Leverage the power of Al to transform your manufacturing processes. achieving faster and more effective results."
          />
        </ul>
      )}
    </div>
  );
};

export default Benefits;
