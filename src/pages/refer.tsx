

const Refer = () => {
  return (
      <div className='w-full'>
          <ReferAFriend />



        
    </div>
  )
}

export default Refer











// import React from 'react'

const ReferAFriend = () => {
  const referralCode = 'SAVE123'

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-100 to-button-gpt'>
      {/* Header */}
      <h1 className='mb-6 text-4xl font-bold text-center text-gray-800'>
        Refer a Friend for More Savings!
      </h1>
      <p className='max-w-md mb-10 text-lg text-center text-gray-600'>
        Invite your friends to join and enjoy exclusive savings together. Share
        your unique referral code below and get rewarded!
      </p>

      {/* Referral Box */}
      <div className='w-full max-w-sm p-8 text-center bg-white shadow-lg rounded-xl'>
        <h2 className='mb-4 text-2xl font-semibold text-button-gpt'>
          Your Referral Code
        </h2>
        <div className='px-6 py-4 font-mono text-lg font-bold tracking-wide text-gray-800 bg-gray-100 rounded-lg'>
          {referralCode}
        </div>
        <button
          className='px-6 py-2 mt-6 font-medium text-white transition duration-200 rounded-lg shadow-md bg-button-gpt hover:bg-blue-700'
          onClick={() => navigator.clipboard.writeText(referralCode)}
        >
          Copy Code
        </button>
      </div>

      {/* Call to Action */}
      <div className='mt-10 text-center'>
        <p className='text-gray-700 text-md'>
          Share the code with your friends and start saving today!
        </p>
      </div>
    </div>
  )
}

// export default ReferAFriend
