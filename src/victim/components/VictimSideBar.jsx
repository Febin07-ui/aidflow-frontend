import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaChartArea, FaDashcube, FaEnvelope, FaIcons, FaRegQuestionCircle, FaThLarge, FaUser } from 'react-icons/fa'
import { FaCodePullRequest, FaEnvelopesBulk, FaGear, FaGears } from 'react-icons/fa6'
import { MdRequestPage } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function VictimSideBar() {
    const[dp,setDp] = useState("")
    const [token,setToken] = useState("")
    const [name,setName] = useState("")
    const navigate = useNavigate()
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
                    <img className='rounded-full w-10 h-10' src={dp?dp:"https://static.vecteezy.com/system/resources/previews/068/208/439/non_2x/user-profile-flat-icon-with-round-white-shape-avatar-sign-gender-neutral-silhouette-default-user-icon-social-media-profile-picture-user-profile-account-dp-sign-illustration-vector.jpg"} alt="" />
                </div>
                <div className='flex flex-col '>
                    <p className='text-gray-400 font-bold'>{name}</p>
                    <p className='text-gray-400'>Victim Account</p>
                </div>
            </div>
        </div>

        

        
    </div>
  )
}

export default VictimSideBar