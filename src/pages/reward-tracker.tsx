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
import TableOne from '../components/TableOne'

const RewardTracker = () => {
  return (
    <div className='w-full'>
      {/* Chart Section */}
      <div className='flex flex-col items-center justify-center px-4 py-10 bg-gray-50'>
        <h2 className='mb-6 text-3xl font-semibold text-gray-800 sm:text-4xl'>
          Rewards Tracker
        </h2>
        <ChartThree />
      </div>

      {/* Rewards Earned Section */}
      <div className='mt-10 bg-white'>
        <div className='text-center'>
          <h3 className='text-2xl font-semibold text-gray-800 md:text-4xl'>
            Rewards Earned:
          </h3>
        </div>
        <div className='flex items-center justify-center mt-8'>
          <div className='w-full max-w-4xl p-4 border border-gray-200 rounded-lg shadow-lg'>
            <TableOne />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <MaxWidthContainer>
        <Hero />
      </MaxWidthContainer>

      {/* Why Choose Section */}
      <div className='py-20 bg-[#042424] text-white'>
        <MaxWidthContainer>
          <div className='text-center'>
            <h2 className='mb-6 text-4xl font-bold'>
              Turning Your Payments into Savings!
            </h2>
            <p className='max-w-3xl mx-auto mb-10 text-lg font-medium text-[#9ba1a6]'>
              Managing bills can be overwhelming. Vuior transforms every payment
              into an opportunity to save more and stress less—empowering you to
              take control of your finances, one early payment at a time.
            </p>
          </div>

          <h2 className='mb-10 text-3xl font-bold text-center md:text-4xl'>
            Why Choose Vuior?
          </h2>
          <ServiceCards services={reactNow} />

          <div className='mt-16 text-center'>
            <p className='max-w-3xl mx-auto mb-10 text-lg font-medium text-[#9ba1a6]'>
              At Vuior, we’re more than just a bill management platform. We’re
              here to help you save smarter, live better, and take control of
              your financial future.
            </p>
            <ShinyButton
              href='/create-account'
              className='px-8 py-3 text-lg rounded-full'
            >
              Join Now
            </ShinyButton>
          </div>
        </MaxWidthContainer>
      </div>

      {/* Benefits Section */}
      <MaxWidthContainer className='py-10'>
        <div className='grid items-center grid-cols-1 gap-10 md:grid-cols-2'>
          <Image
            className='w-full rounded-lg md:max-w-md'
            src='/assets/brand/start.jpeg'
            alt='Start Vuior'
          />
          <Benefits
            hideList
            heading='Start Your Vuior REWARDS Journey Today!'
            content={`Start managing your bills smarter and saving more. Vuior is easy to use, and joining is
            completely free—no strings attached, no hidden fees. You’ll even earn your first rewards
            within days! Managing your bills should put money back in your pocket. Sign up for free
            and start saving! Join Vuior Today.`}
          />
        </div>
      </MaxWidthContainer>

      {/* Join Today Section */}
      <JoinToday />

      {/* FAQs Section */}
      <div className='py-10'>
        <MaxWidthContainer>
          <FAQs />
        </MaxWidthContainer>
      </div>
    </div>
  )
}

export default RewardTracker
