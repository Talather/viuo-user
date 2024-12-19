import React, { Suspense, useState, useEffect } from "react"
// import { Table, Skeleton, Card } from "@nextui-org/react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

// const rows = [...];

// const columns = [...];
// Mock function to simulate fetching data from an API
const fetchBills = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, date: "2024-12-01", amount: 250.0, status: "Paid" },
        { id: 2, date: "2024-12-05", amount: 175.0, status: "Pending" },
        { id: 3, date: "2024-12-10", amount: 320.0, status: "Paid" },
        { id: 4, date: "2024-12-12", amount: 150.0, status: "Overdue" },
      ])
    }, 1500)
  )
}

const BillsTable = () => {
  const [bills, setBills] = useState<any[]>([])

  useEffect(() => {
    const loadBills = async () => {
      const data = await fetchBills()
      setBills(data)
    }
    loadBills()
  }, [])

    
    
   const rows = [
     {
       key: 1,
       month: "January",
       purpose: "Rent",
       amount: 1000,
     },
     {
       key: 2,
       month: "January",
       purpose: "Utilities",
       amount: 200,
     },
     {
       key: 3,
       month: "January",
       purpose: "Groceries",
       amount: 300,
     },
     {
       key: 4,
       month: "January",
       purpose: "Transportation",
       amount: 150,
     },
     {
       key: 5,
       month: "January",
       purpose: "Dining Out",
       amount: 100,
     },
     {
       key: 6,
       month: "February",
       purpose: "Rent",
       amount: 1000,
     },
     {
       key: 7,
       month: "February",
       purpose: "Utilities",
       amount: 250,
     },
     {
       key: 8,
       month: "February",
       purpose: "Groceries",
       amount: 350,
     },
     {
       key: 9,
       month: "February",
       purpose: "Transportation",
       amount: 175,
     },
     {
       key: 10,
       month: "February",
       purpose: "Entertainment",
       amount: 75,
     },
     {
       key: 11,
       month: "March",
       purpose: "Rent",
       amount: 1000,
     },
     {
       key: 12,
       month: "March",
       purpose: "Utilities",
       amount: 220,
     },
     {
       key: 13,
       month: "March",
       purpose: "Groceries",
       amount: 320,
     },
     {
       key: 14,
       month: "March",
       purpose: "Transportation",
       amount: 160,
     },
     {
       key: 15,
       month: "March",
       purpose: "Shopping",
       amount: 120,
     },
     {
       key: 16,
       month: "April",
       purpose: "Rent",
       amount: 1000,
     },
     {
       key: 17,
       month: "April",
       purpose: "Utilities",
       amount: 210,
     },
     {
       key: 18,
       month: "April",
       purpose: "Groceries",
       amount: 310,
     },
     {
       key: 19,
       month: "April",
       purpose: "Transportation",
       amount: 180,
     },
     {
       key: 20,
       month: "April",
       purpose: "Healthcare",
       amount: 80,
     },
   ]

   const columns = [
     { key: "month", label: "Month" },
     { key: "purpose", label: "Purpose" },
     { key: "amount", label: "Amount" },
   ]
    return (
      <div className="w-full flex-row justify-center items-center align-middle">
        <div className="w-full flex flex-row justify-center items-center align-middle">
          <div className=" w-4/5 shadow-md p-4 bg-gray-50 rounded-md">
            <Table
              isStriped={true}
              aria-label="Example table with dynamic content"
            >
              <TableHeader>
                {columns.map((column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.key}>
                    {columns.map((column) => (
                      <TableCell key={column.key}>
                        {getKeyValue(row, column.key)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )
}

// const BillPage = () => {
//   return (
//     <Container css={{ padding: "20px" }}>
//       <Card>
//         <Text h2>My Bills</Text>
//         <Suspense
//           fallback={
//             <div>
//               <Skeleton
//                 animate
//                 width="100%"
//                 height={40}
//                 css={{ marginBottom: "10px" }}
//               />
//               <Skeleton
//                 animate
//                 width="100%"
//                 height={40}
//                 css={{ marginBottom: "10px" }}
//               />
//               <Skeleton
//                 animate
//                 width="100%"
//                 height={40}
//                 css={{ marginBottom: "10px" }}
//               />
//             </div>
//           }
//         >
//           <BillsTable />
//         </Suspense>
//       </Card>
//     </Container>
//   )
// }

export default BillsTable
