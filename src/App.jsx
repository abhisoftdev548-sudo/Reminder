import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {


  return (

    <div className='min-h-screen w-full overflow-x-hidden bg-linear-to-b
  from-[#0b1324]
  via-[#0a1120]
  to-[#070c17]'>

      
      <Home/>
    </div>
    
  )
}

export default App
