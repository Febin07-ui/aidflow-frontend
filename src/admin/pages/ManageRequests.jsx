import React, { useEffect, useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { FaCheckDouble, FaSearch } from 'react-icons/fa'
import RequestTable from '../components/RequestTable'
import { getAllRequestAPI } from '../../services/allAPI'

function ManageRequests() {

  const [requests,setRequests] = useState([])

  useEffect(()=>{
    const fetchRequests = async () =>{
      const result = await getAllRequestAPI()
      if(result.status === 200){
        setRequests(result.data)
      }

    }
    fetchRequests()
  },[])




  return (
    <div className=' bg-secondary-blue p-6 h-screen'>
      
        {/* header */}
        <div className='flex justify-between border-1 pb-3 border-b-gray-700'>
          <div className='flex flex-col '>
            <p className='text-white font-bold text-3xl'>Manage Requests</p>
            <p className='text-gray-400'>Review and process incoming help requests from the community</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-gray-400'>3 Items selected</p>
            <button className='bg-blue-500 text-white font-semibold flex items-center gap-3 p-2 rounded-xl hover:bg-blue-600' ><FaCheckDouble/>Bulk Approval</button>
          </div>
        </div>

        {/* search and filters */}
        <div className='flex justify-between py-3 border-1 border-b-gray-700'> 
            <div className='flex items-center gap-3 bg-[#232d36] placeholder-amber-50 rounded px-3 py-2 border border-gray-700 text-l ml-3 w-80'>
                <FaSearch className='text-amber-50 '/>
                <input className='text-amber-50 outline-none' placeholder='Search Request . . . .'/>
            </div>
          <div className='flex items-center gap-3'>
            <p className='text-gray-400 '>Filter by:</p>
            {/* status */}
            <select className='bg-[#232d36] text-white p-2 rounded' name="" id="">
              <option value="">Status: All</option>
            </select>
            {/* Urgency level */}
            <select className='bg-[#232d36] text-white p-2 rounded' name="" id="">
              <option value="">Urgency: All</option>
            </select>
            {/* Type */}
            <select className='bg-[#232d36] text-white p-2 rounded' name="" id="">
              <option value="">Type: All</option>
            </select>
          </div>
        </div>

        {/* Request Table */}
        <RequestTable requests={requests}/>

        {/* Pagination */}
      

    </div>
  )
}

export default ManageRequests