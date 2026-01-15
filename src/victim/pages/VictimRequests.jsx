import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { FaEnvelopeOpenText, FaPlus, FaSearch } from 'react-icons/fa'
import RequestTable from '../../admin/components/RequestTable'
import RequestTableVictim from '../components/RequestTableVictim'
import { getVictimRequestAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import { useState } from 'react'

function VictimRequests() {
    const [myRequests,setMyRequests] = useState([])

    const getMyRequests = async () =>{
        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Authorization":`Bearer ${token}`
        }

        const result = await getVictimRequestAPI(reqHeader)
        if(result.status === 200){
            setMyRequests(result.data)
        }
    }

    useEffect(()=>{
        getMyRequests()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className='flex flex-col'>
        
        <NavigationBar/>
        
        <div className='flex flex-col p-5 bg-primary-blue h-full px-25 py-10 '>
            <div className='flex justify-between '>
                <div className='flex flex-col '>
                    <p className='text-white text-3xl font-bold mb-2'>My Requests</p>
                    <p className='text-gray-400'>Track and manage your requests for assistance</p>
                </div>
                <button className='text-white font-semibold bg-blue-500 flex gap-2 items-center p-2 h-10 rounded-xl' ><FaPlus/>Create New Request</button>
            </div>

            <div className='flex justify-evenly mt-5 mb-5'>
                <div className='flex items-center gap-2 p-2 rounded bg-[#232d36] border border-gray-700'>
                    <FaSearch className='text-gray-400'/>
                    <input type="text" className='text-gray-400 placeholder-gray-400 w-150 outline-none' placeholder='Search requests by title or ID...' />
                </div>
                <select className='bg-[#232d36] text-gray-400 w-60 rounded p-2 border border-gray-700' name="" id="">
                    <option value="">All Statues</option>
                </select>
                <select className='bg-[#232d36] text-gray-400 w-60 rounded p-2 border border-gray-700' name="" id="">
                    <option value="">All Urgency</option>
                </select>
            </div>
            
            <RequestTableVictim myRequests={myRequests}/>

            
            
            

        </div>
    </div>
  )
}

export default VictimRequests