import BenefitItem from "./benefit-item";

const Benefits = ({
  hideList,
  content,
}: {
  content: string;
  heading: string;
  hideList?: boolean;
}) => {
  return (
    <div className="lg:max-w-[50%]">
      <div className="mb-4">
        <h2 className="text-4xl font-semibold mb-5 leading-tight text-[#4F4F4F] msg-wrapper">Start Your Vuior <strong className="text-[#207D6C]">REWARDS</strong> {"\n"}Journey Today!</h2>
        <p className="text-[#052424] text-md leading-relaxed font-semibold font-manrope msg-wrapper font-14 line-height-30">{content}</p>
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
