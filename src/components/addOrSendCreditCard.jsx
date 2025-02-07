'use client'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CenteredBoxWithButtons = () => {
  return (
    <div className='flex items-center justify-center bg-white rounded-lg'>
      <div className='flex flex-col items-center justify-around px-40 py-16 bg-white shadow-lg rounded-xl'>
              <div className='flex gap-6'>
                   <NavLink to="/transaction/credit/add">
          <button className='flex items-center justify-center w-24 h-24 px-10 mr-6 text-white rounded-full bg-button-gpt-dark hover:bg-red-600'>
            Add Credit
                      </button>
                  </NavLink>
                  
                   <NavLink to="/transaction/credit/send">
          <button className='flex items-center justify-center w-24 h-24 px-10 text-white rounded-full bg-button-gpt-dark hover:bg-red-600'>
            Send Credit
                      </button>
                      </NavLink>
        </div>
      </div>
    </div>
  )
}

export default CenteredBoxWithButtons
