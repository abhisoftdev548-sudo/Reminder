import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black px-10 py-8 text-white'>
      <h2 className='text-3xl font-bold text-blue-500'>Reminder</h2>
      <div className='flex flex-wrap justify-evenly items-start'>
        <div>
            <h3 className='text-2xl mb-3'>Features</h3>
            <ul className='text-gray-400'>
                <li>Track Your Progress</li>
                <li>Manage Your Task</li>
                <li>Automate Your Task</li>
            </ul>
        </div>
        <div>
            <h3 className='text-2xl mb-3'>Links</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
      </div>
      <p className='text-center  pt-6'>© 2026 Abhishek. All rights reserved.
</p>
    </div>
  )
}

export default Footer
