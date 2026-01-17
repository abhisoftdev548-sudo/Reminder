import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Home = () => {

const features = [
  {
    id: 1,
    title: "Track Your Progress",
    description:
      "Monitor your daily tasks and visualize your progress in real time to stay focused and motivated.",
    img: "/progress.png"
  },
  {
    id: 2,
    title: "Manage Your Task",
    description:
      "Organize, prioritize, and manage all your tasks efficiently from a single, easy-to-use dashboard.",
    img: "/task.png"
  },
  {
    id: 3,
    title: "Automate Your Task",
    description:
      "Save time by automating repetitive tasks and workflows, so you can focus on what truly matters.",
    img: "/automate.png"
  }, 
];

  return (
    <div className='w-full min-h-screen text-white overflow-hidden'>
        <Navbar/>
            
      
      <section className='w-full py-8 px-4 sm:px-6  mt-12 lg:px-8'>
        <div className='flex flex-col-reverse gap-8 lg:gap-14 lg:flex-row justify-between items-center max-w-7xl mx-auto'>
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
                <img src="todo.png" alt="Todo illustration" className='w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain'/>
            </div>
        </div>
    </section>

    <section className='w-full py-8 px-4 sm:px-6  mt-5 lg:px-8'>
      <h2 className='text-center text-4xl font-bold text-blue-500'>What Can You Do?</h2>

      <div className='flex justify-center gap-20 items-center mt-15 flex-wrap'>

        {features.map((feature)=>{
          
          return(

            
            <div key={feature.id} className="w-80 bg-blue-500/10
    backdrop-blur-lg
    border border-white/20
    shadow-xl rounded-xl overflow-hidden  
            transition duration-500 hover:scale-105 hover:shadow-2xl ">

  {/* Image wrapper */}
  <div className="w-full h-40 flex items-center justify-center bg-black">
    <img
      src={feature.img}
      alt="Progress"
      className="max-h-full min-w-full"
    />
  </div>

  <div className="p-4">
    <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
    <p className="text-sm text-gray-400 mt-1">
      {feature.description}
      </p> 
  </div>
</div>
      )
        })}


      </div>
      
    </section>

    <Footer/>
      </div>
  )
}

export default Home
