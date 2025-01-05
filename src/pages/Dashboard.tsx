/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useEffect
} from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import BillCard from "@/components/cards/billCard";
import { Grid, Box } from "@mui/material";
import Button from "@/components/button";
// import { fetchBillsForSpecificUser } from "@/lib/clientControllers/bills";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useUserAssets, useUserAssetsDispatch } from "@/context/userSpecificAssetsContext";
import { onSnapshot, collection } from 'firebase/firestore'
import { db } from '@/lib/firebaseConfig' // Your Firebase setup file


// Define an interface for Bill data
// interface Bill {
//   id: string;
//   user_id: string;
//   amount: number;
//   due_date: string;
//   status: string;
//   payment_method_id: string;
//   early_payment_savings?: number;
//   is_consolidated?: boolean;
// }

const Dashboard = () => {
  const { user } = useAuth();
  const { userBills } = useUserAssets()
  const dispatch=useUserAssetsDispatch()
  console.log("userBillshijra",userBills)
  // const [bills, setBills] = useState<Bill[]>([]); // State to store bills
  const [loading,
    // setLoading
  ] = useState<boolean>(false); // Loading state
  const navigate = useNavigate();

  // Filter and mark bills as top priority based on due date

  // const filterAndMarkBills = (bills: Bill[]) => {
  //   const today = new Date();
  //   const fifteenDaysFromNow = new Date();
  //   fifteenDaysFromNow.setDate(today.getDate() + 15);

  //   return bills.map((bill) => {
  //     const dueDate = new Date(bill.due_date);
  //     const isTopPriority = dueDate >= today && dueDate <= fifteenDaysFromNow;
  //     return { ...bill, topPriority: isTopPriority };
  //   });
  // };

  // Fetch bills for the specific user
  // const fetchBills = async () => {
  //   if (!user?.id) return;
  //   setLoading(true);

  //   try {
  //     let billsData: any = await fetchBillsForSpecificUser(user.id);
  //     billsData = filterAndMarkBills(billsData);
  //     setBills(billsData);
  //   } catch (error) {
  //     console.error("Error fetching bills:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Fetch bills when the component is mounted
  // useEffect(() => {
  //   fetchBills();
  // }, [user?.id]);











































































useEffect(() => {
  // if (user) {
    const billsCollectionRef = collection(db, 'bills') // Replace with your collection name
    const unsubscribe = onSnapshot(
      billsCollectionRef,
      snapshot => {
        const bills = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        dispatch({type:"SET_ALL_BILLS",payload:bills})
        // Update the context with the latest data
      },
      error => {
        console.error('Error listening to bills updates:', error)
      }
    )

    return () => unsubscribe() // Cleanup listener on unmount
  // }
}, [])


  return (
    <div className="px-4">
      <div className="flex flex-col items-start justify-between w-full gap-2 mt-3 md:flex-row">
        <div className="flex flex-row justify-between w-full">
          <div>
            <h2 className="text-2xl font-bold">Hey, {user?.name}!</h2>
            <p className="mt-2 text-gray-500">Upcoming Bills</p>
          </div>

          <div className="flex flex-row justify-normal">
            <Button
              children={"Pay Early"}
              className="mr-5 rounded-md w-15 bg-button-gpt h-2/3 text-md"
              onClick={() => navigate("/payEarly")}
            />

            <Button
              children={"Create Bill"}
              className=" mr-5 rounded-md w-15 bg-button-gpt h-2/3 text-md"
              onClick={() => navigate("/bills/create/false")}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", marginTop: "3vh" }}>
          <Box sx={{ flexGrow: 1, paddingTop: "1em" }}>
            {loading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30vh",
                }}
              >
                <ClipLoader size={70} color="#39b996" />
              </div>
            ) : userBills.length > 0 ? (
              <Grid container justifyContent="center" spacing={2}>
                {userBills?.length && userBills.map((bill:any) => (
                  <Grid item key={bill.id}>
                    <BillCard bill={bill} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <NoBillsMessage />
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

const NoBillsMessage: React.FC = () => {
  return (
    <div className="mt-32 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-2/3 h-full p-6 text-center rounded-lg shadow-md bg-button-gpt"
      >
        <div className="relative">
          <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 rounded-full bg-button-gpt"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          ></motion.div>
          {/* <span
            role="img"
            aria-label="sad-face"
            className="relative z-10 text-6xl"
          >
            😁
          </span> */}
        </div>
        <p className="mt-4 text-xl font-semibold text-white">
          No bills available
        </p>
      </motion.div>
    </div>
  );
};

export default Dashboard;
