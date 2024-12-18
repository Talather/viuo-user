import { commitments } from "../data";
import ProgramCard from "./cards/program-card";

const Commitments = () => {
  return (
    <div className="programs lg:my-24 w-full mx-auto">
      <div className="flex flex-col items-center justify-start mt-10 lg:mt-[80px] text-center font-poppins font-semibold text-[#0f4a3f] mx-auto min-h-fit">
        <div className="w-fit">
          <h1 className="heading">Our Commitments</h1>
          <div className="border-b-4 w-[90%] border-[#23ab84]"></div>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="w-full px-5 mx-auto font-poppins">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto md:gap-5 gap-10">
            {commitments.map((item, index) => (
              <ProgramCard hideButton key={index} href="/" {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitments;
