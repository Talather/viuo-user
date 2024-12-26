import { Image } from '@nextui-org/react'
import MaxWidthContainer from '../components/max-width-container'
import Benefits from '../components/redesigned-components/components/benefits'
import Hero from '../components/redesigned-components/components/hero'
import ServiceCards from '../components/redesigned-components/components/service-cards'
import JoinToday from '../components/redesigned-components/components/join-today'
import FAQs from '../components/redesigned-components/components/faqs'
import { reactNow } from '../data'
import ShinyButton from '../components/redesigned-components/components/shiny-button'
import ChartThree from '../components/ChartThree'
import TableOne from '../components/TableOneForRewards'
import ChartR from '../components/chartR'

const RewardTracker = () => {
  return (
    <div className='w-full'>
      {/* Chart Section */}
      <div className='flex flex-col items-center justify-center px-4 py-16 bg-gray-50'>
        <h2 className='mb-6 text-3xl font-semibold text-gray-800 sm:text-4xl'>
          Rewards Tracker
        </h2>
        <ChartThree />
      </div>





      <div className='flex flex-col items-center justify-center px-4 py-16 bg-button-gpt-hover'>
  <h2 className='mb-6 text-3xl font-semibold text-white sm:text-4xl'>
    Radeemed points
  </h2>
  <ChartR />
</div>


      {/* Rewards Earned Section */}
      <div className='mt-16 bg-white'>
        <div className='text-center'>
          <h3 className='text-2xl font-semibold text-gray-800 md:text-4xl'>
            Rewards Earned:
          </h3>
        </div>
        <div className='flex items-center justify-center mt-12 mb-10'>
          <div className='w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-lg'>
            <TableOne />
          </div>
        </div>
      </div>

      {/* Hero Section */}
    
    </div>
  )
}

export default RewardTracker
