// // // import { useAuth } from "../hooks/useAuth";
// // // import { useNavigate } from "react-router-dom";
// // // import { useState } from "react";
// // // import BillCard from "@/components/cards/billCard";
// // // import { Grid, Box, Typography } from "@mui/material";
// // // import Button from '@/components/button'
// // // const PayEarly = () => {
// // //   const { user } = useAuth();
// // //   const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
// // //   const navigate = useNavigate();
// // //   const sortedFiles = [1, 2, 3, 4, 5];

// // //   const handleCardClick = (index: number) => {
// // //     // Toggle the index in the selectedIndex array
// // //     setSelectedIndex((prev) =>
// // //       prev.includes(index)
// // //         ? prev.filter((i) => i !== index) // Remove if already selected
// // //         : [...prev, index] // Add if not selected
// // //     );
// // //   };

// // //   return (
// // //     <div className="px-4">
// // //       {/* Header Section */}
// // //       <div  className="flex flex-row justify-between w-full" >
// // //         <div className="">
// // //           <h2 className="text-2xl font-bold">Hey, {user?.name}!</h2>
// // //           <p className="mt-2 text-gray-500">Upcoming Bills</p>
// // //           </div>
// // //           <div><Button children={"Proceed"} className="text-lg w-15 bg-button-gpt rounded-xl h-2/3" onClick={() => {
// // //                 // console.log("janwari")
// // //             navigate("/payEarly")
// // //             // console.log("janwar")
// // //             // window.location.reload();

// // //           }}/></div>
// // //         </div>

// // //       {/* Grid Section */}
// // //       <Box sx={{ flexGrow: 1, paddingTop: "2em" }}>
// // //         <Grid container justifyContent="center" spacing={2}>
// // //           {sortedFiles.map((index) => (
// // //             <Grid item key={index}>
// // //               <div
// // //                 className={`${
// // //                   selectedIndex.includes(index)
// // //                     ? "border-4 border-button-gpt rounded-2xl"
// // //                     : ""
// // //                 }`}
// // //                 onClick={() => handleCardClick(index)}
// // //               >
// // //                 <BillCard indexC={index} />
// // //               </div>
// // //             </Grid>
// // //           ))}
// // //         </Grid>
// // //       </Box>
// // //     </div>
// // //   );
// // // };

// // // export default PayEarly;

// // import { useAuth } from "../hooks/useAuth";
// // import { useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import BillCard from "@/components/cards/billCard";
// // import { Grid, Box } from "@mui/material";
// // import Button from '@/components/button'
// // const PayEarly = () => {
// //   const { user } = useAuth();
// //   const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
// //   const navigate = useNavigate();
// //   const sortedFiles = [1, 2, 3, 4, 5];

// //   const handleCardClick = (index: number) => {
// //     // Toggle the index in the selectedIndex array
// //     setSelectedIndex((prev) =>
// //       prev.includes(index)
// //         ? prev.filter((i) => i !== index) // Remove if already selected
// //         : [...prev, index] // Add if not selected
// //     );
// //   };

// //   return (
// //     <div className="px-4">
// //       {/* Header Section */}
// //       <div  className="flex flex-row justify-between w-full" >
// //         <div className="">
// //           <h2 className="text-2xl font-bold">Hey, {user?.name}!</h2>
// //           <p className="mt-2 text-gray-500">Total Bills:{sortedFiles?.length}</p>
// //           </div>
// //           <div><Button children={"Proceed"} className="text-lg w-15 bg-button-gpt rounded-xl h-2/3" onClick={() => {
// //                 // console.log("janwari")
// //             navigate("/transaction")
// //             // console.log("janwar")
// //             // window.location.reload();

// //           }}/></div>
// //           </div>

// //       {/* Grid Section */}
// //       <Box sx={{ flexGrow: 1, paddingTop: "2em" }}>
// //         <Grid container justifyContent="center" spacing={2}>
// //           {sortedFiles.map((index) => (
// //             <Grid item key={index}>
// //               <div
// //                 className={`${
// //                   selectedIndex.includes(index)
// //                     ? "animate-glow transform scale-93 shadow-xl shadow-button-gpt transition-all"
// //                     : "transition-shadow transform"
// //                           } rounded-xl cursor-pointer p-3
// //                   `}
// //                       //hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 border-2 border-transparent hover:border-yellow-400 duration-300 ease-in-out

// //                 onClick={() => handleCardClick(index)}
// //               >
// //                 <BillCard indexC={index} />
// //               </div>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Box>
// //     </div>
// //   );
// // };

// // export default PayEarly;

// import { useState, useEffect } from 'react'
// import { useAuth } from '../hooks/useAuth'
// import { useNavigate } from 'react-router-dom'
// import BillCard from '@/components/cards/billCard'
// import { Grid, Box } from '@mui/material'
// import Button from '@/components/button'
// // import { fetchBillsForSpecificUser } from '@/lib/clientControllers/bills'
// import { ClipLoader } from 'react-spinners'
// import { Timestamp } from 'firebase/firestore'
// import { useBillPaymentContext } from '../context/paymentBillsContext'
// import { useUserAssets } from '@/context/userSpecificAssetsContext'

// interface Bill {
//   id?: string
//   user_id: any
//   biller_id?: any
//   amount: number
//   due_date: string
//   status: string
//   payment_method_id: any
//   early_payment_savings?: number
//   is_consolidated?: boolean
//   created_at: Timestamp
//   updated_at: Timestamp
// }

// // const filterAndMarkBills = (bills: Bill[]): Bill[] => {
// //   const today = new Date()
// //   const fifteenDaysFromNow = new Date()
// //   fifteenDaysFromNow.setDate(today.getDate() + 15)

// //   return bills.map(bill => {
// //     const dueDate = new Date(bill.due_date)
// //     const isTopPriority = dueDate >= today && dueDate <= fifteenDaysFromNow

// //     return {
// //       ...bill,
// //       topPriority: isTopPriority
// //     }
// //   })
// // }

// const PayEarly = () => {
//   const { user } = useAuth()
//   const [bills] = useState<Bill[]>([])
//   const {userBills}=useUserAssets()
//   const [selectedBillsArray, setSelectedBillsArray] = useState<any[]>([])
//   const [loading] = useState<boolean>(false)
//   const navigate = useNavigate()
//   const { addAllBillsOnce } = useBillPaymentContext()

//   // const fetchBills = async () => {
//   //   if (!user?.id) return

//   //   setLoading(true)
//   //   try {
//   //     let billsData: any = await fetchBillsForSpecificUser(user?.id)
//   //     billsData = filterAndMarkBills(billsData)
//   //     setBills(billsData)
//   //   } catch (error) {
//   //     console.error('Error fetching bills:', error)
//   //   } finally {
//   //     setLoading(false)
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchBills()
//   // }, [user?.id])

//   // // Update the context with the selected bills

//   useEffect(() => {
//     addAllBillsOnce(selectedBillsArray) // Update the context with selected bills
//   }, [selectedBillsArray, addAllBillsOnce])

//   const handleCardClick = (bill: Bill) => {
//     setSelectedBillsArray(prevSelectedBills => {
//       // Check if the bill is already in the selectedBillsArray
//       if (prevSelectedBills.some(selectedBill => selectedBill.id === bill.id)) {
//         return prevSelectedBills.filter(
//           selectedBill => selectedBill.id !== bill.id
//         ) // Remove the bill if already selected
//       } else {
//         return [...prevSelectedBills, bill] // Add the bill if it's not selected
//       }
//     // }
//   }

