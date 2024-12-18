import Button from "../button";

interface FeatureHighlightCardProps {
  imgSrc: string;
  heading?: string;
  subHeading?: string;
  content?: string;
  hideButton?: boolean;
  isReverse?: boolean;
  buttonText?: string;
}

const FeatureHighlightCard = ({
  hideButton,
  content,
  heading,
  subHeading,
  buttonText,
  imgSrc,
}: FeatureHighlightCardProps) => {
  return (
    <div className="flex gap-5 w-full mx-auto md:mt-10 relative max-md:flex-col-reverse ">
      <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-5 md:mt-10 max-md:max-w-full">
          {subHeading && (
            <h3 className="heading leading-10 lg:text-[24px] xl:leading-[60px] font-semibold text-emerald-900 capitalize max-md:max-w-full">
              {subHeading}
            </h3>
          )}
          {heading && (
            <h2 className="text-[16px] lg:text-[20px]  font-semibold text-emerald-900 capitalize max-md:max-w-full">
              {heading}
            </h2>
          )}
          <p className="mt-2 md:mt-6 text-[#666] leading-10 sub-text max-md:w-full">
            {content}
          </p>
          {!hideButton && (
            <div className="flex flex-wrap gap-2 md:gap-4 justify-start self-start mt-4 lg:mt-8">
              <Button className="gap-4 mt-4 md:mt-[16px]">{buttonText}</Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full gradient gradient-mask-left-hero">
        <img
          src={imgSrc}
          alt="partners"
          className="grow w-full h-full object-cover max-md:max-w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FeatureHighlightCard;
