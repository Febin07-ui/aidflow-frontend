import React from 'react'
import VictimSideBar from '../components/VictimSideBar'
import { FaBell, FaCheck, FaCheckCircle, FaDiceThree, FaFile, FaFileAlt, FaHourglassHalf, FaRegQuestionCircle, FaSearch, FaUserAlt, FaUserAltSlash, FaUserCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function VictimHome() {
    const navigate = useNavigate()
  return (
    <div className='grid grid-cols-5'>
        <section className='col-span-1 bg-secondary-blue h-full border-r-1 border-gray-700'>
            <VictimSideBar/>
        </section>
        
        <section className='col-span-4'>
            {/* search bar */}
            <div className='flex justify-between items-center bg-secondary-blue p-3 border-b-1 border-gray-700 sticky top-0 z-1'>
                <div className='flex items-center gap-3 bg-[#232d36] placeholder-amber-50 rounded px-3 py-2 border border-gray-700 text-l ml-3 w-80'>
                    <FaSearch className='text-amber-50 '/>
                    <input className='text-amber-50 outline-none' placeholder='Search Request . . . .'/>
                </div>
                <div className='flex items-center gap-4 text-xl mr-3'>
                    <FaBell className='text-amber-50 '/>
                    <FaRegQuestionCircle className='text-amber-50 '/>
                </div>

            </div>

            {/* main box */}
            <div className='bg-primary-blue h-screen p-6 '>
                <div className='flex justify-between mb-5'>
                    <div className='flex flex-col'>
                        <p className='text-white text-3xl font-bold mb-2'>Victim Dashboard</p>
                        <p className='text-gray-600 text-xl'>Welcome back, Sarah.Help is on the way</p>
                    </div>
                    <div>
                        <button onClick={() => navigate('/victim/new-request')} className='bg-blue-500 p-4 text-white font-bold rounded-2xl hover:bg-blue-600 cursor-pointer'>+  Create New Request</button>
                    </div>
                </div>
                {/* boxes */}
                <div className='flex justify-evenly items-center gap-5 mb-3'>
                    {/* total created */}
                    <div className='bg-[#232d36] flex flex-col p-4 w-60 h-25 rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 '>Total Created</p>
                            <FaFileAlt className='text-blue-500 '/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>5</p>
                    </div>
                    {/* Approved */}
                    <div className='bg-[#232d36] flex flex-col p-4 w-60 h-25 rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 '>Approved</p>
                            <FaCheckCircle className='text-green-500 '/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>3</p>
                    </div>
                    {/* Assigned  */}
                    <div className='bg-[#232d36] flex flex-col p-4 w-60 h-25 rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 '>Assigned</p>
                            <FaUserCheck className='text-blue-500 '/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>1</p>
                    </div>
                    {/* Pending */}
                    <div className='bg-[#232d36] flex flex-col p-4 w-60 h-25 rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 '>Pending</p>
                            <FaHourglassHalf className='text-yellow-500 '/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>1</p>
                    </div>
                </div>

                <div className='grid grid-cols-3'>

                    
                    <section className='col-span-2'>

                        {/* active request status */}
                        <div className='w-full m-2 bg-[#232d36] rounded-lg mt-10 '>
                            
                            <div className='flex justify-between p-4'>
                                <p className='text-white font-bold '>Active Request Status</p>
                                <p className='text-blue-600 font-bold bg-gray-700 border-gray-700 border p-1 rounded'>URGENT</p>
                            </div>
                            <hr  className='text-gray-700 mb-3'/>
                            <div className='flex justify-between p-3'>
                                <div>
                                    <p className='text-white font-bold '>Request #402 - Medical Supplies</p>
                                    <p className='text-gray-500'>Last updated:15 min ago</p>
                                </div>
                                <button className='font-bold text-blue-500 '>View Details</button>
                            </div>

                            <div className='flex justify-evenly p-3 '>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                                        <FaCheck className='text-white'/>
                                        
                                    </div>
                                    <p className='text-white'>Received</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                                        <FaCheck className='text-white'/>
                                        
                                    </div>
                                    <p className='text-white'>Vetted</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                                        <FaCheck className='text-white'/>
                                        
                                    </div>
                                    <p className='text-white'>En Route</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='bg-blue-500 rounded-full w-10 h-10 flex justify-center items-center mb-1'>
                                        <FaCheck className='text-white'/>
                                        
                                    </div>
                                    <p className='text-white'>Delivered</p>
                                </div>
                            </div>
                        </div>
                        {/* Recent Requestd */}
                        
                    </section>

                    <section className='col-span-1'>
                        
                    </section>

                </div>
            </div>
        </section>

    </div>
  )
}

export default VictimHome