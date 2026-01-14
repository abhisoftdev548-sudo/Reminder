import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='w-full  min-h-screen text-white'  >
        
            <Navbar/>
      
      <section className='px-6 sm:px-10 lg:px-20 mt-16 '>
        <div className='flex flex-col-reverse gap-14 lg:flex-row justify-between items-center'>
            <div className='max-w-xl text-center lg:text-left'>
                <h2 className=' text-4xl sm:text-5xl leading-tight lg:text-6xl font-black 
            bg-linear-to-r
            from-[#38bdf8]
            via-[#293ad2]
            to-[#0008ff]
            bg-clip-text
            text-transparent'>Remember Your Work With Us</h2>
            <p className='mt-6 text-slate-400 text-base sm:text-lg'>Organize your tasks, track progress, and never miss
              important work again with our simple reminder system.</p>
              <div className='mt-8 flex justify-center lg:justify-start gap-4'>
                <button className='px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl transition'> Get Started</button>
                <button className='px-6 py-3 font-semibold border border-slate-700 hover:border-slate-500 rounded-xl transition'> Learn More</button>
              </div>
            </div>
            <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
                <img src="todo.png" alt="Todo illustration" className="
                w-[220px]
                sm:w-[280px]
                lg:w-[340px]
                drop-shadow-xl
              "/>
            </div>
        </div>
    </section>
      </div>
  )
}

export default Home
