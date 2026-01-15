import { updateRequestStatusAPI } from "../../services/allAPI";
import { Flip, ToastContainer, toast } from 'react-toastify';
export function ReqRows({req}) {

  const handleApprove = async () => {
    const result = await updateRequestStatusAPI(req._id,"approved")
    if(result.status === 200){
      toast.success("Request approved")
      setTimeout(()=>{
        window.location.reload()
      },1500)
      
    }
  }

  const handleRejected = async () => {
    const result = await updateRequestStatusAPI(req._id,"rejected")
    if(result.status === 200){
      toast.error("Request Rejected")
      setTimeout(()=>{
        window.location.reload()
      },1500)
    }
  }

  return (
    <tr className="border-t text-sm text-white">

      <td className="p-3 w-10">
        <input type="checkbox" />
      </td>

      <td className="p-3">{req._id.slice(-5)}</td>
      <td className="p-3">{new Date(req.createdAt).toLocaleDateString()}</td>
      <td className="p-3 font-medium">{req.contactName}</td>
      <td className="p-3">{req.resourceType}</td>

      <td className="p-3">
        <span className={`px-2 py-1 text-xs rounded ${
          req.urgency==="high" 
          ? "bg-red-500/20 text-red-500" 
          : req.urgency === "Medium" 
          ? "bg-yellow-500/20 text-yellow-500" 
          : "bg-green-500/20 text-green-500"}`}
        >
          {req.urgency}
        </span>
      </td> 

      <td className="p-3">
        <span className={`px-2 py-1 text-xs rounded ${
        req.status==="pending"
        ? "bg-yellow-500/20 text-yellow-500"
        : req.status==="rejected"
        ? "bg-red-500/20 text-red-500"
        : req.status==="completed"
        ? "bg-gray-500/20 text-gray-500"
        :
        "bg-green-500/20 text-green-500"
        }`}>
          {req.status}
        </span>
      </td>

      <td className="p-3 w-28">
        <div className="flex gap-2">
          {
            req.status == "completed" ? 
              <p className="text-gray-500 ">Completed</p>
            : req.status == "assigned" ?

              <p className="text-green-500 ">assigned</p>
            :
            <>
              <button onClick={handleApprove} className="bg-blue-500 hover:bg-blue-600 cursor-pointer  rounded p-1">Approve</button>
              <button onClick={handleRejected} className="bg-red-500 hover:bg-red-600 cursor-pointer rounded p-1">Decline</button>
            </> 
            
              
            
          }
          
        </div>
      </td>
      
    </tr>
  );
}


