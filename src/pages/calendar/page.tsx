import CalendarBox from "@/components/CalenderBox";

const CalendarPage = () => {
  return (
    <div className="mx-auto max-w-7xl mt-9">
      {/* Legend Section */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
          <span>Paid</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span>Unpaid</span>
        </div>
      </div>

      {/* Calendar Component */}
      <CalendarBox />
    </div>
  );
};

export default CalendarPage;
