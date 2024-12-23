
import { useState,  useEffect } from 'react'
// import CartItem from '@/components/cards/cartItem' // Assuming you have this CartItem component
// import { Button as MuiButton } from '@mui/material'

// Type definition for Bill
interface Bill {
  id: number
  name: string
  amount: string
  image: string
}

// import { useState, useEffect, useCallback } from 'react'
import {  Typography, Button as MuiButton } from '@mui/material'
// import CartItem from '@/components/cards/cartItem' // Assuming you have this CartItem component

interface Bill {
  id: number
  name: string
  amount: string
  image: string
}

const Transaction = () => {
  const subtotal = 150.99
  const discount = 20.0
  const total = subtotal - discount

  const [visibleItems, setVisibleItems] = useState<Bill[]>([])
  const [allItems] = useState<Bill[]>([
    {
      id: 1,
      name: 'Bill 1',
      amount: '25.99',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Bill 2',
      amount: '18.99',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Bill 3',
      amount: '40.00',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Bill 4',
      amount: '12.50',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Bill 5',
      amount: '30.00',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Bill 6',
      amount: '15.99',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      name: 'Bill 7',
      amount: '22.00',
      image: 'https://via.placeholder.com/150'
    }
  ])

  // Load more items on scroll
//   const loadMoreItems = useCallback(() => {
//     const nextItems = allItems.slice(
//       visibleItems.length,
//       visibleItems.length + 5
//     )
//     setVisibleItems(prev => [...prev, ...nextItems])
//   }, [allItems, visibleItems.length])

  useEffect(() => {
    // Initially show 2 items
    setVisibleItems(allItems.slice(0, 7))
  }, [allItems])

  // Handle the scroll event to trigger more items loading
  const handleScroll = () => {
    // const bottom =
    //   event.target?.scrollHeight ===
    //   event.target?.scrollTop + event?.target?.clientHeight
    // if (bottom) {
    //   loadMoreItems()
    // }
  }

    return (
        <div className='h-screen w-full border bg-dark-white flex flex-col lg:flex-row lg:justify-between'>
  {/* Transaction Section */}
  <div className='lg:w-1/2 w-full mr-5'>
    <div className='w-full h-fit bg-white rounded-lg shadow-lg mt-8 mb-6 mx-5 py-5 px-5'>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <Typography variant='h4' className='text-xl sm:text-2xl'>
          Bills
        </Typography>
        <MuiButton variant='outlined' color='error'>
          Remove All
        </MuiButton>
      </div>

      {/* Scrollable List of Bills */}
      <div
        className='h-80 w-full overflow-y-scroll space-y-4 scrollbar-hide'
        onScroll={handleScroll}
      >
        {visibleItems.map(bill => (
          <CartItem
            key={bill.id}
            productName={bill.name}
            productPrice={bill.amount}
            productImage={bill.image}
            onRemove={() => console.log(`Item with ID ${bill.id} removed.`)}
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
  <div className='lg:w-1/2 w-full px-5'>
    <PaymentCheckout />
  </div>
</div>

    
    
      






































//     <div className='h-screen w-full border bg-dark-white flex flex-row justify-between'>
//       {/* Container for the transaction section */}

          





//        <div className='w-1/2'>
//       <div className='w-full h-fit bg-white rounded-lg shadow-lg mt-8 mb-6 ml-5 mr-5 py-5 px-5 '>
//         {/* Header */}
//         <div className='flex justify-between items-center mb-6'>
//           <Typography variant='h4'>Bills</Typography>
//           <MuiButton variant='outlined' color='error'>
//             Remove All
//           </MuiButton>
//         </div>

//         {/* Scrollable List of bills */}
//         <div
//           className='h-80 w-full overflow-y-scroll space-y-4 scrollbar-hide' // Set height and enable vertical scrolling
//           onScroll={handleScroll} // Scroll event listener
//         >
//           {visibleItems.map(bill => (
//             <CartItem
//               key={bill.id}
//               productName={bill.name}
//               productPrice={bill.amount}
//               productImage={bill.image}
//               onRemove={() => console.log(`Item with ID ${bill.id} removed.`)}
//               selected={false} // This logic can be added if needed
//               onClick={() => console.log(`Item with ID ${bill.id} clicked.`)} // Handle card click
//             />
//           ))}
//         </div>
//               {/* order summary */}
              



      



        
          
              
              



//       </div>
//         <div className='w-full'>
//   <OrderSummary subtotal={subtotal} discount={discount} total={total} />
//           </div>
//           </div>
      
//       <div className='mr-5'>
//         <PaymentCheckout />
//       </div>
//     </div>
  )
}

export default Transaction

// export default Transaction

// import React, { useState } from 'react'

// Type definitions for CartItem props
interface CartItemProps {
  productName: string
  productPrice: string
  productImage: string
  onRemove: () => void
  selected: boolean
  onClick: () => void
}

const CartItem: React.FC<CartItemProps> = ({
  productName,
  productPrice,
  productImage,
  onRemove,
  selected,
  onClick
}) => {
  const [quantity, setQuantity] = useState<number>(1)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
  }

  return (
    <div
      className={`w-full rounded-lg shadow-xl overflow-hidden bg-white ${
        selected ? 'border-4 border-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <div className='flex p-2'>
              {/* Image Section */}
              

              
        <div className='w-1/3'>
          <img
            src={productImage}
            alt='Product Image'
            className='w-full h-fit object-cover rounded-lg'
          />
        </div>

        {/* Content Section */}
        <div className='w-2/3 pl-4'>
          <h3 className='text-xl font-semibold text-gray-900'>{productName}</h3>
          <p className='text-gray-600 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Price and Quantity Section */}
          <div className='flex items-center justify-between mt-4'>
            <span className='text-lg font-bold text-gray-800'>
              ${productPrice}
            </span>
            <div className='flex items-center space-x-2'>
              <button
                onClick={onRemove}
                className='bg-button-gpt text-white px-3 py-1 rounded-md hover:bg-blue-600'
              >
                Remove
              </button>
              <input
                type='number'
                value={quantity}
                onChange={handleQuantityChange}
                className='w-16 p-2 border border-gray-300 rounded-md'
                min='1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default CartItem

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
    <div className='w-full h-fit bg-white px-4 py-2 rounded-lg shadow-md ml-5'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
        Order Summary
      </h2>

      {/* Subtotal */}
      <div className='flex justify-between items-center py-2 border-b border-gray-300'>
        <span className='text-lg text-gray-700'>Subtotal</span>
        <span className='text-lg text-gray-800'>${subtotal.toFixed(2)}</span>
      </div>

      {/* Discount */}
      <div className='flex justify-between items-center py-2 border-b border-gray-300'>
        <span className='text-lg text-gray-700'>Discount</span>
        <span className='text-lg text-green-500'>- ${discount.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className='flex justify-between items-center py-2 font-semibold text-lg'>
        <span className='text-gray-800'>Total</span>
        <span className='text-xl text-blue-600'>${total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <div className='mt-4'>
        <button className='w-full bg-button-gpt text-white py-2 rounded-md hover:bg-blue-600'>
          Checkout
        </button>
      </div>
    </div>
  )
}

// export default OrderSummary

// import React, { useState } from 'react'

const PaymentCheckout: React.FC = () => {
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = () => {
    // Logic to handle payment submission
    console.log({
      cardHolderName,
      cardNumber,
      expirationDate,
      cvv
    })
  }

  return (
      <div className='h-full py-4 px-8 mt-8   bg-white rounded-lg shadow-lg'>
          













          {/* Top Section with 3 Horizontal Boxes */}
          























<div className='flex justify-around items-center mb-5 mt-5'>
  <img
    src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
    alt='Visa Logo'
    className='h-8'
  />
  <img
    src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'
    alt='PayPal Logo'
    className='h-8'
  />
  <img
    src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg'
    alt='MasterCard Logo'
    className='h-8'
  />
</div>

          





























     
      <div className='space-y-7'>
        {/* Card Holder Name */}
        <div>
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

        {/* Card Number */}
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

        {/* Expiration Date and CVV */}
        <div className='flex space-x-4'>
          {/* Expiration Date */}
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

          {/* CVV */}
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

        {/* Pay Now Button */}
        <div>
          <button
            onClick={handleSubmit}
            className='w-full  mt-10 py-3 bg-button-gpt text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  )
}

// export default PaymentCheckout
