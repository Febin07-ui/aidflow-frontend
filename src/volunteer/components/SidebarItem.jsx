import React from 'react'
import { FaChartArea, FaDashcube, FaEnvelope, FaIcons, FaRegQuestionCircle, FaThLarge, FaUser } from 'react-icons/fa'
import { FaCodePullRequest, FaEnvelopesBulk, FaGear, FaGears } from 'react-icons/fa6'
import { MdRequestPage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function SideBarItems() {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between flex-col pl-4 sticky top-0 z-1'>
        
        <div>
                <div className='flex justify-between items-center gap-4 w-20 h-20  pl-2 mb-5'>
                <img src="aidLogo.png" alt="" />
                <h1 className='text-white text-2xl '>AidFlow</h1>
                </div>
                <div className='flex items-center gap-3 pl-3 mb-4 text-l cursor-pointer '>
                    <FaThLarge className='text-gray-400 text-xl'/>
                    <p onClick={()=>navigate('/volunteer')} className='text-gray-400 font-semibold hover:text-blue-500'>Dashboard</p>
                </div>
                <div onClick={()=>navigate('/volunteer/mytask')} className='flex items-center gap-3 pl-3 mb-4 text-l cursor-pointer'>
                    <MdRequestPage className='text-gray-400 text-xl'/>
                    <p className='text-gray-400 font-semibold hover:text-blue-500'>My Tasks</p>
                </div>
                {/* <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                    <FaEnvelopesBulk className='text-gray-400 text-xl'/>
                    <p className='text-gray-400 font-semibold '>Messeges</p>
                </div> */}
                <div className='flex items-center gap-3 pl-3 mb-100 text-l cursor-pointer'>
                    <FaUser className='text-gray-400 textxl'/>
                    <p onClick={()=>navigate('/volunteer/profile')} className='text-gray-400 font-semibold hover:text-blue-500 '>Profile</p>
                </div>

        </div>
        {/* emergency box */}
        <div className=" w-60 bg-[#0f172a] rounded-xl p-3">
      
            
            <div className="flex items-center gap-4 mb-4">
                
                
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-red-500/20 text-red-500 font-bold">
                    SOS
                </div>

                <div>
                <h3 className="text-white font-semibold ">
                    Emergency?
                </h3>
                <p className="text-gray-400 text-sm">
                    Call coordinator
                </p>
                </div>
            </div>

            {/* Button */}
            <button className="w-full py-2 rounded-lg bg-[#334155] text-white font-light hover:bg-[#475569] transition">
                Request Support
            </button>
        </div>

        



        
    </div>
  )
}

export default SideBarItems