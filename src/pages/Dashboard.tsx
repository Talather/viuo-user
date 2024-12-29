import { useState, useEffect } from 'react' // Import useState and useEffect
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import BillCard from '@/components/cards/billCard'
import { Grid, Box } from '@mui/material' // Import CircularProgress for the spinner
import Button from '@/components/button'
import { fetchBillsForSpecificUser } from '@/lib/clientControllers/bills'

// Define an interface for Bill data
interface Bill {
  id: string
  user_id: string
  amount: number
  due_date: string
  status: string
  payment_method_id: string
  early_payment_savings?: number
  is_consolidated?: boolean
}
import { ClipLoader } from 'react-spinners' // Import ClipLoader

const Dashboard = () => {
  const { user } = useAuth()
  const [bills, setBills] = useState<Bill[]>([]) // State to store bills
  const [loading, setLoading] = useState<boolean>(false) // Loading state
  const navigate = useNavigate()

  // Define the fetchBills function to fetch data
  const fetchBills = async () => {
    if (!user?.id) return // Ensure user exists

    setLoading(true) // Set loading to true when starting to fetch data
    try {
      const billsData:any = await fetchBillsForSpecificUser(user.id) // Call the actual API function
      setBills(billsData) // Set the bills state with fetched data
    } catch (error) {
      console.error('Error fetching bills:', error)
    } finally {
      setLoading(false) // Set loading to false once the data is fetched or error occurs
    }
  }

  // Fetch the bills when the component is mounted
  useEffect(() => {
    fetchBills()
  }, [user?.id]) // Fetch bills when the user ID changes

  return (
    <div className='px-4'>
      <div className='flex flex-col items-start justify-between w-full gap-2 mt-3 md:flex-row'>
        <div className='flex flex-row justify-between w-full'>
          <div>
            <h2 className='text-2xl font-bold'>Hey, {user?.name}!</h2>
            <p className='mt-2 text-gray-500'>Upcoming Bills</p>
          </div>

          <div className='flex flex-row justify-normal'>
            <div>
              <Button
                children={'Pay Early'}
                className='mr-5 rounded-md w-15 bg-button-gpt h-2/3 text-md'
                onClick={() => navigate('/payEarly')}
              />
            </div>

            <div>
              <Button
                children={'Create New Bill'}
                className='rounded-md w-15 bg-button-gpt h-2/3 text-md'
                onClick={() => navigate('/bills/create')}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{ width: '35%' }}>
          <Box sx={{ flexGrow: 1, paddingTop: '1em' }}>
            {/* Show spinner when loading */}
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection:"row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '30vh'
                }}
              >
                <ClipLoader size={70} color='#39b996' />
              </div>
            ) : (
            
              <Grid container justifyContent='center' spacing={2}>
                {bills.map(bill => (
                  <Grid item key={bill.id}>
                    <BillCard bill={'bill'} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
