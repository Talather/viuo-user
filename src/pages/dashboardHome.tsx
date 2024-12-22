// import CreateCard from "@/components/cards/cards"
// <<<<<<< HEAD
// import DashBoardTabs from "@/components/tabs"
// import { useAuth } from "../hooks/useAuth"
// import { useNavigate } from "react-router-dom"
// import BillsTable from "@/components/table"
// import BillCard from "@/components/cards/billCard";
import  EarningCard from "@/components/cards/earningCard/code";


import TotalOrderLineChartCard from "@/components/cards/totalOrderLineChartCard/code"

// const Dashboard = () => {
//   const { user } = useAuth()
//   console.log("currentUser-->", user)
//   const navigate = useNavigate()
//   const sortedFiles = [1, 2, 3, 4, 5];

//   return (
//     <div className="px-4">
//       <div className="
//      flex flex-col items-start justify-between w-full gap-2 mt-3 md:flex-row
//       ">
//         <BillsTable />
//          <div className="w-[290px]">
//           <h2 className="text-2xl font-bold">Hey, {user?.email}!</h2>
//           <p className="mt-2 text-gray-500">Upcoming Bills</p>
//         </div>
//         <div className="flex flex-col items-center gap-4 md:flex-row justify-evenly">
//           {/* <CreateCard
//             handleClick={() => navigate("/select")}
//             title="Resume"
//             subTitle="Better resume builder"
//           /> */}

//           {/* <div className="flex flex-col items-center gap-4 md:flex-row justify-evenly"></div> */}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             width: "80%",
//           }}
//         >
//           <Box sx={{ flexGrow: 1, paddingTop: "1em" }}>
//             <Grid container justifyContent="center">
//               {sortedFiles.map((file, index) => (
//                 <div key={index}>
//                   <BillCard key={index} indexC={index} />
//                 </div>
//               ))}
//             </Grid>
//           </Box>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Dashboard

// import CreateCard from "@/components/cards/cards";
// import DashBoardTabs from "@/components/tabs";
import { useAuth } from "../hooks/useAuth"
import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import TotalIncomeDarkCard from '../../src/components/cards/TotalIncomeDarkCard';

import TotalIncomeLightCard from '../../src/components/cards/TotalIncomeLightCard';


import WeeklyChart from "../../src/components/charts/weekly"
import ExpenseChart from "../../src/components/charts/expenseChart"
// import { useNavigate } from "react-router-dom";
// import BillsTable from "@/components/table";

// import DashBoardTabs from "@/components/tabs";
// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom"

// import BillCard from "@/components/cards/billCard"
// import { Grid, Box } from "@mui/material"

// const sortedFiles = [1, 2, 3, 4, 5];
const DashboardHome = () => {
    const { user } = useAuth()
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
      setLoading(false)
    }, [])

  console.log("currentUser -->", user)
  // const navigate = useNavigate();
//   const sortedFiles = [1, 2, 3, 4, 5]

  // console.log("currentUser-->", user);
    // const navigate = useNavigate()
const gridSpacing = 3

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className="h-4"></div>
      <Grid item xs={12}>
        <Grid
          container
          spacing={gridSpacing}
          // style={{ backgroundColor: "white" }}
        >
          <Grid item xs={8} md={8}>
            <div className="px-7 py-7 bg-white-900 rounded-lg">
              <WeeklyChart />
            </div>

            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            // style={{ backgroundColor: "red", margin: "10px" }}
          >
            <div className="px-7 py-7 bg-white-900 rounded-lg">
              <ExpenseChart />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashboardHome
