import React, { useEffect, useState } from 'react'
import { FaBell, FaCheck, FaCheckCircle, FaDonate, FaHistory, FaHourglassHalf, FaRegQuestionCircle, FaSearch, FaSpinner, FaTasks, FaUserAlt, FaUserAltSlash, FaUserCheck, FaUsers } from 'react-icons/fa'
import { FaLocationDot, FaTableCellsRowUnlock, FaTriangleExclamation } from 'react-icons/fa6'
import AdminSideBar from '../components/AdminSideBar'
import ResourceNeeds from '../components/ResourceNeeds'
import RequestTable from '../components/RequestTable'
import { getAdminDashboardStatsAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'

function AdminHome() {
    const navigate = useNavigate()
    const [stats,setStats] = useState({})
        console.log(stats)
        useEffect(()=>{
            const fetchStats = async () =>{
                const token = sessionStorage.getItem("token")
                const reqHeader = {
                    Authorization:`Bearer ${token}`
                }
    
                const result = await getAdminDashboardStatsAPI(reqHeader)
                if(result.status === 200){
                    setStats(result.data)
                }
    
            }
            fetchStats()
        },[])
  return (
    <div className='grid grid-cols-5 h-screen'>
        <section className='col-span-1 bg-secondary-blue border-r-1 border-gray-700'>
            <AdminSideBar/>
        </section>
        
        <section className='col-span-4'>
            {/* search bar */}
            <div className='flex justify-between items-center bg-secondary-blue p-3 border-b-1 border-gray-700 sticky top-0 z-1'>
                <div className='flex items-center gap-3 bg-[#232d36] placeholder-amber-50 rounded px-3 py-2 border border-gray-700 text-l ml-3 '>
                    <FaSearch className='text-amber-50 '/>
                    <p className='text-amber-50'>Search Users . . . .</p>
                </div>
                
                <div className='flex items-center gap-3'>
                    <FaBell className='text-amber-50 mr-5'/>
                </div>

            </div>

            {/* main box */}
            <div className='bg-primary-blue h-screen p-6 '>
                
                {/* boxes */}
                <div className='flex justify-evenly items-center gap-5 mb-13 '>
                    
                    {/* Total Users*/}
                    <div onClick={()=>navigate('/admin/manage-users')} className='bg-[#0B1220] flex justify-between flex-col w-80 h-35 p-4  rounded-lg border-1 border-gray-800 cursor-pointer'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 text-2xl'>Total Users</p>
                            <FaUsers className='text-blue-500 text-xl'/> 
                        </div>
                        <p className='text-white text-4xl font-bold'>{stats.totalUsers}</p>
                    </div>

                    {/* Resource Requests */}
                    <div onClick={()=>navigate('/admin/manage-requests')} className='bg-[#0B1220] flex justify-between flex-col w-80 h-35 p-4 rounded-lg border-1 border-gray-800 cursor-pointer'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 text-2xl'>Resources Request</p>
                            <FaTasks className='text-blue-500 text-xl'/> 
                        </div>
                        <p className='text-white text-4xl font-bold'>{stats.totalRequest}</p>
                    </div>
                    {/* Accepted Requests */}
                    <div className='bg-[#0B1220] flex justify-between flex-col w-80 h-35 p-4 rounded-lg border-1 border-gray-800'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 text-2xl'>Accepted Request</p>
                            <FaCheck className='text-green-500 text-xl'/> 
                        </div>
                        <p className='text-white text-4xl font-bold'>{stats.acceptedRequest}</p>
                    </div>
                    {/* Pending Approvals */}
                    <div className='bg-[#0B1220] flex justify-between flex-col w-80 h-35 p-4 rounded-lg border-1 border-gray-800'>
                        <div className='flex justify-between items-center gap-7 text-xl mb-2'>
                            <p className='text-gray-400 text-2xl'>Pending Approvals</p>
                            <FaHourglassHalf className='text-yellow-500 text-xl'/> 
                        </div>
                        <p className='text-white text-4xl font-bold'>{stats.pendingRequest}</p>
                    </div>

                </div>

                <div className='grid grid-cols-3'>

                    
                    <section className='col-span-2'>

                        <div className="flex flex-col bg-gray-800 rounded-2xl">
                          <div className='flex justify-between'>
                            <p className='text-white text-2xl font-bold pl-3 py-2 mb-2'>  Live Request Heatmap</p>
                            <p className='text-gray-400 text-shadow-md p-4 pr-7 '><span className='text-red-400 mr-1 font-bold'>•</span> LIVE</p>
                          </div>
                          
                          <iframe
                            className="w-full h-90 rounded-2xl border"
                            src="https://maps.google.com/maps?q=9.9932,76.3585&z=15&output=embed"
                          ></iframe>
                        </div>
                        
                    </section>

                    <section className='col-span-1'>
                        <div className="flex items-center justify-center w-full h-full">
                          <ResourceNeeds />
                        </div>
                    </section>

                </div>
                
            </div>

        </section>

    </div>
  )
}

export default AdminHome