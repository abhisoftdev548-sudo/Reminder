import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black px-10 py-8 text-white'>
      <h2 className='text-3xl font-bold text-blue-500 mb-10'>Reminder</h2>
      <div className='flex flex-wrap justify-evenly items-start'>
        <div>
            <h3 className='text-2xl mb-3 font-semibold'>Features</h3>
            <ul className='text-gray-400 pl-5'>
                <li className='pb-1'>Track Your Progress</li>
                <li className='pb-1'>Manage Your Task</li>
                <li className='pb-1'>Automate Your Task</li>
            </ul>
        </div>
        <div>
            <h3 className='text-2xl mb-3 font-semibold'>Links</h3>
            <ul className='text-gray-400 pl-5'>
                <li className='pb-1'>Home</li>
                <li className='pb-1'>About</li>
                <li className='pb-1'>Contact</li>
                <li className='pb-1'>Login</li>
            </ul>
        </div>
      </div>
      <p className='text-center  pt-6'>© 2026 Abhishek. All rights reserved.
</p>
    </div>
  )
}

export default Footer
