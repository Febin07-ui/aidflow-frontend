import React, { useEffect, useState } from 'react'
import ApprovedReqHeader from '../components/ApprovedReqHeader'
import { FaLocationDot } from 'react-icons/fa6'
import { FaCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getApprovedRequestsAPI } from '../../services/allAPI'

function ApprovedRequest() {
    const navigate = useNavigate()

    const [approvedReq,setApprovedReq] = useState([])

    const timeAgo = (date) => {
    const now = new Date()
    const past = new Date(date)

    const diffInSeconds = Math.floor((now - past) / 1000)

    if (diffInSeconds < 60) {
        return "Just now"
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60)
    if (diffInMinutes < 60) {
        return `${diffInMinutes} min ago`
    }

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) {
        return `${diffInHours} hours ago`
    }

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays} days ago`
    }


    useEffect(()=>{
        const fetchApprovedRequests = async () =>{
            const result = await getApprovedRequestsAPI()
            if(result.status === 200){
                setApprovedReq(result.data)
            }
        }
        fetchApprovedRequests()
    },[])

  return (
    <div className='flex flex-col h-screen overflow-hidden bg-secondary-blue'>
        <div className='z-10 shadow-md'>
            <ApprovedReqHeader/>
        </div>
        <div className='grid grid-cols-5 flex-1 overflow-hidden'>
            <div className='col-span-2 bg-secondary-blue overflow-y-auto custom-scrollbar '>
                <div className='flex flex-col p-4'>
                    <p className='text-white font-bold text-3xl'>Approved Request</p>
                    <p className='text-gray-400 mb-4'>Connect with help-seekers and coordinate resources.</p>
                    <div className='flex justify-evenly'>
                        <select className='bg-[#36393f] rounded text-white p-2' name="" id="">
                            <option value="">Urgency</option>
                            <option value="">High</option>
                            <option value="">Medium</option>
                            <option value="">Low</option>
                        </select>
                        <select className='bg-[#36393f] rounded text-white p-2' name="" id="">
                            <option value="">Resource Type</option>
                            <option value="">Water</option>
                            <option value="">Medical</option>
                            <option value="">Shelter</option>
                        </select>
                        <button className='text-blue-400'>Reset</button>
                    </div>
                    {/* Request boxes */}
                    {
                        approvedReq.length>0 ? (
                            approvedReq.map((req)=>(
                                <div key={req.id} className='flex justify-between p-4 bg-[#2a2c30] m-3 rounded-2xl border-1 border-gray-700 hover:border-blue-500 hover:border-l-4 gap-3'>
                                    <div className='flex flex-col '>
                                        <div className='flex gap-5 mb-1'>
                                            <p className={`p-1 rounded text-sm ${req.urgency == "High" ? "bg-red-500/20 text-red-500" : req.urgency == "Medium" ?"bg-orange-500/20 text-orange-500" : "bg-green-500/20 text-green-500"}  `}>{req.urgency.toUpperCase()}</p>
                                            <p className='text-gray-400 '>• {timeAgo(req.createdAt)} </p>
                                        </div>
                                        <p className='text-white text-xl font-bold '>{req.resourceType}</p>
                                        <p className='text-gray-400 mb-2'>{req.details}</p>

                                        <p className='text-gray-400 flex items-center mb-2'><FaLocationDot className='mr-2'/> {req.location} </p>

                                        <button onClick={()=>navigate('/volunteer/mytask')} className='bg-blue-500 text-white w-full rounded p-2 flex justify-center gap-3 items-center hover:bg-blue-600 cursor-pointer'>Accept Task <FaCheck className='bg-blue'/></button>
                                        
                                    </div>
                                </div>
                            ))
                        ):(
                            <p className="text-gray-400 text-center mt-10">
                            No Approved Requests Available
                            </p>
                        )
                    }
                      
                    
                    

                </div>
            </div>
            <div className='col-span-3'>
                <iframe
                    className="w-full h-full rounded-2xl border "
                    src="https://maps.google.com/maps?q=9.9932,76.3585&z=15&output=embed">
                </iframe>
            </div>

        </div>
    </div>
  )
}

export default ApprovedRequest