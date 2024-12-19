// import CreateCard from "@/components/cards/cards"
// <<<<<<< HEAD
// import DashBoardTabs from "@/components/tabs"
// import { useAuth } from "../hooks/useAuth"
// import { useNavigate } from "react-router-dom"
// import BillsTable from "@/components/table"
// import BillCard from "@/components/cards/billCard";
// import { Grid, Box } from "@mui/material";

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
import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import BillsTable from "@/components/table";

// import DashBoardTabs from "@/components/tabs";
// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom"

import BillCard from "@/components/cards/billCard";
import { Grid, Box } from "@mui/material";

// const sortedFiles = [1, 2, 3, 4, 5];
const Dashboard = () => {
  const { user } = useAuth();

  console.log("currentUser -->", user);
  // const navigate = useNavigate();
  const sortedFiles = [1, 2, 3, 4, 5];

  // console.log("currentUser-->", user);
  // const navigate = useNavigate()


  return (
    <div className="px-4">
      <div
        className="
          flex flex-col items-start justify-between w-full gap-2 mt-3 md:flex-row
        "
      >
        {/* <BillsTable /> */}
        <div className="w-[290px]">

          <h2 className="text-2xl font-bold">Hey, {user?.name}!</h2>
          <p className="mt-2 text-gray-500">Upcoming Bills</p>
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-4 md:flex-row justify-evenly"
      >
        {/* Uncomment and use this block when ready */}
        {/* 
        <CreateCard
          handleClick={() => navigate("/select")}
          title="Resume"
          subTitle="Better resume builder"
        />
        */}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
          }}
        >
          <Box sx={{ flexGrow: 1, paddingTop: "1em" }}>
            <Grid container justifyContent="center" spacing={2}>
              {sortedFiles.map((files,index) => (
                <Grid item key={index}>
                  <BillCard indexC={index} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

