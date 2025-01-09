// const rewardData = [
//   {
//     user: "Electricity",
//     paymentDate: "2024-12-20",
//     earlyByDays: 5,
//     reward: "$20",
//     rewardStatus: "Pending",
//   },
//   {
//     user: "Netflix",
//     paymentDate: "2024-12-22",
//     earlyByDays: 3,
//     reward: "$15",
//     rewardStatus: "Redeemed",
//   },
//   {
//     user: "Amazon Prime",
//     paymentDate: "2024-12-21",
//     earlyByDays: 7,
//     reward: "$25",
//     rewardStatus: "Redeemed",
//   },
//   {
//     user: "Message bird",
//     paymentDate: "2024-12-23",
//     earlyByDays: 2,
//     reward: "$10",
//     rewardStatus: "Redeemed",
//   },
//   {
//     user: "Gas",
//     paymentDate: "2024-12-19",
//     earlyByDays: 6,
//     reward: "$18",
//     rewardStatus: "Redeemed",
//   },
// ];

// const TableCredits = (creditDocs: any) => {

//   return (
//     <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
//       <h4 className="mb-10 font-bold text-body-2xlg text-dark dark:text-white">
//         Credits Earned For
//       </h4>

//       <div className="flex flex-col">
//         {/* Table Headers */}
//         <div className="grid grid-cols-5 text-button-gpt">
//           <div className="px-2 pb-3.5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Bill Name
//             </h5>
//           </div>
//           <div className="px-2 pb-3.5 text-center">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Payment Date
//             </h5>
//           </div>
//           <div className="px-2 pb-3.5 text-center">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Early By (Days)
//             </h5>
//           </div>
//           <div className="px-2 pb-3.5 text-center">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Credit
//             </h5>
//           </div>
//           <div className="px-2 pb-3.5 text-center">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Status
//             </h5>
//           </div>
//         </div>

//         {/* Table Rows */}
//         {rewardData.map((reward, key) => (
//           <div
//             className={`grid grid-cols-5 ${
//               key === rewardData.length - 1
//                 ? ""
//                 : "border-b border-stroke dark:border-dark-3"
//             }`}
//             key={key}
//           >
//             {/* User */}
//             <div className="flex items-center gap-3.5 px-2 py-4">
//               <p className="font-medium text-dark dark:text-white">
//                 {reward.user}
//               </p>
//             </div>

//             {/* Payment Date */}
//             <div className="flex items-center justify-center px-2 py-4">
//               <p className="font-medium text-dark dark:text-white">
//                 {reward.paymentDate}
//               </p>
//             </div>

//             {/* Early By (Days) */}
//             <div className="flex items-center justify-center px-2 py-4">
//               <p className="font-medium text-dark dark:text-white">
//                 {reward.earlyByDays}
//               </p>
//             </div>

//             {/* Reward Amount */}
//             <div className="flex items-center justify-center px-2 py-4">
//               <p className="font-medium text-green-light-1">{reward.reward}</p>
//             </div>

//             {/* Reward Status */}
//             <div className="flex items-center justify-center px-2 py-4">
//               <p
//                 className={`font-medium ${
//                   reward.rewardStatus === "Redeemed"
//                     ? "text-green-600"
//                     : "text-yellow-500"
//                 }`}
//               >
//                 {reward.rewardStatus}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableCredits;

import React from 'react'

// Define the type for a single credit document
interface CreditDoc {
  credits: number
  date: {
    seconds: number
    nanoseconds: number
  }
  reference: string
  status: string
  type: string
  userId: string
}

// Define the props for the component
interface TableCreditsProps {
  creditDocs: CreditDoc[]
}

const TableCredits: React.FC<TableCreditsProps> = ({ creditDocs }) => {
  console.log('Credits Data:', creditDocs)

  return (
    <div className='rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card'>
      <h4 className='mb-10 font-bold text-body-2xlg text-dark dark:text-white'>
        Credits History
      </h4>

      {creditDocs.length > 0 ? (
        <div className='flex flex-col'>
          {/* Table Headers */}
          <div className='grid grid-cols-5 text-button-gpt'>
            <div className='px-2 pb-3.5'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Credit Amount
              </h5>
            </div>
            <div className='px-2 pb-3.5 text-center'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Date
              </h5>
            </div>
            <div className='px-2 pb-3.5 text-center'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Reference
              </h5>
            </div>
            <div className='px-2 pb-3.5 text-center'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Status
              </h5>
            </div>
            <div className='px-2 pb-3.5 text-center'>
              <h5 className='text-sm font-medium uppercase xsm:text-base'>
                Type
              </h5>
            </div>
          </div>

          {/* Table Rows */}
          {creditDocs.map((credit, key) => (
            <div
              className={`grid grid-cols-5 ${
                key === creditDocs.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-dark-3'
              }`}
              key={key}
            >
              {/* Credit Amount */}
              <div className='flex justify-center items-center mr-5 gap-3.5 px-2 py-4'>
                <p className='font-medium text-dark dark:text-white'>
                  {credit.credits}
                </p>
              </div>

              {/* Date */}
              <div className='flex items-center justify-center px-2 py-4'>
                <p className='font-medium text-dark dark:text-white'>
                  {new Date(credit.date.seconds * 1000).toLocaleDateString()}
                </p>
              </div>

              {/* Reference */}
              <div className='flex items-center justify-center px-2 py-4'>
                <p className='font-medium text-dark dark:text-white'>
                  {truncateString(credit.reference, 15)}
                </p>
              </div>

              {/* Status */}
              <div className='flex items-center justify-center px-2 py-4'>
                <p
                  className={`font-medium ${
                    credit.status === 'Completed'
                      ? 'text-green-600'
                      : 'text-yellow-500'
                  }`}
                >
                  {credit.status}
                </p>
              </div>

              {/* Type */}
              <div className='flex items-center justify-center px-2 py-4'>
                <p className='font-medium text-dark dark:text-white'>
                  {credit.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-black dark:text-white'>
          No documents available
        </p>
      )}
    </div>
  )
}

export default TableCredits

function truncateString (str: string, maxLength: number) {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str
}
