// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import BillCard from "@/components/cards/billCard";
// import { Grid, Box, Typography } from "@mui/material";
// import Button from '@/components/button'
// const PaymentsHistory = () => {
//   const { user } = useAuth();
//   const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
//   const navigate = useNavigate();
//   const sortedFiles = [1, 2, 3, 4, 5];

//   const handleCardClick = (index: number) => {
//     // Toggle the index in the selectedIndex array
//     setSelectedIndex((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index) // Remove if already selected
//         : [...prev, index] // Add if not selected
//     );
//   };

//   return (
//     <div className="px-4">
//       {/* Header Section */}
//       <div  className="flex flex-row justify-between w-full" >
//         <div className="">
//           <h2 className="text-2xl font-bold">Hey, {user?.name}!</h2>
//           <p className="mt-2 text-gray-500">Upcoming Bills</p>
//           </div>
//           <div><Button children={"Proceed"} className="w-15 bg-button-gpt rounded-xl h-2/3 text-lg" onClick={() => {
//                 // console.log("janwari")
//             navigate("/payEarly")
//             // console.log("janwar")
//             // window.location.reload();

//           }}/></div>
//         </div>

//       {/* Grid Section */}
//       <Box sx={{ flexGrow: 1, paddingTop: "2em" }}>
//         <Grid container justifyContent="center" spacing={2}>
//           {sortedFiles.map((index) => (
//             <Grid item key={index}>
//               <div
//                 className={`${
//                   selectedIndex.includes(index)
//                     ? "border-4 border-button-gpt rounded-2xl"
//                     : ""
//                 }`}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <BillCard indexC={index} />
//               </div>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default PaymentsHistory;

import TableOne from "../components/TableOneForRewards";

const PaymentsHistory = () => {
  return (
    <div className="mt-6 bg-white">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 md:text-4xl">
          Record Of Previous Transactions:
        </h3>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-lg">
          <TableOne />
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistory;
