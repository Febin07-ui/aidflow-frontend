import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigationBar() {
    const navigate = useNavigate()
  return (
    
    <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800 bg-secondary-blue sticky top-0 z-1">
        <div className='flex justify-between items-center '>
            <img src="aidLogo.png" alt="" />
            <h1 className='text-white text-2xl'>AidFlow</h1>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <a onClick={()=>navigate('/victim')} href="#" className="hover:text-white transition">Dashboard</a>
          <a onClick={()=>navigate('/victim')} href="#" className="hover:text-white transition">My Requests</a>
          <a href="#" className="hover:text-white transition">Resources</a>
          <button onClick={()=>navigate('/victim/profile')} className="bg-slate-800 px-4 py-1.5 rounded-md text-white hover:bg-slate-700 transition cursor-pointer">Profile</button>
        </div>
    </nav>
    
  )
}

export default NavigationBar