import React, { useState } from 'react'
import SideBarItems from '../components/SidebarItem'
import ApprovedReqHeader from '../components/ApprovedReqHeader'
import { FaCheck, FaPlusCircle, FaTimes, FaUpload } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { getMyTasksAPI, markDeliveredAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import { Flip, ToastContainer, toast } from 'react-toastify';
function MyTasks() {
    
    const navigate = useNavigate(false)

    const [myTasks,setMyTasks] = useState([])
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
        const volunteer = JSON.parse(sessionStorage.getItem("user"))

        const fetchMyTasks = async () =>{
            const result = await getMyTasksAPI(volunteer._id)
            if(result.status === 200){
                setMyTasks(result.data)
            }
        }

        fetchMyTasks()
    },[])

    const handleMarkDelivered = async (taskId,requestId) =>{
        console.log('api started')
        const result = await markDeliveredAPI({
            taskId,
            requestId
        })

        if(result.status === 200){
            toast.success("Task Completed successfully")
            
            setTimeout(()=>{
                window.location.reload()
            },1500)
        }
    }

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
        <div className='md:grid grid-cols-2 bg-secondary-blue p-5 gap-5 '>
            {/* cards */}
            {
                myTasks.length > 0 ?(
                    myTasks.map((task) => (
                        <div key={task._id} className='flex bg-[#2a2c30] rounded-2xl border-1 border-gray-700 hover:border-blue-500 hover:border-l-4 gap-3 mb-2'>
                
                            <div className='md:flex flex-col flex-1 p-3'>
                                <div className='flex gap-5 mb-1'>
                                    <p className={`p-1 rounded text-sm ${
                                    task.requestId.urgency === "High"
                                        ? "bg-red-500/20 text-red-500"
                                        : task.requestId.urgency === "Medium"
                                        ? "bg-yellow-500/20 text-yellow-500"
                                        : "bg-green-500/20 text-green-500"
                                    }`}>{task.requestId.urgency.toUpperCase()}</p>
                                    <p className='text-gray-400 '>• {timeAgo(task.createdAt)}</p>
                                </div>
                                <p className='text-white text-xl font-bold '>{task.requestId.resourceType}</p>
                                <p className='text-gray-400 mb-2'>{task.requestId.details}</p>

                                <p className='text-gray-400 flex items-center mb-2'><FaLocationDot className='mr-2'/>{task.requestId.location}</p>

                                {/* status button */}
                                {task.status === "in-progress" ? (
                                    <button
                                    onClick={() => handleMarkDelivered(task._id,task.requestId._id)}
                                    className='bg-blue-500 text-white w-full rounded p-2 hover:bg-blue-600'
                                    >
                                    In Progress
                                    </button>
                                    ) : (
                                    <button
                                    className='bg-green-500 text-white w-full rounded p-2'
                                    disabled
                                    >
                                    Delivered
                                    </button>
                                )}
                            </div>
                            
                        </div> 
                    ))
                ) : (
                    <p className='text-gray-400 text-center mt-10'>
                        No Active Tasks
                    </p>
                )
            }
            
            
            
            
        </div>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
            transition={Flip}
        />
    </div>
  )
}

export default MyTasks