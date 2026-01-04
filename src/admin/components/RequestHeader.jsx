import React from 'react'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function RequestHeader() {
  return (
    <div className='flex justify-between bg-secondary-blue p-2 border-gray-700 border-b'>
        <div >
            <p className='text-white text-xl font-semibold'>AidFlow</p>
        </div>
        <div className='flex justify-evenly items-center gap-5'>
            <Link className="text-gray-400 hover:text-blue-400" >Dashboard</Link>
            <Link className="text-gray-400 hover:text-blue-400" >Users</Link>
            <Link className="text-gray-400 hover:text-blue-400" >Manage Request</Link>
            <Link className="text-gray-400 hover:text-blue-400" >Inventry</Link>
            <FaBell className='text-amber-50 mr-5'/>
        </div>
    </div>
  )
}

export default RequestHeader