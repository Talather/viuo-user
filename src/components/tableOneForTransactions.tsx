'use client'

const transactionData = [
  {
    transactionId: 'TXN123456',
    user: 'John Doe',
    date: '2024-12-25',
    amount: '$1,200',
    status: 'Completed',
    paymentMethod: 'Credit Card'
  },
  {
    transactionId: 'TXN123457',
    user: 'Jane Smith',
    date: '2024-12-24',
    amount: '$850',
    status: 'Pending',
    paymentMethod: 'PayPal'
  },
  {
    transactionId: 'TXN123458',
    user: 'Alice Brown',
    date: '2024-12-23',
    amount: '$2,500',
    status: 'Failed',
    paymentMethod: 'Bank Transfer'
  },
  {
    transactionId: 'TXN123459',
    user: 'Robert Johnson',
    date: '2024-12-22',
    amount: '$950',
    status: 'Completed',
    paymentMethod: 'Debit Card'
  },
  {
    transactionId: 'TXN123460',
    user: 'Emily White',
    date: '2024-12-21',
    amount: '$400',
    status: 'Refunded',
    paymentMethod: 'Credit Card'
  }
]

const TableOne = () => {
  return (
    <div className='rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card'>
      <h4 className='mb-10 font-bold text-body-2xlg text-dark dark:text-white'>
        Recent Transactions
      </h4>

      <div className='flex flex-col'>
        <div className='grid grid-cols-5 text-button-gpt'>
          <div className='px-2 pb-3.5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>ID</h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              User
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Date
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Amount
            </h5>
          </div>
          <div className='px-2 pb-3.5 text-center'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Status
            </h5>
          </div>
        </div>

        {transactionData.map((transaction, key) => (
          <div
            className={`grid grid-cols-5 ${
              key === transactionData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-dark-3'
            }`}
            key={key}
          >
            <div className='px-2 py-4'>
              <p className='font-medium text-dark dark:text-white'>
                {transaction.transactionId}
              </p>
            </div>

            <div className='px-2 py-4 text-center'>
              <p className='font-medium text-dark dark:text-white'>
                {transaction.user}
              </p>
            </div>

            <div className='px-2 py-4 text-center'>
              <p className='font-medium text-dark dark:text-white'>
                {transaction.date}
              </p>
            </div>

            <div className='px-2 py-4 text-center'>
              <p className='font-medium text-green-light-1'>
                {transaction.amount}
              </p>
            </div>

            <div className='px-2 py-4 text-center'>
              <p
                className={`font-medium ${
                  transaction.status === 'Completed'
                    ? 'text-green-600'
                    : transaction.status === 'Pending'
                    ? 'text-yellow-500'
                    : transaction.status === 'Failed'
                    ? 'text-red-500'
                    : 'text-blue-500'
                }`}
              >
                {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableOne
