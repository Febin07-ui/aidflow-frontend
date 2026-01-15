import React, { useEffect, useState } from 'react'
import { FaBell, FaHourglassHalf, FaTasks, FaUsers } from 'react-icons/fa'
import AdminSideBar from '../components/AdminSideBar'
import UserTable from '../components/UserTable'
import { getAdminDashboardStatsAPI } from '../../services/allAPI'

function ManageUser() {
    
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
    <div className='grid grid-cols-5 h-screen overflow-hidden bg-[#0B1220]'>
        
        <section className='col-span-1 bg-[#0B1220] border-r border-gray-800 h-full'>
            <AdminSideBar/>
        </section>
        
        
        <section className='col-span-4 flex flex-col h-screen'>
            
            
            <div className='flex justify-between items-center bg-[#0B1220] p-6 border-b border-gray-800'>
                <div>
                    <p className='text-white font-bold text-3xl'>User Management</p>
                    <p className='text-gray-400'>Manage user roles and account access</p>
                </div>
                <FaBell className='text-amber-50 text-xl cursor-pointer'/>
            </div>

            
            <div className='p-6 pb-2'>
                <div className='flex justify-between items-center gap-5 mb-6'>
                    {/* Total Users*/}
                    <div className='bg-[#0B1220] flex flex-col flex-1 p-4 rounded-lg border border-gray-800 shadow-sm'>
                        <div className='flex justify-between items-center mb-2'>
                            <p className='text-gray-400 text-lg'>Total Users</p>
                            <FaUsers className='text-blue-500 text-xl'/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>{stats.totalUsers}</p>
                    </div>

                    {/* Resource Requests */}
                    <div className='bg-[#0B1220] flex flex-col flex-1 p-4 rounded-lg border border-gray-800 shadow-sm'>
                        <div className='flex justify-between items-center mb-2'>
                            <p className='text-gray-400 text-lg'>Resources Request</p>
                            <FaTasks className='text-blue-500 text-xl'/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>{stats.totalRequest}</p>
                    </div>
                    
                    {/* Pending Approvals */}
                    <div className='bg-[#0B1220] flex flex-col flex-1 p-4 rounded-lg border border-gray-800 shadow-sm'>
                        <div className='flex justify-between items-center mb-2'>
                            <p className='text-gray-400 text-lg'>Pending Approvals</p>
                            <FaHourglassHalf className='text-yellow-500 text-xl'/> 
                        </div>
                        <p className='text-white text-3xl font-bold'>{stats.pendingRequest}</p>
                    </div>
                </div>
            </div>

            
            <div className='flex-1 overflow-auto px-6 pb-6'>
                <div className='rounded-lg border border-gray-800 bg-[#111827]'>
                    <UserTable/>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default ManageUser