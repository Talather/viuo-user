/* eslint-disable @typescript-eslint/no-explicit-any */
// const CalendarBox = () => {
//   return (
//     <>
//       <div
//         className='w-full max-w-full rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card   bg-button-gpt
// '
//       >
//         <table className='w-full'>
//           <thead>
//             <tr className='grid grid-cols-7 rounded-t-[10px] bg-primary text-white '>
//               <th
//                 className=' bg-button-gpt flex h-15 items-center justify-center rounded-tl-[10px] p-1 text-body-xs font-medium sm:text-base xl:p-5'
//               >
//                 <span className='hidden lg:block'> Sunday </span>
//                 <span className='block lg:hidden'> Sun </span>
//               </th>
//               <th className='flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt '>
//                 <span className='hidden lg:block'> Monday </span>
//                 <span className='block lg:hidden'> Mon </span>
//               </th>
//               <th className='flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt '>
//                 <span className='hidden lg:block'> Tuesday </span>
//                 <span className='block lg:hidden'> Tue </span>
//               </th>
//               <th className='flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt'>
//                 <span className='hidden lg:block'> Wednesday </span>
//                 <span className='block lg:hidden'> Wed </span>
//               </th>
//               <th className='flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt'>
//                 <span className='hidden lg:block'> Thursday </span>
//                 <span className='block lg:hidden'> Thur </span>
//               </th>
//               <th className='flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt'>
//                 <span className='hidden lg:block'> Friday </span>
//                 <span className='block lg:hidden'> Fri </span>
//               </th>
//               <th className='flex h-15 items-center justify-center rounded-tr-[10px] p-1 text-body-xs font-medium sm:text-base xl:p-5   bg-button-gpt'>
//                 <span className='hidden lg:block'> Saturday </span>
//                 <span className='block lg:hidden'> Sat </span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <!-- Line 1 --> */}
//             <tr className='grid grid-cols-7'>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>1</span>
//                 <div className='flex-grow w-full h-16 py-1 cursor-pointer group md:h-30'>
//                   <span className='group-hover:text-primary md:hidden'>
//                     More
//                   </span>
//                   <div className='event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[190%] md:opacity-100'>
//                     <span className='font-medium event-name text-dark dark:text-white'>
//                       Redesign Website
//                     </span>
//                     <span className='text-sm time'>1 Dec - 2 Dec</span>
//                   </div>
//                 </div>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>2</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>3</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>4</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>5</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>6</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>7</span>
//               </td>
//             </tr>
//             {/* <!-- Line 1 --> */}
//             {/* <!-- Line 2 --> */}
//             <tr className='grid grid-cols-7'>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>8</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>9</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   10
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   11
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   12
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   13
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   14
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 2 --> */}
//             {/* <!-- Line 3 --> */}
//             <tr className='grid grid-cols-7'>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   15
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   16
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   17
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   18
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   19
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   20
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   21
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 3 --> */}
//             {/* <!-- Line 4 --> */}
//             <tr className='grid grid-cols-7'>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   22
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   23
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   24
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   25
//                 </span>
//                 <div className='flex-grow w-full h-16 py-1 cursor-pointer group md:h-30'>
//                   <span className='group-hover:text-primary md:hidden'>
//                     More
//                   </span>
//                   <div className='event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-r-[5px] border-l-[3px] border-primary bg-gray-2 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-dark-2 md:visible md:w-[290%] md:opacity-100'>
//                     <span className='font-medium event-name text-dark dark:text-white'>
//                       App Design
//                     </span>
//                     <span className='text-sm time'>25 Dec - 27 Dec</span>
//                   </div>
//                 </div>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   26
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   27
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   28
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 4 --> */}
//             {/* <!-- Line 5 --> */}
//             <tr className='grid grid-cols-7'>
//               <td className='ease relative h-20 cursor-pointer rounded-bl-[10px] border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   29
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   30
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>
//                   31
//                 </span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>1</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>2</span>
//               </td>
//               <td className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>3</span>
//               </td>
//               <td className='ease relative h-20 cursor-pointer rounded-br-[10px] border border-stroke p-2 transition duration-500 hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'>
//                 <span className='font-medium text-dark dark:text-white'>4</span>
//               </td>
//             </tr>
//             {/* <!-- Line 5 --> */}
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default CalendarBox

// import { useState } from 'react'

// const CalendarBox = () => {
//   const [currentDate, setCurrentDate] = useState(new Date())

//   const handlePrevMonth = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
//     )
//   }

//   const handleNextMonth = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
//     )
//   }

//   const handlePrevYear = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear() - 1, currentDate.getMonth())
//     )
//   }

//   const handleNextYear = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear() + 1, currentDate.getMonth())
//     )
//   }

//   const renderDays = () => {
//     const daysInMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     ).getDate()
//     const firstDay = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       1
//     ).getDay()

