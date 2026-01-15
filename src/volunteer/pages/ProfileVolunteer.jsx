import React from 'react'
import { FaBell, FaEdit, FaRegQuestionCircle, FaSearch } from 'react-icons/fa'
import { FaMessage, FaRightFromBracket, FaUpDownLeftRight } from 'react-icons/fa6'
import SideBarItems from '../components/SidebarItem'
import { useState } from 'react'
import { useEffect } from 'react'

function ProfileVolunteer() {
    const [dp,setDp] = useState("")
    const [username,setUsername] = useState("")
    useEffect(()=>{
        if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
            const user = JSON.parse(sessionStorage.getItem('user'))
            setUsername(user.username)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setDp(user.picture)
        }
        
    },[])
  return (
    <div>
        <div className='grid grid-cols-5'>
            <section className='col-span-1 bg-secondary-blue h-full border-r-1 border-gray-700'>
                <SideBarItems/>
            </section>
            <section className='col-span-4'>
                {/* top */}
                <div className='flex justify-end items-center bg-secondary-blue p-3 border-b-1 border-gray-700 sticky top-0 z-1'>
                    
                    <div className='flex items-center gap-4 text-xl mr-3'>
                        <FaBell className='text-amber-50 '/>
                        <FaRegQuestionCircle className='text-amber-50 '/>
                    </div>
    
                </div>

                {/* main */}
                <div className='flex flex-col justify-center items-center bg-primary-blue h-screen '> 
                    <div className='w-100 h-122 bg-[#2d2d3666] rounded-2xl flex flex-col border border-gray-700 '>
                        <div className='w-full h-50 bg-secondary-blue rounded-t-2xl flex-col justify-center items-center p-6'>
                            <div className='flex flex-col items-center mb-2'>
                                <img  width={70} src={dp?dp:"https://cdn-icons-png.flaticon.com/512/9131/9131529.png"} alt="" />
                                
                            </div>
                            <p className='text-white font-bold text-center mb-4'>{username}</p>
                            <div>
                                <p className='text-blue-400 bg-blue-400/15 text-center text-sm mx-29 rounded-3xl p-1'>• Volunteer </p>
                            </div>
                        </div>
                        <div className='p-7'>   
                            <p className='text-gray-400 mb-2'>Email Address</p>
                            <input className='bg-secondary-blue w-full border border-gray-800 mb-2 placeholder-gray-400 p-2 rounded-xl' placeholder='name@gmail.com' type="text" />

                            <p className='text-gray-400'>Location</p>
                            <input className='bg-secondary-blue w-full border border-gray-800 mb-6 placeholder-gray-400 p-2 rounded-xl' placeholder='423 relif ave.District 9' type="text" />

                            <button className='bg-blue-500 hover:bg-blue-600 w-full p-1 text-white rounded flex justify-center items-center gap-3 mb-4 cursor-pointer'><FaEdit/>Edit Profile</button>
                            <button className='flex justify-center items-center w-full gap-3 text-red-400 hover:text-red-600 cursor-pointer' ><FaRightFromBracket/> Log Out</button>
                        </div>
                        
                        

                    </div>
                </div>


            </section>
        </div>
    </div>
  )
}

export default ProfileVolunteer