import React from 'react'
import { MdClose } from "react-icons/md";

export default function FilterDrawer() {
  const btnText = ['Today', 'Last 7 days', 'This month', 'Last 3 months']
  // transition-transform translate-x-full
  return (
    <div className='fixed top-0 right-0 z-50 h-screen px-8 py-4 overflow-y-auto  w-4/12 mt-2 bg-base_white rounded-3xl shadow-md'>
      <div className='flex justify-between items-center'>
        <h3 className='text-primary font-bold text-2xl'>Filter</h3>
        <div className='text-base_gray cursor-pointer'>
          <MdClose size='1.5rem' />
        </div>
      </div>
      <div className='mt-6 flex  justify-between items-center'>
        {btnText.map((text, index) => {
          return (
            <div key={index} >
              <button className='py-2.5 px-4 text-center text-primary font-semibold rounded-full border border-secondary bg-base_white focus:outline-none'>{text}</button>
            </div>

          )
        })}
      </div>
    </div>
  )
}
