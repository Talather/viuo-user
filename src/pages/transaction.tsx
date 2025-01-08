import { useState, useEffect } from 'react'
import { Typography, Button as MuiButton } from '@mui/material'
import { useBillPaymentContext } from '@/context/paymentBillsContext'

const Transaction = () => {
  const { selectedBills, removeBill, clearBills, calculateTotalBills } =
    useBillPaymentContext()
  const [visibleItems, setVisibleItems] = useState<any[]>([])
  let subtotal = calculateTotalBills()
  let discount = 0.0
  let total = subtotal - discount
  console.log('zaalim', subtotal)

  const useWarnOnRefresh = () => {
    useEffect(() => {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        event.returnValue =
          'On Refreshing the page,All your bills will get Erased From Cart'
      }
      window.addEventListener('beforeunload', handleBeforeUnload)

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }, [])
  }

  useWarnOnRefresh()

  useEffect(() => {
    setVisibleItems(selectedBills)
  }, [selectedBills])

  return (
    <div className='flex flex-col w-full bg-gray-100 border lg:flex-row lg:justify-between'>
      {/* Transaction Section */}
      <div className='w-full mr-5 lg:w-1/2'>
        <div className='w-full px-5 py-5 mx-5 mt-8 mb-6 bg-white rounded-lg shadow-lg h-fit'>
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
          <div
            className='w-full space-y-4 overflow-y-scroll h-80 scrollbar-hide'
            // onScroll={handleScroll}
          >
            {visibleItems.map(bill => (
              <CartItem
                key={bill.id}
                productName={bill.name}
                productPrice={bill.amount}
                productStatus={bill.status}
                onRemove={() => removeBill(bill.id)}
                selected={false}
                onClick={() => console.log(`Item with ID ${bill.id} clicked.`)}
              />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className='w-full'>
          <OrderSummary subtotal={subtotal} discount={discount} total={total} />
        </div>
      </div>

      {/* Payment Section */}
      <div className='w-full px-5 lg:w-1/2'>
        <PaymentCheckout />
      </div>
    </div>
  )
}

export default Transaction

interface CartItemProps {
  productName: string
  productPrice: string
  productStatus: string
  onRemove: () => void
  selected: boolean
  onClick: () => void
}

const CartItem: React.FC<CartItemProps> = ({
  productName,
  productPrice,
  productStatus,
  onRemove,
  selected,
  onClick
}) => {
  

  return (
    <div
      className={`w-full rounded-lg shadow-xl overflow-hidden bg-white text-lg ${
        selected ? 'border-4 border-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <div className='flex p-2'>
        {/* Image Section */}

        {/* Content Section */}
        <div className='w-full pl-4 '>
          <h3 className='text-xl font-semibold text-gray-900'>{productName}</h3>
          <p className='mt-2 text-gray-600'>{productStatus}</p>

          {/* Price and Quantity Section */}
          <div className='flex justify-between mt-6'>
            <span className='text-2xl font-bold text-button-gpt'>
              ${productPrice}
            </span>
            <div className='flex items-end space-x-2'>
              <button
                onClick={onRemove}
                className='px-3 py-1 text-white rounded-md bg-button-gpt hover:bg-red-600'
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface OrderSummaryProps {
  subtotal: number
  discount: number
  total: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  discount,
  total
}) => {
  return (
    <div className='w-full px-4 py-2 ml-5 bg-white rounded-lg shadow-md h-fit'>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
        Order Summary
      </h2>

      {/* Subtotal */}
      <div className='flex items-center justify-between py-2 border-b border-gray-300'>
        <span className='text-lg text-gray-700'>Subtotal</span>
        <span className='text-lg text-gray-800'>${subtotal}</span>
      </div>

      {/* Discount */}
      <div className='flex items-center justify-between py-2 border-b border-gray-300'>
        <span className='text-lg text-gray-700'>Discount</span>
        <span className='text-lg text-green-500'>- ${discount.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className='flex items-center justify-between py-2 text-lg font-semibold'>
        <span className='text-gray-800'>Total</span>
        <span className='text-xl text-blue-600'>${total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      {/* <div className='mt-4'>
        <button className='w-full py-2 text-white rounded-md bg-button-gpt hover:bg-blue-600'>
          Checkout
        </button>
      </div> */}
    </div>
  )
}

const PaymentCheckout: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(
    'creditCard'
  )

  // Credit Card Details
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')

  // Bank Transfer Details
  const [bankAccount, setBankAccount] = useState('')
  const [routingNumber, setRoutingNumber] = useState('')

  // Payment Confirmation
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null)

  const handleSubmit = () => {
    if (selectedMethod === 'creditCard') {
      console.log({ cardHolderName, cardNumber, expirationDate, cvv })
      setPaymentStatus('Payment Successful via Credit Card')
    } else if (selectedMethod === 'plaid') {
      console.log({ bankAccount, routingNumber })
      setPaymentStatus('Payment Successful via Bank Transfer')
    } else if (selectedMethod === 'paypal') {
      console.log('Redirecting to PayPal...')
      setPaymentStatus('Payment Pending - Redirecting to PayPal')
    }
  }

  return (
    <div className='px-8 py-4 mt-8 bg-white rounded-lg shadow-lg h-4/5'>
      {/* Payment Method Selection */}
      <div className='flex items-center justify-around mt-5 mb-5'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
          alt='Visa Logo'
          className={`h-8 cursor-pointer ${
            selectedMethod === 'creditCard' ? 'border-2 border-gray-200' : ''
          }`}
          onClick={() => setSelectedMethod('creditCard')}
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'
          alt='PayPal Logo'
          className={`h-8 cursor-pointer ${
            selectedMethod === 'paypal' ? 'border-2 border-gray-200' : ''
          }`}
          onClick={() => setSelectedMethod('paypal')}
        />
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg'
          alt='Plaid Logo'
          className={`h-8 cursor-pointer ${
            selectedMethod === 'plaid'
              ? 'border-2 border-gray-200 rounded-lg'
              : ''
          }`}
          onClick={() => setSelectedMethod('plaid')}
        />
      </div>

      {/* Dynamic Input Fields */}
      <div className='space-y-7'>
        {/* Credit Card Input Fields */}
        {selectedMethod === 'creditCard' && (
          <>
            <div className='mt-10'>
              <label
                htmlFor='cardHolderName'
                className='block text-sm font-semibold text-gray-700'
              >
                Card Holder Name
              </label>
              <input
                type='text'
                id='cardHolderName'
                value={cardHolderName}
                onChange={e => setCardHolderName(e.target.value)}
                className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label
                htmlFor='cardNumber'
                className='block text-sm font-semibold text-gray-700'
              >
                Card Number
              </label>
              <input
                type='text'
                id='cardNumber'
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your card number'
              />
            </div>
            <div className='flex space-x-4'>
              <div className='w-1/2'>
                <label
                  htmlFor='expirationDate'
                  className='block text-sm font-semibold text-gray-700'
                >
                  Expiration Date
                </label>
                <input
                  type='text'
                  id='expirationDate'
                  value={expirationDate}
                  onChange={e => setExpirationDate(e.target.value)}
                  className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='MM/YY'
                />
              </div>
              <div className='w-1/2'>
                <label
                  htmlFor='cvv'
                  className='block text-sm font-semibold text-gray-700'
                >
                  CVV
                </label>
                <input
                  type='text'
                  id='cvv'
                  value={cvv}
                  onChange={e => setCvv(e.target.value)}
                  className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter CVV'
                />
              </div>
            </div>
          </>
        )}

        {/* PayPal Input (No additional inputs for PayPal) */}
        {selectedMethod === 'paypal' && (
          <>
            <div className='mt-10'>
              <label
                htmlFor='paypalEmail'
                className='block text-sm font-semibold text-gray-700'
              >
                PayPal Email Address
              </label>
              <input
                type='email'
                id='paypalEmail'
                value={''}
                // onChange={e => setPaypalEmail(e.target.value)}
                className='w-full p-3 mt-1 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your PayPal email'
              />
            </div>
            <div>
              <label
                htmlFor='paypalAccountId'
                className='block text-sm font-semibold text-gray-700'
              >
                PayPal Account ID (Optional)
              </label>
              <input
                type='text'
                id='paypalAccountId'
                value={'paypalAccountId'}
                // onChange={e => setPaypalAccountId(e.target.value)}
                className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your PayPal account ID'
              />
            </div>
          </>
        )}

        {/* Bank Transfer Input Fields */}
        {selectedMethod === 'plaid' && (
          <>
            <div className='mt-10'>
              <label
                htmlFor='bankAccount'
                className='block text-sm font-semibold text-gray-700'
              >
                Bank Account Number
              </label>
              <input
                type='text'
                id='bankAccount'
                value={bankAccount}
                onChange={e => setBankAccount(e.target.value)}
                className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your bank account number'
              />
            </div>
            <div>
              <label
                htmlFor='routingNumber'
                className='block text-sm font-semibold text-gray-700'
              >
                Routing Number
              </label>
              <input
                type='text'
                id='routingNumber'
                value={routingNumber}
                onChange={e => setRoutingNumber(e.target.value)}
                className='w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your routing number'
              />
            </div>
          </>
        )}

        {/* Payment Confirmation */}
        {paymentStatus && (
          <div className='mt-5 text-sm font-semibold text-center text-gray-700'>
            {paymentStatus}
          </div>
        )}

        {/* Payment Button */}
        {selectedMethod && (
          <div>
            <button
              onClick={handleSubmit}
              className='w-full py-3 mt-10 text-white rounded-md bg-button-gpt hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
