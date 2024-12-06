import ProgramCard from "./cards/program-card";
import ProgramCardRow from "./program-card-row";

interface Programs {
  imgSrc: string;
  heading: string;
  content: string;
}
const Programs = ({
  showInRow = false,
  list,
  heading,
}: {
  showInRow?: boolean;
  heading: string;
  list: Programs[];
}) => {
  return (
    <div className="relative">
      <div className="absolute right-0 ">
        <img
          src="/assets/images/bgOne.png"
          className="size-60 hidden md:inline-block "
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-50">
        <img
          src="/assets/images/bgTwo.png"
          className="size-60 hidden md:inline-block z-50"
          alt=""
        />
      </div>
      <div className="programs w-full mx-auto">
        {heading && (
          <div className="flex flex-col items-center justify-start mt-10 lg:mt-[80px] text-center font-poppins font-semibold text-[#0f4a3f] mx-auto min-h-fit">
            <div className="w-fit">
              <h1 className="heading">{heading}</h1>
              <div className="border-b-4 w-[90%] border-[#23ab84]"></div>
            </div>
          </div>
        )}
        <div className="mt-[40px]">
          <div className="w-full px-5 mx-auto font-poppins">
            {showInRow ? (
              <div
                className={`grid grid-cols-1 ${
                  showInRow ? "" : "md:grid-cols-2"
                } mx-auto gap-10 `}
              >
                {list.map((item, index) => (
                  <ProgramCardRow key={index} href="/" {...item} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
                {list.map((item, index) => (
                  <ProgramCard key={index} href="/" {...item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
