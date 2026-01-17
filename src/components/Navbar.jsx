import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
        <nav className='fixed top-0 z-10 w-full bg-transparent backdrop-blur-md px-8 py-4 text-white '>
            <div className='flex justify-between  items-center'>

            <div>
                <h2 className='text-blue-500 font-bold text-3xl'>Reminder</h2>
            </div>
            <div>
                <ul className='flex gap-8 text-lg'>
                    <li className='cursor-pointer hover:text-blue-400 transition'><Link to={'/'}>Home</Link></li>
                    <li className='cursor-pointer hover:text-blue-400 transition'><Link to={'/about'}>About</Link></li>
                    <li className='cursor-pointer hover:text-blue-400 transition'><Link to={'/contact'}>Contact</Link></li>
                    <li className='cursor-pointer hover:text-blue-400 transition'><Link to={'/signin'}>Login</Link></li>
                </ul>
            </div>
            </div>
        </nav>
  )
}

export default Navbar
