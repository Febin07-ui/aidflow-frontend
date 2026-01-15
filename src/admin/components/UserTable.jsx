import React, { useEffect, useState } from 'react';
import { MoreVertical, Mail, Phone, ShieldCheck, Ban, Lock } from 'lucide-react';
import { blockUserAPI, getAllUsersAPI, unblockUserAPI } from '../../services/allAPI';
import { Flip, ToastContainer, toast } from 'react-toastify';
const UserTable = () => {
//   const users = [
//     { id: '#VOL-8821', name: 'Sarah Jenkins', role: 'Volunteer', email: 'sarah.j@example.com', phone: '+1 (555) 123-4567', status: 'Verified', blocked: false, img: 'https://i.pravatar.cc/150?u=sarah' },
//     { id: '#VOL-9932', name: 'Mike Ross', role: 'Volunteer', email: 'mike.ross@example.com', phone: '+1 (555) 987-6543', status: 'Verified', blocked: false, img: 'https://i.pravatar.cc/150?u=mike' },
//     { id: '#VIC-1049', name: 'Emily Chen', role: 'Victim', email: 'emily.c@example.com', phone: '+1 (555) 234-5678', status: null, blocked: false, img: '' },
//     { id: '#VIC-2931', name: 'Robert Fox', role: 'Victim', email: 'robert.f@example.com', phone: '', status: 'Blocked', blocked: true, img: '' },
//   ];

  const getRoleStyle = (role) => {
    switch (role) {
      case 'volunteer': return 'bg-green-900/30 text-green-400';
      case 'victim': return 'bg-orange-900/30 text-orange-400';
      case 'user': return 'bg-orange-900/30 text-orange-400';
      default: return 'bg-gray-700 text-gray-300';
    }
  };
    const [users,setUsers] = useState([])
    useEffect(()=>{
        const token = sessionStorage.getItem("token")

        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }

        const fetchUsers = async () =>{
            const result = await getAllUsersAPI(reqHeader)
            if(result.status === 200){
                setUsers(result.data)
            }
        }
        fetchUsers()
    },[])

    const handleBlock = async (userId) =>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        const result = await blockUserAPI(userId,reqHeader)
        if(result.status === 200){
            toast.success("User Blocked")

            setTimeout(()=>{
                window.location.reload()
            },2000)
            
        }
    }

    const handleUnblock =  async (userId) =>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            Authorization : `Bearer ${token}`
        }
        const result = await unblockUserAPI(userId,reqHeader)
        console.log("api unblock")
        if(result.status === 200){
            toast.success("User UnBlocked")
            setTimeout(()=>{
                window.location.reload()
            },2000)
        }
    }
  return (
    <div className="bg-[#0f172a] p-8 min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#1e293b] rounded-lg border border-slate-700 overflow-hidden">
        
        <div >
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-700 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Verification Status</th>
                
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {/* <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center overflow-hidden border border-slate-500">
                        {user.picture ? (
                          <img src={user.picture} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-slate-400">👤</div>
                        )}
                      </div> */}
                      <div>
                        <div className="text-slate-100 font-semibold text-sm">{user.name}</div>
                        <div className="text-slate-300 text-sm">ID: {user._id.slice(-5)}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-slate-400 space-y-1">
                      <div className="flex items-center text-xs">
                        <p className="" >{user.username}</p> 
                      </div>
                      
                    </div>
                  </td>

                  
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-medium ${getRoleStyle(user.role)}`}>
                      {user.role}
                    </span>
                  </td>

                  
                  <td className="px-6 py-4">
                    <div className="text-slate-400 space-y-1">
                      <div className="flex items-center text-xs">
                        <Mail className="w-3 h-3 mr-2" /> {user.email}
                      </div>
                      
                    </div>
                  </td>

                  {/* Verification Status & Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {
                        user.isBlocked ? (
                            <button onClick={()=>handleUnblock(user._id)} className='bg-slate-700 text-white px-3 py-1 rounded cursor-pointer hover:bg-slate-600'>
                                Unblock
                            </button>
                        ) : (
                            <button onClick={()=>handleBlock(user._id)} className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600'>
                                Block
                            </button>
                        )
                      }
                    </div>
                  </td>

                  {/* More Options */}
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* toast */}
        <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
            transition={Flip}
        />
    </div>
  );
};

export default UserTable;