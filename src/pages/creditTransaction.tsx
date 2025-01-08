import { useState, useEffect } from 'react'
import { Typography, Button as MuiButton } from '@mui/material'
import { useBillPaymentContext } from '@/context/paymentBillsContext'
import Button from '@/compoennts/button'

const Transaction = (add:any) => {
  const { selectedBills, removeBill, clearBills, calculateTotalBills } =
    useBillPaymentContext()
  const [visibleItems, setVisibleItems] = useState<any[]>([])
  const [credits, setCredits] = useState<number>(0)
  let subtotal = calculateTotalBills()
  let discount = 0.0
  let total = subtotal - discount
  console.log('zaalim', subtotal)

  useEffect(() => {
    setVisibleItems(selectedBills)
  }, [selectedBills])

  const handleAddCredit = () => {
    // Logic to send or add the credits
    console.log(`Credits added: ${credits}`)
  }

  return (
    <div className='flex flex-col justify-center items-center w-full bg-gray-200 border lg:flex-row lg:w-full ' style={{height:"100vh"}}>
          {/* Transaction Section */}
          <div className='flex flex-row justify-center items-center w-full '>
              


      <div className='w-full lg:w-1/2   items-center lg:mr-5'>
        <div className='w-full px-6 py-20 mx-5 mt-8 bg-white rounded-xl shadow-lg'>
          {/* Header */}
          <div className='flex items-center justify-center mb-12'>
            <Typography
              variant='h4'
              className='text-2xl font-bold text-gray-800'
            >
              Credits
            </Typography>
          </div>

          {/* Input Section */}
          <div className='flex flex-col items-center'>
            <label className='block mb-2 text-lg font-semibold text-gray-800 hover:text-button-gpt transition duration-300'>
              Number of Credits:
            </label>
            <div className='relative w-2/3'>
              <input
                type='number'
                value={credits}
                onChange={e => setCredits(Number(e.target.value))}
                placeholder='Enter number of credits'
                className='w-full p-4 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-button-gpt focus:border-button-gpt transition duration-300 hover:shadow-lg'
              />
              <div className='absolute inset-y-0 right-3 flex items-center text-gray-400'>
                💰
              </div>
                          </div>



                          {!add && (<div className='relative w-2/3 mt-4'>
  <input
    type='number'
    value={credits}
    onChange={e => setCredits(Number(e.target.value))}
    placeholder='Enter number of credits'
    className='w-full p-4 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-button-gpt focus:border-button-gpt transition duration-300 hover:shadow-lg'
  />
  <div className='absolute inset-y-0 right-3 flex items-center text-gray-400'>
    💰
  </div>
</div>)
}
          </div>

          {/* Add Credit Button */}
          <div className='mt-6 flex justify-center'>
            <MuiButton className='bg-button-gpt'
                              variant='contained'
                              
                                // color='button-gpt'
                              sx={{backgroundColor:'#10a37f'}}
                            //   style:{{backgroundColor:"#10a37f"}}
              onClick={handleAddCredit}
              disabled={credits <= 0}
            >
              {add ? 'Add Credit' : 'Send Credit'}
            </MuiButton>
          </div>
        </div>
      </div>

      {/* Optional Payment Section */}
      
          </div>
          </div>
  )
}

export default Transaction
