import { useState, useEffect } from 'react'
import {
  Typography,
  Button as MuiButton,
  Modal,
  TextField,
  Fade
} from '@mui/material'
import { useBillPaymentContext } from '@/context/paymentBillsContext'
import { useAuth } from '@/context/AuthContext'

const Transaction = () => {
  const { user }: any = useAuth()
  const { selectedBills, removeBill, clearBills, calculateTotalBills } =
    useBillPaymentContext()
  const [visibleItems, setVisibleItems] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [availableCredits, setAvailableCredits] = useState(
    user?.availableCredits || 0
  )
  const [creditInput, setCreditInput] = useState(0)

  let subtotal = calculateTotalBills()
  let discount = creditInput >= 0 ? creditInput : 0
  let total = subtotal - discount

  useEffect(() => {
    setVisibleItems(selectedBills)
  }, [selectedBills])

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleApplyCredits = () => {
    if (creditInput > availableCredits) {
      alert('You cannot apply more credits than available!')
    } else if (creditInput > subtotal) {
      alert('Credits cannot exceed the subtotal!')
    } else {
      setAvailableCredits(availableCredits - creditInput)
      handleCloseModal()
    }
  }

  const handleCreditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreditInput(Number(e.target.value))
  }

  return (
    <div className='flex flex-col w-full h-full pb-20 border pt-7 bg-gray-50 lg:h-full lg:flex-row lg:justify-between animate-fadeIn'>
      {/* Transaction Section */}
      <div className='w-full px-5 lg:px-8'>
        <div className='flex justify-center mb-10'>
          <button
            onClick={handleOpenModal}
            className='px-6 py-4 text-lg font-semibold text-white transition-transform transform rounded-lg shadow-lg bg-button-gpt hover:bg-button-gpt-dark hover:scale-105'
          >
            Utilize Credit for Discount
          </button>
        </div>

        <div className='flex flex-col lg:flex-row lg:space-x-6'>
          <div className='w-full p-6 bg-white rounded-lg shadow-lg'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
              <Typography variant='h4' className='text-xl sm:text-2xl'>
                Bills
              </Typography>
              <MuiButton variant='outlined' color='error' onClick={clearBills}>
                Remove All
              </MuiButton>
            </div>

            {/* Scrollable List of Bills */}
            <div className='w-full space-y-4 overflow-y-auto h-80 custom-scrollbar'>
              {visibleItems.map(bill => (
                <CartItem
                  key={bill.id}
                  productName={bill.name}
                  productPrice={bill.amount}
                  productStatus={bill.status}
                  onRemove={() => { removeBill(bill.id) }
                
                }
                  selected={false}
                  onClick={() =>
                    console.log(`Item with ID ${bill.id} clicked.`)
                  }
                />
              ))}
            </div>
          </div>

          <div className='w-full mt-8 lg:mt-0'>
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              total={total}
            />
          </div>
        </div>
      </div>

      {/* Credit Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        className='flex items-center justify-center ml-48'
      >
        <Fade in={isModalOpen}>
          <div className='p-6 bg-white rounded-lg shadow-xl w-96'>
            <h2 className='mb-4 text-2xl font-bold text-center text-gray-800'>
              Utilize Credit
            </h2>
            <p className='mb-4 text-lg text-center text-gray-600'>
              Available Credits:{' '}
              <span className='font-semibold'>{availableCredits}</span>
            </p>
            <TextField
              type='number'
              label='Enter Credit Amount'
              // value={creditInput}
              onChange={handleCreditChange}
              fullWidth
              variant='outlined'
            />
            <div className='flex justify-end mt-6'>
              <MuiButton
                variant='outlined'
                onClick={handleCloseModal}
                sx={{ color: '#10a37f', borderColor: '#10a37f' }}
              >
                Cancel
              </MuiButton>
              <MuiButton
                variant='contained'
                onClick={handleApplyCredits}
                sx={{ marginLeft: '10px', backgroundColor: '#10a37f' }}
              >
                Apply Credits
              </MuiButton>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Transaction

// CartItem Component
const CartItem: React.FC<any> = ({
  productName,
  productPrice,
  productStatus,
  onRemove,
  selected,
  onClick
}) => (
  <div
    className={`w-full rounded-lg shadow-xl overflow-hidden bg-gray-50 text-lg ${
      selected ? 'border-4 border-blue-500' : ''
    }`}
    onClick={onClick}
  >
    <div className='flex p-4'>
      <div className='w-full pl-4'>
        <h3 className='text-2xl font-semibold text-gray-900'>{productName}</h3>
        <p className='mt-2 text-gray-600'>{productStatus}</p>
        <div className='flex justify-between mt-6'>
          <span className='text-2xl font-bold text-button-gpt'>
            ${productPrice}
          </span>
          <button
            onClick={onRemove}
            className='px-3 py-1 mr-3 text-white rounded-md bg-button-gpt hover:bg-red-600'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
)

// // OrderSummary Component
// const OrderSummary: React.FC<any> = ({
//   subtotal,
//   discount,
//   total
// }) => (
//   <div className='w-full px-4 py-2 ml-5 bg-white rounded-lg shadow-md h-fit'>
//     <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Order Summary</h2>
//     <div className='flex items-center justify-between py-2 border-b border-gray-300'>
//       <span className='text-lg text-gray-700'>Subtotal</span>
//       <span className='text-lg text-gray-800'>${subtotal}</span>
//     </div>
//     <div className='flex items-center justify-between py-2 border-b border-gray-300'>
//       <span className='text-lg text-gray-700'>Discount</span>
//       <span className='text-lg text-green-500'>- ${discount.toFixed(2)}</span>
//     </div>
//     <div className='flex items-center justify-between py-2 text-lg font-semibold'>
//       <span className='text-gray-800'>Total</span>
//       <span className='text-xl text-blue-600'>${total.toFixed(2)}</span>
//     </div>
//   </div>
// )



const OrderSummary: React.FC<any> = ({ subtotal, discount, total }) => (
  <div className='flex flex-col justify-between w-full ml-5 bg-white rounded-lg shadow-md px-9 py-9 h-fit'>
    <div>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
        Order Summary
      </h2>
      <div className='flex items-center justify-between py-2 border-b border-gray-300'>
        <span className='text-lg text-gray-700'>Subtotal</span>
        <span className='text-lg text-gray-800'>${subtotal}</span>
      </div>
      <div className='flex items-center justify-between py-2 border-b border-gray-300'>
        <span className='text-lg text-gray-700'>Discount</span>
        <span className='text-lg text-green-500'>- ${discount.toFixed(2)}</span>
      </div>
      <div className='flex items-center justify-between py-2 text-lg font-semibold'>
        <span className='text-gray-800'>Total</span>
        <span className='text-xl text-blue-600'>${total.toFixed(2)}</span>
      </div>
    </div>
    <button className='px-10 py-3 text-lg font-semibold text-white transition-transform transform rounded-lg shadow-md mt-28 bg-button-gpt hover:bg-button-gpt-dark hover:scale-105'>
      Pay Now
    </button>
  </div>
)
