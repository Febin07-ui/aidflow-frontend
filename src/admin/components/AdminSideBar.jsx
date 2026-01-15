import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaChartArea, FaDashcube, FaEnvelope, FaIcons, FaRegQuestionCircle, FaThLarge, FaUser, FaUsers } from 'react-icons/fa'
import { FaCodePullRequest, FaEnvelopesBulk, FaGear, FaGears } from 'react-icons/fa6'
import { MdRequestPage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function AdminSideBar() {
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
    <div className='flex flex-col justify-between pl-4 h-screen pb-3 sticky top-0 z-1'>
        <div className='flex flex-col '>
            <div className='flex justify-between items-center gap-4 w-20 h-20  pl-2 mb-6'>
            {/* <img className='w-15 h-15' src="aidLogo.png" alt="logo" /> */}
            <div className='flex flex-col '>
                <h1 className='text-white text-xl font-bold'>AidFlow</h1>
                <p className='text-gray-400 text-shadow-md font-extralight'>AdminController</p>
            </div>
            
            </div>

            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaThLarge className='text-gray-400 text-xl'/>
                <p onClick={()=>navigate('/admin')} className='text-gray-400 font-semibold cursor-pointer'>Dashboard</p>
            </div>
            <div className='flex items-center gap-3 pl-3 mb-4 text-l'>
                <FaUsers className='text-gray-400 text-xl'/>
                <p onClick={()=>navigate('/admin/manage-users')} className='text-gray-400 font-semibold cursor-pointer '>Users</p>
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
                    <img className='rounded-full w-10 h-10' src="https://media.istockphoto.com/id/1192884194/vector/admin-sign-on-laptop-icon-stock-vector.jpg?s=612x612&w=0&k=20&c=W7ClQXF-0UP_9trbNMvC04qUE4f__SOgg6BUdoX6hdQ=" alt="" />
                </div>
                <div className='flex flex-col '>
                    <p className='text-gray-400 font-bold'>{name}</p>
                    <p className='text-gray-400'>Admin Account</p>
                </div>
            </div>
        </div>
        

        
    </div>
  )
}

export default AdminSideBar