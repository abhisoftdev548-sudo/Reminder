import React from 'react'

const Navbar = () => {
  return (
        <nav className='w-full bg-transparent backdrop-blur-md px-8 py-4 text-white '>
            <div className='flex justify-between'>

            <div>
                <h2 className='text-blue-500 font-bold text-2xl'>Reminder</h2>
            </div>
            <div>
                <ul className='flex gap-8 text-lg'>
                    <li className='cursor-pointer hover:text-blue-400 transition'>Home</li>
                    <li className='cursor-pointer hover:text-blue-400 transition'>About</li>
                    <li className='cursor-pointer hover:text-blue-400 transition'>Contact</li>
                    <li className='cursor-pointer hover:text-blue-400 transition'>SignUp</li>
                </ul>
            </div>
            </div>
        </nav>
  )
}

export default Navbar
