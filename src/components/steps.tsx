import StepInfo from "./step-info";

interface Steps {
  content: string;
  imgSrc?: string;
  number?: number;
  heading: string;
}

interface StepsProps {
  imageSrc: string;
  stepsArray: Steps[];
  isReverse?: boolean;
  heading: string;
  halfLine: boolean;
}

const Steps = ({
  imageSrc,
  stepsArray,
  heading,
  halfLine,
  isReverse = false,
}: StepsProps) => {
  return (
    <div className="w-full relative mt-[40px] px-4">
      <div className="absolute left-0 bottom-0 top-[50%] z-0 hidden sm:inline-block ">
        <img src="/assets/images/bgFour.png" className="w-56" alt="" />
      </div>
      <div className="absolute right-0 hidden md:inline-block top-20 w-56">
        <img
          src="/assets/images/bgThree.png"
          className="fill-emerald-500 w-64 "
          alt=""
        />
      </div>
      <div className="mt-5">
        <div className="w-fit mx-auto">
          <h1 className="heading font-semibold">{heading}</h1>
          <div className="border-b-4 border-[#23ab84] w-[90%]"></div>
        </div>
        <div
          className={`mt-10  flex gap-5 justify-between max-lg:flex-col max-md:gap-0 w-full  mx-auto ${
            isReverse && "flex-row-reverse"
          } `}
        >
          <div className="flex flex-col max-md:ml-0 max-md:w-full">
            <img
              src={imageSrc}
              alt=""
              className="md:mt-12 relative z-10 grow h-full rounded-2xl object-cover max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-lg:w-full">
            <div className="relative py-6 md:py-0 md:p-6 md:mt-12">
              <div
                className={`absolute left-8 md:left-14 top-16 bottom-10 w-1 bg-emerald-900 font-poppins ${
                  halfLine ? "h-[55%]" : "h-[80%]"
                }`}
              ></div>
              <div className="flex flex-col space-y-16">
                {stepsArray.map((item, index) => (
                  <StepInfo
                    key={index}
                    imgSrc={item.imgSrc}
                    number={item.number}
                    heading={item.heading}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
