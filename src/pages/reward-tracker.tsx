import ChartThree from "../components/ChartThree";
import TableOne from "../components/TableOneForRewards";
import ChartR from "../components/chartR";
import TableCredits from "@/components/TableOneForCredits";
const RewardTracker = () => {
  return (
    <div className="w-full">
      {/* Chart Section */}
      <div className="flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800 sm:text-4xl">
          Savings Tracker
        </h2>
        <ChartThree />
      </div>
      {/* Rewards Earned Section */}
      <div className="mt-16 bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 md:text-4xl">
            Credits Earned:
          </h3>
        </div>
        <div className="flex items-center justify-center mt-12 mb-10">
          <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-lg">
            <TableOne />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-16 bg-button-gpt-hover">
        <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">
          Credits Tracker
        </h2>
        <ChartR />
      </div>
      <div className="mt-16 bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 md:text-4xl">
            Credits Earned:
          </h3>
        </div>
        <div className="flex items-center justify-center mt-12 mb-10">
          <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-lg">
            <TableCredits />
          </div>
        </div>
      </div>

      {/* Hero Section */}
    </div>
  );
};

export default RewardTracker;
