import React from 'react'

import { FaBell, FaCheck, FaCheckCircle, FaDiceThree, FaFile, FaFileAlt, FaHistory, FaHourglassHalf, FaRegQuestionCircle, FaSearch, FaSpinner, FaTasks, FaUserAlt, FaUserAltSlash, FaUserCheck } from 'react-icons/fa'
import SideBarItems from '../components/SidebarItem'
import { FaLocationDot, FaTableCellsRowUnlock } from 'react-icons/fa6'
import WeeklyActivity from '../components/WeeklyActivity'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function VictimHome() {
    const navigate = useNavigate()
    const[dp,setDp] = useState("")
    const [token,setToken] = useState("")
    const [name,setName] = useState("")
    console.log(dp)
    console.log(name)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            const userToken = sessionStorage.getItem("token")
            setToken(userToken)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const user = JSON.parse(sessionStorage.getItem("user"))
            setDp(user.picture)
            const user2 = JSON.parse(sessionStorage.getItem("user"))
            setName(user2.username)
        }
    },[token])
  return (
    <div className='grid grid-cols-5'>
        <section className='col-span-1 bg-secondary-blue h-full border-r-1 border-gray-700'>
            <SideBarItems/>
        </section>
        
        <section className='col-span-4'>
            {/* search bar */}
            <div className='flex justify-between items-center bg-secondary-blue p-3 border-b-1 border-gray-700 sticky top-0 z-1'>
                <div className='flex items-center gap-3 bg-[#232d36] placeholder-amber-50 rounded px-3 py-2 border border-gray-700 text-l ml-3 '>
                    <FaSearch className='text-amber-50 '/>
                    <p className='text-amber-50'>Search Request . . . .</p>
                </div>
                
                <div className='flex items-center gap-3'>
                    <FaBell className='text-amber-50 mr-5'/>

                    <div className='flex flex-col '>
                        <p className='text-white font-bold'>{name}</p>
                        <p className='text-gray-400'>Volunteer Account</p>
                    </div>
                    <div>
                        <img className='rounded-full w-10 h-10' src="https://static.vecteezy.com/system/resources/previews/068/208/439/non_2x/user-profile-flat-icon-with-round-white-shape-avatar-sign-gender-neutral-silhouette-default-user-icon-social-media-profile-picture-user-profile-account-dp-sign-illustration-vector.jpg" alt="" />
                    </div>
                </div>

            </div>

            {/* main box */}
            <div className='bg-primary-blue h-screen p-6 '>
                <div className='flex justify-between mb-5'>
                    <div className='flex flex-col'>
                        <p className='text-white text-3xl font-bold mb-2'>Volunteer Dashboard</p>
                        <p className='text-gray-600 text-xl'>Welcome back, Sarah</p>
                    </div>
                    <div className='flex gap-3 '>
                        {/* <button className='bg-gray-500 p-4 text-white font-bold rounded-2xl hover:bg-gray-700 cursor-pointer flex items-center gap-2'><FaHistory/> History</button> */}
                        <button onClick={()=>navigate('/volunteer/approved-request')} className='bg-blue-500 p-4 text-white font-bold rounded-2xl hover:bg-blue-700 cursor-pointer flex items-center gap-2'><FaLocationDot/> Find Tasks</button>
                    </div>
                </div>
                {/* boxes */}
                <div className='flex justify-evenly items-center gap-5 mb-3'>
                    
                    {/* Approved */}
                    <div className='bg-[#232d36] flex flex-col w-80 h-30 p-4  rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 font-bold'>Total Accepted</p>
                            <FaCheckCircle className='text-gray-500 text-3xl'/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>12</p>
                    </div>
                    {/* Assigned  */}
                    <div className='bg-[#232d36] flex flex-col w-80 h-30 p-4 w-60 h-25 rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 font-bold'>Active Task</p>
                            <FaSpinner className='text-gray-500 text-3xl'/> 
                        </div>
                        <p className='text-blue-400 text-3xl font-bold'>3</p>
                    </div>
                    {/* Pending */}
                    <div className='bg-[#232d36] flex flex-col w-80 h-30 p-4 rounded-lg border-1 border-gray-700'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 font-semiboldbold'>COMPLETED TASKS</p>
                            <FaTasks className='text-gray-500 text-3xl'/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>1</p>
                    </div>
                </div>

                <div className='grid grid-cols-3'>

                    
                    <section className='col-span-2'>

                        {/* active request status */}
                        <div className='h-[400px]'>
                            
                            <WeeklyActivity/>
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