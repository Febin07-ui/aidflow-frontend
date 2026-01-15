

export function ReqestRowVictim({myRequests}) {
  return (
    <tbody>
    {
      myRequests.length > 0 ?(
      myRequests.map(req=>(
        <tr key={req._id} className="border-t text-sm text-white">

          

          <td className="p-3">{req._id.slice(-5)}</td>
          <td className="p-3">{new Date(req.createdAt).toLocaleDateString()}</td>
          <td className="p-3">{req.resourceType}</td>

          <td className="p-3">
            <span className={`px-2 py-1 text-xs rounded ${
              req.urgency=== "High" 
              ? "bg-red-500/20 text-red-500" 
              : req.urgency === "Medium" 
              ? "bg-yellow-500/20 text-yellow-500" 
              : "bg-green-500/20 text-green-500"}`}>
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

          

        </tr>
      ))
      ):(
        <p className="text-gray-500 text-center">not created any request</p>
      )
    }
    </tbody>
    
  );
}

