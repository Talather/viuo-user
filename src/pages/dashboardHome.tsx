


// import { Grid } from '@mui/material'
// import { useEffect, useState } from 'react'
// import TotalIncomeDarkCard from '../../src/components/cards/TotalIncomeDarkCard'
// import TotalIncomeLightCard from '../../src/components/cards/TotalIncomeLightCard'
// import WeeklyChart from '../../src/components/charts/weekly'
// import ExpenseChart from '../../src/components/charts/expenseChart'
// import EarningCard from '@/components/cards/earningCard/code'
// import TotalOrderLineChartCard from '@/components/cards/totalOrderLineChartCard/code'

// const DashboardHome = () => {
//   const [isLoading, setLoading] = useState(true)

//   useEffect(() => {
//     setLoading(false)
//   }, [])

//   return (
//     <div className='container p-4 mx-auto'>
    

//       {/* Cards Section */}
//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={6} lg={4}>
//           <EarningCard isLoading={isLoading} />
//         </Grid>
//         <Grid item xs={12} sm={6} lg={4}>
//           <TotalOrderLineChartCard isLoading={isLoading} />
//         </Grid>
//         <Grid item xs={12} sm={6} lg={4}>
//           <TotalIncomeDarkCard isLoading={isLoading} />
//         </Grid>
//         <Grid item xs={12} sm={6} lg={4}>
//           <TotalIncomeLightCard isLoading={isLoading} />
//         </Grid>
//       </Grid>

//       {/* Charts Section */}
//       <div
//         className='flex flex-row justify-between '
//         // 'grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2'
//       >
//         <div className='w-2/3 p-6 bg-white rounded-lg shadow-lg'>
//           <h2 className='mb-4 text-lg font-medium text-gray-800'>
//             Weekly Overview
//           </h2>
//           <WeeklyChart />
//         </div>
//         <div className='p-6 bg-white rounded-lg shadow-lg'>
//           <h2 className='mb-4 text-lg font-medium text-gray-800'>
//             Expense Breakdown
//           </h2>
//           <div className='h-80'>
//             <ExpenseChart />
//           </div>
//         </div>
//       </div>
//      </div>
//   )
// }

// export default DashboardHome






import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import TotalIncomeDarkCard from '../../src/components/cards/TotalIncomeDarkCard'
import TotalIncomeLightCard from '../../src/components/cards/TotalIncomeLightCard'
import WeeklyChart from '../../src/components/charts/weekly'
import ExpenseChart from '../../src/components/charts/expenseChart'
import EarningCard from '@/components/cards/earningCard/code'
import TotalOrderLineChartCard from '@/components/cards/totalOrderLineChartCard/code'

const DashboardHome = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className='container p-4 mx-auto'>
      {/* Cards Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <EarningCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalOrderLineChartCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalIncomeDarkCard isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TotalIncomeLightCard isLoading={isLoading} />
        </Grid>
      </Grid>

      

      <div className='mt-12'>
      {/* Charts Section */}
      <Grid container spacing={4} mt-8>
        <Grid item xs={12} sm={12} md={8}>
          <div className='p-6 bg-white rounded-lg shadow-2xl'>
            <h2 className='mb-4 text-lg font-medium text-gray-800'>
              Annually Overview
            </h2>
            <WeeklyChart />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div className='p-6 bg-white rounded-lg shadow-lg'>
            <h2 className='mb-4 text-lg font-medium text-gray-800'>
              Bills Breakdown
            </h2>
            <div className='h-96'>
              <ExpenseChart />
            </div>
          </div>
        </Grid>
      </Grid>
      </div>
      </div>
  )
}

export default DashboardHome

