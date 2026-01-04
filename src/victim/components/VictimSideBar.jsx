import React from 'react'
import { FaChartArea, FaDashcube, FaEnvelope, FaIcons, FaRegQuestionCircle, FaThLarge, FaUser } from 'react-icons/fa'
import { FaCodePullRequest, FaEnvelopesBulk, FaGear, FaGears } from 'react-icons/fa6'
import { MdRequestPage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function VictimSideBar() {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between flex-col pl-4 h-screen sticky top-0 z-1'>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center gap-4 w-20 h-20  pl-2 mb-5'>
                <img src="aidLogo.png" alt="" />
                <h1 className='text-white text-2xl'>AidFlow</h1>
            </div>
            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaThLarge className='text-gray-400 text-xl'/>
                <p onClick={()=>navigate('/victim')} className='text-gray-400 font-semibold hover:text-blue-500 cursor-pointer'>Dashboard</p>
            </div>
            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <MdRequestPage className='text-gray-400 text-xl'/>
                <p onClick={()=>navigate('/victim/all-requests')} className='text-gray-400 font-semibold hover:text-blue-500 cursor-pointer'>My Requests</p>
            </div>
            
            <div className='flex items-center gap-3 pl-3 mb-100 text-l'>
                <FaUser className='text-gray-400 textxl'/>
                <p onClick={()=>navigate('/victim/profile')} className='text-gray-400 font-semibold hover:text-blue-500 cursor-pointer'>User</p>
            </div>
        </div>
        
        {/* Account */}

        <div className='flex flex-col mb-3'>
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

export default VictimSideBar