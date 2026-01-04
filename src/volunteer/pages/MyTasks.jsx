import React, { useState } from 'react'
import SideBarItems from '../components/SidebarItem'
import ApprovedReqHeader from '../components/ApprovedReqHeader'
import { FaCheck, FaPlusCircle, FaTimes, FaUpload } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function MyTasks() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(false)
  return (
    <div className='flex flex-col bg-secondary-blue h-screen'>
        <div>
            <ApprovedReqHeader/>
        </div>
        <div className='flex justify-between items-center p-5 bg-secondary-blue '>
            <div className='flex flex-col '>
                <p className='text-3xl font-bold text-white '>My Tasks</p>
                <p className='text-gray-400'>Manage your active disaster relief effort. <span>3 Active</span>• 12 Completed </p>
            </div>
            <button onClick={()=>navigate('/volunteer/approved-request')} className='bg-blue-500 px-3 py-1.5 font-semibold text-white flex items-center gap-2 rounded cursor-pointer hover:bg-blue-600'><FaPlusCircle/>Find New Request</button>
            
        </div>
        <hr  className='mx-9 text-gray-600 '/>
        <div className='grid grid-cols-2 bg-secondary-blue p-5 gap-5'>
            {/* cards */}
            <div className='flex justify-between bg-[#2a2c30] rounded-2xl border-1 border-gray-700 hover:border-blue-500 hover:border-l-4 gap-3'>
                <div className='m-0'>
                    <img className='h-full w-45 rounded-2xl' src="https://tse2.mm.bing.net/th/id/OIP.p7GNb18GSaAEXWjZs9z8MgHaHa?pid=Api&P=0&h=180" alt="" />
                </div>
                <div className='flex flex-col pr-2 pt-2'>
                    <div className='flex gap-5 mb-1'>
                        <p className='bg-red-500/20 text-red-500 p-1 rounded text-sm'>CRITICAL</p>
                        <p className='text-gray-400 '>• 20 min ago</p>
                    </div>
                    <p className='text-white text-xl font-bold '>Emergency Water Supply</p>
                    <p className='text-gray-400 mb-2'>Local senior center water main break. Need 50 gallons of potable water immediately.</p>

                    <p className='text-gray-400 flex items-center mb-2'><FaLocationDot className='mr-2'/> Senior Center • 2.5km away</p>

                    <button onClick={() => setOpen(true)} className='bg-blue-500 text-white w-full rounded p-2  flex justify-center gap-3 items-center hover:bg-blue-600 cursor-pointer mb-2'>In progress </button>
                    {
                        open&& (
                            <>  
                                {/* blur */}
                                <div className='fixed inset-0 bg-black/0 backdrop-blur-sm z-40'> </div>
                                {/* modal */}
                                <div className="fixed inset-0 flex flex-col items-center justify-center z-50 ">
                                    <div className='bg-[#0d1522] text-white p-6 rounded-xl w-100 '>
                                        <div className=" flex justify-between ">
                                            <p>Complete Task #DR-4102 </p>
                                            <FaTimes className='cursor-pointer' onClick={()=>setOpen(false)}/>
                                        </div>
                                        <hr className='text-gray-700 mt-2 mb-3'/>
                        
                                        <p className='mb-2'>Concluding Remarks(Optional)</p>
                                        <textarea placeholder='Any issues encounded ? Notes for the admin ?' className='bg-[#18202c] w-full rounded p-2 text-sm text-gray-400 border-hidden outline-hidden' row={2} name="" id=""></textarea>
                        
                                        <p className='mb-2'>Proof of Delivary</p>
                                        <div className='bg-[#18202c] w-full rounded flex flex-col justify-center items-center gap-2 p-2 py-4 mb-5 border-dotted border-gray-500 border'>
                                            <FaUpload className='text-blue-500 bg-[#25354e] rounded-full p-1  w-10 h-10 '/>
                                            <p className='text-gray-400'>Click to upload photo</p>
                                            <p className='text-gray-500 text-sm'>JPG,PNG up to 5MB</p>
                                        </div>
                        
                        
                                        <div className='flex justify-end gap-2 '>
                                            <button className='bg-gray-700 hover:bg-gray-800 cursor-pointer font-semibold text-gray-100 p-2 rounded' onClick={() => setOpen(false)}>
                                                Close
                                            </button>
                                            <button className='bg-blue-600 hover:bg-blue-700 cursor-pointer font-semibold text-gray-100 p-2 rounded' onClick={() => setOpen(false)}>
                                                Confirm Completion
                                            </button>
                                        </div>
                        
                                    </div>
                                </div>
                            </>
                            
                            
                            
                        )
                    }
                </div>
                
            </div> 
            {/* duplicates */}
            <div className='flex justify-between bg-[#2a2c30] rounded-2xl border-1 border-gray-700 hover:border-blue-500 hover:border-l-4 gap-3'>
                <div className='m-0'>
                    <img className='h-full w-45 rounded-2xl' src="https://tse2.mm.bing.net/th/id/OIP.p7GNb18GSaAEXWjZs9z8MgHaHa?pid=Api&P=0&h=180" alt="" />
                </div>
                <div className='flex flex-col pr-2 pt-2'>
                    <div className='flex gap-5 mb-1'>
                        <p className='bg-red-500/20 text-red-500 p-1 rounded text-sm'>CRITICAL</p>
                        <p className='text-gray-400 '>• 20 min ago</p>
                    </div>
                    <p className='text-white text-xl font-bold '>Emergency Water Supply</p>
                    <p className='text-gray-400 mb-2'>Local senior center water main break. Need 50 gallons of potable water immediately.</p>

                    <p className='text-gray-400 flex items-center mb-2'><FaLocationDot className='mr-2'/> Senior Center • 2.5km away</p>

                    <button  className='bg-green-500 text-white w-full rounded p-2  flex justify-center gap-3 items-center hover:bg-green-600 cursor-pointer mb-2'> <FaCheck className='bg-blue'/> Mark Delivered</button>
                    
                </div>
                
            </div> 
            <div className='flex justify-between bg-[#2a2c30] rounded-2xl border-1 border-gray-700 hover:border-blue-500 hover:border-l-4 gap-3'>
                <div className='m-0'>
                    <img className='h-full w-45 rounded-2xl' src="https://tse2.mm.bing.net/th/id/OIP.p7GNb18GSaAEXWjZs9z8MgHaHa?pid=Api&P=0&h=180" alt="" />
                </div>
                <div className='flex flex-col pr-2 pt-2'>
                    <div className='flex gap-5 mb-1'>
                        <p className='bg-red-500/20 text-red-500 p-1 rounded text-sm'>CRITICAL</p>
                        <p className='text-gray-400 '>• 20 min ago</p>
                    </div>
                    <p className='text-white text-xl font-bold '>Emergency Water Supply</p>
                    <p className='text-gray-400 mb-2'>Local senior center water main break. Need 50 gallons of potable water immediately.</p>

                    <p className='text-gray-400 flex items-center mb-2'><FaLocationDot className='mr-2'/> Senior Center • 2.5km away</p>

                    <button onClick={() => setOpen(true)} className='bg-blue-500 text-white w-full rounded p-2  flex justify-center gap-3 items-center hover:bg-blue-600 cursor-pointer mb-2'>In progress</button>
                    
                </div>
                
            </div> 
        </div>
    </div>
  )
}

export default MyTasks