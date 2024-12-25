// 'use client'
// import { ApexOptions } from 'apexcharts'
// import React from 'react'
// import ReactApexChart from 'react-apexcharts'
// import DefaultSelectOption from '@/components/SelectOption/DefaultSelectOption'

// const ChartThree: React.FC = () => {
//   const series = [65, 34, 12, 56]

//   const options: ApexOptions = {
//     chart: {
//       fontFamily: 'Satoshi, sans-serif',
//       type: 'donut'
//     },
//     colors: ['#5750F1', '#5475E5', '#8099EC', '#ADBCF2'],
//     labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
//     legend: {
//       show: false,
//       position: 'bottom'
//     },

//     plotOptions: {
//       pie: {
//         donut: {
//           size: '80%',
//           background: 'transparent',
//           labels: {
//             show: true,
//             total: {
//               show: true,
//               showAlways: true,
//               label: 'Visitors',
//               fontSize: '16px',
//               fontWeight: '400'
//             },
//             value: {
//               show: true,
//               fontSize: '28px',
//               fontWeight: 'bold'
//             }
//           }
//         }
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     responsive: [
//       {
//         breakpoint: 2600,
//         options: {
//           chart: {
//             width: 415
//           }
//         }
//       },
//       {
//         breakpoint: 640,
//         options: {
//           chart: {
//             width: 200
//           }
//         }
//       }
//     ]
//   }

//   return (
//     <div className='h-96 border-solid p-8 w-1/2 col-span-12 rounded-[20px] bg-gray-100 px-7.5 pb-7 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5'>
//       <div className='justify-between gap-4 mb-9 sm:flex'>
//         <div>
//           <h4 className='font-bold text-body-2xlg text-dark dark:text-white'>
//             Savings This Month
//           </h4>
//         </div>
//         <div>
//           <DefaultSelectOption options={['Monthly', 'Yearly']} />
//         </div>
//       </div>

      













// <div className="flex items-center justify-center bg-white-100 h-1/2">
//   <div className="relative w-32 h-32">
    
//     <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-300 rounded-full"></div>
    
//     <div
//             className="absolute top-0 left-0 w-full h-full rounded-full border-5 border-button-gpt"
//             style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)", transform: "rotate(252deg)" }}
//     ></div>
    
    
//     <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg font-bold text-gray-700">
//       70%
//     </div>
//   </div>
//       </div>


//       <div className='flex items-center justify-center mt-8 text-lg font-bold text-gray-700'>
//   700 USD Saved This Month
// </div>

//       </div>

    
//   )
// }

// export default ChartThree



































'use client'

// import { ApexOptions } from 'apexcharts'
import React from 'react'
// import ReactApexChart from 'react-apexcharts'
import DefaultSelectOption from '@/components/SelectOption/DefaultSelectOption'

const ChartThree: React.FC = () => {
  // const series = [65, 34, 12, 56]

  // const options: ApexOptions = {
  //   chart: {
  //     fontFamily: 'Satoshi, sans-serif',
  //     type: 'donut'
  //   },
  //   colors: ['#5750F1', '#5475E5', '#8099EC', '#ADBCF2'],
  //   labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
  //   legend: {
  //     show: false,
  //     position: 'bottom'
  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: '80%',
  //         background: 'transparent',
  //         labels: {
  //           show: true,
  //           total: {
  //             show: true,
  //             showAlways: true,
  //             label: 'Visitors',
  //             fontSize: '16px',
  //             fontWeight: '400'
  //           },
  //           value: {
  //             show: true,
  //             fontSize: '28px',
  //             fontWeight: 'bold'
  //           }
  //         }
  //       }
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 1024, // Tablet
  //       options: {
  //         chart: {
  //           width: 300
  //         }
  //       }
  //     },
  //     {
  //       breakpoint: 640, // Mobile
  //       options: {
  //         chart: {
  //           width: 200
  //         },
  //         plotOptions: {
  //           pie: {
  //             donut: {
  //               size: '70%'
  //             }
  //           }
  //         }
  //       }
  //     }
  //   ]
  // }

  return (
    <div className='h-auto border-solid p-6 w-full max-w-xl mx-auto rounded-[20px] bg-gray-200 shadow-lg  dark:bg-gray-dark dark:shadow-card'>
      {/* Header */}
      <div className='flex justify-between gap-4 mb-6 sm:flex'>
        <h4 className='text-xl font-bold text-gray-800 dark:text-white'>
          Savings This Month
        </h4>
        <DefaultSelectOption options={['Monthly', 'Yearly']} />
      </div>

      {/* Chart */}
      {/* <div className='flex items-center justify-center'>
        <ReactApexChart options={options} series={series} type='donut' />
      </div> */}

      {/* Circular Percentage */}
      <div className='flex flex-col items-center mt-8'>
        <div className='relative w-32 h-32'>
          {/* Background Circle */}
          <div className='absolute top-0 left-0 w-full h-full border-4 border-gray-400 rounded-full'></div>
          {/* Progress Circle */}
          <div
            className='absolute top-0 left-0 w-full h-full border-4 rounded-full border-button-gpt'
            style={{
              clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)',
              transform: 'rotate(252deg)'
            }}
          ></div>
          {/* Text in Circle */}
          <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full text-lg font-bold text-gray-700'>
            70%
          </div>
        </div>
        <p className='mt-4 text-lg font-bold text-gray-700'>
          700 USD Saved This Month
        </p>
      </div>
    </div>
  )
}

export default ChartThree