//     const days = []
//     for (let i = 0; i < firstDay; i++) {
//       days.push(
//         <td
//           key={`empty-${i}`}
//           className='border-stroke dark:border-dark-3'
//         ></td>
//       )
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push(
//         <td
//           key={i}
//           className='relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31'
//         >
//           <span className='font-medium text-dark dark:text-white'>{i}</span>
//         </td>
//       )
//     }

//     return days
//   }

//   return (
//     <div className='w-full max-w-full rounded-[10px]  shadow-1 '>

//       <div className='flex justify-between items-center
//  p-4  text-white  bg-button-gpt-hover
// '>
//         <div className='flex gap-2'>
//           <button
//             className='px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90'
//             onClick={handlePrevYear}
//           >
//             « Year
//           </button>
//           <button
//             className='px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90'
//             onClick={handlePrevMonth}
//           >
//             « Month
//           </button>
//         </div>
//         <span className='text-lg font-medium'>
//           {currentDate.toLocaleString('default', { month: 'long' })}{' '}
//           {currentDate.getFullYear()}
//         </span>
//         <div className='flex gap-2'>
//           <button
//             className='px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90'
//             onClick={handleNextMonth}
//           >
//             Month »
//           </button>
//           <button
//             className='px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90'
//             onClick={handleNextYear}
//           >
//             Year »
//           </button>
//         </div>
//       </div>
//       <table className='w-full rounded-lg'>
//         <thead className="rounded-lg"
// >
//           <tr className='grid grid-cols-7 rounded-lg bg-primary text-white'>
//             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
//               (day, index) => (
//                 <th
//                   key={index}
//                   className='bg-button-gpt flex h-15 items-center justify-center p-1 text-body-xs font-medium sm:text-base xl:p-5'
//                 >
//                   {day}
//                 </th>
//               )
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {[...Array(Math.ceil(renderDays().length / 7))].map(
//             (_, weekIndex) => (
//               <tr key={weekIndex} className='grid grid-cols-7'>

//                 {renderDays().slice(weekIndex * 7, weekIndex * 7 + 7)}
//               </tr>
//             )
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default CalendarBox
// //

// //<tr className='grid grid-cols-7'>
// //   {[...Array(7)].map((_, index) => {
// //     const date = index + 15 // Example: Starting from 15 for this row
// //     return (
// //       <td
// //         key={date}
// //         className={`relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31 ${
// //           date === 15 ? 'bg-primary text-white' : 'text-dark dark:text-white'
// //         }`}
// //       >
// //         <span className='font-medium'>{date}</span>
// //       </td>
// //     )
// //   })}
// // </tr>

import { useState } from "react";
import { useUserAssets } from "@/context/userSpecificAssetsContext";
const CalendarBox = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { userBills } = useUserAssets();
  const currentMonth = currentDate
    .toLocaleString("default", { month: "long" })
    .toLowerCase();
  const currentYear = currentDate.getFullYear();
  console.log(currentYear);

  const upcomingBills = getUpcomingBillsByMonth(userBills);
  // Function to handle month navigation
  const navigateMonth = (direction: any) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };
  // Function to handle year navigation
  const navigateYear = (direction: any) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(currentDate.getFullYear() + direction);
    setCurrentDate(newDate);
  };
  const getDaysInMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate(); // Get number of days in the month
  };
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ); // First day of the month
  const firstDayOfWeek = startOfMonth.getDay(); // Day of the week the month starts on
  const totalDaysInMonth = getDaysInMonth(currentDate);
  return (
    <>
      <div className="w-full max-w-full  bg-white shadow-1 dark:bg-gray-dark dark:shadow-card ">
        <div className="flex rounded-t-[10px] justify-between items-center p-4  text-white  bg-button-gpt-hover">
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90"
              onClick={() => navigateYear(-1)}
            >
              « Year
            </button>
            <button
              className="px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90"
              onClick={() => navigateMonth(-1)}
            >
              « Month
            </button>
          </div>
          <span className="text-lg font-medium">
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </span>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90"
              onClick={() => navigateMonth(1)}
            >
              Month »
            </button>
            <button
              className="px-3 py-1 bg-button-gpt rounded hover:bg-opacity-90"
              onClick={() => navigateYear(1)}
            >
              Year »
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7  bg-primary text-white">
              <th className="bg-button-gpt flex h-15 items-center justify-center  p-1 text-body-xs font-medium sm:text-base xl:p-5">
                <span className="hidden lg:block"> Sunday </span>
                <span className="block lg:hidden"> Sun </span>
              </th>
              <th className="flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt">
                <span className="hidden lg:block"> Monday </span>
                <span className="block lg:hidden"> Mon </span>
              </th>
              <th className="flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt">
                <span className="hidden lg:block"> Tuesday </span>
                <span className="block lg:hidden"> Tue </span>
              </th>
              <th className="flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt">
                <span className="hidden lg:block"> Wednesday </span>
                <span className="block lg:hidden"> Wed </span>
              </th>
              <th className="flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt">
                <span className="hidden lg:block"> Thursday </span>
                <span className="block lg:hidden"> Thur </span>
              </th>
              <th className="flex items-center justify-center p-1 font-medium h-15 text-body-xs sm:text-base xl:p-5 bg-button-gpt">
                <span className="hidden lg:block"> Friday </span>
                <span className="block lg:hidden"> Fri </span>
              </th>
              <th className="flex h-15 items-center justify-center rounded-tr-[10px] p-1 text-body-xs font-medium sm:text-base xl:p-5 bg-button-gpt">
                <span className="hidden lg:block"> Saturday </span>
                <span className="block lg:hidden"> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(Math.ceil((totalDaysInMonth + firstDayOfWeek) / 7))].map(
              (_, rowIndex) => (
                <tr key={rowIndex} className="grid grid-cols-7">
                  {[...Array(7)].map((_, colIndex) => {
                    const day = rowIndex * 7 + colIndex - firstDayOfWeek + 1;
                    if (day > 0 && day <= totalDaysInMonth) {
                      const markedBill =
                        upcomingBills[currentYear] &&
                        upcomingBills[currentYear][currentMonth.toLowerCase()]
                          ? upcomingBills[currentYear][
                              currentMonth.toLowerCase()
                            ].find((bill) => bill.day === day)
                          : null;

                      const isMarked = !!markedBill; // Converts the result to a boolean
                      const markedBillName = markedBill
                        ? markedBill.name
                        : null;
                      const markedBillAmount = markedBill
                        ? markedBill.amount
                        : null;

                      return (
                        <td
                          key={colIndex}
                          className={`relative h-24 p-1 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray-2 dark:border-dark-3 dark:hover:bg-dark-2 md:h-25 md:p-6 xl:h-31 ${
                            isMarked
                              ? "bg-button-gpt text-white"
                              : "bg-transparent"
                          }`}
                        >
                          {isMarked ? (
                            <div
                              className="
                               event invisible 
                            absolute left-2 top-3
                            z-99
                            
                            flex
                            w-[300%]
                             flex-col
                             rounded-r-[5px]
                              border-l-[3px]
                               border-white
                               
                               px-3 py-1
                               
                                text-left
                                 opacity-0
                                 group-hover:visible
                                  group-hover:opacity-100
                                  dark:bg-dark-2
                                  md:visible
                                  md:w-[290%]
                                  md:mb-10
                                  md:opacity-100"
                            >
                              <span className="event-name font-sm text-dark dark:text-white">
                                {`Bill:${truncateString(markedBillName, 15)}`}
                              </span>
                              <span className="event-name font-sm text-dark dark:text-white">
                                {`Amount:${markedBillAmount}`}
                              </span>
                              <span className="event-name font-sm text-dark dark:text-white">
                                {`Day:${day}`}
                              </span>
                            </div>
                          ) : (
                            // </div>
                            <span className="font-medium text-dark dark:text-white">
                              {day}
                            </span>
                          )}
                        </td>
                      );
                    }
                    return <td key={colIndex}></td>;
                  })}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CalendarBox;

interface Bill {
  name: string;
  dueDate: string;
  amount: number;
}

function getUpcomingBillsByMonth(
  bills: Bill[]
): Record<
  string,
  Record<string, { name: string; amount: number; day: number }[]>
> {
  const currentDate = new Date();

  // Get today's date
  const todayDay = currentDate.getDate();
  const todayMonth = currentDate
    .toLocaleString("default", { month: "long" })
    .toLowerCase();
  const todayYear = currentDate.getFullYear();

  // Filter bills that have a due date greater than or equal to the current date
  const upcomingBills = bills.filter((bill) => {
    const billDueDate = new Date(bill.dueDate);
    return billDueDate >= currentDate;
  });

  // Group the filtered bills by year and month
  const groupedBills: Record<
    string,
    Record<string, { name: string; amount: number; day: number }[]>
  > = {};

  upcomingBills.forEach((bill) => {
    const billDueDate = new Date(bill.dueDate);
    const billYear = billDueDate.getFullYear();
    const month = billDueDate
      .toLocaleString("default", { month: "long" })
      .toLowerCase(); // Get the month in lowercase
    const day = billDueDate.getDate(); // Get the day of the month

    // Initialize year and month groups
    if (!groupedBills[billYear]) {
      groupedBills[billYear] = {};
    }
    if (!groupedBills[billYear][month]) {
      groupedBills[billYear][month] = [];
    }

    // Add the bill to the respective year and month group
    groupedBills[billYear][month].push({
      name: bill.name,
      amount: bill.amount,
      day: day,
    });
  });

  // Check if today's bills are present and add them if needed
  bills.forEach((bill) => {
    const billDueDate = new Date(bill.dueDate);
    if (
      billDueDate.getFullYear() === todayYear &&
      billDueDate.getMonth() === currentDate.getMonth() &&
      billDueDate.getDate() === todayDay
    ) {
      if (!groupedBills[todayYear]) {
        groupedBills[todayYear] = {};
      }
      if (!groupedBills[todayYear][todayMonth]) {
        groupedBills[todayYear][todayMonth] = [];
      }

      // Add today's bill if not already added
      if (
        !groupedBills[todayYear][todayMonth].some(
          (item) => item.day === todayDay && item.name === bill.name
        )
      ) {
        groupedBills[todayYear][todayMonth].push({
          name: bill.name,
          amount: bill.amount,
          day: todayDay,
        });
      }
    }
  });

  return groupedBills;
}
function truncateString(str: any, maxLength: any) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
