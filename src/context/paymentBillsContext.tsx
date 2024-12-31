import { createContext, useState, useContext, ReactNode } from 'react'

// Define types for the selected bill and context
interface Bill {
  id: string
  name: string
  amount: number
}

interface BillPaymentContextType {
  selectedBills: Bill[]
  addBill: (bill: Bill) => void
  addAllBillsOnce: (bills: Bill[]) => void
  removeBill: (billId: string) => void
  clearBills: () => void
  calculateTotalBills: () => number
}

interface BillPaymentProviderProps {
  children: ReactNode
}

// Create a context with a default value of `undefined`
export const BillPaymentContext = createContext<
  BillPaymentContextType | undefined
>(undefined)

// BillPaymentProvider component that provides the bill state and actions to the context
export const BillPaymentProvider = ({ children }: BillPaymentProviderProps) => {
  const [selectedBills, setSelectedBills] = useState<Bill[]>([])
  
  const addBill = (bill: Bill) => {
    setSelectedBills(prevBills => [...prevBills, bill])
  }

  const removeBill = (billId: string) => {
    setSelectedBills(prevBills => prevBills.filter(bill => bill.id !== billId))
  }

  const addAllBillsOnce = (bills: Bill[]) => {
    setSelectedBills(bills)
  }

  const clearBills = () => {
    setSelectedBills([])
  }

    // const calculateTotalBills = () => {
      
        const calculateTotalBills = () => {
  let total = 0
  for (const bill of selectedBills) {
    total += Number(bill.amount)

  }
  return total
}

//     return selectedBills.reduce((total, bill) => total + bill.amount, 0)
//   }

  return (
    <BillPaymentContext.Provider
      value={{
        selectedBills,
        addBill,
        removeBill,
        clearBills,
        addAllBillsOnce,
        calculateTotalBills
      }}
    >
      {children}
    </BillPaymentContext.Provider>
  )
}

// Custom hook to use BillPayment context
export const useBillPaymentContext = (): BillPaymentContextType => {
  const context = useContext(BillPaymentContext)
  if (!context) {
    throw new Error(
      'useBillPaymentContext must be used within a BillPaymentProvider'
    )
  }
  return context
}
