import React from "react";
// Define the type for a single credit document
import CurrencyFormat from "react-currency-format";

interface CreditDoc {
  credits: number;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  reference: string;
  status: string;
  type: string;
  userId: string;
}
interface TableCreditsProps {
  creditDocs: CreditDoc[];
}
const TableCredits: React.FC<TableCreditsProps> = ({ creditDocs }) => {
  console.log("Credits Data:", creditDocs);
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-10 font-bold text-body-2xlg text-dark dark:text-white">
        Credits History
      </h4>

      {creditDocs.length > 0 ? (
        <div className="flex flex-col">
          {/* Table Headers */}
          <div className="grid grid-cols-5 text-button-gpt">
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Date
              </h5>
            </div>

            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Reference
              </h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Type
              </h5>
            </div>
            <div className="px-2 pb-3.5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Credit Amount
              </h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
          </div>

          {/* Table Rows */}
          {creditDocs.map((credit, key) => (
            <div
              className={`grid grid-cols-5 ${
                key === creditDocs.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-dark-3"
              }`}
              key={key}
            >
              {/* Date */}
              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {new Date(credit.date.seconds * 1000).toLocaleDateString()}
                </p>
              </div>

              {/* Reference */}
              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {truncateString(credit.reference, 15)}
                </p>
              </div>
              {/* Type */}
              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {credit.type}
                </p>
              </div>
              {/* Credit Amount */}
              <div className="flex justify-center items-center mr-5 gap-3.5 px-2 py-4">
                <p
                  className="font-medium text-dark dark:text-white"
                  style={{
                    color: `${credit.credits > 0 ? "green" : "red"}`,
                  }}
                >
                  <CurrencyFormat
                    value={`${
                      credit.credits?.toString().includes(".")
                        ? credit.credits.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })
                        : `${credit.credits}.00`
                    }`}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center px-2 py-4">
                <p
                  className={`font-medium ${
                    credit.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-500"
                  }`}
                >
                  {credit.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-black dark:text-white">
          No documents available
        </p>
      )}
    </div>
  );
};

export default TableCredits;

function truncateString(str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
