import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
  return (
    <div className='bg-primary-blue flex justify-between '>
        <div className='flex justify-between items-center gap-4 w-20 h-20  pl-7'>
            <img src="aidLogo.png" alt="" />
            <h1 className='text-white text-2xl'>AidFlow</h1>
        </div>
        <div className='md:flex justify-between items-center gap-6 pr-3'>
            <div className='flex gap-4 '>
                <Link className='text-white'>About</Link>
                <Link className='text-white'>Map</Link>
                <Link className='text-white'>Resources</Link>
            </div>
            
            <div className='flex gap-2 '>
                <button onClick={()=>navigate('/login')}  className='bg-gray-600 text-white rounded-md p-2 cursor-pointer hover:bg-gray-700'>Login</button>
                <button onClick={()=>navigate('/register')} className='bg-blue-500 text-white rounded-md p-2 cursor-pointer hover:bg-blue-600'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Header