import React from 'react'
import  {ArrowLeft, ChevronLeft} from "lucide-react"
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const navigate = useNavigate()
  return (
<div className=" h-screen w-full flex flex-col text-white">
      <div className="flex justify-start items-center px-10 py-5 text-white font-bold">
        <button onClick={()=>{navigate(-1)}}>
        
                <ArrowLeft size={45}/>
                </button>
      </div>
      <div className="h-full flex justify-center items-center">
        <div className="w-xl bg-blue-500/10 backdrop-blur-lg  border-2 border-white/50 rounded-xl">
            <h1 className="text-4xl text-center py-3">SignIn</h1>
            <form className="py-5 flex flex-col gap-5 px-8">
                <div className="flex flex-col gap-5">

                
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-gray-200 text-lg">Email</label>
                    <input type="email" id="email" name="email" className="outline-none border border-blue-500 px-5 py-2 rounded-lg text-xl text-gray-200 " required />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-gray-200 text-lg">Password</label>
                    <input type="password" id="password" className="outline-none border border-blue-500 px-5 py-2 rounded-lg text-xl text-gray-200 " name="password" required />
                </div>
                </div>
                <button type="submit" className="text-2xl font-medium py-2 rounded-lg bg-blue-500 ">SignIn</button>
                <p className="text-xl font-lg">Don't have any account? please <span className="text-blue-600 underline">SignUp</span></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signin
