import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig"; // Firebase configuration
import { useAuth } from "@/hooks/useAuth"; // Auth context

// Define types for the selected bill and context
interface Bill {
  id: string;
  name: string;
  amount: number;
}

interface BillPaymentContextType {
  selectedBills: Bill[];
  addBill: (bill: Bill) => void;
  removeBill: (billId: string) => void;
  clearBills: () => void;
  calculateTotalBills: () => number;
  addAllBillsOnce: (bills: Bill[]) => void;
}

interface BillPaymentProviderProps {
  children: ReactNode;
}

// Create a context with a default value of `undefined`
export const BillPaymentContext = createContext<
  BillPaymentContextType | undefined
>(undefined);

// BillPaymentProvider component that provides the bill state and actions to the context
export const BillPaymentProvider = ({ children }: BillPaymentProviderProps) => {
  const [selectedBills, setSelectedBills] = useState<Bill[]>([]);
  const { user } = useAuth(); // Get the current authenticated user

  useEffect(() => {
    if (!user) {
      setSelectedBills([]); // Clear bills if user is not logged in
      return;
    }
    const billsQuery = query(
      collection(db, "bills"),
      where("userId", "==", user.id)
    );
    const unsubscribe = onSnapshot(
      billsQuery,
      (querySnapshot) => {
        const bills = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Bill[];
        setSelectedBills(bills); // Update state with real-time data
      },
      (error) => {
        console.error("Error listening to bills:", error);
      }
    );
    return () => unsubscribe();
  }, [user]);

  const addBill = (bill: Bill) => {
    setSelectedBills((prevBills) => [...prevBills, bill]);
  };
  const addAllBillsOnce = (bills: Bill[]) => {
    setSelectedBills(bills);
  };

  const removeBill = (billId: string) => {
    setSelectedBills((prevBills) =>
      prevBills.filter((bill) => bill.id !== billId)
    );
  };

  const clearBills = () => {
    setSelectedBills([]);
  };

  const calculateTotalBills = () =>
    selectedBills.reduce((total, bill) => total + Number(bill.amount), 0);

  return (
    <BillPaymentContext.Provider
      value={{
        selectedBills,
        addBill,
        removeBill,
        clearBills,
        calculateTotalBills,
        addAllBillsOnce,
      }}
    >
      {children}
    </BillPaymentContext.Provider>
  );
};

// Custom hook to use BillPayment context
export const useBillPaymentContext = (): BillPaymentContextType => {
  const context = useContext(BillPaymentContext);
  if (!context) {
    throw new Error(
      "useBillPaymentContext must be used within a BillPaymentProvider"
    );
  }
  return context;
};
