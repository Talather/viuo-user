import CurrencyFormat from "react-currency-format";

const TablePayments = ({ paymentData }) => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-10 font-bold text-body-2xlg text-dark dark:text-white">
        Payments Overview
      </h4>

      <div className="flex flex-col">
        {/* Table Headers */}
        <div className="grid grid-cols-5 text-button-gpt">
          {/* <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Bill Name
            </h5>
          </div> */}
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Payment Date
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Savings
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Payment Type
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
        </div>

        {/* Table Rows */}
        {paymentData.map((payment, key) => (
          <div
            className={`grid grid-cols-5 ${
              key === paymentData.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={key}
          >
            {/* Bill Name */}
            {/* <div className="flex items-center gap-3.5 px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {payment.billIds}
              </p>
            </div> */}

            {/* Payment Date */}
            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {new Date(payment.date.seconds * 1000).toLocaleDateString()}
              </p>
            </div>

            {/* Early By (Days) */}
            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                <CurrencyFormat
                  value={`${
                    payment.savings?.toString().includes(".")
                      ? payment.savings.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : `${payment.savings}.00`
                  }`}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  className="text-green"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                />
              </p>
            </div>

            {/* Amount */}
            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-bold-1">
                {
                  <CurrencyFormat
                    value={`${
                      payment.amount?.toString().includes(".")
                        ? payment.amount.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })
                        : `${payment.amount}.00`
                    }`}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                  />
                }
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-green-light-1">
                {payment.billIds.length > 1 ? "Consolidation" : "Single Bill"}
              </p>
            </div>
            {/* Payment Status */}
            <div className="flex items-center justify-center px-2 py-4">
              <p
                className={`font-medium ${
                  payment.status === "Completed"
                    ? "text-green-600"
                    : "text-yellow-500"
                }`}
              >
                {payment.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablePayments;

// export default TableRewards;