//   return (
//     <div className='px-4'>
//       {/* Header Section */}
//       <div className='flex flex-row justify-between w-full'>
//         <div>
//           <h2 className='text-2xl font-bold'>Hey, {user?.name}!</h2>
//           <p className='mt-2 text-gray-500'>Total Bills: {bills?.length}</p>
//         </div>
//         <div>
//           <Button
//             children='Proceed'
//             className='text-lg w-15 bg-button-gpt rounded-xl h-2/3'
//             onClick={() => navigate('/transaction')}
//           />
//         </div>
//       </div>

//       {/* Grid Section */}
//       <Box sx={{ flexGrow: 1, paddingTop: '2em' }}>
//         {loading ? (
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: '30vh'
//             }}
//           >
//             <ClipLoader size={70} color='#39b996' />
//           </div>
//         ) : (
//           <Grid container justifyContent='center' spacing={2}>
//             {userBills.map((bill:any) => (
//               <Grid item key={bill.id}>
//                 <div
//                   className={`${
//                     selectedBillsArray.some(b => b.id === bill.id)
//                       ? 'animate-glow transform scale-93 shadow-xl shadow-button-gpt transition-all'
//                       : 'transition-shadow transform'
//                   } rounded-xl cursor-pointer p-3`}
//                   onClick={() => handleCardClick(bill)}
//                 >
//                   <BillCard bill={bill} />
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Box>
//     </div>
//   )
// }

// export default PayEarly

import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import BillCard from "@/components/cards/billCard";
import { Grid, Box } from "@mui/material";
import Button from "@/components/button";
import { ClipLoader } from "react-spinners";
import { useBillPaymentContext } from "../context/paymentBillsContext";
import { useUserAssets } from "@/context/userSpecificAssetsContext";
import { Timestamp } from "firebase/firestore";

// Define the Bill type
interface Bill {
  id: string;
  user_id: string;
  name: string;
  biller_id?: string;
  amount: number;
  due_date: string;
  status: string;
  payment_method_id: string;
  early_payment_savings?: number;
  is_consolidated?: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}

const PayEarly = () => {
  const { user } = useAuth();
  const { userBills } = useUserAssets();
  const { addAllBillsOnce } = useBillPaymentContext();
  const [selectedBills, setSelectedBills] = useState<Bill[]>([]);
  const [loading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Update context whenever selectedBills changes
  useEffect(() => {
    addAllBillsOnce(selectedBills);
  }, [selectedBills, addAllBillsOnce]);

  // Handle selecting or deselecting a bill
  const handleCardClick = (bill: Bill) => {
    setSelectedBills(
      (prev) =>
        prev.some((selectedBill) => selectedBill.id === bill.id)
          ? prev.filter((selectedBill) => selectedBill.id !== bill.id) // Deselect
          : [...prev, bill] // Select
    );
  };

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-row justify-between w-full">
        <div>
          <h2 className="text-2xl font-bold">Hey, {user?.firstName}!</h2>
          <p className="mt-2 text-gray-500">Total Bills: {userBills?.length}</p>
        </div>
        <div>
          <Button
            children="Proceed"
            className="text-lg w-15 bg-button-gpt rounded-xl h-2/3"
            onClick={() => navigate("/transaction")}
          />
        </div>
      </div>

      {/* Grid Section */}
      <Box sx={{ flexGrow: 1, paddingTop: "2em" }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
            }}
          >
            <ClipLoader size={70} color="#39b996" />
          </div>
        ) : (
          <Grid container justifyContent="center" spacing={2}>
            {userBills.map((bill: Bill) => (
              <Grid item key={bill.id}>
                <div
                  className={`rounded-xl cursor-pointer p-3 ${
                    selectedBills.some((b) => b.id === bill.id)
                      ? "animate-glow transform scale-93 shadow-xl shadow-button-gpt transition-all"
                      : "transition-shadow transform"
                  }`}
                  onClick={() => handleCardClick(bill)}
                >
                  <BillCard bill={bill} />
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default PayEarly;
