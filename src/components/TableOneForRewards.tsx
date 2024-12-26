const rewardData = [
  {
    user: 'John Doe',
    paymentDate: '2024-12-20',
    earlyByDays: 5,
    reward: '$20',
    rewardStatus: 'Redeemed'
  },
  {
    user: 'Jane Smith',
    paymentDate: '2024-12-22',
    earlyByDays: 3,
    reward: '$15',
    rewardStatus: 'Pending'
  },
  {
    user: 'Alice Brown',
    paymentDate: '2024-12-21',
    earlyByDays: 7,
    reward: '$25',
    rewardStatus: 'Redeemed'
  },
  {
    user: 'Robert Johnson',
    paymentDate: '2024-12-23',
    earlyByDays: 2,
    reward: '$10',
    rewardStatus: 'Pending'
  },
  {
    user: 'Emily White',
    paymentDate: '2024-12-19',
    earlyByDays: 6,
    reward: '$18',
    rewardStatus: 'Redeemed'
  }
]



'use client'

const TableRewards = () => {
  return (
    <div className='rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card'>
      <h4 className='mb-10 font-bold text-body-2xlg text-dark dark:text-white'>
        Rewards for Early Payments
      </h4>

      <div className='flex flex-col'>
        {/* Table Headers */}
        <div className='grid grid-cols-5 text-button-gpt'>
          <div className='px-2 pb-3.5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              User
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Payment Date
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Early By (Days)
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Reward
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Status
            </h5>
          </div>
        </div>

        {/* Table Rows */}
        {rewardData.map((reward, key) => (
          <div
            className={`grid grid-cols-5 ${
              key === rewardData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-dark-3'
            }`}
            key={key}
          >
            {/* User */}
            <div className='flex items-center gap-3.5 px-2 py-4'>
              <p className='font-medium text-dark dark:text-white'>
                {reward.user}
              </p>
            </div>

            {/* Payment Date */}
            <div className='flex items-center justify-center px-2 py-4'>
              <p className='font-medium text-dark dark:text-white'>
                {reward.paymentDate}
              </p>
            </div>

            {/* Early By (Days) */}
            <div className='flex items-center justify-center px-2 py-4'>
              <p className='font-medium text-dark dark:text-white'>
                {reward.earlyByDays}
              </p>
            </div>

            {/* Reward Amount */}
            <div className='flex items-center justify-center px-2 py-4'>
              <p className='font-medium text-green-light-1'>{reward.reward}</p>
            </div>

            {/* Reward Status */}
            <div className='flex items-center justify-center px-2 py-4'>
              <p
                className={`font-medium ${
                  reward.rewardStatus === 'Redeemed'
                    ? 'text-green-600'
                    : 'text-yellow-500'
                }`}
              >
                {reward.rewardStatus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableRewards
