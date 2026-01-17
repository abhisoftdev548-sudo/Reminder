import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignUp from './components/Auth/SignUp'
import Signin from './components/Auth/Signin'
import About from './pages/About'
import Contact from './pages/Contact'
import YourReminders from './components/YourReminders'
import CreateReminders from './components/CreateReminders'

function App() {


  return (

    <div className=' min-h-screen w-full overflow-x-hidden bg-linear-to-b
  from-[#0b1324]
  via-[#0a1120]
  to-[#070c17]'>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/your-reminders' element={<YourReminders/>}/>
        <Route path='/create-reminder' element={<CreateReminders/>}/>
      </Routes>
      
    


    </div>
    
  )
}

export default App
