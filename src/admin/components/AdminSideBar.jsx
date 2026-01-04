import React from 'react'
import { FaChartArea, FaDashcube, FaEnvelope, FaIcons, FaRegQuestionCircle, FaThLarge, FaUser, FaUsers } from 'react-icons/fa'
import { FaCodePullRequest, FaEnvelopesBulk, FaGear, FaGears } from 'react-icons/fa6'
import { MdRequestPage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function AdminSideBar() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-between pl-4 h-screen pb-3 sticky top-0 z-1'>
        <div className='flex flex-col '>
            <div className='flex justify-between items-center gap-4 w-20 h-20  pl-2 mb-6'>
            <img className='w-15 h-15' src="aidLogo.png" alt="logo" />
            <div className='flex flex-col '>
                <h1 className='text-white text-xl font-bold'>AidFlow</h1>
                <p className='text-gray-400 text-shadow-md font-extralight'>AdminController</p>
            </div>
            
            </div>

            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaThLarge className='text-gray-400 text-xl'/>
                <p className='text-gray-400 font-semibold '>Dashboard</p>
            </div>
            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaUsers className='text-gray-400 text-xl'/>
                <p className='text-gray-400 font-semibold '>Users</p>
            </div>
            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaEnvelopesBulk className='text-gray-400 text-xl'/>
                <p onClick={()=>navigate('/admin/manage-requests')} className='text-gray-400 font-semibold cursor-pointer'>Requests</p>
            </div>
            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaUser className='text-gray-400 textxl'/>
                <p className='text-gray-400 font-semibold '>Profile</p>
            </div>
        </div>
        
        {/* profile photo */}
        <div className='flex flex-col '>
            
        

            <hr className='text-gray-700 mr-4 mb-5'/>

            <div className='flex items-center gap-3'>
                <div>
                    <img className='rounded-full w-10 h-10' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='flex flex-col '>
                    <p className='text-gray-400 font-bold'>Sarah Jekins</p>
                    <p className='text-gray-400'>Victim Account</p>
                </div>
            </div>
        </div>
        

        
    </div>
  )
}

export default AdminSideBar